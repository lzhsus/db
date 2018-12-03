<template>
    <div id="group">
       <my-header tit='小组'>
         <img src="../assets/ic_actionbar_search_icon.png" alt="" slot="leftimg">
         <img src="../assets/ic_chat_green.png" alt="" slot="rightimg">
       </my-header>
       <group>

       </group>
    </div>
</template>

<script>
import MyHeader from '../components/MyHeader'
import Group from '../components/group'
export default {
  components:{
    MyHeader,
    Group
  }
}
</script>
<style>

body{

  padding: 60px 0;
}
</style>
