<template>
  <div id="username">
      <div class="nametop">
        <img src="../assets/touxiang.jpg" alt="" class="s">
      </div>
      <div class="namemsg">
          <div>
              <h1>孤独的一只鸟<img src="../assets/ic_mine_male.png" alt="" srcset=""></h1>
              <span>ID:59625641</span>
              <span>
                个人主页
                <img class="imgr" src="../assets/ic_seti_arrow_right_gray.png" alt="" srcset="">
              </span>
          </div>
          <div>
            <span>关注 1 </span>
            <span>被关注 0 </span>
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  #username{
    display:flex;
    justify-content:space-between;
    align-items:stretch;
    background:url('../assets/live_player_bg.jpg') no-repeat;
    background-size: 100% 100%;
    padding: 20px;
    color: #fff;
  }
  .nametop{
    width: 80px;
    height: 80px;
    /* background-color: red; */

  }
  .nametop>img{
    width: 100%;
    height: 100%;
     border-radius: 50%;
  }
  .namemsg{
  width: 80%;
  padding-left: 10px;
  }
  h1{
    font-size: 22px;
    color: #fff;
    margin-bottom: 6px;
  }
  .namemsg div:nth-of-type(1){
    padding-bottom: 10px;
    border-bottom: 1px solid #999;
    margin-bottom: 10px;
  }
  .namemsg div>span{
    line-height: 30px;
    margin-right: 6px;
  }
  .namemsg span img{
      width: 12px;
      height: 12px;
      margin-bottom: 4px;
  }

  .namemsg img{
    width: 20px;
    height: 20px;
    margin-left: 4px;
    vertical-align:middle;
  }
</style>
