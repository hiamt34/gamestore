<template>
  <div v-if="user && products && payment">
    <Banner name="Order Detai" />
    <div class="container">
      <div class="tab-pane fade show active" role="tabpanel">
        <div class="row">
          <div class="col-12">
            <h1 class="mt-5 text-while mb-2">
              Chi tiết đơn hàng: {{ orderDetail.id }}
            </h1>
            <hr class="mb-5">
          </div>
          <div class="col-6">
            <h2 class="text-while">
              From:
            </h2>
            <div class="row">
              <div class="col-3">
                <span class="text-while">Tên:</span>
              </div>
              <div class="col-9">
                <span class="text-while ">TTH-SHOP</span>
              </div>
              <div class="col-3">
                <span class="text-while">Email:</span>
              </div>
              <div class="col-9">
                <span class="text-while ">codetoanbug06@gmail.com</span>
              </div>
              <div class="col-3">
                <span class="text-while">Số điện thoại:</span>
              </div>
              <div class="col-9">
                <span class="text-while ">0987536020</span>
              </div>
              <div class="col-3">
                <span class="text-while">Địa chỉ:</span>
              </div>
              <div class="col-9">
                <span class="text-while ">Nguyễn Trãi, Hà Đông, Hà Nội</span>
              </div>
              <div class="col-3">
                <span class="text-while">Ngày nhận đơn:</span>
              </div>
              <div class="col-9">
                <span class="text-while ">{{ orderDetail.date }}</span>
              </div>
            </div>
          </div>
          <div class="col-6">
            <div class="row">
              <div class="col-6">
                <span class="text-while  float-right">ID khách hàng:</span>
              </div>
              <div class="col-6">
                <span class="text-while float-right ">{{ user.id }}</span>
              </div>
              <div class="col-6">
                <span class="text-while float-right">Tên khách hàng:</span>
              </div>
              <div class="col-6">
                <span class="text-while float-right ">{{ user.name }}</span>
              </div>
              <div class="col-6">
                <span class="text-while float-right">Email:</span>
              </div>
              <div class="col-6">
                <span class="text-while float-right ">{{ user.email }}</span>
              </div>
              <div class="col-6">
                <span class="text-while float-right">Số điện thoại:</span>
              </div>
              <div class="col-6">
                <span class="text-while float-right ">{{ user.phone }}</span>
              </div>
              <div class="col-6">
                <span class="text-while float-right">Địa chỉ:</span>
              </div>
              <div class="col-6">
                <span class="text-while float-right ">{{
                  JSON.parse(orderDetail.adress).ward +
                    ', ' +
                    JSON.parse(orderDetail.adress).district +
                    ', ' +
                    JSON.parse(orderDetail.adress).province
                }}</span>
              </div>
              <div class="col-6">
                <span class="text-while float-right">Ngày đặt hàng:</span>
              </div>
              <div class="col-6">
                <span class="text-while float-right ">{{
                  orderDetail.date
                }}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="row mt-5 mb-5">
          <div class="col-12">
            <div class="table-responsive table-responsive--border">
              <table class="profile__table ">
                <thead>
                  <tr>
                    <th style="text-align: center;">
                      _ID
                    </th>
                    <th />
                    <th style="text-align: center;">
                      Tên
                    </th>
                    <th style="text-align: center;">
                      Số lượng
                    </th>
                    <th style="text-align: center;">
                      Đơn giá
                    </th>
                    <th style="text-align: center;">
                      Sale
                    </th>
                    <th style="text-align: center;">
                      Tổng
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <template v-for="(value, key) in products">
                    <tr :key="key">
                      <td style="text-align: center;">
                        {{ value.id }}
                      </td>
                      <td style="text-align: center;">
                        <div class="cart__img">
                          <img
                            v-lazy-load
                            :src="BaseImgs + value.avatar"
                            :alt="value.name"
                          >
                        </div>
                      </td>
                      <td style="text-align: center;">
                        <nuxt-link
                          :to="{
                            name: 'products-slug-id',
                            params: { slug: slug(value.name), id: value.id }
                          }"
                        >
                          {{ value.name }}
                        </nuxt-link>
                      </td>
                      <td style="text-align: center;">
                        {{ value.quantity }}
                      </td>
                      <td style="text-align: center;">
                        {{ VND(value.price) }} VNĐ
                      </td>
                      <td style="text-align: center;">
                        {{ value.sale }}%
                      </td>
                      <td style="text-align: center;">
                        {{
                          VND(
                            (value.price *
                              value.quantity *
                              (100 - value.sale)) /
                              100
                          )
                        }}
                        VNĐ
                      </td>
                    </tr>
                  </template>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-6">
            <h2 class="text-while">
              Hình thức thanh toán: {{ orderDetail.type }} -
              {{
                orderDetail.type != 1
                  ? 'Thanh toán online'
                  : 'Thanh toán khi nhận hàng'
              }}
            </h2>
            <div class="row">
              <div class="col-4">
                <span class="text-while">Số tiền thanh toán:</span>
              </div>
              <div class="col-8">
                <span
                  class="text-while "
                >{{ VND(payment.vnp_Amount/100) }} VNĐ</span>
              </div>
              <div class="col-4">
                <span class="text-while">Mã ngân hàng:</span>
              </div>
              <div class="col-8">
                <span class="text-while ">{{ payment.vnp_BankCode }}</span>
              </div>
              <div class="col-4">
                <span class="text-while">Mã giao dịch:</span>
              </div>
              <div class="col-8">
                <span class="text-while ">{{ payment.vnp_TransactionNo }}</span>
              </div>
              <div class="col-4">
                <span class="text-while">Thời gian:</span>
              </div>
              <div class="col-8">
                <span class="text-while ">{{ payment.vnp_PayDate }}</span>
              </div>
            </div>
          </div>
          <div class="col-6">
            <div class="row">
              <div class="col-8">
                <h2 class="text-while float-right">
                  Tổng:
                </h2>
              </div>
              <div class="col-4">
                <h2 class="text-while float-right">
                  {{ VND(orderDetail.priceproducts) }} VNĐ
                </h2>
              </div>
            </div>
            <div class="row">
              <div class="col-8">
                <span class="text-while float-right">Tiền sản phẩm:</span>
              </div>
              <div class="col-4">
                <span
                  class="text-while float-right "
                >{{ VND(orderDetail.priceproducts) }} VNĐ</span>
              </div>
              <div class="col-8">
                <span class="text-while float-right">Tiền giao hàng:</span>
              </div>
              <div class="col-4">
                <span
                  class="text-while float-right "
                >{{ VND(orderDetail.priceshipping) }} VNĐ</span>
              </div>
              <div class="col-8">
                <span class="text-while float-right">Mã giảm giá:</span>
              </div>
              <div class="col-4">
                <span
                  class="text-while float-right "
                >{{ VND(orderDetail.pricegiftcode) }} VNĐ</span>
              </div>
              <div class="col-8">
                <span class="text-while float-right">Tiền đã thanh toán:</span>
              </div>
              <div class="col-4">
                <span
                  class="text-while float-right "
                >{{ VND(payment.vnp_Amount/100) }} VNĐ</span>
              </div>
              <div class="col-8">
                <span class="text-while float-right">Còn lại:</span>
              </div>
              <div class="col-4">
                <span
                  class="text-while float-right "
                >{{
                  VND(
                    orderDetail.priceproducts +
                      orderDetail.priceshipping -
                      orderDetail.pricegiftcode -
                      payment.vnp_Amount/100
                  )
                }}
                  VNĐ</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import slug from 'slug'
import Banner from '~/components/Banner.vue'
import Func from '~/middleware/func'
export default {
  components: {
    Banner
  },
  layout: 'client',
  middleware: 'checkUser',
  data () {
    return {
      orderDetail: null,
      payment: null,
      products: null,
      BaseImgs: process.env.BaseImgs,
      user: null
    }
  },
  async fetch () {
    const uri = await ('/get-order/' + this.$route.params.id)
    await this.$user.getData(uri, {}).then(async (payload) => {
      this.orderDetail = await payload.data.order
      this.user = await JSON.parse(this.orderDetail.user)
      this.products = await JSON.parse(this.orderDetail.productsdetail)
      this.payment = await payload.data.payment
    })
  },
  methods: {
    VND: Func.VND,
    slug
  }
}
</script>
