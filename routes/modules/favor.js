const express = require('express')
const router = express.Router()

const favorList = require('../../data/favor/favorList')
const favorHistory = require('../../data/favor/favorHistory')

router.get('/list', function (req, res, next) {
  res.send(favorList)
})
router.get('/history', function (req, res, next) {
  res.send(favorHistory)
})
module.exports = router
