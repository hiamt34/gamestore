<template>
  <div class="sign section--full-bg">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="sign__content">
            <!-- authorization form -->
            <form action="#" class="sign__form" @submit.prevent="signin">
              <nuxt-link to="/" class="sign__logo">
                <img src="~/assets/img/logo.png" alt="">
              </nuxt-link>

              <div class="sign__group">
                <input
                  v-model="userForm.email"
                  type="text"
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
                  name="remember"
                  type="checkbox"
                  checked="checked"
                >
                <label for="remember">Remember Me</label>
              </div>

              <button class="sign__btn" type="submit">
                Sign in
              </button>

              <div class="sign__social">
                <a
                  class="fb"
                  :href="BaseAPI + '/auth/login/facebook'"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="512"
                  height="512"
                  viewBox="0 0 512 512"
                >
                  <path
                    d="M455.27,32H56.73A24.74,24.74,0,0,0,32,56.73V455.27A24.74,24.74,0,0,0,56.73,480H256V304H202.45V240H256V189c0-57.86,40.13-89.36,91.82-89.36,24.73,0,51.33,1.86,57.51,2.68v60.43H364.15c-28.12,0-33.48,13.3-33.48,32.9V240h67l-8.75,64H330.67V480h124.6A24.74,24.74,0,0,0,480,455.27V56.73A24.74,24.74,0,0,0,455.27,32Z"
                  /></svg></a>
                <a
                  class="gh"
                  :href="BaseAPI + '/auth/login/github'"
                ><svg
                  id="Capa_1"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 512 512"
                  style="enable-background:new 0 0 512 512;"
                  xml:space="preserve"
                >
                  <g>
                    <g>
                      <path
                        d="M255.968,5.329C114.624,5.329,0,120.401,0,262.353c0,113.536,73.344,209.856,175.104,243.872 c12.8,2.368,17.472-5.568,17.472-12.384c0-6.112-0.224-22.272-0.352-43.712c-71.2,15.52-86.24-34.464-86.24-34.464 c-11.616-29.696-28.416-37.6-28.416-37.6c-23.264-15.936,1.728-15.616,1.728-15.616c25.696,1.824,39.2,26.496,39.2,26.496 c22.848,39.264,59.936,27.936,74.528,21.344c2.304-16.608,8.928-27.936,16.256-34.368 c-56.832-6.496-116.608-28.544-116.608-127.008c0-28.064,9.984-51.008,26.368-68.992c-2.656-6.496-11.424-32.64,2.496-68 c0,0,21.504-6.912,70.4,26.336c20.416-5.696,42.304-8.544,64.096-8.64c21.728,0.128,43.648,2.944,64.096,8.672 c48.864-33.248,70.336-26.336,70.336-26.336c13.952,35.392,5.184,61.504,2.56,68c16.416,17.984,26.304,40.928,26.304,68.992 c0,98.72-59.84,120.448-116.864,126.816c9.184,7.936,17.376,23.616,17.376,47.584c0,34.368-0.32,62.08-0.32,70.496 c0,6.88,4.608,14.88,17.6,12.352C438.72,472.145,512,375.857,512,262.353C512,120.401,397.376,5.329,255.968,5.329z"
                      />
                    </g>
                  </g>
                </svg></a>
                <a
                  class="gl"
                  :href="BaseAPI + '/auth/login/google'"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="ionicon"
                  viewBox="0 0 512 512"
                >
                  <path
                    d="M473.16 221.48l-2.26-9.59H262.46v88.22H387c-12.93 61.4-72.93 93.72-121.94 93.72-35.66 0-73.25-15-98.13-39.11a140.08 140.08 0 01-41.8-98.88c0-37.16 16.7-74.33 41-98.78s61-38.13 97.49-38.13c41.79 0 71.74 22.19 82.94 32.31l62.69-62.36C390.86 72.72 340.34 32 261.6 32c-60.75 0-119 23.27-161.58 65.71C58 139.5 36.25 199.93 36.25 256s20.58 113.48 61.3 155.6c43.51 44.92 105.13 68.4 168.58 68.4 57.73 0 112.45-22.62 151.45-63.66 38.34-40.4 58.17-96.3 58.17-154.9 0-24.67-2.48-39.32-2.59-39.96z"
                  /></svg></a>
              </div>

              <span
                class="sign__text"
              >Don't have an account?
                <nuxt-link to="/signup">Sign up!</nuxt-link></span>

              <span
                class="sign__text"
              ><nuxt-link to="/forgot">Forgot password?</nuxt-link></span>
            </form>
            <!-- end authorization form -->
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
        password: ''
      },
      BaseAPI: process.env.BaseAPI
    }
  },
  mounted () {},
  methods: {
    validate () {
      if (this.userForm.email === '' || this.userForm.password === '') {
        return false
      }
      return true
    },
    async signin () {
      if (!this.validate()) {
        return this.$alert.toast('error', 'Không được để trống')
      }
      try {
        await this.$nuxt.$loading.start()
        await this.$auth.login({
          data: this.userForm
        })
        await this.$router.push('/profile')
        await this.$nuxt.$loading.finish()
      } catch (error) {
        this.$alert.toast('warning', 'Sai Email or Passwword')
      }
    }
  }
}
</script>
<style></style>
