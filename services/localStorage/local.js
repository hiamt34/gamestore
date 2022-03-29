export default () => ({
  getCart: () => {
    if (Array.isArray(JSON.parse(localStorage.getItem('cart'))) === false) {
      localStorage.setItem('cart', JSON.stringify([]))
    }
    return JSON.parse(localStorage.getItem('cart'))
  },
  setCart: (cart) => {
    return localStorage.setItem('cart', JSON.stringify(cart))
  },
  getOrder: () => {
    if (!sessionStorage.order) {
      sessionStorage.order = '{}'
    }
    return JSON.parse(sessionStorage.order)
  },
  setOrder: (order) => {
    return (sessionStorage.order = JSON.stringify(order))
  }
})
