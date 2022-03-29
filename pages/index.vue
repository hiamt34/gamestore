<template>
  <div>
    <Section1 />
    <Section2 />
    <Section3 />
    <Section4 />
    <SectionPost />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Section1 from '~/components/home/Section_1.vue'
import Section2 from '~/components/home/Section_2.vue'
import Section3 from '~/components/home/Section_3.vue'
import Section4 from '~/components/home/Section_4.vue'
import SectionPost from '~/components/home/Section_post.vue'
import Func from '~/middleware/func'
export default {
  components: {
    Section1,
    Section2,
    Section3,
    Section4,
    SectionPost
  },
  layout: 'client',
  async mounted () {
    await this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 600)
    })
    await Func.LoadJS()
    if (this.$route.query.vnp_TransactionNo) {
      await this.$alert.toast('success', 'đặt hàng thành công')
      await this.$local.setOrder({})
      await this.$local.setCart([])
      await this.setCart([])
      await this.$router.push('/')
    }
  },
  methods: { ...mapActions(['setCart']) }
}
</script>

<style></style>
