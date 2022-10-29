const cityRouter = require('./modules/city')
const favorRouter = require('./modules/favor')
const homeRouter = require('./modules/home')
const orderRouter = require('./modules/order')
const searchRouter = require('./modules/search')
const detailRouter = require('./modules/detail')
const routers = [
  {
    path: '/city',
    router: cityRouter,
  },
  {
    path: '/favor',
    router: favorRouter,
  },
  {
    path: '/home',
    router: homeRouter,
  },
  {
    path: '/order',
    router: orderRouter,
  },
  {
    path: '/search',
    router: searchRouter,
  },
  {
    path: '/detail',
    router: detailRouter,
  },
]

module.exports = routers
