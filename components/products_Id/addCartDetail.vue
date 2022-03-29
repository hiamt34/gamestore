<template>
  <div v-if="value" class="details__cart">
    <label style="color:#fff">Nền Tảng</label>
    <ul class="details__platforms">
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
    <!-- <label style="color:#fff">Số Lượng</label>
    <input type="number" class="quantity--input" value="1"> -->
    <label style="color:#fff">Giá</label>
    <div class="details__price">
      <span>{{ VND(value.price * (1 - value.sale / 100)) }} VNĐ</span><s v-if="value.sale > 0">{{ VND(value.price) }} VNĐ</s><b v-if="value.sale > 0">{{ value.sale }}% OFF</b>
    </div>

    <div class="details__actions">
      <button
        v-if="check"
        class="details__buy"
        type="button"
        @click="buy(value, true)"
      >
        Mua Ngay
      </button>
      <button
        v-else
        class="details__preorder"
        type="button"
        @click="buy(value, false)"
      >
        Đặt Hàng
      </button>

      <button class="details__favorite" type="button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="512"
          height="512"
          viewBox="0 0 512 512"
        >
          <path
            d="M352.92,80C288,80,256,144,256,144s-32-64-96.92-64C106.32,80,64.54,124.14,64,176.81c-1.1,109.33,86.73,187.08,183,252.42a16,16,0,0,0,18,0c96.26-65.34,184.09-143.09,183-252.42C447.46,124.14,405.68,80,352.92,80Z"
            style="fill:none;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
          /></svg>Lưu Vào Yêu Thích
      </button>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import Linux from '~/components/iconFlatform/Linux.vue'
import MacOS from '~/components/iconFlatform/MacOS.vue'
import Nitendo from '~/components/iconFlatform/Nitendo.vue'
import PlayStation from '~/components/iconFlatform/Playstation.vue'
import Steam from '~/components/iconFlatform/Steam.vue'
import XBOX from '~/components/iconFlatform/XBOX.vue'
import Windows from '~/components/iconFlatform/Windows.vue'
import Func from '~/middleware/func'
export default {
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
      BaseImgs: process.env.BaseImgs
    }
  },
  computed: {
    ...mapGetters(['platforms', 'inventories', 'cart']),
    check () {
      return this.inventories.some(
        item => this.value.id === item.id && item.quantity > 0
      )
    },
    Pplatform () {
      return JSON.parse(this.value.platforms)
    }
  },
  methods: {
    ...mapActions(['setCart']),
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
      this.$alert.toast('success', 'Thêm Thành Công')
    },
    VND: Func.VND
  }
}
</script>
<style></style>
