<template>
  <div id="myheader">
      <p>{{tit}}</p>
      <span class="leftimg"><slot name="leftimg" ></slot></span>
      <span class="rightimg"><slot name="rightimg" ></slot></span>
      <div id="homeHeader" v-show="iShow">
          <span class="search"><slot name='img1'></slot></span>
          <span class="gray"> <slot name='img2'></slot></span>
           <span class="chat"><slot name='img3'></slot></span>
          <slot name='input'></slot>
      </div>
  </div>
</template>

<script>
export default {
  props:['tit','ishome'],
  computed:{
    iShow:function(){
      if(this.ishome=='true'){
        return true
      }else{
        return false
      }
    }
  }
}
</script>

<style scoped>
  #myheader{
  width: 100%;
  /* height: 60px; */
  background-color: #f7f7f7;
  border-bottom: 1px solid #E0E0E0;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  text-align: center
  }
  #myheader p{
    height: 100%;
    line-height: 60px;
    font-size: 24px;
  }
  #myheader>span{
    display:block;
    width: 30px;
    position:absolute;
    top: 50%;
    transform: translateY(-40%)
  }
  #myheader .leftimg{
   right: 70px;
  }
   #myheader .rightimg{
   right: 20px;
  }
    #myheader>span>img{
      width: 100%;
    }

  #homeHeader{
    width: 100%;
    height: 60px;
    background-color: #42c055;
    position: relative;
    left: 0;
    top: 0;
  }
   #homeHeader input{
    width: 88%;
    height: 36px;
    border: 0;
    outline: none;
    border-radius: 6px;
    padding-left: 58px;
    /* margin-top: 10px; */
    position: absolute;
    top:12px;
    left: 10px;
    z-index: 0;
    font-size: 18px;
  }
  #homeHeader>span{
    display: block;
    width: 36px;
  }
  #homeHeader .search>img,.gray>img,.chat>img{
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1;
     width: 26px;
  }
 #homeHeader .search>img{
    left: 20px;
  }
  #homeHeader .gray>img{
    right:12%;
  }
  #homeHeader .chat>img{
    right: 1%;
  }
</style>
