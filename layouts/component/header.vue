<template>
  <header class="header">
    <div class="header__wrap">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="header__content">
              <button class="header__menu" type="button">
                <span />
                <span />
                <span />
              </button>

              <nuxt-link to="/" class="header__logo">
                <img src="~/assets/img/logo.png" alt="">
              </nuxt-link>
              <ul class="header__nav child__1">
                <li class="header__nav-item">
                  <nuxt-link class="header__nav-link" to="/products/Games">
                    Games
                  </nuxt-link>
                </li>
                <li class="header__nav-item">
                  <a class="header__nav-link" href="/news/TinGames">
                    Tin Tức
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="48"
                        d="M112 184l144 144 144-144"
                      />
                    </svg>
                  </a>
                  <ul
                    class="dropdown-menu header__nav-menu header__nav-menu--scroll  shows"
                  >
                    <li v-for="value in categoryNews" :key="value.id">
                      <nuxt-link
                        :to="{
                          path: '/news/' + slug(value.name),
                          query: { category: value.id }
                        }"
                      >
                        {{ value.name }}
                      </nuxt-link>
                    </li>
                  </ul>
                </li>
              </ul>
              <ul class="header__nav" v-html="html" />
              <ul>
                <li class="header__nav-item">
                  <a
                    id="dropdownMenu3"
                    class="header__nav-link header__nav-link--more"
                    href="#"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="512"
                      height="512"
                      viewBox="0 0 512 512"
                    >
                      <circle
                        cx="256"
                        cy="256"
                        r="32"
                        style="fill:none; stroke-miterlimit:10;stroke-width:32px"
                      />
                      <circle
                        cx="416"
                        cy="256"
                        r="32"
                        style="fill:none;stroke-miterlimit:10;stroke-width:32px"
                      />
                      <circle
                        cx="96"
                        cy="256"
                        r="32"
                        style="fill:none;stroke-miterlimit:10;stroke-width:32px"
                      />
                    </svg>
                  </a>

                  <ul
                    class="dropdown-menu header__nav-menu header__nav-menu--scroll  shows"
                  >
                    <li><a href="about.html">About</a></li>
                    <li><a href="privacy.html">Privacy policy</a></li>
                    <li>
                      <nuxt-link to="/contac">
                        Contacts
                      </nuxt-link>
                    </li>
                  </ul>
                </li>
              </ul>

              <div class="header__actions">
                <div class="header__lang" />

                <nuxt-link
                  v-if="!$auth.loggedIn"
                  to="/signin"
                  class="header__login"
                >
                  <svg
                    id="Capa_1"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    width="45.532px"
                    height="45.532px"
                    viewBox="0 0 45.532 45.532"
                    style="enable-background:new 0 0 45.532 45.532;"
                    xml:space="preserve"
                  >
                    <g>
                      <path
                        d="M22.766,0.001C10.194,0.001,0,10.193,0,22.766s10.193,22.765,22.766,22.765c12.574,0,22.766-10.192,22.766-22.765 S35.34,0.001,22.766,0.001z M22.766,6.808c4.16,0,7.531,3.372,7.531,7.53c0,4.159-3.371,7.53-7.531,7.53 c-4.158,0-7.529-3.371-7.529-7.53C15.237,10.18,18.608,6.808,22.766,6.808z M22.761,39.579c-4.149,0-7.949-1.511-10.88-4.012 c-0.714-0.609-1.126-1.502-1.126-2.439c0-4.217,3.413-7.592,7.631-7.592h8.762c4.219,0,7.619,3.375,7.619,7.592 c0,0.938-0.41,1.829-1.125,2.438C30.712,38.068,26.911,39.579,22.761,39.579z"
                      />
                    </g>
                  </svg>
                  <span>Sign in</span>
                </nuxt-link>
                <nuxt-link
                  v-else
                  :to="{ name: 'profile', path: '/' }"
                  class="header__login"
                >
                  <svg
                    id="Capa_1"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    width="45.532px"
                    height="45.532px"
                    viewBox="0 0 45.532 45.532"
                    style="enable-background:new 0 0 45.532 45.532;"
                    xml:space="preserve"
                  >
                    <g>
                      <path
                        d="M22.766,0.001C10.194,0.001,0,10.193,0,22.766s10.193,22.765,22.766,22.765c12.574,0,22.766-10.192,22.766-22.765 S35.34,0.001,22.766,0.001z M22.766,6.808c4.16,0,7.531,3.372,7.531,7.53c0,4.159-3.371,7.53-7.531,7.53 c-4.158,0-7.529-3.371-7.529-7.53C15.237,10.18,18.608,6.808,22.766,6.808z M22.761,39.579c-4.149,0-7.949-1.511-10.88-4.012 c-0.714-0.609-1.126-1.502-1.126-2.439c0-4.217,3.413-7.592,7.631-7.592h8.762c4.219,0,7.619,3.375,7.619,7.592 c0,0.938-0.41,1.829-1.125,2.438C30.712,38.068,26.911,39.579,22.761,39.579z"
                      />
                    </g>
                  </svg>
                  <span>Profile</span>
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <HeaderInput />
  </header>
</template>

<script>
import { mapGetters } from 'vuex'
import slug from 'slug'
import HeaderInput from './header_Input.vue'
export default {
  name: 'Header',
  components: {
    HeaderInput
  },
  data () {
    return {
      html: null,
      link: []
    }
  },
  computed: {
    ...mapGetters(['categories', 'categoryNews'])
  },
  created () {
    this.render()
  },
  mounted () {
    // TODO: use hasRouter mixin ???
    if (this.$router) {
      this.addListeners()
    }
  },

  beforeUnmount () {
    if (this.$router) {
      this.removeListeners()
    }
  },

  updated () {
    if (this.$router) {
      this.removeListeners()
      this.$nextTick(() => {
        this.addListeners()
      })
    }
  },
  methods: {
    slug,
    check (categoryCon) {
      categoryCon = JSON.parse(categoryCon)
      this.html += '<ul class="dropdown-menu header__nav-menu shows ">'
      for (let i = 0; i < this.categories.length; i++) {
        const item = this.categories[i]
        if (categoryCon.includes(item.id)) {
          if (JSON.parse(item.categoryCon).length > 0) {
            this.html += `
                  <li class="dropdown-submenu"><a href="/products/${slug(
                    item.name
                  )}?category=${item.id}" >${item.name}</a>
              `
            this.check(item.categoryCon)
            this.html += '</li>'
          } else {
            this.html += `
                  <li><a href="/products/${slug(item.name)}?category=${
              item.id
            }">${item.name}</a></li>
              `
          }
        }
      }
      this.html += '</ul>'
    },
    render () {
      this.html = ''
      for (let i = 0; i < this.categories.length; i++) {
        const item = this.categories[i]
        if (item.categoryCha === 'ROOT') {
          this.html += `
                <li class="header__nav-item">
                  <a
                    class="header__nav-link"
                    href="/products/${slug(item.name)}?category=${item.id}"
                  >${item.name}`
          if (JSON.parse(item.categoryCon).length > 0) {
            this.html += `<svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >`
          }
          this.html += `<path
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="48"
                        d="M112 184l144 144 144-144"
                      />
                    </svg>
                  </a>      
        `
          if (JSON.parse(item.categoryCon).length > 0) {
            this.check(item.categoryCon)
          }
        }
      }
      this.html += '</li>'
    },
    navigate (event) {
      const href = event.target.getAttribute('href')
      const target = event.target.getAttribute('target')
      // TODO: add if it is the same domain check
      if (href && href[0] === '/' && target !== '_blank') {
        event.preventDefault()
        this.$router && this.$router.push(href)
      }
    },

    addListeners () {
      this.links = this.$el.getElementsByTagName('a')
      for (let i = 0; i < this.links.length; i++) {
        this.links[i].addEventListener('click', this.navigate, false)
      }
    },

    removeListeners () {
      for (let i = 0; i < this.links.length; i++) {
        this.links[i].removeEventListener('click', this.navigate, false)
      }
      this.links = []
    }
  }
}
</script>

<style></style>
