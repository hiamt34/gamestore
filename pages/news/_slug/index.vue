<template>
  <div>
    <Banner :total="metaNews.total" :name="'News'" />
    <section class="section section--last section--catalog">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <Sort />
          </div>

          <!-- post -->
          <PostSmall v-for="(value, key) in news" :key="key" :value="value" />
          <!-- end post -->

          <!-- paginator -->
          <Paginator :meta="metaNews" />
          <!-- end paginator -->
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import Banner from '~/components/Banner.vue'
import PostSmall from '~/components/Post_small.vue'
import Paginator from '~/components/products/paginator.vue'
import Sort from '~/components/news/Sort.vue'
import Func from '~/middleware/func'
export default {
  components: {
    Banner,
    PostSmall,
    Paginator,
    Sort
  },
  layout: 'client',
  data () {
    return {
      check: 0
    }
  },
  async fetch (context) {
    try {
      const config = await {
        query: context.route.query,
        nameMutations: 'setNews'
      }
      await context.app.store.dispatch('getNews', config)
      return (this.check = await Math.random())
    } catch (err) {
      context.error(err)
    }
  },
  computed: { ...mapGetters(['news', 'metaNews']) },
  watch: {
    check () {
      this.loadJs()
    }
  },
  watchQuery () {
    window.scrollTo(0, 0)
    return true
  },
  mounted () {
    this.loadJs()
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 600)
    })
  },
  methods: {
    loadJs () {
      setTimeout(() => {
        Func.LoadJS()
      }, 300)
    }
  }
}
</script>
<style></style>
