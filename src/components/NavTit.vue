<template>
  <div id="navtit">
      <ul>
        <slot></slot>
        <!-- <li @click="navBtn(index)" :class="{'active':item.isActive}">
          <slot>{{item.tit}}</slot>
        </li> -->
      </ul>
  </div>
</template>

<script>
export default {
name:'navtit',
mounted() {
    $($('#navtit>ul>li')[0]).addClass('active')
    $('#navtit>ul>li>a').addClass('active')
    $('#navtit>ul>li').on('click',function(index){
        for(var i=0;i<$('#navtit>ul>li').length;i++){
          $($('#navtit>ul>li')[i]).removeClass('active')
        }
        $($('#navtit>ul>li')[$(this).index()]).addClass('active')
        $($('#navtit>ul a')[$(this).index()]).addClass('active')
    })
}
}
</script>

<style scoped>
  *{text-decoration: none;}
  #navtit{
    width: 100%;
    height: 50px;
    line-height: 48px;
    /* margin-top: 60px; */
    overflow: hidden;
    background-color: #fff;
  }

   #navtit li{
    width: 20%;
    text-align:center;
    border-bottom: 2px solid #e2e0e0;
    float: left;
    box-sizing: border-box
  }
  #navtit li a{
    color: black;
  }
  #navtit li.active{
    border-bottom: 2px solid #7FBF8D;
  }
  #navtit li.active> .active{
    color: #7FBF8d;
  }

</style>
