<template>
  <div class="col-12">
    <div class="paginator">
      <div class="paginator__counter">
        {{ meta.length }} from {{ meta.total }}
      </div>

      <ul v-if="Number(meta.perPage) > 0" class="paginator__wrap">
        <li class="paginator__item paginator__item--prev">
          <nuxt-link
            v-if="meta.currentPage > 1"
            :to="{ path: $route.path, query: preQuery }"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="512"
              height="512"
              viewBox="0 0 512 512"
            >
              <polyline
                points="244 400 100 256 244 112"
                style="fill:none;stroke-linecap:round;stroke-linejoin:round;stroke-width:48px"
              />
              <line
                x1="120"
                y1="256"
                x2="412"
                y2="256"
                style="fill:none;stroke-linecap:round;stroke-linejoin:round;stroke-width:48px"
              />
            </svg>
          </nuxt-link>
        </li>
        <template
          v-for="i in Math.round(meta.total / Number(meta.perPage) - 0.5 + 1)"
        >
          <li
            v-if="i === meta.currentPage"
            :key="i"
            class="paginator__item paginator__item--active"
          >
            <nuxt-link :to="{ path: $route.path, query: page(i) }">
              {{ i }}
            </nuxt-link>
          </li>
          <li v-else :key="i" class="paginator__item">
            <nuxt-link :to="{ path: $route.path, query: page(i) }">
              {{ i }}
            </nuxt-link>
          </li>
        </template>

        <li class="paginator__item paginator__item--next">
          <nuxt-link
            v-if="
              meta.currentPage <
                Math.round(meta.total / Number(meta.perPage) - 0.5 + 1)
            "
            :to="{ path: $route.path, query: nextQuery }"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="512"
              height="512"
              viewBox="0 0 512 512"
            >
              <polyline
                points="268 112 412 256 268 400"
                style="fill:none;stroke-linecap:round;stroke-linejoin:round;stroke-width:48px"
              />
              <line
                x1="392"
                y1="256"
                x2="100"
                y2="256"
                style="fill:none;stroke-linecap:round;stroke-linejoin:round;stroke-width:48px"
              />
            </svg>
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    meta: {
      type: Object,
      default () {}
    }
  },
  computed: {
    nextQuery () {
      return { ...this.$route.query, page: this.meta.currentPage + 1 }
    },
    preQuery () {
      return { ...this.$route.query, page: this.meta.currentPage - 1 }
    }
  },
  methods: {
    page (i) {
      return { ...this.$route.query, page: i }
    }
  }
}
</script>
<style></style>
