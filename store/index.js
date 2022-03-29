import Vuex from 'vuex'
import categories from './modules/products/categories'
import genres from './modules/products/genres'
import platforms from './modules/products/platforms'
import developers from './modules/products/developers'
import products from './modules/products/products'
import categoryNews from './modules/news/categories'
import news from './modules/news/news'
import inventories from './modules/base/inventories'
import local from './modules/localStorage/local'
const storeData = {
  modules: {
    categories,
    genres,
    platforms,
    developers,
    products,
    categoryNews,
    news,
    inventories,
    local
  }
}

const createStore = () => {
  return new Vuex.Store(storeData)
}

export default createStore
