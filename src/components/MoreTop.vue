<template>
  <div id="moretop">
      <div class="tit">
       <div>
          <slot name="img"></slot>
          <slot name="tit"></slot>
       </div>
        <span>
            <slot name="more"></slot>
            <img src="../assets/ic_arrow_green_right.png" alt="" srcset="">
        </span>
      </div>
  </div>
</template>

<script>
export default {
  name:'MoreTop',
}
</script>

<style scoped>
*{box-sizing: border-box}
      #moretop{
        margin-top: 10px;
        padding-top: 10px;
        background: #fff;
      }
  .tit{
    display: flex;
    justify-content:space-between;
    align-items:center;
  }
  .tit>div{
       vertical-align: middle;
  }
  .tit>div>img{
    width: 36px;
    vertical-align: middle;
    margin-left: 20px;
  }
  .tit>div>span{
    font-size: 20px;
    margin-left: 10px;
  }
  .tit>span{
    display:block;
    height: 20px;
    margin-right: 20px;
  }
  .tit>span>img{
    width: 10px;
    height: 20px;
    vertical-align:bottom;
  }
</style>
