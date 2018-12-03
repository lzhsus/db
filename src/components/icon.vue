<template>
  <div id="icon">
      <div>
          <slot name="img"></slot>
          <slot name="span"></slot>
      </div>
  </div>
</template>

<script>
export default {
  name:'icon',

}
</script>

<style scoped>
  #icon{
    box-sizing: border-box;
    width: 25%;
    text-align:center;
    background-color: #fff;
    padding: 6px;
    border-bottom: 1px solid rgba(70, 69, 69,0.5);
    float: left;
  }
  span{
    display: block;
    font-size: 14px;
  }
  img{
    width: 80%;
  }
</style>
