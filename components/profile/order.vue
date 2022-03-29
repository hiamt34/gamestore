<template>
  <div class="tab-pane fade show active" role="tabpanel">
    <div class="row">
      <div class="col-12">
        <div class="table-responsive table-responsive--border">
          <table class="profile__table">
            <thead>
              <tr>
                <th>№</th>
                <th>
                  _ID
                </th>
                <th>
                  Ngày
                </th>
                <th>
                  Tổng tiền
                </th>
                <th>
                  SĐT nhận hàng
                </th>
                <th>
                  Địa chỉ nhận hàng
                </th>
                <th>
                  Trạng thái
                </th>
                <th />
              </tr>
            </thead>

            <tbody>
              <template v-for="(order, key) in orders">
                <tr v-if="order.type == 1 || order.checkpay == 1" :key="key">
                  <td>
                    <a href="#modal-info" class="open-modal">{{ key + 1 }}</a>
                  </td>
                  <td>
                    {{ order.id }}
                  </td>
                  <td>{{ order.date }}</td>
                  <td>
                    {{
                      VND(
                        order.priceproducts +
                          order.priceshipping +
                          order.pricegiftcode
                      )
                    }}
                    VNĐ
                  </td>
                  <td>{{ JSON.parse(order.user).phone }}</td>
                  <td>
                    {{
                      JSON.parse(order.adress).ward +
                        ' - ' +
                        JSON.parse(order.adress).district +
                        ' - ' +
                        JSON.parse(order.adress).province
                    }}
                  </td>
                  <td>
                    {{ !order.status ? 'Đã tiếp nhận' : order.status }}
                  </td>
                  <td>
                    <nuxt-link
                      :to="{ name: 'profile-id', params: { id: order.id } }"
                    >
                      <span class="profile__status">Xem</span>
                    </nuxt-link>
                  </td>
                </tr>
              </template>
            </tbody>
          </table>
        </div>
      </div>

      <!-- paginator -->

      <!-- end paginator -->
    </div>
  </div>
</template>
<script>
import Func from '~/middleware/func'
export default {
  data () {
    return {
      orders: []
    }
  },
  async fetch () {
    const params = await {
      ids: JSON.parse(this.$auth.user.order)
    }
    if (JSON.parse(this.$auth.user.order).length === 0) {
      return false
    } else {
      const uri = await 'orders'
      const payload = await this.$orderService.getData(uri, params)
      this.orders = await payload.data.orders.reverse()
    }
  },
  methods: {
    VND: Func.VND
  }
}
</script>
