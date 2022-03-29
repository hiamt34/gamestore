<template>
  <div v-if="value" class="details__head">
    <div class="details__cover">
      <img :src="BaseImgs + value.avatar" :alt="value.name">
      <a
        :v-if="value.trailer !== ''"
        :href="value.trailer"
        class="details__trailer"
      >
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
        <span :v-if="value.trailer !== ''">Watch trailer</span>
      </a>
    </div>

    <div class="details__wrap">
      <h3 class="details__title">
        {{ value.name }}
      </h3>

      <ul class="details__list">
        <li><span>Ngày Phát Hành:</span> {{ value.evendate }}</li>
        <li>
          <span>Thể Loại:</span>
          <a
            v-for="value in getGenres"
            :key="value.id"
            href="#"
            class="a-genre"
          >
            {{ value.name }},
          </a>
        </li>
        <li>
          <span>Nhà Phát Triển:</span>
          <a
            v-for="value in getDevelopers"
            :key="value.id"
            href="#"
            class="a-genre"
          >
            {{ value.name }},
          </a>
        </li>
        <li><span>Ngôn Ngữ:</span> {{ value.language }}</li>
        <li><span>Mô Tả</span></li>
      </ul>
      <div class="details__text detail--scroll">
        <p>{{ value.conten }}</p>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  props: {
    value: {
      type: Object,
      default: () => null
    }
  },
  data () {
    return {
      BaseImgs: process.env.BaseImgs
    }
  },
  computed: {
    ...mapGetters(['genres', 'developers']),
    getGenres () {
      if (this.value) {
        const Vgenres = JSON.parse(this.value.genres)
        return this.genres.filter(item => Vgenres.includes(item.id.toString()))
      }
      return []
    },
    getDevelopers () {
      if (this.value) {
        const Vdevelopers = JSON.parse(this.value.developers)
        return this.developers.filter(item =>
          Vdevelopers.includes(item.id.toString())
        )
      }
      return []
    }
  }
}
</script>

<style></style>
