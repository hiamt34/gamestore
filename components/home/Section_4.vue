<template>
  <section class="section">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-6 col-xl-4">
          <div class="row">
            <div class="col-12">
              <!-- title -->
              <div class="section__title-wrap section__title-wrap--single">
                <h2 class="section__title section__title--small ">
                  Đang Sale
                </h2>

                <div class="section__nav-wrap">
                  <nuxt-link
                    :to="{
                      name: 'products-slug',
                      params: { slug: 'GamesHot' },
                      query: { sale: 1 }
                    }"
                    class="section__view"
                  >
                    Xem Thêm
                  </nuxt-link>
                </div>
              </div>
              <!-- end title -->

              <!-- cards -->
              <ul class="list list--mb list--home">
                <ItemSmall2
                  v-for="(value, key) in productsSale"
                  :key="key"
                  :value="value"
                />
              </ul>
              <!-- end cards -->
            </div>
          </div>
        </div>

        <div class="col-12 col-md-6 col-xl-4">
          <div class="row">
            <div class="col-12">
              <!-- title -->
              <div class="section__title-wrap section__title-wrap--single">
                <h2 class="section__title section__title--small">
                  Game Hot
                </h2>

                <div class="section__nav-wrap">
                  <nuxt-link
                    :to="{
                      name: 'products-slug',
                      params: { slug: 'GamesHot' },
                      query: { view: 1, column: 'view', sort: 'desc' }
                    }"
                    class="section__view"
                  >
                    Xem Thêm
                  </nuxt-link>
                </div>
              </div>
              <!-- end title -->

              <!-- cards -->
              <ul class="list list--mb list--home">
                <ItemSmall2
                  v-for="(value, key) in productsHot"
                  :key="key"
                  :value="value"
                />
              </ul>
              <!-- end cards -->
            </div>
          </div>
        </div>

        <div class="col-12 col-md-6 col-xl-4">
          <div class="row">
            <div class="col-12">
              <!-- title -->
              <div class="section__title-wrap section__title-wrap--single">
                <h2 class="section__title section__title--small">
                  Vừa Xem
                </h2>

                <div class="section__nav-wrap">
                  <nuxt-link
                    v-if="productsView.length>0"
                    :to="{
                      name: 'products-slug',
                      params: { slug: 'Games' },
                      query: { justview: 1 }
                    }"
                    class="section__view"
                  >
                    Xem Thêm
                  </nuxt-link>
                </div>
              </div>
              <!-- end title -->

              <!-- cards -->
              <ul class="list list--home">
                <ItemSmall2
                  v-for="(value, key) in productsView"
                  :key="key"
                  :value="value"
                />
              </ul>
              <!-- end cards -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import ItemSmall2 from '~/components/Item_small2.vue'
export default {
  components: {
    ItemSmall2
  },
  async fetch () {
    const configSale = await {
      query: { sale: 1, column: 'sale', sort: 'desc' },
      nameMutations: 'setProductsSale'
    }

    const configHot = await {
      query: { view: 1, column: 'view', sort: 'desc' },
      nameMutations: 'setProductsHot'
    }
    return await Promise.all([
      this.getProducts(configSale),
      this.getProducts(configHot)
    ])
  },
  computed: mapGetters(['productsSale', 'productsHot', 'productsView']),
  methods: mapActions(['getProducts'])
}
</script>
