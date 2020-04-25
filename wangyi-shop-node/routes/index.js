const router = require('koa-router')({
    prefix: '/lm'
  })
  const controllers = require('../controllers/index')
  
  // 首页相关的接口
  router.get('/index/index', controllers.home.index)
// (ctx,next)=>
// {
//     ctx.body = 'hello world'
//     //从数据库获得数据 返回前端
// })

module.exports = router