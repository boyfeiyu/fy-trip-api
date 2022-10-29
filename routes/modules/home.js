const express = require('express')
const router = express.Router()

const houseList = require('../../data/home/houselist.js')
/* GET users listing. */
router.get('/', function (req, res) {
  res.send('home')
})
router.get('/houselist', function (req, res, next) {
  const page = parseInt(req.query.page)
  res.send(houseList[page - 1])
})

module.exports = router
