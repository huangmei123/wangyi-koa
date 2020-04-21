- mpvue+koa2+mgsql
1. 处理配置文件 app.json,添加cart、category、my、topic、index页面
2. 处理index主页
- 添加npm install less less-loader --save 写样式并引入
- 关于授权位置信息toMappage()
  通过wx.getsetting先查询用户是否授权”scoped.record"
  amap-wx 去获取key，同时下载使用高德地图的包amap-wx.js(存放在utils)