<template>
  <div class="sidebar">
    <div class="row">
      <div class="col-12 col-lg-6 col-xl-12">
        <!-- cards -->
        <ul class="list list--sidebar list--home">
          <ItemSmall2
            v-for="(value, key) in productsView"
            :key="key"
            :value="value"
          />
        </ul>
        <!-- end cards -->
      </div>

      <div class="col-12 col-lg-6 col-xl-12">
        <!-- subscribe -->
        <form action="#" class="subscribe">
          <div class="subscribe__img">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="512"
              height="512"
              viewBox="0 0 512 512"
            >
              <path
                d="M441.6,171.61,266.87,85.37a24.57,24.57,0,0,0-21.74,0L70.4,171.61A40,40,0,0,0,48,207.39V392c0,22.09,18.14,40,40.52,40h335c22.38,0,40.52-17.91,40.52-40V207.39A40,40,0,0,0,441.6,171.61Z"
                style="fill:none;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
              />
              <path
                d="M397.33,368,268.07,267.46a24,24,0,0,0-29.47,0L109.33,368"
                style="fill:none;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
              />
              <line
                x1="309.33"
                y1="295"
                x2="445.33"
                y2="192"
                style="fill:none;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
              />
              <line
                x1="61.33"
                y1="192"
                x2="200.33"
                y2="297"
                style="fill:none;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
              />
            </svg>
          </div>
          <h4 class="subscribe__title">
            Subscribe to news
          </h4>
          <p class="subscribe__text">
            All the Lorem Ipsum generators on the Internet tend to repeat
            predefined chunks as necessary.
          </p>
          <input type="text" class="form__input" placeholder="Email">
          <button type="button" class="form__btn">
            Send
          </button>
        </form>
        <!-- end subscribe -->
      </div>
    </div>
  </div>
</template>
<script>
import ItemSmall2 from '@/components/Item_small2.vue'
import { mapGetters } from 'vuex'
export default {
  components: {
    ItemSmall2
  },
  computed: mapGetters(['productsView'])
}
</script>
<style></style>
