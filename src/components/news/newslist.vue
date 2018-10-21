<template>
	<div>
		<li class="mui-table-view-cell mui-media" v-for="item in list" :key="item.id">
			<router-link :to="'/home/newslist/'+item.id" class="">
				<img class="mui-media-object mui-pull-left" :src="item.img_url">
				<div class="mui-media-body">
					<h4>{{item.title}}</h4>
					<p class="mui-ellipsis">
						<span>{{item.zhaiyao}}</span>
						<span>点击量：{{item.click}}</span>
					</p>
				</div>
			</router-link>
		</li>
	</div>
</template>
<script>
	import { Toast } from 'mint-ui';
	export default {
		data (){
			return {
				list: []
			}
		},
		methods: {
			getList (){
				this.$http.get("src/data/news.json").then(result => {
					var res = JSON.parse(result.bodyText)
					// console.log(res)
					if (res.status == 0) {
						this.list = res.message
					}else {
						Toast("请求news错误")
					} 

				})
			}
		},
		created (){
			this.getList ()
		}
	}
</script>
<style scoped>
	ul,li {
		list-style: none;
	}
	.mui-media img {
		width: 42px;
		height: 42px;
	}
	.mui-ellipsis {
		display: flex;
		justify-content: space-between;
	}
	.mui-ellipsis span {
		color: blue;
	}
</style>