<template>
  <div id="tablebar">
      <!-- tablebar -->
    <item @activeItem="faActiveItem" tit="首页" mark='home' :sel='selected'>
      <img src="../assets/ic_tab_home_active.png" alt="" slot="activeImg">
      <img src="../assets/ic_tab_home_normal.png" alt="" slot="normalImg">
    </item>
    <item @activeItem="faActiveItem" tit="书影音" mark='audio' :sel='selected'>
       <img src="../assets/ic_tab_subject_active.png" alt="" slot="activeImg">
      <img src="../assets/ic_tab_subject_normal.png" alt="" slot="normalImg">
    </item>
    <item @activeItem="faActiveItem" tit="广播" mark='broadcast' :sel='selected'>
       <img src="../assets/ic_tab_status_active.png" alt="" slot="activeImg">
      <img src="../assets/ic_tab_status_normal.png" alt="" slot="normalImg">
    </item>
    <item @activeItem="faActiveItem" tit="小组" mark='group' :sel='selected'>
       <img src="../assets/ic_tab_group_active.png" alt="" slot="activeImg">
      <img src="../assets/ic_tab_group_normal.png" alt="" slot="normalImg">
    </item>
    <item @activeItem="faActiveItem" tit="我的" mark='mine' :sel='selected'>
       <img src="../assets/ic_tab_profile_active.png" alt="" slot="activeImg">
      <img src="../assets/ic_tab_profile_normal.png" alt="" slot="normalImg">
    </item>
  </div>
</template>

<script>
import Item from './item'
export default {
  name:'TableBar',
  components:{
    Item
  },
  data(){
    return{
      selected:'home'
    }
  },
  methods:{
    faActiveItem(vaule){
      this.selected=vaule;
    }
  }
}
</script>

<style scoped>
  #tablebar{
    width: 100%;
    height: 70px;
    border-top: 1px solid #ccc;
    background-color: #fff;
    position:fixed;
    bottom: 0;
    left: 0;
  }
  #tablebar::after{
    display: block;
    clear: both;
    content: ''
  }
</style>
