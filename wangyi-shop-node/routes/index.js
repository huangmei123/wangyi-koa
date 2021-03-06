const router = require('koa-router')({
    prefix: '/lm' //路由前缀
  })
  const controllers = require('../controllers/index')
  
  // 首页相关的接口
  router.get('/index/index', controllers.home.index)
// (ctx,next)=>
// {
//     ctx.body = 'hello world'
//     //从数据库获得数据 返回前端
// })

//search页面相关的接口
router.get('./search/indexaction',controllers.index.indexaction)
router.post('./search/addhistoryaction',controllers.search.index.addHistoryAction)
module.exports = router