<template>
  <section class="section section--last">
    <div class="container">
      <div class="row">
        <!-- title -->
        <div class="col-12">
          <div class="section__title-wrap">
            <h2 class="section__title">
              Games cùng danh mục
            </h2>

            <div class="section__nav-wrap">
              <nuxt-link
                :to="{
                  name: 'products-slug',
                  params: { slug: 'san-pham-tuong-tu' },
                  query: { category: category }
                }"
                class="section__view"
              >
                Xem Thêm
              </nuxt-link>

              <button
                class="section__nav section__nav--prev"
                type="button"
                data-nav="#carousel1"
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
                class="section__nav section__nav--next"
                type="button"
                data-nav="#carousel1"
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
      id="carousel1"
      class="owl-carousel section__carousel section__carousel--catalog"
    >
      <!-- card -->
      <template v-for="(value, key) in products">
        <ItemSmall v-if="value.id != id" :key="key" :value="value" />
      </template>

      <!-- end card -->
    </div>
    <!-- end carousel -->
  </section>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import ItemSmall from '~/components/Item_small.vue'
export default {
  components: {
    ItemSmall
  },
  props: {
    category: {
      type: String,
      default: () => null
    }
  },
  data () {
    return {
      id: this.$route.params.id
    }
  },
  async fetch () {
    try {
      const config = await {
        query: { category: this.category },
        nameMutations: 'setProducts'
      }
      return await this.getProducts(config)
    } catch (error) {
      this.error(error)
    }
  },
  computed: { ...mapGetters(['products']) },
  methods: { ...mapActions(['getProducts']) }
}
</script>
<style></style>
