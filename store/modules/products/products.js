const URI = 'products'
const state = {
  state: {
    productsBestGame: [],
    productsPreOrder: [],
    productsNew: [],
    productsSale: [],
    productsHot: [],
    products: [],
    productsView: [],
    meta: {},
    sortBys: [
      {
        value: 0,
        name: 'Ngày ra mắt'
      },
      {
        value: 1,
        name: 'Giá từ thấp'
      },
      {
        value: 2,
        name: 'Giá từ cao'
      },
      {
        value: 3,
        name: 'Được quan tâm nhất'
      },
      {
        value: 4,
        name: 'Sale'
      },
      {
        value: 5,
        name: 'Game của tháng'
      },
      {
        value: 6,
        name: 'Đang được bán'
      }
    ]
  }
}

const getters = {
  productsBestGame ({ state }) {
    return state.productsBestGame
  },
  productsPreOrder ({ state }) {
    return state.productsPreOrder
  },
  productsNew ({ state }) {
    return state.productsNew
  },
  productsSale ({ state }) {
    return state.productsSale
  },
  productsHot ({ state }) {
    return state.productsHot
  },
  products ({ state }) {
    return state.products
  },
  productsView ({ state }) {
    return state.productsView
  },
  meta ({ state }) {
    return state.meta
  },
  sortBys ({ state }) {
    return state.sortBys
  }
}

const actions = {
  async getProducts (vuexContext, config) {
    if (config.query.justview === 1) {
      config.query.justview = await []
      await vuexContext.getters.productsView.forEach((item) => {
        config.query.justview.push(item.id)
      })
    }
    const payload = await this.$productService.getData(config.query, URI)
    await vuexContext.commit(config.nameMutations, payload.data.products)
    const meta = {
      ...payload.data.meta,
      length: payload.data.products.length
    }
    await vuexContext.commit('setMeta', meta)
  },
  async pushProductsView (vuexContext, data) {
    await vuexContext.commit('setProductsView', data)
  }
}

const mutations = {
  setProductsBestGame ({ state }, data) {
    return (state.productsBestGame = data)
  },
  setProductsPreOrder ({ state }, data) {
    return (state.productsPreOrder = data)
  },
  setProductsNew ({ state }, data) {
    return (state.productsNew = data)
  },
  setProductsSale ({ state }, data) {
    return (state.productsSale = data)
  },
  setProductsHot ({ state }, data) {
    return (state.productsHot = data)
  },
  setProducts ({ state }, data) {
    return (state.products = data)
  },
  setProductsView ({ state }, data) {
    return (state.productsView = data)
  },
  setMeta ({ state }, data) {
    return (state.meta = data)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
