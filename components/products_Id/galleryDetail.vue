<template>
  <div v-if="value " class="details__gallery" :style="!check?'display:none':null">
    <div id="details__carousel" class="details__carousel owl-carousel">
      <a
        v-for="(img, key) in value.imgs"
        :key="key"
        :href="BaseImgs + img"
      >
        <img :src="BaseImgs + img" :alt="value.name">
      </a>
    </div>

    <button
      class="details__nav details__nav--prev"
      data-nav="#details__carousel"
      type="button"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="512"
        height="512"
        viewBox="0 0 512 512"
      >
        <polyline
          points="328 112 184 256 328 400"
          style="fill:none;stroke-linecap:round;stroke-linejoin:round;stroke-width:48px"
        />
      </svg>
    </button>
    <button
      class="details__nav details__nav--next"
      data-nav="#details__carousel"
      type="button"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="512"
        height="512"
        viewBox="0 0 512 512"
      >
        <polyline
          points="184 112 328 256 184 400"
          style="fill:none;stroke-linecap:round;stroke-linejoin:round;stroke-width:48px"
        />
      </svg>
    </button>
  </div>
</template>
<script>
export default {
  props: {
    value: {
      type: Object,
      default: () => null
    }
  },
  data () {
    return {
      BaseImgs: process.env.BaseImgs,
      check: false
    }
  },
  mounted () {
    setTimeout(() => {
      this.check = true
    }, 500)
  }
}
</script>
<style></style>
