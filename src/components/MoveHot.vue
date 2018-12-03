<template>
  <div id="movehot">
      <ul>
        <li v-for="(item, index) in list" :key="index">
          <img :src="item.imgsrc" alt="">
          <h2>{{item.name}}</h2>
          <h3>{{item.score}}</h3>
        </li>
      </ul>
  </div>
</template>

<script>


export default {
  name:'MoveHot',
  props:['list']
}
</script>

<style scoped>
*{margin: 0;padding: 0;}

  #movehot{
    width: 100%;
    padding-top: 20px;
    padding-bottom: 20px;
    height: 220px;
    background-color: #fff;
    overflow-y: hidden;
    box-sizing: border-box;
    overflow-x: scroll;
  }

  ul{
    width: 2480px;
    height: 200px;
  }
  ul::after{
    display:block;
    clear: both;
    content: ''
  }
  li{
    list-style: none;
    float: left;
    margin-left: 28px;
    width: 102px;
    height: 200px;
    /* background-color: rgba(0, 0, 0, 0.1); */
  }
  li>img{
    width: 100%;
    height: 150px;
  }
  h2{
    font-size: 18px;
    text-align:left;
    padding: 2px 0;
  }
  h3{
    font-size: 14px;
    color: #999;
  }
</style>
