const express = require('express')
const axios = require('axios')

const router = express.Router()
router.get('/infos', function (req, res, next) {
  const { houseId } = req.query
  axios(`http://123.207.32.32:1888/api/detail/infos?houseId=${houseId}`).then(_res => {
    res.send(_res.data)
  })
})

module.exports = router
