- mpvue+koa2+mgsql +vuex
1. 处理配置文件 app.json,添加cart、category、my、topic、index页面
2. 处理index主页
- 添加npm install less less-loader --save 写样式并引入
- 关于授权位置信息toMappage()
  通过wx.getsetting先查询用户是否授权”scoped.record"
  amap-wx 去获取key，同时下载使用高德地图的包amap-wx.js(存放在utils)
  - 在得到位置时使用store/index.js，获得数据源。同时在src/main.js引入全局。
  得到数据源后，一定要去解构...mapState