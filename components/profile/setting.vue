<template>
  <div class="tab-pane fade show active" role="tabpanel">
    <div class="row">
      <!-- details form -->
      <div class="col-12 col-lg-6">
        <form action="#" class="form" @submit.prevent="submitForm1">
          <div class="row">
            <div class="col-12">
              <h4 class="form__title">
                Thông tin cá nhân
              </h4>
            </div>

            <div class="col-12 col-md-6 col-lg-12 col-xl-6">
              <label class="form__label" for="name">Username</label>
              <input
                id="name"
                v-model="Form1.name"
                type="text"
                name="name"
                class="form__input"
              >
            </div>

            <div class="col-12 col-md-6 col-lg-12 col-xl-6">
              <label class="form__label" for="email">Email</label>
              <input
                id="email"
                readonly
                type="text"
                class="form__input"
                :placeholder="$auth.user.email"
              >
            </div>

            <div class="col-12 col-md-6 col-lg-12 col-xl-6">
              <label class="form__label" for="phone">Phone</label>
              <input
                id="phone"
                v-model="Form1.phone"
                type="text"
                name="phone"
                class="form__input"
              >
            </div>

            <div class="col-12">
              <button class="form__btn" type="submit">
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
      <!-- end details form -->

      <!-- password form -->
      <div class="col-12 col-lg-6">
        <form action="#" class="form" @submit.prevent="submitForm2">
          <div class="row">
            <div class="col-12">
              <h4 class="form__title">
                Đổi mật khẩu
              </h4>
            </div>

            <!-- <div class="col-12 col-md-6 col-lg-12 col-xl-6">
              <label class="form__label" for="oldpass">Mật khẩu cũ</label>
              <input
                id="oldpass"
                type="password"
                name="oldpass"
                class="form__input"
              >
            </div> -->

            <div class="col-12 col-md-6 col-lg-12 col-xl-6">
              <label class="form__label" for="password">Mật khẩu mới</label>
              <input
                id="password"
                v-model="Form2.password"
                type="password"
                name="password"
                class="form__input"
              >
            </div>

            <div class="col-12 col-md-6 col-lg-12 col-xl-6">
              <label
                class="form__label"
                for="confirmpass"
              >Nhập lại mật khẩu</label>
              <input
                id="confirmpass"
                v-model="Form2.confirmpass"
                type="password"
                name="confirmpass"
                class="form__input"
              >
            </div>

            <div class="col-12">
              <button class="form__btn" type="submit">
                Change
              </button>
            </div>
          </div>
        </form>
      </div>
      <!-- end password form -->
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      Form1: {
        name: this.$auth.user.name,
        phone: this.$auth.user.phone
      },
      Form2: {
        password: '',
        confirmpass: ''
      }
    }
  },
  methods: {
    validate1 () {
      if (this.Form1.name === '' || this.Form1.phone === '') {
        this.$alert.toast('warning', 'Bạn chưa điền đủ thông tin')
        return false
      }
      return true
    },
    validate2 () {
      if (this.Form2.password !== this.Form2.confirmpass) {
        this.$alert.toast('warning', 'Mật khẩu không khớp')
        return false
      }
      if (this.Form2.password === '' || this.Form2.confirmpass === '') {
        this.$alert.toast('warning', 'Bạn chưa điền đủ thông tin')
        return false
      }
      return true
    },
    async submitForm1 () {
      if (this.validate1()) {
        await this.$nuxt.$loading.start()
        const uri = await '/update'
        await this.$user.reqService(uri, this.Form1)
        // const uri2 = await '/user'
        // const getUser = await this.$user.reqService(uri2)
        // await this.$auth.setUser(getUser.data.user)
        await this.$auth.fetchUser()
        await this.$nuxt.$loading.finish()
        await this.$alert.toast('success', 'Update thành công')
      }
    },
    async submitForm2 () {
      if (this.validate2()) {
        await this.$nuxt.$loading.start()
        const uri = '/update'
        await this.$user.reqService(uri, { password: this.Form2.password })
        await this.$nuxt.$loading.finish()
        await this.$alert.toast('success', 'Update thành công')
      }
    }
  }
}
</script>
