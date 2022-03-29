<template>
  <section
    v-if="value"
    class="section section--first section--bg section--detail"
  >
    <div class="container">
      <!-- breadcrumb -->
      <ul class="breadcrumb br--detail">
        <li class="breadcrumb__item">
          <nuxt-link to="/">
            Home
          </nuxt-link>
        </li>
        <li class="breadcrumb__item">
          <nuxt-link to="/news/TinTuc">
            Tin Tức
          </nuxt-link>
        </li>
        <li class="breadcrumb__item breadcrumb__item--active">
          {{ value.title }}
        </li>
      </ul>
      <!-- end breadcrumb -->
      <!-- article -->
      <div class="article">
        <div class="row">
          <div class="col-12 col-xl-8">
            <!-- article content -->
            <div class="article__content">
              <nuxt-link
                :to="{
                  name: 'news-slug',
                  params: { slug: slug(categoryName) },
                  query: { category: value.category }
                }"
                class="post__category"
              >
                {{ categoryName }}
              </nuxt-link>

              <span class="article__date">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="512"
                  height="512"
                  viewBox="0 0 512 512"
                >
                  <path
                    d="M256,64C150,64,64,150,64,256s86,192,192,192,192-86,192-192S362,64,256,64Z"
                    style="fill:none;stroke-miterlimit:10;stroke-width:32px"
                  />
                  <polyline
                    points="256 128 256 272 352 272"
                    style="fill:none;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
                  /></svg>{{ changeDate(value.date) }}</span>

              <h1 :title="value.title" class="mt-5">
                {{ value.title }}
              </h1>
              <img
                v-lazy-load
                :data-src="BaseImgs + value.avatar"
                :alt="value.name"
                class="img-fluid"
              >
              <div class="mb-5" v-html="value.description" />
              <template v-if="value.trailer">
                <iframe
                  :src="changeIfame(value.trailer)"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                />
              </template>
            </div>
            <!-- end article content -->

            <!-- share -->
            <Share />
            <!-- end share -->
            <Comment :value="value.cmt" />
          </div>
          <div class="col-12 col-xl-4">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import Comment from '@/components/comment.vue'
import Sidebar from '@/components/news_Id/sidebar.vue'
import Share from '@/components/news_Id/share.vue'
import { mapGetters } from 'vuex'
import slug from 'slug'
import Func from '@/middleware/func'
export default {
  components: {
    Comment,
    Sidebar,
    Share
  },
  props: {
    value: {
      type: Object,
      default: () => null
    }
  },
  data () {
    return {
      BaseImgs: process.env.BaseNews
    }
  },
  computed: {
    ...mapGetters(['categoryNews']),
    categoryName () {
      let name = 'NoCategory'
      this.categoryNews.forEach((item) => {
        if (item.id === Number(this.value.category)) {
          name = item.name
        }
      })
      return name
    }
  },
  mounted () {
  },
  methods: {
    slug,
    changeDate: Func.changeDate,
    changeIfame (str) {
      if (str) {
        return str.replace('watch?v=', 'embed/')
      }
    }
  }
}
</script>
<style></style>
