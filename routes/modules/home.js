const express = require('express')
const router = express.Router()

const houseList = require('../../data/home/houselist.js')
const hotSuggestsData = require('../../data/home/hotSuggests')
/* GET users listing. */
router.get('/', function (req, res) {
  res.send('home')
})
router.get('/houselist', function (req, res, next) {
  const page = parseInt(req.query.page)
  res.send(houseList[page - 1])
})
router.get('/hotSuggests', function (req, res, next) {
  res.send(hotSuggestsData)
})

module.exports = router
