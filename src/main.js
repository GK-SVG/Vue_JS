import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import About from './components/About'
import Index from './components/Index'

Vue.use(VueRouter);
const routes = [{path:'/',component:Index},
                 {path:'/about',component:About}]
  
const router = new VueRouter({routes})
Vue.config.productionTip = false
Vue.filter("UCASE",function(val){
  return val.toUpperCase()
})
new Vue({
  router:router,
  render: h => h(App),
}).$mount('#app')
