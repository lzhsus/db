import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '../pages/Home'
import Audio from '../pages/audio'
import Broadcast from '../pages/broadcast'
import Mine from '../pages/mine'
import Group from '../pages/group'
import move from '../components/autopage/move'
import book from '../components/autopage/book'
import city from '../components/autopage/city'
import music from '../components/autopage/music'
import television from '../components/autopage/television'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {path: '/audio',name: 'Audio',component: Audio,children:[
      // 二级路由
      {path:'move',name:'Move',component:move},
      {path:'book',name:'Book',component:book},
      {path:'television',name:'Television',component:television},
      {path:'city',name:'City',component:city},
      {path:'music',name:'Music',component:music},
      {path:'/',name:'Move',component:move},

    ]},
    {
      path: '/broadcast',
      name: 'Broadcast',
      component: Broadcast
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    },
    {
      path: '/group',
      name: 'Group',
      component: Group
    }
  ],
  mode: 'history'
})
