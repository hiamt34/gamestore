<template>
  <div class="comments comments--details">
    <div class="comments__title">
      <h4>Comments</h4>
      <span>{{ quantity }}</span>
    </div>

    <ul
      class="comments__list detail--scroll"
      :style="!check ? 'display:none' : null"
    >
      <li v-for="(cmt, key) in comments" :key="key" class="comments__item">
        <div class="comments__autor">
          <img class="comments__avatar" src="/user.jpg" alt="">
          <span class="comments__name">{{ cmt.name }}</span>
          <span class="comments__time">{{ cmt.date }}</span>
        </div>
        <div class="cmt--conten">
          <span v-if="cmt.anser" class="anser"> {{ cmt.anser }}</span>
          <p
            class="comments__text"
            :style="cmt.anser ? 'margin-top: 75px;' : null"
          >
            {{ cmt.cmt }}
          </p>
          <span class="reply" @click="cmt.check = !cmt.check">Reply</span>
        </div>
        <form v-if="cmt.check" action="#" @submit.prevent="send(cmt.id)">
          <textarea
            v-model="comment.cmt"
            name="text"
            class="form__textarea reply"
            placeholder="Add comment"
            maxlength="200"
            style="float: left;"
          />
          <button v-if="$auth.loggedIn" type="submit" class="form__btn reply" style="width:99%;margin-top: 10px;">
            Send
          </button>
          <nuxt-link v-else to="/signin" style="">
            <button
              type="submit"
              class="form__btn"
              style="width:99%;background-color: #be4f52;margin-top: 10px;"
            >
              Đăng nhập
            </button>
          </nuxt-link>
        </form>
      </li>
    </ul>

    <form action="#" class="form" @submit.prevent="send(null)">
      <textarea
        id="text"
        v-model="comment.cmt"
        name="text"
        class="form__textarea"
        placeholder="Add comment"
        maxlength="200"
      />
      <button v-if="$auth.loggedIn" type="submit" class="form__btn">
        Send
      </button>
      <nuxt-link v-else to="/signin">
        <button
          type="submit"
          class="form__btn"
          style="background-color: #be4f52;"
        >
          Đăng nhập
        </button>
      </nuxt-link>
    </form>
  </div>
</template>
<script>
export default {
  props: {
    value: {
      type: String,
      default: () => null
    }
  },
  data () {
    return {
      BaseImgs: process.env.BaseImgs,
      check: false,
      comments: [],
      quantity: 0,
      comment: {
        name: '',
        date: '',
        cmt: '',
        anser: '',
        type: ''
      }
    }
  },
  computed: {
    date () {
      const today = new Date()
      const date =
        today.getDate() +
        '-' +
        (today.getMonth() + 1) +
        '-' +
        today.getFullYear()
      const time = today.getHours() + ':' + today.getMinutes()
      return date + ', ' + time
    }
  },
  async mounted () {
    await this.getComments(this.value)
    setTimeout(() => {
      this.check = true
    }, 500)
  },
  methods: {
    validate (name) {
      if (this.comment.cmt === '' || name === '') {
        this.$alert.toast('warning', '400 Bad req')
        this.$nuxt.$loading.finish()
        return false
      }
      return true
    },
    async send (anser) {
      await this.$nuxt.$loading.start()
      this.comment.date = await this.date
      this.comment.name = await this.$auth.user.name
      this.comment.anser = await anser
      this.comment.type = (await this.$route.name.includes('products')) ? 1 : 2
      if (this.validate(this.comment.name)) {
        const URI = await 'comments'
        await this.$commentService.createOrUpdateData(
          URI,
          this.comment,
          this.$route.params.id
        )
        const setType = (await this.$route.name.includes('products'))
          ? 'products'
          : 'news'
        await this.getIds(setType)
        this.comment.cmt = await ''
        await this.$nuxt.$loading.finish()
        await this.$alert.toast('success', 'Thành công')
      }
    },
    async getComments (ids) {
      const URI = await 'comments'
      const params = await { ids }
      const payload = await this.$commentService.getData(params, URI)
      await payload.data.comments.map((item) => {
        if (item.anser) {
          return payload.data.comments.forEach((element) => {
            if (Number(item.anser) === element.id) {
              item.check = false
              item.anser = element.name + ': ' + element.cmt
              return item
            }
          })
        }
        return (item.check = false)
      })
      this.quantity = await payload.data.comments.length
      return (this.comments = await payload.data.comments)
    },
    async getIds (type) {
      const query = await {}
      const URI = (await type) + '/' + this.$route.params.id
      const name = (await type) === 'products' ? 'product' : 'news'
      const payload =
        (await type) === 'products'
          ? this.$productService.getData(query, URI)
          : this.$newsService.getData(query, URI)
      await payload.then(res => this.getComments(res.data[name].cmt))
    }
  }
}
</script>
<style></style>
