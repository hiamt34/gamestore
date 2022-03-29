<template>
  <div>
    <Banner :name="'Contact'" />
    <section class="section">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-7 col-xl-8">
            <div class="row">
              <!-- section title -->
              <div class="col-12">
                <h2 class="section__title">
                  Contact
                </h2>
              </div>
              <!-- end section title -->

              <div class="col-12">
                <form action="#" class="form form--contacts">
                  <input type="text" class="form__input" placeholder="Name">
                  <input type="text" class="form__input" placeholder="Email">
                  <input
                    type="text"
                    class="form__input"
                    placeholder="phone"
                  >
                  <textarea
                    name="text"
                    class="form__textarea"
                    placeholder="Type your message..."
                  />
                  <button type="button" class="form__btn">
                    Send
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div class="col-12 col-md-5 col-xl-4">
            <div class="row">
              <!-- section title -->
              <div class="col-12">
                <h2 class="section__title">
                  Info
                </h2>
              </div>
              <!-- end section title -->

              <div class="col-12">
                <p class="section__text section__text--mt">
                  Liên hệ với chúng tối khi bạn cần làm website.
                </p>

                <ul class="contacts__list">
                  <li><a href="tel:0904577164">+84 904 577 164</a></li>
                  <li>
                    <a
                      href="codetoanbug06@gmail.com"
                    >codetoanbug06@gmail.com</a>
                  </li>
                  <li>
                    <a
                      href="https://goo.gl/maps/Uc3h5nHNeCK4sWAk9"
                      class="open-map"
                    >PTIT, Km 10 Nuyễn Trãi, Hà Đông, Hà nội</a>
                  </li>
                </ul>
                <div class="contacts__social">
                  <a
                    class="fb"
                    href="#"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="512"
                    height="512"
                    viewBox="0 0 512 512"
                  >
                    <path
                      d="M455.27,32H56.73A24.74,24.74,0,0,0,32,56.73V455.27A24.74,24.74,0,0,0,56.73,480H256V304H202.45V240H256V189c0-57.86,40.13-89.36,91.82-89.36,24.73,0,51.33,1.86,57.51,2.68v60.43H364.15c-28.12,0-33.48,13.3-33.48,32.9V240h67l-8.75,64H330.67V480h124.6A24.74,24.74,0,0,0,480,455.27V56.73A24.74,24.74,0,0,0,455.27,32Z"
                    /></svg></a>
                  <a
                    class="inst"
                    href="#"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="512"
                    height="512"
                    viewBox="0 0 512 512"
                  >
                    <path
                      d="M349.33,69.33a93.62,93.62,0,0,1,93.34,93.34V349.33a93.62,93.62,0,0,1-93.34,93.34H162.67a93.62,93.62,0,0,1-93.34-93.34V162.67a93.62,93.62,0,0,1,93.34-93.34H349.33m0-37.33H162.67C90.8,32,32,90.8,32,162.67V349.33C32,421.2,90.8,480,162.67,480H349.33C421.2,480,480,421.2,480,349.33V162.67C480,90.8,421.2,32,349.33,32Z"
                    />
                    <path
                      d="M377.33,162.67a28,28,0,1,1,28-28A27.94,27.94,0,0,1,377.33,162.67Z"
                    />
                    <path
                      d="M256,181.33A74.67,74.67,0,1,1,181.33,256,74.75,74.75,0,0,1,256,181.33M256,144A112,112,0,1,0,368,256,112,112,0,0,0,256,144Z"
                    /></svg></a>
                  <a
                    class="gh"
                    href="#"
                  ><svg
                    id="Capa_1"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 512 512"
                    style="enable-background:new 0 0 512 512;"
                    xml:space="preserve"
                  >
                    <g>
                      <g>
                        <path
                          d="M255.968,5.329C114.624,5.329,0,120.401,0,262.353c0,113.536,73.344,209.856,175.104,243.872 c12.8,2.368,17.472-5.568,17.472-12.384c0-6.112-0.224-22.272-0.352-43.712c-71.2,15.52-86.24-34.464-86.24-34.464 c-11.616-29.696-28.416-37.6-28.416-37.6c-23.264-15.936,1.728-15.616,1.728-15.616c25.696,1.824,39.2,26.496,39.2,26.496 c22.848,39.264,59.936,27.936,74.528,21.344c2.304-16.608,8.928-27.936,16.256-34.368 c-56.832-6.496-116.608-28.544-116.608-127.008c0-28.064,9.984-51.008,26.368-68.992c-2.656-6.496-11.424-32.64,2.496-68 c0,0,21.504-6.912,70.4,26.336c20.416-5.696,42.304-8.544,64.096-8.64c21.728,0.128,43.648,2.944,64.096,8.672 c48.864-33.248,70.336-26.336,70.336-26.336c13.952,35.392,5.184,61.504,2.56,68c16.416,17.984,26.304,40.928,26.304,68.992 c0,98.72-59.84,120.448-116.864,126.816c9.184,7.936,17.376,23.616,17.376,47.584c0,34.368-0.32,62.08-0.32,70.496 c0,6.88,4.608,14.88,17.6,12.352C438.72,472.145,512,375.857,512,262.353C512,120.401,397.376,5.329,255.968,5.329z"
                        />
                      </g>
                    </g></svg></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import Banner from '~/components/Banner.vue'

// import Func from '~/middleware/func'
export default {
  components: {
    Banner
  },
  layout: 'client',
  mounted () {
    // Func.LoadJS()
  }
}
</script>
<style></style>
