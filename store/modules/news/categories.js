const URI = 'categories'
const state = {
  state: {
    categoryNews: []
  }
}

const getters = {
  categoryNews ({ state }) {
    return state.categoryNews
  }
}

const actions = {
  async nuxtServerInit (vuexContext, context) {
    const payload = await this.$categoryNewsService.getData(URI)
    return await vuexContext.commit(
      'setCategoryNews',
      payload.data.categoryNews
    )
  }
}

const mutations = {
  setCategoryNews ({ state }, data) {
    return (state.categoryNews = data)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
