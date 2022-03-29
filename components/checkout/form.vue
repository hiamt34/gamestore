<template>
  <div>
    <!-- end checkout -->

    <!-- checkout -->
    <form action="#" class="form" style="margin-top:0" @submit.prevent="submit">
      <label style="color:#a782e9">Tên</label>
      <input
        v-model="user.name"
        type="text"
        name="name"
        class="form__input"
        placeholder="Nhập tên"
      >
      <label style="color:#a782e9">Email</label>
      <input
        v-model="user.email"
        type="text"
        name="email"
        class="form__input"
        placeholder="Nhập email"
      >
      <label style="color:#a782e9">Số điện thoại</label>
      <input
        v-model="user.phone"
        type="text"
        name="phone"
        class="form__input"
        placeholder="Nhập số điện thoại"
      >
      <label style="color:#a782e9">Chọn Tỉnh/Thành phố</label>
      <select v-model="order.province" name="systems" class="form__select">
        <option value="">
          Chọn
        </option>
        <option
          v-for="(Province, key) in provinces"
          :key="key"
          :value="Province.ProvinceID"
        >
          {{ Province.ProvinceName }}
        </option>
      </select>
      <label style="color:#a782e9">Chọn Quận/Huyện</label>
      <select v-model="order.district" name="systems" class="form__select">
        <option value="">
          Chọn
        </option>
        <option
          v-for="(District, key) in districts"
          :key="key"
          :value="District.DistrictID"
        >
          {{ District.DistrictName }}
        </option>
      </select>
      <label style="color:#a782e9">Chọn Phường xã</label>
      <select v-model="order.ward" name="systems" class="form__select">
        <option value="">
          Chọn
        </option>
        <option v-for="(Ward, key) in wards" :key="key" :value="Ward.WardCode">
          {{ Ward.WardName }}
        </option>
      </select>
      <label
        v-if="services.length > 0"
        style="color:#a782e9"
      >Chọn phương thức vận chuyển</label>
      <div class="sign__group sign__group--checkbox">
        <div
          v-for="(Service, key) in services"
          :key="key"
          style="display: inline-block;"
        >
          <input
            :id="Service.service_id"
            v-model="order.service"
            :value="Service.service_id"
            type="radio"
            :checked="false"
          >
          <label class="mr-2" :for="Service.service_id">{{
            Service.short_name
          }}</label>
        </div>
      </div>
      <label
        v-if="order.price > 0"
        style="color:#a782e9; display:block"
      >Phí ship: {{ VND(order.price) }} VNĐ (Tạm tính)</label>
      <label style="color:#a782e9">Cách thức thanh toán</label>
      <select v-model="type" name="systems" class="form__select">
        <option value="0">
          Chọn
        </option>
        <option value="1">
          Thanh toán khi nhận hàng
        </option>
        <option value="2">
          Online VNPay
        </option>
        <option value="3">
          Thanh toán Online VNPay trước 20%
        </option>
      </select>
      <span
        v-if="type == 3"
        class="form__text"
      >Đặt Hàng bạn phải thanh toán trước 20% sản phẩm.</span>
      <button type="submit" class="form__btn">
        Đặt hàng
      </button>
    </form>
    <form action="#" class="form form--first form--coupon">
      <input type="text" class="form__input" placeholder="Nhập mã giảm giá">
      <button type="button" class="form__btn">
        Apply
      </button>
    </form>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import Func from '~/middleware/func'
export default {
  data () {
    return {
      GHN: process.env.GHN,
      provinces: [],
      districts: [],
      wards: [],
      services: [],
      order: {
        province: '',
        district: '',
        ward: '',
        service: '',
        price: 0,
        priceGiftCode: 0
      },
      user: {
        id: this.$auth.user ? this.$auth.user.id : 0,
        name: this.$auth.user ? this.$auth.user.name : '',
        phone: this.$auth.user ? this.$auth.user.phone : '',
        email: this.$auth.user ? this.$auth.user.email : ''
      },
      type: 0
    }
  },
  async fetch () {
    const payload = await this.$priceOrderService.getAdress(this.GHN.province)
    this.provinces = await payload.data.data
  },
  computed: {
    ...mapGetters(['cart', 'total'])
  },
  watch: {
    'order.province' () {
      this.reset()
      return this.order.province ? this.getDistricts() : null
    },
    'order.district' () {
      this.reset()
      return this.order.district ? this.getWards() : null
    },
    'order.ward' () {
      this.reset()
      return this.order.ward ? this.getServices() : null
    },
    'order.service' () {
      return this.order.service ? this.getPrice() : null
    },
    'order.price' () {
      this.setTotal(this.total + this.order.price)
    },
    type () {
      if (Number(this.type) === 1 && this.cart.find(item => !item.status)) {
        this.$alert.toast('warning', 'Thanh toán 20% khi đặt hàng trước')
        this.type = 3
      }
    }
  },
  methods: {
    validate () {
      return (
        Object.values(this.user).includes('') ||
        Object.values(this.order).includes('') ||
        this.cart === [] ||
        Number(this.type) === 0
      )
    },
    async submit () {
      if (this.validate()) {
        return this.$alert.toast('warning', 'Bạn chưa điền đủ thông tin')
      }
      try {
        const today = await new Date()
        const order = await {
          user: JSON.stringify(this.user),
          products: JSON.stringify(Array.from(this.cart, item => item.id)),
          productsdetail: JSON.stringify(this.cart),
          adress: JSON.stringify({
            province: this.provinces.find(
              item => item.ProvinceID === this.order.province
            ).ProvinceName,
            district: this.districts.find(
              item => item.DistrictID === this.order.district
            ).DistrictName,
            ward: this.wards.find(item => item.WardCode === this.order.ward)
              .WardName
          }),
          priceshipping: this.order.price,
          priceproducts:
            this.total - this.order.price - this.order.priceGiftCode,
          pricegiftcode: this.order.priceGiftCode,
          date:
            today.getDate() +
            '/' +
            (today.getMonth() + 1) +
            '/' +
            today.getFullYear(),
          type: this.type
        }
        if (Number(this.type) !== 1) {
          // redirect vnpay
          sessionStorage.order = await JSON.stringify({
            ...order,
            pay: Number(this.type) === 2 ? this.total : this.total * 0.2
          })
          return await this.$router.push('/vnpay')
        } else {
          const uri1 = await 'orders'
          await this.$orderService
            .createData(uri1, order)
            .then(async (payload) => {
              if (!payload.data.status) {
                // bắt lỗi hệ thống
                throw new Error('bad req')
              }
              if (this.$auth.user) {
                // update user
                const uri2 = await '/update'
                let dataOrder = await JSON.parse(this.$auth.user.order)
                dataOrder = (await Array.isArray(dataOrder))
                  ? [...dataOrder, payload.data.order]
                  : [payload.data.order]
                await this.$user.reqService(uri2, {
                  order: JSON.stringify(dataOrder)
                })
                await this.$auth.fetchUser()
              }
            })
          await this.$local.setCart([])
          await this.setCart([])
          await this.$router.push('/')
          await this.$alert.toast('success', 'Đặt hàng thành công')
        }
      } catch (error) {
        this.$alert.toast('error', 'Lỗi hệ thống')
      }
    },
    reset () {
      this.setTotal(this.total - this.order.price)
      this.order.price = 0
      this.services = []
      this.order.service = ''
    },
    VND: Func.VND,
    async getDistricts () {
      return await this.$priceOrderService
        .getAdress(this.GHN.district, { province_id: this.order.province })
        .then(res => (this.districts = res.data.data))
    },
    async getWards () {
      return await this.$priceOrderService
        .getAdress(this.GHN.ward, {
          district_id: this.order.district
        })
        .then(res => (this.wards = res.data.data))
    },
    async getServices () {
      return await this.$priceOrderService
        .getAdress(this.GHN.services, {
          shop_id: this.GHN.idShop,
          from_district: this.GHN.from_district,
          to_district: this.order.district
        })
        .then(res => (this.services = res.data.data))
    },
    async getPrice () {
      return await this.$priceOrderService
        .getAdress(this.GHN.price, {
          service_id: this.order.service,
          insurance_value: this.total,
          coupon: null,
          from_district_id: this.GHN.from_district,
          to_district_id: this.order.district,
          to_ward_code: this.order.ward,
          height: 15, // tự tạo cân nặng chiều cao
          length: 15,
          weight: 1000,
          width: 15
        })
        .then(res => (this.order.price = res.data.data.total))
    },
    ...mapActions(['setTotal', 'setCart'])
  }
}
</script>
<style></style>
