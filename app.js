const path = require('path')
const express = require('express')
const app = express()
const port = 3033
// 设置允许跨域访问该服务
app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'PUT,GET,POST,DELETE,OPTIONS')
  res.header('Access-Control-Allow-Headers', 'X-Requestd-With')
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  console.log('有人请求了服务器')
  next()
})
// 注册router
const routers = require(path.resolve(__dirname, './routes/index.js'))
routers.forEach(routerItem => {
  app.use(routerItem.path, routerItem.router)
})
// 监听端口
app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})
