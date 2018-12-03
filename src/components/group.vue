<template>
  <div id="group">
      <div class="group-top">
        <div>
           <span>{{num}}个小组等你来玩</span>
           <span>立即选择加入吧</span>
           <span>根据你的兴趣推荐</span>
        </div>
        <div>精选推荐</div>
      </div>
      <div class="fgx">
        <span></span>
        <span>影视</span>
        <span></span>
      </div>
      <ul>
        <li v-for="(item, index) in arrs" :key="index">

          <div><img :src="item.img" alt="" srcset=""></div>
          <div>
            <p>{{item.tit}}</p>
            <p>{{item.content}}</p>
          </div>
          <div>{{item.num}}</div>
          <div></div>
        </li>
      </ul>
      <div class="out-group">
          <span>选好了，去玩小组</span>
      </div>
  </div>
</template>

<script>
export default {
  name:'group',
  data(){
    return{
      num:5523,
      arrs:[
        {'img':require('../assets/live_player_bg.jpg'),'tit':'大撒范德萨','num':6145,'content':'演: 理查德·林克莱特  主演: 埃拉·科尔特兰 / 帕特丽夏·阿奎特 / 伊桑·霍克  类型: 剧情 / 家庭  制片国家/地区: 美国  年份: 2014'},
        {'img':require('../assets/ic_drama_channel_logo.png'),'tit':'撒旦法 ','num':4345,'content':'演: 理查德·林克莱特  主演: 埃拉·科尔特兰 / 帕特丽夏·阿奎特 / 伊桑·霍克  类型: 剧情 / 家庭  制片国家/地区: 美国  年份: 2014'},
        {'img':require('../assets/ic_chat_white.png'),'tit':'阿斯蒂芬 ','num':6545,'content':'演: 理查德·林克莱特  主演: 埃拉·科尔特兰 / 帕特丽夏·阿奎特 / 伊桑·霍克  类型: 剧情 / 家庭  制片国家/地区: 美国  年份: 2014'},
        {'img':require('../assets/ic_liked.png'),'tit':'撒旦法 ','num':414,'content':'演: 理查德·林克莱特  主演: 埃拉·科尔特兰 '},
      ]
    }
  }
 }
</script>

<style lang="postcss" scoped>
#group span{
  display: block;
  text-align: center;
}
  .group-top>div{
    width: 100%;
    height: ;
  }
  .group-top>div:nth-of-type(1){
    position: relative;
    padding: 30px 10px;
    background:url('../assets/live_player_bg.jpg') no-repeat;
    background-size: 100%;
  }
    .group-top>div:nth-of-type(2){
      width: 94%;
      margin:30px auto;
      font-size: 20px;
      color: #fff;
     height: 80px;
     background: #40D75C;
     border-radius: 10px;
     padding-left: 20px;
     line-height: 130px;
    }
  .group-top>div:nth-of-type(1)>span:nth-of-type(1){
    color: black;
    font-size: 26px;
  }
  .group-top>div:nth-of-type(1)>span:nth-of-type(2){
    color: #999;
    font-size: 16px;
    margin-bottom: 30px;
  }
  .group-top>div:nth-of-type(1)>span:nth-of-type(3){

       color: #999;
    font-size: 12px;
      position: absolute;
      bottom: 10px;
      left: 10px;
  }
  .fgx{
      width: 94%;
      margin: auto;
  }

  .fgx>span:nth-of-type(1){
      float: left;
      height: 15px;
      width: 40%;
      box-sizing: border-box;
      border-bottom: 1px solid #000;
  }
    .fgx>span:nth-of-type(2){
      width: 20%;
      text-align:center;
      float: left;
      height: 30px;
      line-height: 30px;
    }
  .fgx>span:nth-of-type(3){
      float: right;
      height: 15px;
      width: 40%;
      box-sizing: border-box;
      border-bottom: 1px solid #000;
  }
    .fgx>span:nth-of-type(3)::after{
      display: block;
      clear: both;
      content: ''
    }
    ul{
      width: 100%;
      margin-top: 60px;
      margin-bottom: 100px;
    }
    ul>li{
      width: 100%;
      height: 60px;
      /* background-color: #ffff63; */
      margin-bottom: 20px;
      position: relative;
      color: #000;
              overflow: hidden;
    }
    li>div:nth-of-type(1){
      position: absolute;
      top: 0;
      left:20px ;
      width: 60px;
      height: 60px;
      border: 1px solid #ccc;
    }
        li>div:nth-of-type(1) img{
          width: 100%;
          height: 100%;
        }
      li>div:nth-of-type(2){
      position: absolute;
      top: 0;
      left:90px ;
      width: 190px;
      height: 60px;
      /* border: 1px solid #ccc; */
    }
          li>div:nth-of-type(2) p:nth-of-type(1){
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            color :black;
            font-size:18px;

          }
            li>div:nth-of-type(2) p:nth-of-type(2){

            color :#ccc;
            font-size: 14px;
          }
        li>div:nth-of-type(3){
          text-align: right;
      position: absolute;
      top: 0;
      right:66px ;
      width: 60px;
      height: 60px;
      /* border: 1px solid #ccc; */
      line-height: 60px;
    }
           li>div:nth-of-type(4){
      position: absolute;
      top: 15px;
      right:20px ;
      width: 30px;
      height: 30px;
      border: 1px solid #40D75C;
      border-radius: 50%;
    }
    .out-group{
      width: 100%;
      height: 40px;
      position: fixed;
      left: 0;
      bottom: 70px;
      background-color: #fff;
    }
    .out-group span{
     width: 160px;
      background-color: #ccc;
      padding: 4px 8px;
      color: #fff;
      border-radius: 4px;
      margin-top: 4px;
      float:right;
      margin-right: 20px;
    }
</style>

