- mpvue+koa2+mgsql +vuex
1. 处理配置文件 app.json,添加cart、category、my、topic、index页面
2. 处理index主页
- 添加npm install less less-loader --save 写样式并引入
- 关于授权位置信息toMappage()
  通过wx.getsetting先查询用户是否授权”scoped.record"
  amap-wx 去获取key，同时下载使用高德地图的包amap-wx.js(存放在utils)
  - 在得到位置时使用store/index.js，获得数据源。同时在src/main.js引入全局。
  得到数据源后，一定要去解构...mapState

### src/pages/index首页设置
- swiper 滑屏 
  block无具体含义，用来做for循环

- 获取数据的方法 getData 封装接口请求
  封装在utils/index.js里
  步骤：
  1. 在page/index/index.vue中写好盒子和样式，
  2. 到后端的controller/home/index.js里去获取：const brandList/..。同时在ctx.body添加'brandList':brandList
  3. 回到index.vue中写好data里的 channel:[],
  同时到 async getData()里添加 this.brandList = data.brandList

  在专题精选里添加文件topicdetail

3. 搜索功能的开发 src/pages/search
- 做好静态布局
- 在搜索的时候，找取输入的商品，做接口请求
  confirm-type="search" 就是类似于键盘的发送按钮 它是可以被我们自己定义的只能在type为text的时候设置
  v-model="words" 进行绑定
  @focus="inputFocus" 聚焦