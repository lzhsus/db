<template>
    <div id="home">
        <my-header ishome='true'>
          <img src="../assets/ic_group_search_small.png" alt="" slot="img1">
          <img src="../assets/ic_scan_gray.png" alt=""  slot="img2">
          <img src="../assets/ic_chat_white.png" alt=""  slot='img3'>
          <input type="text" placeholder="影视 图书 唱片 小组等" slot="input">
        </my-header>
        <swiper>
          <div slot="bannerImg" class="swiper-slide" v-for="(item, index) in banners" :key="index">
            <img class="img" :src="item.imgsrc" alt="" srcset="">
          </div>
        </swiper>
        <hot-topic :user='user' auther='作者：' >
          <h1 slot="tit">热点</h1>
        </hot-topic>
    </div>
</template>

<script>
import MyHeader from '../components/MyHeader'
import Swiper from '../components/swiper'
import HotTopic from '../components/HotTopic'
import axios from '../../node_modules/axios/dist/axios.min'
export default {
  components:{
    MyHeader,
    Swiper,
    HotTopic
  },
  data(){
    return{
       user:[],
       banners:[
        {imgsrc:require('../assets/01.jpg')},
        {imgsrc:require('../assets/02.jpg')},
        {imgsrc:require('../assets/03.jpg')},
        {imgsrc:require('../assets/03.jpg')},
        {imgsrc:require('../assets/03.jpg')}
       ]
    }
  },
  created() {
    axios.get('https://www.apiopen.top/satinApi?type=1&page=1')
    .then(res=>{
      var newUser=res.data.data
      for(var i=0;i<newUser.length;i++){
        var str=''
        if(newUser[i].text.length>35){
           str=newUser[i].text.slice(0,35)+'...'
        }else{
          str=newUser[i].text
        }
            this.user.push({
              titName:str,
              titBody:newUser[i].created_at,
              titAuther:newUser[i].name,
              titImg:newUser[i].cdn_img,
              titFrom:newUser[i].theme_name
            })
      }
    })
    .catch(err=>{
      console.log('失败')
    }),
    console.log($)
  },
}
</script>

<style scoped>

</style>
<style>

body{

  padding: 60px 0;
}
</style>
