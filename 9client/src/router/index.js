import Vue from 'vue'
import Router from 'vue-router'
// import manage from '@/page/manage'


const home = r => require.ensure([], () => r(require('@/page/home')), 'home');
const channel = r => require.ensure([], () => r(require('@/page/channel')), 'channel');
const channelAdd = r => require.ensure([], () => r(require('@/page/channelAdd')), 'channelAdd');
const channelMsg = r => require.ensure([], () => r(require('@/page/channelMsg')), 'channelMsg');
const viewMobile = r => require.ensure([], () => r(require('@/page/viewMobile')), 'viewMobile');
const viewPc = r => require.ensure([], () => r(require('@/page/viewPc')), 'viewPc');
const page2 = r => require.ensure([], () => r(require('@/page/page2')), 'page2');
const manage = r => require.ensure([], () => r(require('@/page/manage')), 'manage');
const error = r => require.ensure([], () => r(require('@/page/error')), 'error');
Vue.use(Router)

export default new Router({
  linkActiveClass: 'link-active',
  routes: [{
      path: '/',
      component: home,
      children: [{
        path: '',
        component: channel,
        meta: [],
      }, {
        path: '/page2',
        component: page2,
        meta: [],
      }, {
        path: '/manage',
        component: manage,
        meta: [],
      },{
        path: '/channelAdd',
        component: channelAdd
      },{
        path: '/channelMsg',
        component: channelMsg
      },{
        path: '/viewMobile',
        component: viewMobile
      },{
        path: '/viewPc',
        component: viewPc
      }]
    }, {
      path: '/*',
      component: error,
    }

  ]
})
