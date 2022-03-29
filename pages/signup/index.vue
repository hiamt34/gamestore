<template>
  <div class="sign section--full-bg">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="sign__content">
            <!-- registration form -->
            <form action="#" class="sign__form" @submit.prevent="signup">
              <nuxt-link to="/" class="sign__logo">
                <img src="~/assets/img/logo.png" alt="">
              </nuxt-link>

              <div class="sign__group">
                <input
                  v-model="userForm.name"
                  type="text"
                  class="sign__input"
                  placeholder="Name"
                >
              </div>

              <div class="sign__group">
                <input
                  v-model="userForm.email"
                  type="email"
                  class="sign__input"
                  placeholder="Email"
                >
              </div>

              <div class="sign__group">
                <input
                  v-model="userForm.password"
                  type="password"
                  class="sign__input"
                  placeholder="Password"
                >
              </div>

              <div class="sign__group sign__group--checkbox">
                <input
                  id="remember"
                  v-model="checkbox"
                  :value="!checkbox"
                  name="remember"
                  type="checkbox"
                  checked
                >
                <label
                  for="remember"
                >Tôi đồng ý với
                  <a href="privacy.html">Chính sách của Shop</a></label>
              </div>

              <button class="sign__btn" type="submit">
                Sign up
              </button>

              <span
                class="sign__text"
              >Already have an account?
                <nuxt-link to="/signin">Sign in!</nuxt-link></span>
            </form>
            <!-- registration form -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  middleware: 'checkAuth',
  data () {
    return {
      userForm: {
        email: '',
        password: '',
        name: ''
      },
      checkbox: true
    }
  },
  mounted () {},
  methods: {
    validate () {
      if (
        this.userForm.email === '' ||
        this.userForm.password === '' ||
        this.userForm.name === ''
      ) {
        return false
      }
      return true
    },
    async signup () {
      if (!this.checkbox) {
        return this.$alert.toast('warning', 'Bạn chưa đồng ý với điều khoản')
      }
      if (!this.validate()) {
        return this.$alert.toast('error', 'Không được để trống')
      }
      try {
        await this.$axios.post('/auth/signup', this.userForm)
        await this.$auth.loginWith('local', {
          data: this.userForm
        })
        await this.$router.push('/profile')
      } catch (error) {
        this.$alert.toast('error', 'Email đã tồn tại')
      }
    }
  }
}
</script>
<style></style>
