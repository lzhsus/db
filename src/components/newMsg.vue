<template>
  <div id="newmsg">
     <div>
        <ul v-show="newArrIs">
        <li v-for="(item, index) in newArr" :key="index">
          {{ item }}
        </li>
        </ul>
        <div v-show="!newArrIs">
            暂未新提醒
        </div>
     </div>
  </div>
</template>

<script>
export default {
  name:'newMsg',
  data(){
    return{
      newArrIs:false,
      newArr:[]
    }
  },
  created() {
    if(this.newArr.length==0){
      this.newArrIs=false
    }else{
        this.newArrIs=true
    }
  },
}
</script>

<style scoped>
#newmsg{
  width: 100%;
  padding: 20px;
  background-color: #fff;
}
#newmsg>div{
  border-top: 1px solid #cccccc;
}
#newmsg>div>div{
 height: 50px;
 line-height: 70px;
 text-align:center;
}
</style>
