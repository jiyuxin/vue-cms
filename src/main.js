// 入口文件

// mint-ui组件
import { Header,Swipe, SwipeItem } from 'mint-ui';
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)

// mui样式
import './lib/mui/dist/css/mui.css'
import './lib/mui/dist/css/icons-extra.css'

// 模板文件
import Vue from 'vue'
import app from './app.vue'

// 路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import router from './router.js'

//vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource)



// vm实例
var vm = new Vue({
	el:'#app',
	render: c => c(app),
	router
})