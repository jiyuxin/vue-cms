<template>
	<div>
		{{message}}
	</div>
</template>
<script>
	import { Toast } from 'mint-ui';
	export default {
		data (){
			return {
				id: this.$route.params.id,
				message: ''
			}
		},
		methods: {
			getInfo (){
				this.$http.get("src/data/news"+this.id+".json").then(result => {
					if (result.body.status == 0) {
						this.message = result.body.message
					}else {
						Toast("请求错误")
					}
				})
			}
		},
		created (){
			this.getInfo ()
		}
	}
</script>
<style>	</style>