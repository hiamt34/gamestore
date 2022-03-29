<template>
  <section class="section section--first section--last section--head">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="section__wrap">
            <!-- section title -->
            <h2 class="section__title">
              {{ name }} <span v-if="total">({{ total }} Item)</span>
            </h2>
            <!-- end section title -->

            <!-- breadcrumb -->
            <ul class="breadcrumb">
              <li class="breadcrumb__item">
                <nuxt-link to="/">
                  Home
                </nuxt-link>
              </li>
              <li class="breadcrumb__item breadcrumb__item--active">
                {{ name }}
              </li>
            </ul>
            <!-- end breadcrumb -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  props: {
    total: {
      type: Number,
      default () {}
    },
    name: {
      type: String,
      default () {}
    },
    path: {
      type: String,
      default () {}
    }
  }
}
</script>
<style></style>
