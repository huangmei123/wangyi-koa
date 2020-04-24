const Koa = require('koa')
const Router=require('koa-router')
const config= require('./config')

const app = new Koa()
const router =new Router()
//定义接口 
router.get('*',(ctx,next)=>{
    ctx.body = 'hello world'
})

app.use(router,routes())

app.listen(config.port,() => {
    console.log(`server is started at port ${config.port}`)
})