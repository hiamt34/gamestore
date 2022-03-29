const URI = 'news'

const state = {
  state: {
    news: [],
    newsHot: [],
    metaNews: {}
  }
}

const getters = {
  news ({ state }) {
    return state.news
  },
  newsHot ({ state }) {
    return state.newsHot
  },
  metaNews ({ state }) {
    return state.metaNews
  }
}

const actions = {
  async getNews (vuexContext, config) {
    const payload = await this.$newsService.getData(config.query, URI)
    await vuexContext.commit(config.nameMutations, payload.data.news)
    const metaNews = {
      ...payload.data.meta,
      length: payload.data.news.length
    }
    await vuexContext.commit('setmetaNews', metaNews)
  }
}

const mutations = {
  setNews ({ state }, data) {
    return (state.news = data)
  },
  setNewsHot ({ state }, data) {
    return (state.newsHot = data)
  },
  setmetaNews ({ state }, data) {
    return (state.metaNews = data)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
