import VueRouter from 'vue-router'
import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import ShopContainer from './components/tabbar/ShopContainer.vue'
import searchContainer from './components/tabbar/searchContainer.vue'



var router = new VueRouter({
	routes: [
		{path: '/', redirect: '/home'},
		{path: '/home', component: HomeContainer},
		{path: '/member', component: MemberContainer},
		{path: '/shopcar', component: ShopContainer},
		{path: '/search', component: searchContainer}
	],
	linkActiveClass: 'mui-active'
})

export default router