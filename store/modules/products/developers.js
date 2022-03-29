const URI = 'developers'

const state = {
  state: {
    developers: []
  }
}

const getters = {
  developers ({ state }) {
    return state.developers
  }
}

const actions = {
  async nuxtServerInit (vuexContext, context) {
    const payload = await this.$developerService.getData(URI)
    return await vuexContext.commit('setDevelopers', payload.data.developers)
  }
}

const mutations = {
  setDevelopers ({ state }, data) {
    return (state.developers = data)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
