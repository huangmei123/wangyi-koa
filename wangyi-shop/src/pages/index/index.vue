<template>
  <div class="index">
    <!-- 头部搜索 -->
    <div class="search">
      <div @click="toMappage">{{cityName}}</div>
      <div @click="toSearch">
        <input type="text" placeholder="搜索商品" />
        <span class="icon"></span>
      </div>
    </div>
    <div class="swiper">
       <swiper class="swiper-container" indicator-dots="true" autoplay="true" interval="3000" circular="true" duration="500">
        <!-- block无具体含义，用来做for循环 -->
        <block v-for="(item, index) in banner" :key="index">
          <swiper-item class="swiper-item">
            <image class="slide-image" :src="item.image_url"/>
          </swiper-item>
        </block>
      </swiper>
    </div>
    <!-- 5个图标跳转 -->
    <div class="channel">
      <div v-for="(item, index) in channel" :key="index" @click="categroyList(item.id)">
        <img :src="item.icon_url" alt="">
        <p>{{item.name}}</p>
      </div>
    </div>
    <!-- 品牌 -->
    <div class="brand">
      <div class="head" @click="tobrandList">
        品牌制造商直供
      </div>
      <div class="content">
        <div v-for="(item, index) in brandList" :key="index" @click="branddetail(item.id)">
          <div>
            <p>{{item.name}}</p>
            <p class="price">{{item.floor_price}}元起</p>
          </div>
          <img :src="item.new_pic_url" alt="">
        </div>
      </div>
    </div>
  </div>

</template>
<script>
import amapFile from '../../utils/amap-wx.js'
import {mapState,mapMutations} from 'vuex'
import { get } from '../../utils'
export default {
  data(){
    return{
      banner:[],
      channel:[],
      brandList:[]
    }
  },
  computed:{
    ...mapState(['cityName'])
  },
  mounted () {
    this.getData()
    this.getCityName()
  },
  methods:{
    toMappage(){
      //需要授权打开
      //通过wx.getsetting先查询用户是否授权”scoped.record"
       let _this = this
       wx.getSetting({
        success: (res) => {
          // 如果没有同意授权，打开设置
          // console.log(res)
          if (!res.authSetting['scope.userLocation']) {
            wx.openSetting({
              success: res => {
                // 获取授权位置信息
               _this.getCityName()
              }
            })
          }else{
            wx.navigateTo({
              url: '/pages/mappage/main',
            });
            // _this.getCityName()
          }
        },
        fail:(err) =>{
          console.log(err)
        },
        complete:() =>{}
       });
    },
    getCityName () {
      let _this = this
      var myAmapFun = new amapFile.AMapWX({key:'a3723a398c0185011d58501db1fe4e82'});
      myAmapFun.getRegeo({
        success: function (data) {
          // 成功回调
          console.log(data)
          // ........
        },
        fail: function (info) {
          // 失败回调
          console.log(info)
          _this.cityName = '北京'
          // _this.update({ cityName: '北京' })
        }
      })
    },

    //获取数据的方法 getData 封装接口请求
    async getData() {
      const data = await get('/index/index') // http://localhost:5757/lm/index/index
      console.log(data)
      this.banner = data.banner
      this.channel=data.channel
      this.brandList = data.brandList
    },
    categroyList (id) {
      console.log(123)
      wx.navigateTo({
        url: '/pages/categroylist/main?id=' + id
      })
    },
  }
}
</script>
<style lang="less" scoped>
@import "./style.less";
</style>