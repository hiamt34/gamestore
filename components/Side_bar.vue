<template>
  <div class="row">
    <div class="col-12">
      <div class="filter-wrap">
        <button
          class="filter-wrap__btn"
          type="button"
          data-toggle="collapse"
          data-target="#collapseFilter"
          aria-expanded="false"
          aria-controls="collapseFilter"
        >
          Lọc - Tìm Kiếm
        </button>

        <div id="collapseFilter" class="collapse filter-wrap__content">
          <!-- filter -->
          <div class="filter filter--right">
            <h4 class="filter__title">
              Lọc - Tìm Kiếm
              <nuxt-link :to="{ path: $route.path }">
                <button
                  v-if="
                    !(
                      Number($route.query.favorite) === 1 &&
                      $auth.user
                    )
                  "
                  type="button"
                  @click="clearAll()"
                >
                  Clear all
                </button>
              </nuxt-link>
            </h4>
            <div class="filter__group">
              <div class="filter__group">
                <label class="filter__label">Giá:</label>

                <div class="filter__range">
                  <div id="filter__range-start" />
                  <div id="filter__range-end" />
                </div>

                <div id="filter__range" />
              </div>
              <button class="filter__btn" type="button" @click="filterPrice()">
                APPLY PRICE
              </button>
            </div>
            <hr class="hr__filter">
            <div class="filter__group">
              <label class="filter__label">Từ Khóa:</label>
              <input
                v-model="search"
                type="text"
                class="filter__input"
                placeholder="Tìm kiếm"
                @keyup="searchData"
              >
            </div>

            <div class="filter__group">
              <label for="sort" class="filter__label">Sắp xếp:</label>

              <div class="filter__select-wrap">
                <select
                  id="sort"
                  v-model="sortData"
                  name="sortby"
                  class="filter__select"
                >
                  <option
                    v-for="(sortBy, key) in sortBys"
                    :key="key"
                    :value="sortBy.value"
                  >
                    {{ sortBy.name }}
                  </option>
                </select>
              </div>
            </div>

            <div class="filter__group">
              <label class="filter__label">Nền Tảng:</label>
              <ul class="filter__checkboxes">
                <li v-for="(platform, key) in platforms" :key="key">
                  <input
                    :id="platform.id + platform.name"
                    v-model="platformData"
                    type="radio"
                    name="platform"
                    :value="platform.id"
                  >
                  <label :for="platform.id + platform.name">{{
                    platform.name
                  }}</label>
                </li>
              </ul>
            </div>

            <div class="filter__group">
              <label class="filter__label">Thể Loại:</label>
              <ul class="filter__checkboxes">
                <li v-for="(genre, key) in genres" :key="key">
                  <input
                    :id="genre.id + genre.name"
                    v-model="genreData"
                    type="radio"
                    name="genre"
                    :value="genre.id"
                  >
                  <label :for="genre.id + genre.name">{{ genre.name }}</label>
                </li>
              </ul>
            </div>

            <div class="filter__group">
              <label class="filter__label">Nhà Phát Triển:</label>
              <ul class="filter__checkboxes">
                <li v-for="(developer, key) in developers" :key="key">
                  <input
                    :id="developer.id + developer.name"
                    v-model="developerData"
                    type="radio"
                    name="developer"
                    :value="developer.id"
                  >
                  <label :for="developer.id + developer.name">{{
                    developer.name
                  }}</label>
                </li>
              </ul>
            </div>
          </div>
          <!-- end filter -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data () {
    return {
      search: this.$route.query.search || '',
      sortData: this.$route.query.sortby || 0,
      developerData: this.$route.query.developer || 0,
      platformData: this.$route.query.platform || 0,
      genreData: this.$route.query.genre || 0,
      timeOut: null
    }
  },
  computed: { ...mapGetters(['platforms', 'genres', 'sortBys', 'developers']) },
  watch: {
    developerData () {
      const query = { ...this.$route.query, developer: this.developerData, page: 1 }
      this.$router.push({ path: this.$route.path, query })
    },
    platformData () {
      const query = { ...this.$route.query, platform: this.platformData, page: 1 }
      this.$router.push({ path: this.$route.path, query })
    },
    genreData () {
      const query = { ...this.$route.query, genre: this.genreData, page: 1 }
      this.$router.push({ path: this.$route.path, query })
    },
    sortData () {
      const querys = [
        {
          ...this.$route.query,
          sort: 'desc',
          column: 'id',
          page: 1,
          sortby: 0
        },
        {
          ...this.$route.query,
          sort: 'asc',
          column: 'price',
          page: 1,
          sortby: 1
        },
        {
          ...this.$route.query,
          sort: 'desc',
          column: 'price',
          page: 1,
          sortby: 2
        },
        {
          ...this.$route.query,
          sort: 'desc',
          column: 'id',
          view: 1,
          sale: 0,
          hot: 0,
          new: 0,
          page: 1,
          sortby: 3
        },
        {
          ...this.$route.query,
          sort: 'desc',
          column: 'id',
          view: 0,
          sale: 1,
          hot: 0,
          new: 0,
          page: 1,
          sortby: 4
        },
        {
          ...this.$route.query,
          sort: 'desc',
          column: 'id',
          view: 0,
          sale: 0,
          hot: 1,
          new: 0,
          page: 1,
          sortby: 5
        },
        {
          ...this.$route.query,
          sort: 'desc',
          column: 'id',
          view: 0,
          sale: 0,
          hot: 0,
          new: 1,
          page: 1,
          sortby: 6
        }
      ]
      for (let i = 0; i < querys.length; i++) {
        if (this.sortData === i) {
          this.$router.push({
            path: this.$route.path,
            query: { ...querys[i] }
          })
        }
      }
    }
  },
  methods: {
    ...mapActions(['getProducts']),
    async searchData () {
      clearTimeout(this.timeOut)
      const config = await {
        query: { ...this.$route.query, search: this.search, page: 1 },
        nameMutations: 'setProducts'
      }
      this.timeOut = setTimeout(() => {
        this.$router.push({ path: this.$route.path, query: config.query })
      }, 800)
    },
    async filterPrice () {
      const price = await JSON.parse(sessionStorage.price)
      const config = await {
        query: {
          ...this.$route.query,
          price,
          page: 1
        },
        nameMutations: 'setProducts'
      }
      this.$router.push({
        path: this.$route.path,
        query: config.query
      })
    },
    async clearAll () {
      this.search = await ''
      this.sortData = await 0
      this.developerData = await []
      this.platformData = await []
      this.genreData = await []
      // await this.$router.push({ path: this.$route.path, query: {} })
    }
  }
}
</script>
<style></style>
