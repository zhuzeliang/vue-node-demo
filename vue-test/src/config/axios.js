import axios from 'axios';
import router from '@/router';
import { Loading, Message, MessageBox } from 'element-ui';
// 超时时间
axios.defaults.timeout = 5000;
let loadinginstace;
// 拦截请求
axios.interceptors.request.use(function(config) {
  let token = localStorage.getItem("token");
  if (token) {
    config.headers["x-access-token"] = token;
  }
  loadinginstace = Loading.service({ fullscreen: true });
  return config;
}, function(error) {
  loadinginstace.close();
  Message.error('加载超时');
  return Promise.reject(error);
})

// 拦截相应

axios.interceptors.response.use(function(config) {
  if (config.data.msg == 'token信息错误或失效！') {
    MessageBox.confirm('token信息错误或失效，请重新登录！', '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'info'
    }).then(() => {
      router.replace({
        path: 'login',
        query: { redirect: router.currentRoute.fullPath }
      })
    }).catch(() => {

    });

  };
  loadinginstace.close();
  return config;
}, function(error) {
  loadinginstace.close();
  Message.error('加载超时');
  return Promise.reject(error);
});
