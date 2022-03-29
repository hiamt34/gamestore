<template>
  <div v-if="value" class="col-12 col-md-12 col-lg-6">
    <div class="post post--big">
      <nuxt-link
        :to="{
          name: 'news-slug-id',
          params: { slug: slug(value.title), id: value.id }
        }"
        class="post__img"
      >
        <img
          v-lazy-load
          :data-src="BaseImgs + value.avatar"
          :alt="value.title"
          style="cursor: pointer;"
        >
      </nuxt-link>

      <a v-if="value.trailer" :href="value.trailer" class="post__video">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="512"
          height="512"
          viewBox="0 0 512 512"
        >
          <path
            d="M112,111V401c0,17.44,17,28.52,31,20.16l247.9-148.37c12.12-7.25,12.12-26.33,0-33.58L143,90.84C129,82.48,112,93.56,112,111Z"
            style="fill:none;stroke-miterlimit:10;stroke-width:32px"
          />
        </svg>
      </a>

      <div class="post__content">
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
        <h3 class="post__title">
          <nuxt-link
            :to="{
              name: 'news-slug-id',
              params: { slug: slug(value.title), id: value.id }
            }"
          >
            {{ value.title }}
          </nuxt-link>
        </h3>
        <div class="post__meta">
          <span
            class="post__date"
          ><svg
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
             />
           </svg>
            {{ changeTime(value.date) }}</span>
          <span
            class="post__comments"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="512"
            height="512"
            viewBox="0 0 512 512"
          >
            <path
              d="M431,320.6c-1-3.6,1.2-8.6,3.3-12.2a33.68,33.68,0,0,1,2.1-3.1A162,162,0,0,0,464,215c.3-92.2-77.5-167-173.7-167C206.4,48,136.4,105.1,120,180.9a160.7,160.7,0,0,0-3.7,34.2c0,92.3,74.8,169.1,171,169.1,15.3,0,35.9-4.6,47.2-7.7s22.5-7.2,25.4-8.3a26.44,26.44,0,0,1,9.3-1.7,26,26,0,0,1,10.1,2L436,388.6a13.52,13.52,0,0,0,3.9,1,8,8,0,0,0,8-8,12.85,12.85,0,0,0-.5-2.7Z"
              style="fill:none;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px"
            />
            <path
              d="M66.46,232a146.23,146.23,0,0,0,6.39,152.67c2.31,3.49,3.61,6.19,3.21,8s-11.93,61.87-11.93,61.87a8,8,0,0,0,2.71,7.68A8.17,8.17,0,0,0,72,464a7.26,7.26,0,0,0,2.91-.6l56.21-22a15.7,15.7,0,0,1,12,.2c18.94,7.38,39.88,12,60.83,12A159.21,159.21,0,0,0,284,432.11"
              style="fill:none;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px"
            />
          </svg>
            11</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import slug from 'slug'
import Func from '~/middleware/func'
export default {
  name: 'PostBig',
  props: {
    value: {
      type: Object,
      require: false,
      default: () => null
    }
  },
  data () {
    return {
      post: {},
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
  methods: {
    changeTime: Func.changeTime,
    slug
  }
}
</script>
<style></style>
