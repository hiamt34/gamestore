<template>
  <div class="cart">
    <div class="table-responsive">
      <table class="cart__table">
        <thead>
          <tr>
            <th>
              <a>Sản phẩm</a>
            </th>
            <th>
              <a class="active">Tên</a>
            </th>
            <th>
              <a>Số lượng </a>
            </th>
            <th>
              <a>Tổng giá</a>
            </th>
            <th>
              <a>Trạng thái</a>
            </th>
            <th />
          </tr>
        </thead>

        <tbody>
          <tr v-for="(value, key) in cart" :key="key">
            <td>
              <div class="cart__img">
                <img :src="BaseImgs + value.avatar" :alt="value.name">
              </div>
            </td>
            <td>
              <nuxt-link :to="{name:'products-slug-id',params:{slug:slug(value.name),id:value.id} }">{{ value.name }}</nuxt-link>
            </td>
            <td>{{ value.quantity }}</td>
            <td>
              <span
                class="cart__price"
              >{{ VND((value.price * (1 - value.sale / 100))*value.quantity) }} VNĐ</span>
            </td>
            <td v-if="value.status" style="color: #29b474;">
              Mua hàng
            </td>
            <td v-else style="color: #f26c2a;">
              Đặt hàng
            </td>
            <td>
              <button
                class="cart__delete"
                type="button"
                @click="Delete(value.id)"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="512"
                  height="512"
                  viewBox="0 0 512 512"
                >
                  <line
                    x1="368"
                    y1="368"
                    x2="144"
                    y2="144"
                    style="fill:none;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
                  />
                  <line
                    x1="368"
                    y1="144"
                    x2="144"
                    y2="368"
                    style="fill:none;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
                  />
                </svg>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="cart__info">
      <div class="cart__total">
        <p>Tổng đơn hàng: (Tạm tính)</p>
        <span>{{ VND(total) }} VNĐ</span>
      </div>

      <div class="cart__systems">
        <i class="pf pf-visa" />
        <i class="pf pf-mastercard" />
        <i class="pf pf-paypal" />
      </div>
    </div>
  </div>
</template>
<script>
import slug from 'slug'
import { mapActions, mapGetters } from 'vuex'
import Func from '~/middleware/func'
export default {
  data () {
    return {
      BaseImgs: process.env.BaseImgs,
      product: {}
    }
  },
  computed: {
    ...mapGetters(['cart', 'total'])
  },
  methods: {
    ...mapActions(['setCart']),
    VND: Func.VND,
    slug,
    Delete (id) {
      this.$swal({
        title: 'Bạn muốn xóa chứ ?',
        icon: 'question',
        showCancelButton: true,
        cancelButtonText: 'Hủy',
        cancelButtonColor: '#be4f52',
        confirmButtonText: 'Đúng'
      }).then(async (result) => {
        if (result.isConfirmed) {
          const dataDelete = await this.cart.filter(item => item.id !== id)
          await this.$local.setCart(dataDelete)
          await this.setCart(dataDelete)
          await this.$swal({
            title: 'Thành công',
            icon: 'success'
          })
        }
      })
    }
  }
}
</script>
<style></style>
