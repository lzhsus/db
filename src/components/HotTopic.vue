<template>
  <div id="hottopic">
      <slot name="tit"></slot>
      <div v-for="(item, index) in user" :key="index" id="hotBody">
        <div class="left">
          <span class="titname">{{item.titName}}</span>
          <span>{{item.titBody}}</span>
          <span>......</span>
          <span class="auther">{{auther}}{{item.titAuther}}</span>
          <span class="titfrom">{{item.titFrom}}</span>
        </div>
        <div class="right">
          <img :src="item.titImg" alt="" srcset="">
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name:'HotTopic',
  props:['tit','user','auther'],
}
</script>

<style scoped>
#hottopic{
  width: 100%;
  margin: 10px 0;
  /* background-color: red; */
  border-bottom: 1px solid rgb(212, 211, 211);
  /* padding-bottom: 60px; */
}
h1{
  font-size: 20px;
  color: #ea8553;
  border-left: 6px solid #ea8553;
  text-align: left;
  padding-left: 20px;
}
#hotBody{
  position: relative;
  border-bottom: 1px solid #ccc;
}
#hottopic>div{
  display:flex;
  justify-content:space-between;
  align-items:top;
  padding: 20px;
}
.left>.titname{
  font-size: 22px;
  font-weight: bold;
  color: black;
}
.left{
  margin-right: 20px;
}
.left>span{
  margin-bottom: 8px;
  color: #D1D1D1;
}
.right{
   width: 80px;
   height: 80px;
   background-color: #096;
   /* margin-left: 16px; */
}
.auther{
  float: left;
}
.titfrom{
  float: right;
  position: absolute;
  right: 40px;
}
img{
width: 80px;
   height: 80px;
}
span{
  display:block
}
</style>
