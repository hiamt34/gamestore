<template>
  <div v-if="value" class="card card--big">
    <nuxt-link
      :to="{
        name: 'products-slug-id',
        params: { slug: slug(value.name), id: value.id }
      }"
      class="card__cover"
    >
      <img :src="BaseImgs + value.avatar" :alt="value.name">
      <span v-if="value.sale > 0" class="card__saleBig">SALE OFF</span>
      <span v-if="!check" class="card__preorder">Sắp ra mắt</span>
      <span v-if="check && value.newgame" class="card__new">New</span>
    </nuxt-link>

    <div class="card__wrap">
      <div class="card__title">
        <h3 :title="value.name">
          <nuxt-link
            :to="{
              name: 'products-slug-id',
              params: { slug: slug(value.name), id: value.id }
            }"
          >
            {{ value.name }}
          </nuxt-link>
        </h3>
      </div>

      <ul class="card__list">
        <li><span>Ngày phát hành:</span> {{ value.evendate }}</li>
        <li>
          <span>Thể Loại:</span>
          <nuxt-link
            v-for="(value, key) in Pgenre"
            :key="key"
            :to="{
              name: 'products-slug',
              params: { slug: 'Game' },
              query: { genre: value.id }
            }"
            class="a-genre"
          >
            {{ value.name }},
          </nuxt-link>
        </li>
        <li>
          <span>Nhà Phát Triển:</span>
          <nuxt-link
            v-for="(value, key) in Pdeveloper"
            :key="key"
            :to="{
              name: 'products-slug',
              params: { slug: 'Game' },
              query: { developer: value.id }
            }"
            class="a-genre"
          >
            {{ value.name }},
          </nuxt-link>
        </li>
        <li>
          <span>Nền Tảng:</span>
          <ul class="card__platforms">
            <template v-for="(value, key) in Pplatform">
              <Windows v-if="value == 1" :key="key" />
              <XBOX v-if="value == 2" :key="key" />
              <PlayStation v-if="value == 3" :key="key" />
              <MacOS v-if="value == 4" :key="key" />
              <Linux v-if="value == 5" :key="key" />
              <Steam v-if="value == 6" :key="key" />
              <Nitendo v-if="value == 7" :key="key" />
            </template>
          </ul>
        </li>
      </ul>

      <div class="card__price">
        <span>{{ VND(value.price * (1 - value.sale / 100)) }} VNĐ</span><s v-if="value.sale > 0">{{ VND(value.price) }} VNĐ</s><b v-if="value.sale > 0">{{ value.sale }}% OFF</b>
      </div>

      <div class="card__actions">
        <button
          v-if="check"
          class="card__buy"
          type="button"
          @click="buy(value, true)"
        >
          Mua Ngay
        </button>
        <button
          v-else
          class="card__buy preorder"
          type="button"
          @click="buy(value, false)"
        >
          Đặt Hàng
        </button>
        <button class="card__favorite" type="button" @click="addFavorite(value.id)">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="512"
            height="512"
            viewBox="0 0 512 512"
          >
            <path
              d="M352.92,80C288,80,256,144,256,144s-32-64-96.92-64C106.32,80,64.54,124.14,64,176.81c-1.1,109.33,86.73,187.08,183,252.42a16,16,0,0,0,18,0c96.26-65.34,184.09-143.09,183-252.42C447.46,124.14,405.68,80,352.92,80Z"
              style="fill:none;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import slug from 'slug'
import Linux from '~/components/iconFlatform/Linux.vue'
import MacOS from '~/components/iconFlatform/MacOS.vue'
import Nitendo from '~/components/iconFlatform/Nitendo.vue'
import PlayStation from '~/components/iconFlatform/Playstation.vue'
import Steam from '~/components/iconFlatform/Steam.vue'
import XBOX from '~/components/iconFlatform/XBOX.vue'
import Windows from '~/components/iconFlatform/Windows.vue'
import Func from '~/middleware/func'
export default {
  name: 'ItemBig',
  components: {
    Linux,
    MacOS,
    Nitendo,
    PlayStation,
    Steam,
    XBOX,
    Windows
  },
  props: {
    value: {
      type: Object,
      require: false,
      default () {}
    }
  },
  data () {
    return {
      BaseImgs: process.env.BaseImgs,
      Pgenre: [],
      Pdeveloper: []
    }
  },
  computed: {
    ...mapGetters(['genres', 'platforms', 'developers', 'inventories', 'cart']),
    check () {
      return this.inventories.some(
        item => this.value.id === item.id && item.quantity > 0
      )
    },
    Pplatform () {
      return JSON.parse(this.value.platforms)
    }
  },
  created () {
    this.getGenres()
    this.getDevelopers()
  },
  methods: {
    async addFavorite (id) {
      if (!this.$auth.user) {
        return this.$alert.toast('warning', 'Bạn cần đăng nhập tước')
      }
      await this.$nuxt.$loading.start()
      const uri2 = await '/update'
      let dataFavorite = await JSON.parse(this.$auth.user.favorite)
      dataFavorite = (await Array.isArray(dataFavorite))
        ? [...dataFavorite.filter(item => item !== id), id]
        : [id]
      await this.$user.reqService(uri2, {
        favorite: JSON.stringify(dataFavorite)
      })
      await this.$auth.fetchUser()
      await this.$nuxt.$loading.finish()
      return this.$alert.toast('success', 'Thêm thành công')
    },
    ...mapActions(['setCart']),
    getGenres () {
      if (this.value) {
        const Vgenres = JSON.parse(this.value.genres)
        this.Pgenre = this.genres.filter(item =>
          Vgenres.includes(item.id.toString())
        )
      }
    },
    getDevelopers () {
      if (this.value) {
        const Vdevelopers = JSON.parse(this.value.developers)
        this.Pdeveloper = this.developers.filter(item =>
          Vdevelopers.includes(item.id.toString())
        )
      }
    },
    async buy (value, status) {
      let check = await false
      let addCart = await []
      await this.cart.map((item) => {
        if (item.id === value.id) {
          check = true
          return item.quantity++
        }
        return null
      })
      ;(await check)
        ? (addCart = [...this.cart])
        : (addCart = [...this.cart, { ...value, status, quantity: 1 }])

      await this.$local.setCart(addCart)
      await this.setCart(addCart)
      await this.$alert.alert(
        'success',
        'Thành công',
        'Tiếp tục mua',
        'Giỏ hàng',
        'checkout'
      )
    },
    VND: Func.VND,
    slug
  }
}
</script>
<style></style>
