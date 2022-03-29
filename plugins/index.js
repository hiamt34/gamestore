import apiReponsitory from '../services/apiReponsitory'

export default function (context, inject) {
  //   const api = apiReponsitory()
  //   inject('api', api)
  const allMethods = apiReponsitory(context)
  const methods = Object.keys(allMethods)
  methods.forEach((method) => {
    inject(method, allMethods[method])
  })
}
