<template>
  <li v-if="value" class="list__item">
    <nuxt-link
      :to="{
        name: 'products-slug-id',
        params: { slug: slug(value.name), id: value.id }
      }"
      class="list__cover"
    >
      <img v-lazy-load :src="BaseImgs + value.avatar" :alt="value.name">
    </nuxt-link>

    <div class="list__wrap">
      <h3 :title="value.name" class="list__title">
        <nuxt-link
          :to="{
            name: 'products-slug-id',
            params: { slug: slug(value.name), id: value.id }
          }"
        >
          {{ value.name }}
        </nuxt-link>
      </h3>
      <ul class="card__list">
        <li style="float: right;">
          <span>Ngày phát hành:</span> {{ value.evendate }}
        </li>
      </ul>
      <div class="list__price">
        <span>{{ VND(value.price * (1 - value.sale / 100)) }} VNĐ</span><s v-if="value.sale > 0">{{ VND(value.price) }} VNĐ</s><b v-if="value.sale > 0">{{ value.sale }}% OFF</b>
      </div>
    </div>
  </li>
</template>
<script>
import { mapGetters } from 'vuex'
import slug from 'slug'
import Func from '~/middleware/func'
export default {
  name: 'ItemSmall2',
  props: {
    value: {
      type: Object,
      require: false,
      default: () => null
    }
  },
  data () {
    return {
      BaseImgs: process.env.BaseImgs
    }
  },
  computed: mapGetters(['platforms']),
  methods: {
    VND: Func.VND,
    slug
  }
}
</script>

<style></style>
