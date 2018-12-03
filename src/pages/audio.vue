<template>
    <div id="audio">
       <my-header tit='书影音'>
         <img src="../assets/ic_actionbar_search_icon.png" alt="" slot="leftimg">
         <img src="../assets/ic_chat_green.png" alt="" slot="rightimg">
       </my-header>

        <!-- 二级路由未知 -->
        <nav-tit>
          <li v-for="(item, index) in arr"  :key="index" :class="{'active':item.isActive}">
            <router-link :to='item.path' :class="{'active':item.isActive}">
              {{item.tit}}
            </router-link>
          </li>
        </nav-tit>

        <router-view></router-view>
    </div>
</template>

<script>
import MyHeader from '../components/MyHeader'
import NavTit from '../components/NavTit'

export default {
  components:{
    MyHeader,
    NavTit

  },
  data(){
    return{
       arr:[
        {tit:'电影',isActive:false,path:'/audio/move'},
        {tit:'读书',isActive:false,path:'/audio/book'},
        {tit:'电视',isActive:false,path:'/audio/television'},
        {tit:'同城',isActive:false,path:'/audio/city'},
        {tit:'音乐',isActive:false,path:'/audio/music'},
        {tit:'电视',isActive:false,path:'/audio/television'},
        {tit:'同城',isActive:false,path:'/audio/city'},
        {tit:'音乐',isActive:false,path:'/audio/music'}
      ]
    }
  }
}
</script>

<style>
    body{
      background: rgb(233, 232, 232);
      height: 100%;
      padding: 60px 0;
    }


</style>
