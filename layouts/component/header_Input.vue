<template>
  <div class="header__wrap">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="header__content">
            <div class="search__div">
              <div
                class="blurred"
                :style="data.length == 0 ? { display: 'none' } : null"
                @click="dtBlur()"
              />
              <form action="#" class="header__form">
                <input
                  v-model="search"
                  type="text"
                  class="header__input"
                  placeholder="Tìm kiếm"
                  @keyup.enter="submit()"
                >
                <input
                  type="text"
                  class="header__input"
                  style="cursor: pointer;"
                  readonly
                  :value="mouseMove"
                  placeholder="Auto Arm =)))"
                >
                <button class="header__btn" type="button" @click="submit()">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="512"
                    height="512"
                    viewBox="0 0 512 512"
                  >
                    <path
                      d="M221.09,64A157.09,157.09,0,1,0,378.18,221.09,157.1,157.1,0,0,0,221.09,64Z"
                      style="fill:none;stroke-miterlimit:10;stroke-width:32px"
                    />
                    <line
                      x1="338.29"
                      y1="338.29"
                      x2="448"
                      y2="448"
                      style="fill:none;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px"
                    />
                  </svg>
                </button>
              </form>
              <div
                class="card card--big cart--search "
                :style="data.length == 0 ? { display: 'none' } : null"
              >
                <ul class="list list--search">
                  <li class="list__item">
                    <span
                      style="color: white;font-weight: 600;padding-bottom: 10px;"
                    >Games</span>
                  </li>
                  <a
                    v-for="(value, key) in data"
                    :key="key"
                    href=""
                    @mousemove="check(value)"
                  >
                    <li class="list__item list__item--search">
                      <a href="#" class="list__cover" style="width: 60px;">
                        <img :src="BaseImgs + value.avatar" :alt="value.name">
                      </a>

                      <div class="list__wrap list--search">
                        <h3 class="list__title list--search">
                          <a href="#">{{ value.name }}</a>
                        </h3>

                        <div class="list__price list--search">
                          <span>{{
                            VND(value.price * (1 - value.sale / 100))
                          }}
                            VNĐ</span><s
                            v-if="value.sale > 0"
                          >{{ VND(value.price) }} VNĐ</s><b v-if="value.sale > 0">{{ value.sale }}% OFF</b>
                        </div>
                      </div>
                    </li>
                  </a>
                </ul>
              </div>
            </div>
            <CartFa />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CartFa from './cart_Fa.vue'
import Func from '~/middleware/func'
export default {
  name: 'HeaderInput',
  components: {
    CartFa
  },
  data () {
    return {
      data: [],
      search: '',
      BaseImgs: process.env.BaseImgs,
      mouseMove: '',
      timeOut: null
    }
  },
  watch: {
    async search () {
      clearTimeout(this.timeOut)
      this.mouseMove = await this.search
      const URI = await 'products'

      this.timeOut = setTimeout(async () => {
        const payload = await this.$productService.getData(
          { search: this.search },
          URI
        )
        return (this.data = await payload.data.products)
      }, 300)
    }
  },
  methods: {
    VND: Func.VND,
    check (value) {
      this.mouseMove = value.name
    },
    dtBlur () {
      this.data = []
    },
    submit () {
      this.data = []
      this.search = ''
      this.$router.push({
        path: '/products/TimKiem',
        query: { search: this.mouseMove }
      })
    }
  }
}
</script>
<style></style>
