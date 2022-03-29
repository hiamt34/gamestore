<template>
  <section class="section section--bg section--first" data-bg="/bg.jpg">
    <div class="container">
      <div class="row">
        <!-- title -->
        <div class="col-12">
          <div class="section__title-wrap">
            <h2 class="section__title section__title--title">
              <b>Best games</b> of month
            </h2>

            <div class="section__nav-wrap">
              <button
                class="section__nav section__nav--bg section__nav--prev"
                type="button"
                data-nav="#carousel0"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="512"
                  height="512"
                  viewBox="0 0 512 512"
                >
                  <polyline
                    points="328 112 184 256 328 400"
                    style="fill:none;stroke-linecap:round;stroke-linejoin:round;stroke-width:48px"
                  />
                </svg>
              </button>

              <button
                class="section__nav section__nav--bg section__nav--next"
                type="button"
                data-nav="#carousel0"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="512"
                  height="512"
                  viewBox="0 0 512 512"
                >
                  <polyline
                    points="184 112 328 256 184 400"
                    style="fill:none;stroke-linecap:round;stroke-linejoin:round;stroke-width:48px"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <!-- end title -->
      </div>
    </div>
    <!-- carousel -->
    <div
      id="carousel0"
      class="owl-carousel section__carousel section__carousel--big"
    >
      <ItemBig
        v-for="(value, key) in productsBestGame"
        :key="key"
        :value="value"
      />
    </div>
    <!-- end carousel -->
  </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import ItemBig from '~/components/Iteam_big.vue'
export default {
  components: {
    ItemBig
  },
  data () {
    return {}
  },
  async fetch () {
    if (this.productsBestGame.length === 5) { return false }
    const config = await {
      query: { bestgame: 1, limit: 5 },
      nameMutations: 'setProductsBestGame'
    }
    return await this.getProducts(config)
  },
  computed: {
    ...mapGetters(['productsBestGame'])
  },
  methods: {
    ...mapActions(['getProducts'])
  }
}
</script>
<style></style>
