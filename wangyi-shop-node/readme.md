关于后端
- 建立routes文件用来控制所有路由 路由分发

- 控制层controllers文件
 controllers/index.js ：自动读取controllers里的目录文件，把所有文件取出来 放入tree

- 为了让项目跑起来 准备数据 nodemysql.sql文件 并且要导入本地的mysql
  mysql -u root -p 启动mysql
  create database nodemysql;
  show tables;
  source /user/...文件名（不能加分号！）
  quit;
- mysql.js 获取基础配置 
  将基础配置和sdk.config 合并 导出初始化完成的sdk
- config.js设置启动端口 正常的操作


## 从数据库获得数据 返回前端

