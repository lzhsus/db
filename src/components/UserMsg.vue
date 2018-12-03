<template>
  <div id="usermsg">
    <div id="moreBody" v-show="moreBodyIs">
        <slot name='imgtop'></slot>
        <div>
         <slot name="h3"></slot>
          <slot name="h4"></slot>
        </div>
    </div>
    <div id="moreMsg" v-for="(item, index) in userArrs" :key="index">
      <div class="hederTop">
        <img :src="item.imgsrc" alt="" srcset="">
      </div>
      <div class="conter">
        <div>
            <span class="name">{{item.name}}</span>
            <span  class="attentionNum">{{item.attentionnum}}人关注</span>
            <button @click="attentionBtn(index)" :class="{'btn':true,'clickBtn':item.isAtt}" type="button">{{item.attTit}}</button>
        </div>
        <div>
          <p class="userBody">{{item.center}}</p>
        </div>
        <div>
            <span class="praise">
              <img src="../assets/ic_liked.png" alt="">
              {{item.praise}}</span>
            <span class="anyoneMsg">
              <img src="../assets/ic_comment_full.png" alt="" srcset="">
              {{item.anyonenum}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from '../../node_modules/axios/dist/axios.min'
export default {
  name:"UserMsg",
  props:['moreBodyIs','userArrs'],
  data(){
    return{
    }
  },
  methods:{
    attentionBtn:function(index){
      this.userArrs[index].isAtt=!this.userArrs[index].isAtt
      this.userArrs[index].attTit=this.userArrs[index].isAtt ? '已关注' : '关注'
      if(this.userArrs[index].isAtt==true){
         this.userArrs[index].attentionnum=this.userArrs[index].attentionnum+1
      }else{
          this.userArrs[index].attentionnum=this.userArrs[index].attentionnum-1
      }
    }
  },
  created() {

  },
}
</script>

<style scoped>
body{
  background-color: #EFEEEE;
}
#usermsg{
  /* margin-top: 60px; */
  overflow: hidden;

}
#moreBody{
  padding: 20px 30px;
  display:flex;
  justify-content:space-between;
  align-items:center;
}
#moreBody img{
  width: 100px;
}
#moreBody h3{
  font-size: 20px;
}
#moreBody h4{
  font-size: 16px;
  color: #999;
}
#moreMsg{
  /* border: 1px solid #000; */
  margin: 16px 10px;
  background-color: #fff;
  box-shadow:rgba(49, 49, 49,0.3) 0px 0px 10px;
  display:flex;
  justify-content:space-between;
  align-items:stretch;
  padding: 16px
}
.hederTop{
   width: 50px;
  height: 50px;
  /* background-color: red; */

}
.hederTop>img{
  border-radius: 50% 50%;
  width: 50px;
  height: 50px;
}
.conter>div:nth-of-type(1){
  height: 50px;
  position: relative;
}
.conter>div:nth-of-type(1)>span:nth-of-type(1){
  position: absolute;
  font-size: 20px;
  top: 4px;
  left: 10px;
}
.conter>div:nth-of-type(1)>span:nth-of-type(2){
  position: absolute;
  bottom: 0;
  left: 10px;
}
.conter>div:nth-of-type(1)>button{
  position:absolute;
  top: 6px;
  right: 10px;
  padding: 6px 12px;
  font-size: 16px;
  background-color: #096;
  border-radius: 6px;
  border: 0;
  color: #fff;
  outline: none;
}
.conter>div:nth-of-type(1)>button.clickBtn{
 background-color: #fff;
 color: #000;
 border: 1px solid #ccc;
}
.attentionNum{
  color: #ccc;
}
.conter>div:nth-of-type(2){
  padding: 10px 0 10px 10px;
  font-size: 18px;
}
.conter>div:nth-of-type(3){
  padding: 10px 0 10px 10px;
  overflow: hidden;
}
.conter>div:nth-of-type(3)>span{
    color: #ccc;
    margin-right: 6px;
}
.conter>div:nth-of-type(3)>span:nth-of-type(1)>img{
  width: 24px;
  vertical-align:middle;
}
.conter>div:nth-of-type(3)>span:nth-of-type(2)>img{
  margin-top: 4px;
  width: 18px;
  vertical-align:middle;
}
</style>
