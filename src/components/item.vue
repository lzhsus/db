<template>
  <div id="Item" @click="bunItem">
        <span v-show="showImg"><slot name="activeImg"></slot></span>
        <span v-show='!showImg'><slot name="normalImg"></slot></span>
        <span :class="{'titColor':showImg}">{{tit}}</span>
  </div>
</template>

<script>
export default {
  name:'Item',
  props:['tit','mark','sel'],
  // 计算属性（类似于data，可以有逻辑运算能力）
  computed:{
    // 计算
    showImg:function(){
      if(this.mark==this.sel){
        return true
      }else{
        return false
      }
    }
  },
  methods:{
    bunItem(){
      // 子 传 父 item 传递 this.mark 值 activeItem方法
      this.$emit('activeItem',this.mark)
      this.$router.push('/'+this.mark)
    }
  }
}
</script>

<style scoped>
  #Item{
    width: 20%;
    text-align: center;
    float: left;
    padding: 4px 0;
  }

  img{
    width: 34px;
  }
  span{
    display: block;
  }
  .titColor{
    color: #42BD56;
  }
</style>
