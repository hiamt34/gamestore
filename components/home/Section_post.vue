<template>
  <section class="section">
    <div class="container">
      <div class="row">
        <!-- title -->
        <div class="col-12">
          <div class="section__title-wrap section__title-wrap--single">
            <h2 class="section__title section__title--pre">
              Tin Game
            </h2>

            <div class="section__nav-wrap">
              <nuxt-link to="/news/TinGames" class="section__view">Xem Thêm</nuxt-link>
            </div>
          </div>
        </div>
        <!-- end title -->

        <!-- big video post -->
        <PostBig v-for=" i in 2" :key="i+'pb'" :value="newsHot[i-1]" />
        <!-- end big video post -->

        <!-- video post -->
        <PostSmall v-for=" i in 3" :key="i+'ps'" :value="newsHot[i+1]" />

        <!-- end video post -->
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import PostSmall from '~/components/Post_small.vue'
import PostBig from '~/components/Post_big.vue'
export default {
  components: {
    PostSmall,
    PostBig
  },
  async fetch () {
    if (this.newsHot.length === 5) { return false }
    const config = await {
      query: { hot: 1, limit: 5 },
      nameMutations: 'setNewsHot'
    }
    return await this.getNews(config)
  },
  computed: mapGetters(['newsHot']),
  methods: mapActions(['getNews'])
}
</script>
