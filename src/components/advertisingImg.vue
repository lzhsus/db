<template>
    <div id="adimg">
        <slot name="img"></slot>
        <slot name="tit"></slot>

    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  #adimg{
    width: 100%;
    margin: 10px 0;
  }
  img{
    width: 100%;
  }
  h1{
    padding: 20px
  }
</style>
