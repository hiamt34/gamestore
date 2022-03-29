<template>
  <div>
    <section class="section section--first section--last">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="img-vnpay" />
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <h2 class="section__title" style="margin-top:100px">
              Tạo mới đơn hàng
            </h2>
          </div>
          <div class="col-12">
            <form
              v-if="order.user"
              :action="BaseAPI + '/vnpay'"
              class="form form--contacts"
              method="POST"
            >
              <div class="row">
                <div class="col-6">
                  <label
                    style="color: rgb(167, 130, 233);"
                  >Loại hang hóa</label>
                  <select name="order_type" class="form__select" required>
                    <option value="billpayment">
                      Thanh toán hóa đơn
                    </option>

                    <option value="other">
                      Khác - Xem thêm tại VNPAY
                    </option>
                  </select>
                  <label style="color: rgb(167, 130, 233);">Số tiền</label>
                  <input
                    name="amount"
                    type="text"
                    class="form__input"
                    :value="order.pay"
                    required
                  >
                  <label style="color: rgb(167, 130, 233);">Ngân hàng</label>
                  <select name="bank_code" class="form__select" required>
                    <option value="">
                      Không chọn
                    </option>
                    <option value="NCB">
                      Ngan hang NCB
                    </option>
                    <option value="AGRIBANK">
                      Ngan hang Agribank
                    </option>
                    <option value="SCB">
                      Ngan hang SCB
                    </option>
                    <option value="SACOMBANK">
                      Ngan hang SacomBank
                    </option>
                    <option value="EXIMBANK">
                      Ngan hang EximBank
                    </option>
                    <option value="MSBANK">
                      Ngan hang MSBANK
                    </option>
                    <option value="NAMABANK">
                      Ngan hang NamABank
                    </option>
                    <option value="VNMART">
                      Vi dien tu VnMart
                    </option>
                    <option value="VIETINBANK">
                      Ngan hang Vietinbank
                    </option>
                    <option value="VIETCOMBANK">
                      Ngan hang VCB
                    </option>
                    <option value="HDBANK">
                      Ngan hang HDBank
                    </option>
                    <option value="DONGABANK">
                      Ngan hang Dong A
                    </option>
                    <option value="TPBANK">
                      Ngân hàng TPBank
                    </option>
                    <option value="OJB">
                      Ngân hàng OceanBank
                    </option>
                    <option value="BIDV">
                      Ngân hàng BIDV
                    </option>
                    <option value="TECHCOMBANK">
                      Ngân hàng Techcombank
                    </option>
                    <option value="VPBANK">
                      Ngan hang VPBank
                    </option>
                    <option value="MBBANK">
                      Ngan hang MBBank
                    </option>
                    <option value="ACB">
                      Ngan hang ACB
                    </option>
                    <option value="OCB">
                      Ngan hang OCB
                    </option>
                    <option value="IVB">
                      Ngan hang IVB
                    </option>
                    <option value="VISA">
                      Thanh toan qua VISA/MASTER
                    </option>
                  </select>
                </div>

                <div class="col-6">
                  <label style="color: rgb(167, 130, 233);">Tên</label>
                  <input
                    type="text"
                    name="name"
                    class="form__input"
                    :value="JSON.parse(order.user).name"
                    readonly
                    required
                  >
                  <label
                    style="color: rgb(167, 130, 233);"
                  >Số điện thoại</label>
                  <input
                    type="text"
                    name="phone"
                    class="form__input"
                    :value="JSON.parse(order.user).phone"
                    readonly
                    required
                  >
                  <label style="color: rgb(167, 130, 233);">Địa chỉ</label>
                  <input
                    type="text"
                    name="adress"
                    class="form__input"
                    :value="
                      JSON.parse(order.adress).ward +
                        ', ' +
                        JSON.parse(order.adress).district +
                        ', ' +
                        JSON.parse(order.adress).province
                    "
                    readonly
                    required
                  >
                  <input
                    name="order"
                    :value="JSON.stringify(order)"
                    readonly
                    style="display:none"
                    required
                  >
                  >
                  <label
                    style="color: rgb(167, 130, 233);"
                  >Nội dung thanh toán</label>
                  <textarea
                    name="order_desc"
                    class="form__textarea"
                    :value="'thanh toán tiền mua hàng'"
                    required
                  />
                </div>
              </div>

              <button type="submit" class="form__btn">
                Thanh toán
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import Func from '~/middleware/func'
export default {
  layout: 'client',
  data () {
    return {
      order: {},
      BaseAPI: process.env.BaseAPI
    }
  },
  mounted () {
    if (process.browser && !this.$local.getOrder().user) {
      return this.$router.push('/')
    }
    this.order = this.$local.getOrder({})
  },
  methods: {
    VND: Func.VND
  }
}
</script>
<style></style>
