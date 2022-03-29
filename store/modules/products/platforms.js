const URI = 'platforms'
const state = {
  state: {
    platforms: []
  }
}

const getters = {
  platforms ({ state }) {
    return state.platforms
  }
}

const actions = {
  async nuxtServerInit (vuexContext, context) {
    const payload = await this.$platformService.getData(URI)
    return await vuexContext.commit('setPlatforms', payload.data.platforms)
  }
}

const mutations = {
  setPlatforms ({ state }, data) {
    return (state.platforms = data)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
