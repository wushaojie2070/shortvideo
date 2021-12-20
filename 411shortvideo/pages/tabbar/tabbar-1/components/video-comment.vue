<template>
	<view>
	<view style="width: 100%; height: 100%; left: 20rpx;" @click="cmtclose()">
		<image class="close-img" src="../../../../static/img/news/chahao.png" mode=""></image>
	</view>
	</view>
</template>

<script>
	import commentList from'./comment.js'
	export default{
		data(){
			return{
				isemoji:false,
				ismore:false,
				msg:'',
			}
		},
		methods:{
			cmtclose(){
				console.log("cmtclose");
				this.$emit('cmtclose',false);
			},
			
		},
		
	}
</script>

<style>
	.close-img{
		width: 30px;
		height: 30px;
		float: right;
		margin-right: 10px;
		margin-top: 10px;
	}

</style>
