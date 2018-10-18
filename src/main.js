// 入口文件

// 模板文件
import Vue from 'vue'
import app from './app.vue'

// mint-ui组件
import { Header } from 'mint-ui';
Vue.component(Header.name, Header);

// mui样式
import './lib/mui/dist/css/mui.css'






// vm实例
var vm = new Vue({
	el:'#app',
	render: c => c(app)
})