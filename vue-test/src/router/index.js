import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home from '@/page/home'
import store from '@/page/store'
import login from '@/page/login'
import chat from '@/page/chat'
Vue.use(Router)

const router = new Router({
  routes: [{
      path: '/home',
      name: 'home',
      component: home,
      meta: { requireAuth: true },
    },{
      path: '/chat',
      name: 'chat',
      component: chat,
      meta: { requireAuth: true },
    },{
      path: '/',
      redirect: '/home'
    },{
      path: '/login',
      name: 'login',
      component: login
    },{
      path: '/store',
      name: 'store',
      component: store,
      meta: { requireAuth: true },
    }
  ]
})

//判断是否登录
router.beforeEach((to, from, next) => {
  if (to.matched.some(res => res.meta.requireAuth)) {
    if (localStorage.getItem('token')) {
      next()
    } else {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    }
  } else {
    next()
  }
});


export default router
