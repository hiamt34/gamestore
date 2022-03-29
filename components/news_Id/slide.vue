<template>
  <section class="section section--last">
    <div class="container">
      <div class="row">
        <!-- title -->
        <div class="col-12">
          <div class="section__title-wrap section__title-wrap--single">
            <h2 class="section__title">
              Tin liên quan
            </h2>

            <div class="section__nav-wrap">
              <nuxt-link
                :to="{
                  name: 'news-slug',
                  params: { slug: 'tin-tuc-lien-quan' },
                  query: { category: category }
                }"
                class="section__view"
              >
                Xem Thêm
              </nuxt-link>
            </div>
          </div>
        </div>
        <!-- end title -->

        <!-- video post -->
        <PostSmall v-for="(value, key) in dataNews" :key="key" :value="value" />
        <!-- end post -->
      </div>
    </div>
  </section>
</template>
<script>
import PostSmall from '@/components/Post_small.vue'
import slug from 'slug'
import { mapActions, mapGetters } from 'vuex'
export default {
  components: {
    PostSmall
  },
  props: {
    category: {
      type: String,
      default: () => null
    }
  },
  async fetch () {
    try {
      const config = await {
        query: { category: this.category, limit: 4 },
        nameMutations: 'setNews'
      }
      return await this.getNews(config)
    } catch (error) {
      this.$error(error)
    }
  },
  computed: {
    ...mapGetters(['news']),
    dataNews () {
      return this.news.filter(item => item.id !== Number(this.$route.params.id))
    }
  },
  methods: {
    ...mapActions(['getNews']),
    slug
  }
}
</script>
<style></style>
