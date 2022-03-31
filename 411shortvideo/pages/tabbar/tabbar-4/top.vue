<template>
	<view>
		<view class="news">
			<view class="txt">
				消息
			</view>
		<view @click="tosearch()">
			<icon type="search" style="position: absolute;right: 5px;top: 10px;"></icon>
		</view>
		<view style="width: 100%;height: 1px;background: #393a43;"></view>
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return{
				addclass:"animated fadeInUpBig",
			}
		},
		methods:{
			tosearch(){
				uni.navigateTo({
					url:'search'
				})
			}
			},
	}
</script>

<style>
	.news{
		width:100%;
		height: 40px;
		background: #333333;
		position: relative;
	}
	.txt{
		text-align: center;
		line-height: 40px;
		font-size: 20px;
		color: #FFFFFF;
	}
</style>
