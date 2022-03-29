<template>
  <div>
    <Des :value="news" />
    <Slide :category="category" />
  </div>
</template>
<script>
import Des from '@/components/news_Id/description.vue'
import Slide from '@/components/news_Id/slide.vue'
export default {
  name: 'NewDetail',
  components: {
    Des,
    Slide
  },
  layout: 'client',
  async asyncData (context) {
    try {
      const query = await {}
      const URI = (await 'news/') + context.params.id
      const payload = await context.app.$newsService.getData(query, URI)
      if (!payload.data.status) {
        throw new Error('404')
      }
      return {
        news: payload.data.news,
        category: payload.data.news.category
      }
    } catch (err) {
      context.error(err)
    }
  }
}
</script>
<style></style>
