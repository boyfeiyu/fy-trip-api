const express = require('express')
const router = express.Router()

const result = require('../../data/search/result')
const top = require('../../data/search/top')
router.get('/result', function (req, res, next) {
  res.send(result)
})
router.get('/top', function (req, res, next) {
  res.send(top)
})
module.exports = router
