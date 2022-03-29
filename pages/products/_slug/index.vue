<template>
  <div>
    <Banner
      :total="meta.total"
      :name="$route.query.search ? 'Tìm Kiếm ' : 'Games'"
    />
    <section class="section section--last section--catalog">
      <div class="container">
        <div class="row catalog">
          <div class="col-12 col-lg-20 order-lg-2">
            <SideBar />
          </div>
          <div class="col-12 col-lg-80 order-lg-1">
            <div class="row">
              <!-- card -->
              <div
                v-for="(value, key) in products"
                :key="key"
                class="col-12 col-sm-6 col-md-4 col-xl-3"
              >
                <ItemSmall :value="value" />
              </div>
              <!-- end card -->
              <Paginator :meta="meta" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import Banner from '~/components/Banner.vue'
import SideBar from '~/components/Side_bar.vue'
import ItemSmall from '~/components/Item_small.vue'
import Paginator from '~/components/products/paginator.vue'
import Func from '~/middleware/func'
export default {
  name: 'Products',
  components: {
    Banner,
    SideBar,
    ItemSmall,
    Paginator
  },
  layout: 'client',
  async fetch (context) {
    try {
      const config = await {
        query: context.route.query,
        nameMutations: 'setProducts'
      }
      return await context.app.store.dispatch('getProducts', config)
    } catch (err) {
      context.error(err)
    }
  },
  computed: { ...mapGetters(['products', 'meta']) },
  watchQuery () {
    window.scrollTo(0, 0)
    return true
  },
  fetchDelay: 10000,
  mounted () {
    Func.LoadJS()
    this.loading()
  },
  methods: {
    loading () {
      this.$nextTick(() => {
        this.$nuxt.$loading.start()
        setTimeout(() => this.$nuxt.$loading.finish(), 600)
      })
    }
  }
}
</script>
<style></style>
