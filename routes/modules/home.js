const express = require('express')
const router = express.Router()

const houseList = require('../../data/home/houselist.js')
const hotSuggestsData = require('../../data/home/hotSuggests')
const categories = require('../../data/home/categories')
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
router.get('/categories', function (req, res, next) {
  res.send(categories)
})
module.exports = router
