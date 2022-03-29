<template>
  <div class="sort">
    <div class="filter__group filter__group--sort">
      <label for="genres" class="filter__label">Thể loại:</label>

      <div class="filter__select-wrap">
        <select
          id="category"
          v-model="category"
          name="category"
          class="filter__select"
        >
          <option value="0">
            All News
          </option>
          <option
            v-for="value in categoryNews"
            :key="value.id"
            :value="value.id"
          >
            {{ value.name }}
          </option>
        </select>
      </div>
    </div>

    <div class="filter__group filter__group--sort">
      <label for="sort" class="filter__label">Lọc:</label>

      <div class="filter__select-wrap">
        <select id="sort" v-model="sortby" name="sortby" class="filter__select">
          <option value="0">
            Tin mới
          </option>
          <option value="1">
            Tin cũ
          </option>
          <option value="2">
            Tin Hot
          </option>
        </select>
      </div>
    </div>

    <div class="filter__group filter__group--sort">
      <label for="sort" class="filter__label">Tìm kiếm:</label>

      <div class="filter__select-wrap">
        <input
          v-model="search"
          type="text"
          class="filter__input"
          placeholder="Tìm kiếm"
          maxlength="20"
          @keyup="searchData"
        >
      </div>
    </div>

    <div class="sort__results">
      Tìm được {{ metaNews.total }} bài viết
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data () {
    return {
      search: this.$route.query.search || '',
      sortby: this.$route.query.sortby || 0,
      category: this.$route.query.category || 0,
      timeOut: null
    }
  },
  computed: { ...mapGetters(['metaNews', 'categoryNews']) },
  watch: {
    async category () {
      const query = await { ...this.$route.query, category: this.category }
      await this.$router.push({ path: this.$route.path, query })
    },
    async sortby () {
      const querys = await [
        {
          ...this.$route.query,
          sortby: this.sortby,
          sort: 'desc',
          column: 'id',
          hot: 0,
          page: 1
        },
        {
          ...this.$route.query,
          sortby: this.sortby,
          sort: 'asc',
          column: 'id',
          hot: 0,
          page: 1
        },
        { ...this.$route.query, sortby: this.sortby, hot: 1, page: 1 }
      ]
      querys.forEach((query, key) => {
        if (key === Number(this.sortby)) {
          return this.$router.push({
            path: this.$route.path,
            query
          })
        }
      })
    }
  },
  methods: {
    ...mapActions(['getNews']),
    async searchData () {
      clearTimeout(this.timeOut)
      const config = await {
        query: { ...this.$route.query, search: this.search, page: 1 },
        nameMutations: 'setNews'
      }
      this.timeOut = setTimeout(() => {
        this.$router.push({ path: this.$route.path, query: config.query })
      }, 800)
    }
  }
}
</script>

<style></style>
