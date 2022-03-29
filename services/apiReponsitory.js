import productService from '@/services/products/productService'
import newsService from '@/services/news/newsService'
import categoryNewsService from '@/services/news/categoryNewsService'
import categoryService from '@/services/products/categoryService'
import developerService from '@/services/products/developerService'
import genreService from '@/services/products/genreService'
import platformService from '@/services/products/platformService'
import inventoryService from '@/services/base/inventoryService'
import local from './localStorage/local'
import alert from './alert/alert'
import user from './user/update'
import commentService from './comment/commentService'
import priceOrderService from './priceOrder/priceOrderService'
import orderService from './orders/orderService'
export default context => ({
  productService: productService(context),
  newsService: newsService(),
  categoryNewsService: categoryNewsService(),
  categoryService: categoryService(),
  developerService: developerService(),
  genreService: genreService(),
  platformService: platformService(),
  inventoryService: inventoryService(),
  local: local(),
  alert: alert(context),
  user: user(context),
  commentService: commentService(),
  priceOrderService: priceOrderService(),
  orderService: orderService()
})
