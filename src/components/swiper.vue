<template>
  <div id="swiperWarp">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <slot name="bannerImg"></slot>
          <div class="swiper-pagination"></div>
        </div>
      </div>
  </div>
</template>

<script>
import Swiper from '../../node_modules/swiper/dist/js/swiper'

export default {
  name:'swiper',
  mounted() {
      var swiper=new Swiper('.swiper-container', {
        autoplay: true,//可选选项，自动滑动
        loop:true,
        pagination: {
          el: '.swiper-pagination',
        },
      })
  },

}
</script>

<style scoped>
@import url('../../node_modules/swiper/dist/css/swiper.min');
#swiperWarp{
  width: 100%;
  /* margin-top: 60px; */
}
.swiper-wrapper>.wiper-slide>img{
  width: 100%;
}
.img{
  width: 100%;
}
</style>
