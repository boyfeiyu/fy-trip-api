const express = require('express')
const router = express.Router()

const orderAll = require('../../data/order/orderAll')
const orderPend = require('../../data/order/orderPend')
const orderRecent = require('../../data/order/orderRecent')
const orderMap = {
  pend: orderPend,
  recent: orderRecent,
  all: orderAll,
}
router.get('/list', function (req, res, next) {
  const type = req.query.type
  res.send(orderMap[type])
})
module.exports = router
