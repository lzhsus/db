<template>
    <div id="broadcast">
      <my-header tit='广播'>
         <img src="../assets/ic_status_search_user.png" alt="" slot="leftimg">
         <img src="../assets/ic_chat_green.png" alt="" slot="rightimg">
      </my-header>
      <user-msg moreBodyIs='true' :userArrs='userArrs'>
          <img src="../assets/ic_status_anonymous_header.png" alt="" slot="imgtop">
          <h3 slot="h3">发现有趣的人</h3>
          <h4 slot="h4">关注他们，发现更大的世界</h4>
      </user-msg>
    </div>
</template>

<script>
import MyHeader from '../components/MyHeader'
import UserMsg from '../components/UserMsg'

export default {
  components:{
    MyHeader,
    UserMsg
  },
  data(){
    return{
       userArrs:[
        {
          imgsrc:require('../assets/advater.jpg'),
          name:'龙张海',
          attentionnum:666,
          attTit:'关注',
          center:'好多撒地方海事局ad开飞机撒快递费哈萨克积分好看撒娇上岛asdfsadfasdsafsda咖啡就好撒大口径发货撒大开发建设大爱神的箭放声大哭',
          praise:50,
          anyonenum:20,
          isAtt:false
        },
          {
          imgsrc:require('../assets/advater.jpg'),
          name:'龙张海',
          attentionnum:666,
          attTit:'关注',
          center:'好多撒地方海事局ad开飞机撒快递费哈萨克积分好看撒娇上岛asdfsadfasdsafsda咖啡就好撒大口径发货撒大开发建设大爱神的箭放声大哭',
          praise:50,
          anyonenum:20,
          isAtt:false
        },
          {
          imgsrc:require('../assets/advater.jpg'),
          name:'龙张海',
          attentionnum:666,
          attTit:'关注',
          center:'好多撒地方海事局ad开飞机撒快递费哈萨克积分好看撒娇上岛asdfsadfasdsafsda咖啡就好撒大口径发货撒大开发建设大爱神的箭放声大哭',
          praise:50,
          anyonenum:20,
          isAtt:false
        },
          {
          imgsrc:require('../assets/advater.jpg'),
          name:'龙张海',
          attentionnum:666,
          attTit:'关注',
          center:'好多撒地方海事局ad开飞机撒快递费哈萨克积分好看撒娇上岛asdfsadfasdsafsda咖啡就好撒大口径发货撒大开发建设大爱神的箭放声大哭',
          praise:50,
          anyonenum:20,
          isAtt:false
        },
          {
          imgsrc:require('../assets/advater.jpg'),
          name:'龙张海',
          attentionnum:666,
          attTit:'关注',
          center:'好多撒地方海事局ad开飞机撒快递费哈萨克积分好看撒娇上岛asdfsadfasdsafsda咖啡就好撒大口径发货撒大开发建设大爱神的箭放声大哭',
          praise:50,
          anyonenum:20,
          isAtt:false
        },
          {
          imgsrc:require('../assets/advater.jpg'),
          name:'龙张海',
          attentionnum:666,
          attTit:'关注',
          center:'好多撒地方海事局ad开飞机撒快递费哈萨克积分好看撒娇上岛asdfsadfasdsafsda咖啡就好撒大口径发货撒大开发建设大爱神的箭放声大哭',
          praise:50,
          anyonenum:20,
          isAtt:false
        },
          {
          imgsrc:require('../assets/advater.jpg'),
          name:'龙张海',
          attentionnum:666,
          attTit:'关注',
          center:'好多撒地方海事局ad开飞机撒快递费哈萨克积分好看撒娇上岛asdfsadfasdsafsda咖啡就好撒大口径发货撒大开发建设大爱神的箭放声大哭',
          praise:50,
          anyonenum:20,
          isAtt:false
        },  {
          imgsrc:require('../assets/advater.jpg'),
          name:'龙张海',
          attentionnum:666,
          attTit:'关注',
          center:'好多撒地方海事局ad开飞机撒快递费哈萨克积分好看撒娇上岛asdfsadfasdsafsda咖啡就好撒大口径发货撒大开发建设大爱神的箭放声大哭',
          praise:50,
          anyonenum:20,
          isAtt:false
        }
      ]
    }
  }
}
</script>

<style scoped>
</style>
<style>

body{

  padding: 60px 0;
}
</style>