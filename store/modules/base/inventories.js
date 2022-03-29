const URI = 'inventory'
const state = {
  state: {
    inventories: []
  }
}

const getters = {
  inventories ({ state }) {
    return state.inventories
  }
}

const actions = {
  async nuxtServerInit (vuexContext, context) {
    const payload = await this.$inventoryService.getData(URI)
    return await vuexContext.commit('setInventories', payload.data.inventories)
  }
}

const mutations = {
  setInventories ({ state }, data) {
    return (state.inventories = data)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
