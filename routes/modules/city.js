const express = require('express')
const router = express.Router()

const cityAll = require('../../data/city/cityall')
router.get('/all', function (req, res, next) {
  res.send(cityAll)
})

module.exports = router
