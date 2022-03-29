const URI = 'genres'

const state = {
  state: {
    genres: []
  }
}

const getters = {
  genres ({ state }) {
    return state.genres
  }
}

const actions = {
  async nuxtServerInit (vuexContext, context) {
    const payload = await this.$genreService.getData(URI)
    return await vuexContext.commit('setGenres', payload.data.genres)
  }
}

const mutations = {
  setGenres ({ state }, data) {
    return (state.genres = data)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
