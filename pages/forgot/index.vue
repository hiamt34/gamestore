<template>
  <div class="sign section--full-bg">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="sign__content">
            <!-- authorization form -->
            <form action="#" class="sign__form">
              <nuxt-link to="/" class="sign__logo">
                <img src="~/assets/img/logo.png" alt="">
              </nuxt-link>

              <div class="sign__group">
                <input type="text" class="sign__input" placeholder="Email">
              </div>

              <div class="sign__group sign__group--checkbox">
                <input
                  id="remember"
                  name="remember"
                  type="checkbox"
                  checked="checked"
                >
                <label
                  for="remember"
                >I agree to the
                  <a href="privacy.html">Privacy Policy</a></label>
              </div>

              <button class="sign__btn" type="button">
                Send
              </button>

              <span
                class="sign__text"
              >We will send a password to your Email</span>
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
  mounted () {}
}
</script>
<style></style>
