<template>
  <div class="header__actions header__actions--2">
    <nuxt-link :to="{name:'products-slug',params:{slug:'san-pham-yeu-thich'},query:{favorite:1}}" class="header__link">
      <span v-if="$auth.user" class="quantity">{{ JSON.parse($auth.user.favorite).length }}</span>

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
      <span>Favorites</span>
    </nuxt-link>

    <nuxt-link :to="{name:'checkout'}" class="header__link">
      <span class="quantity">{{ cart.length }}</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="512"
        height="512"
        viewBox="0 0 512 512"
      >
        <circle
          cx="176"
          cy="416"
          r="16"
          style="fill:none;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
        />
        <circle
          cx="400"
          cy="416"
          r="16"
          style="fill:none;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
        />
        <polyline
          points="48 80 112 80 160 352 416 352"
          style="fill:none;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
        />
        <path
          d="M160,288H409.44a8,8,0,0,0,7.85-6.43l28.8-144a8,8,0,0,0-7.85-9.57H128"
          style="fill:none;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
        />
      </svg>
      <span>{{ VND(total) }} VNĐ</span>
    </nuxt-link>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import Func from '~/middleware/func'
export default {
  name: 'CartFa',
  data () {
    return {}
  },
  computed: {
    ...mapGetters(['cart', 'total'])
  },
  mounted () {
    this.setData()
  },
  methods: {
    ...mapActions(['setCart']),
    setData () {
      if (process.browser) {
        this.setCart(this.$local.getCart())
      }
    },
    VND: Func.VND
  }
}
</script>
