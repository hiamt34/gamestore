<template>
  <div>
    <Banner name="Checkout" />
    <div class="section">
      <div class="container">
        <div class="row">
          <div class="col-12 col-lg-8">
            <Cart />
          </div>
          <div class="col-12 col-lg-4">
            <Form />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Banner from '~/components/Banner.vue'
import Cart from '~/components/checkout/cart.vue'
import Form from '~/components/checkout/form.vue'
import Func from '~/middleware/func'
export default {
  components: {
    Banner,
    Cart,
    Form
  },
  layout: 'client',
  mounted () {
    Func.LoadJS()
  }
}
</script>
<style></style>
