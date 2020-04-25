const Koa = require('koa')
const config= require('./config')
const app = new Koa()

//定义接口 
//剥离路由文件 到routes/index.js

// app.use(bodyParser())

const router = require('./routes')
app.use(router.routes())

app.listen(config.port, () => {
  console.log(`server is started at port ${config.port}`)
})
