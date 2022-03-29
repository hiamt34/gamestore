const URI = 'categories'
const state = {
  state: {
    categories: []
  }
}

const getters = {
  categories ({ state }) {
    return state.categories
  }
}

const actions = {
  async nuxtServerInit (vuexContext, context) {
    const payload = await this.$categoryService.getData(URI)
    return await vuexContext.commit('setCategories', payload.data.categories)
  }
}

const mutations = {
  setCategories ({ state }, data) {
    return (state.categories = data)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
