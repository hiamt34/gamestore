<template>
  <div>
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import Header from './component/header.vue'
import Footer from './component/footer.vue'
export default {
  name: 'Client',
  components: {
    Header,
    Footer
  },
  mounted () {
    const script = document.createElement('script')
    script.src = '/js/jquery-3.5.1.min.js'
    return document.body.append(script)
  }
}
</script>

<style></style>
