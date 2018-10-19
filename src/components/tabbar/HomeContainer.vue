<template>
	<div>
		<mt-swipe :auto="4000">
		  <mt-swipe-item v-for="item in lunbo" :key="item.url">
				<img :src="item.img" alt="">
		  </mt-swipe-item>
		</mt-swipe>
		<ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="src/img/menu1.png" alt="">
                <div class="mui-media-body">新闻资讯</div></a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="src/img/menu2.png" alt="">
                <div class="mui-media-body">图片分享</div></a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="src/img/menu3.png" alt="">
                <div class="mui-media-body">商品购买</div></a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="src/img/menu4.png" alt="">
                <div class="mui-media-body">留言反馈</div></a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="src/img/menu5.png" alt="">
                <div class="mui-media-body">视频专区</div></a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="src/img/menu6.png" alt="">
                <div class="mui-media-body">联系我们</div></a></li>
    </ul> 
	</div>
</template>
<script>
	import { Toast } from 'mint-ui';
	const path = require('path')
	export default {
		data (){
			return {
				msg: '123',
				lunbo: []
			}
		},
		methods: {
			getLunbo(){
				this.$http.get(path.join(__dirname, './src/data/lunbo.json')).then(result => {
					console.log(JSON.parse(result.bodyText))
					var result = JSON.parse(result.bodyText)
					if (result.status === 0) {
						this.lunbo = result.message
					}else {
						Toast('请求不成功')
					}
				})
			}
		},
		created (){
			this.getLunbo()
		}
	}
</script>
<style scoped>
	.mint-swipe {
		height: 200px;
	}
	.mint-swipe-item:first-child {
		background-color: red;
	}
	.mint-swipe-item:nth-child(2) {
		background-color: cyan;
	}
	.mint-swipe-item:last-child {
		background-color: hotpink;
	}
	.mint-swipe-item img {
		width: 100%;
		height: 100%;
	}
	.mui-grid-view.mui-grid-9 {
		background-color: #fff;
	}
	.mui-grid-view.mui-grid-9 .mui-media {
		border: 0;
	}
	.mui-grid-view.mui-grid-9 .mui-media img {
		width: 60px;
		height: 60px;
	}
	.mui-grid-view.mui-grid-9 .mui-media div {
		font-size: 14px;
	}
</style>