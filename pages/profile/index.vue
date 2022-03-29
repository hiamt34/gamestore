<template>
  <div>
    <Banner name="Profile" />
    <section class="section section--last">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="profile">
              <div class="profile__user">
                <div class="profile__avatar">
                  <img v-if="$auth.user.avatar" :src="$auth.user.avatar" alt="tth-shop">
                  <img v-else src="/XOsa.gif" alt="tth-shop">
                </div>
                <div class="profile__meta">
                  <h3>{{ $auth.user.name }}</h3>
                  <span>ID: {{ $auth.user.id }}</span>
                </div>
              </div>
              <ul
                id="profile__tabs"
                class="nav nav-tabs profile__tabs"
                role="tablist"
              >
                <li class="nav-item">
                  <a
                    class="nav-link active"
                    data-toggle="tab"
                    href="#tab-1"
                    @click="check = true"
                  >Đơn hàng</a>
                </li>

                <li class="nav-item">
                  <a
                    class="nav-link"
                    data-toggle="tab"
                    href="#tab-2"
                    @click="check = false"
                  >Settings</a>
                </li>
              </ul>

              <button class="profile__logout" type="button" @click="logout()">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path
                    d="M304 336v40a40 40 0 01-40 40H104a40 40 0 01-40-40V136a40 40 0 0140-40h152c22.09 0 48 17.91 48 40v40M368 336l80-80-80-80M176 256h256"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="32"
                  />
                </svg>
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <!-- content tabs -->
        <div class="tab-content">
          <Order v-if="check" />
          <Setting v-if="!check" />
        </div>
        <!-- end content tabs -->
      </div>
    </section>
  </div>
</template>
<script>
import Func from '~/middleware/func'
import Banner from '~/components/Banner.vue'
import Order from '~/components/profile/order.vue'
import Setting from '~/components/profile/setting.vue'
export default {
  components: {
    Banner,
    Order,
    Setting
  },
  layout: 'client',
  middleware: 'checkUser',
  data () {
    return {
      check: true
    }
  },
  mounted () {
    Func.LoadJS()
  },
  methods: {
    logout () {
      this.$auth.logout()
    }
  }
}
</script>
