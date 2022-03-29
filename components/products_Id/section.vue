<template>
  <section class="section section--first section--bg section--detail">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <!-- breadcrumb -->
          <ul class="breadcrumb br--detail">
            <li class="breadcrumb__item">
              <nuxt-link to="/">
                Home
              </nuxt-link>
            </li>
            <li class="breadcrumb__item">
              <nuxt-link to="/product/Games">
                Games
              </nuxt-link>
            </li>
            <li class="breadcrumb__item breadcrumb__item--active">
              {{ product.name }}
            </li>
          </ul>
          <!-- end breadcrumb -->
          <div class="details">
            <HeaderDetail :value="headerDetail" />

            <Gallery-detail :value="galleryDetail" />

            <AddCartDetail :value="addCart" />

            <div class="details__content">
              <div class="row">
                <div class="col-12 col-xl-4 order-xl-2">
                  <!-- requirements -->
                  <Requirement :value="requirement" />
                  <!-- end requirements -->
                </div>

                <div class="col-12 col-xl-8 order-xl-1">
                  <!-- comments -->
                  <Comment :value="product.cmt" />
                  <!-- end comments -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import HeaderDetail from '@/components/products_Id/headerDetail.vue'
import GalleryDetail from '@/components/products_Id/galleryDetail.vue'
import Requirement from '@/components/products_Id/requirement.vue'
import AddCartDetail from '@/components/products_Id/addCartDetail.vue'
import Comment from '~/components/comment.vue'

export default {
  components: {
    HeaderDetail,
    GalleryDetail,
    Requirement,
    Comment,
    AddCartDetail
  },
  props: {
    product: {
      type: Object,
      default: () => null
    }
  },
  data () {
    return {
      // product: {},
      headerDetail: null,
      galleryDetail: null,
      requirement: null,
      comment: null,
      addCart: null
    }
  },
  async fetch () {
    try {
      this.headerDetail = await {
        name: this.product.name,
        evendate: this.product.evendate,
        developers: this.product.developers,
        genres: this.product.genres,
        conten: this.product.conten,
        avatar: this.product.avatar,
        language: this.product.language,
        trailer: this.product.trailer
      }
      this.galleryDetail = await {
        imgs: JSON.parse(this.product.imgs),
        name: this.product.name
      }
      this.addCart = await {
        platforms: this.product.platforms,
        price: this.product.price,
        sale: this.product.sale,
        id: this.product.id,
        name: this.product.name,
        avatar: this.product.avatar
      }
      this.requirement = await {
        minimum: JSON.parse(this.product.minimum),
        recommended: JSON.parse(this.product.recommended)
      }
    } catch (error) {
      this.$root.error(error)
    }
  }
}
</script>
<style></style>
