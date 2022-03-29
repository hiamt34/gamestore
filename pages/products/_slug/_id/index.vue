<template>
  <div>
    <Section :product="product" />
    <Section2 :category="category" />
  </div>
</template>
<script>
import Section from '@/components/products_Id/section.vue'
import Section2 from '@/components/products_Id/section_2.vue'
import Func from '~/middleware/func'

export default {
  name: 'Deatail',
  components: {
    Section,
    Section2
  },
  layout: 'client',
  async asyncData (context) {
    try {
      const query = await {}
      const URI = (await 'products/') + context.params.id
      const payload = await context.app.$productService.getData(query, URI)
      if (!payload.data.status) {
        throw new Error('404')
      }
      const check = await context.app.store.getters.productsView.some(
        item => item.id === payload.data.product.id
      )

      const push = check // jusst view ++
        ? context.app.store.getters.productsView
        : [...context.app.store.getters.productsView, payload.data.product]

      await context.app.store.dispatch('pushProductsView', push.reverse())
      return {
        product: payload.data.product,
        category: payload.data.product.category
      }
    } catch (err) {
      context.error(err)
    }
  },
  mounted () {
    Func.LoadJS()
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 1000)
    })
  }
}
</script>
<style></style>
