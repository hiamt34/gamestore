const state = {
  state: {
    cart: [],
    total: 0
  }
}

const getters = {
  cart ({ state }) {
    return state.cart
  },
  total ({ state }) {
    return state.total
  }
}

const actions = {
  async setCart (vuexContext, cart) {
    let price = await 0
    await cart.forEach((value) => {
      return (price += value.price * (1 - value.sale / 100) * value.quantity)
    })
    await vuexContext.commit('setTotal', price)
    return await vuexContext.commit('setCart', cart)
  },
  setTotal (vuexContext, price) {
    vuexContext.commit('setTotal', price)
  }
}

const mutations = {
  setCart ({ state }, data) {
    return (state.cart = data)
  },
  setTotal ({ state }, data) {
    return (state.total = data)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
