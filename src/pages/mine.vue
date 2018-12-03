<template>
    <div id="mine">
       <my-header tit='我的'>
         <!-- <img src="../assets/ic_actionbar_search_icon.png" alt="" slot="leftimg"> -->
         <img src="../assets/ic_settings.png" alt="" slot="rightimg">
       </my-header>

        <user-name></user-name>

        <more-top>
          <img slot="img" src="../assets/ic_mine_notification.png" alt="" srcset="">
          <span slot="tit">提醒</span>
        </more-top>
        <new-msg></new-msg>
       <div class="icon">
          <icon v-for="(item, index) in arr" :key="index">
              <img slot="img" :src="item.imgsrc" alt="" srcset="">
              <span slot="span">{{item.tit}}</span>
          </icon>
       </div>
    </div>
</template>

<script>
import MyHeader from '../components/MyHeader'
import MoreTop from '../components/MoreTop'
import newMsg from '../components/newMsg'
import icon from '../components/icon'
import UserName from '../components/UserName'


export default {
  data(){
    return{
        arr:[
          {imgsrc:require('../assets/ic_photo_liked.png'),tit:'喜欢'},
          {imgsrc:require('../assets/ic_my_note.png'),tit:'日记'},
          {imgsrc:require('../assets/ic_my_album.png'),tit:'相册'},
          {imgsrc:require('../assets/ic_my_status.png'),tit:'我的广播'},
          {imgsrc:require('../assets/ic_my_movies_tvs.png'),tit:'电影·电视'},
          {imgsrc:require('../assets/ic_my_books.png'),tit:'读书'},
          {imgsrc:require('../assets/ic_my_music.png'),tit:'音乐'},
          {imgsrc:require('../assets/ic_my_events.png'),tit:'同城活动'},
          {imgsrc:require('../assets/ic_drama_channel_logo.png'),tit:'舞台剧'},
          {imgsrc:require('../assets/ic_my_douban.png'),tit:'豆瓣时间'},
          {imgsrc:require('../assets/ic_my_doulist.png'),tit:'豆列'},
          {imgsrc:require('../assets/ic_my_orders.png'),tit:'订单'}
        ]
    }
  },
  components:{
    MyHeader,
    MoreTop,
    newMsg,
    icon,
    UserName
  }
}
</script>


<style scoped>
*{
  box-sizing: border-box;
}

.icon{
  margin-top: 10px;
  margin-bottom: 70px;
  position:absolute;
}
</style>

<style>

body{
  background-color: rgba(0,0,0,0.1);
  padding: 60px 0;
}
</style>
