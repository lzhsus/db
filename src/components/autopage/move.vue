<template>
  <div id="city">
        <more-top>
          <span slot="tit">影院热映</span>
          <span slot="more">更多</span>
        </more-top>
        <move-hot :list='list1'></move-hot>

        <ad-img>
          <img src="../../assets/01.jpg" alt="" slot="img">
          <h1 slot="">“蔡康”合体，小S放飞自我，白眼怒怼恶评</h1>
        </ad-img>

        <more-top>
          <span slot="tit">影院即将上映</span>
           <span slot="more">更多</span>
        </more-top>
        <move-hot :list='list2'></move-hot>
  </div>
</template>

<script>
import axios from '../../../node_modules/axios/dist/axios.min'
import MoveHot from '../MoveHot'
import MoreTop from '../MoreTop'
import AdImg from '../advertisingImg'
export default {
    components:{
    MoveHot,
    MoreTop,
    AdImg
  },
  data(){
    return{
      list1:[],
      list2:[]
    }
  },
  created() {
    axios.get('https://www.apiopen.top/meituApi?page=1')
    .then((res)=>{
      var arrList=res.data.data
      for(var i=0;i<arrList.length;i++){
        this.list1.push({
          imgsrc:arrList[i].url,
          name:arrList[i].type,
          score:arrList[i].createdAt.slice(0,10)
        })
      }
    })
    .catch((err)=>{
      console.log('错误')
    })
    axios.get('https://www.apiopen.top/satinGodApi?type=1&page=1')
    .then((res)=>{
      var arrList=res.data.data
      console.log(arrList)
      for(var i=0;i<arrList.length;i++){
        this.list2.push({
          imgsrc:arrList[i].header,
          name:arrList[i].username.slice(0,3),
          score:arrList[i].passtime.slice(0,10)
        })
      }
    })
    .catch((err)=>{
      console.log('错误')
    })
  },
}
</script>

<style scoped>
#city{
  margin-bottom: 20px;
}
</style>

