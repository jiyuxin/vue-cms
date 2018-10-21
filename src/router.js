import VueRouter from 'vue-router'
import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import ShopContainer from './components/tabbar/ShopContainer.vue'
import SearchContainer from './components/tabbar/searchContainer.vue'
import NewsList from './components/news/newslist.vue'
import NewsInfo from './components/news/newsinfo.vue'


var router = new VueRouter({
	routes: [
		{path: '/', redirect: '/home'},
		{path: '/home', component: HomeContainer},
		{path: '/member', component: MemberContainer},
		{path: '/shopcar', component: ShopContainer},
		{path: '/search', component: SearchContainer},
		{path: '/home/newslist', component: NewsList},
		{path: '/home/newslist/:id', component: NewsInfo}
	],
	linkActiveClass: 'mui-active'
})

export default router