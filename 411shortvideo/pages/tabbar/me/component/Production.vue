<template>
	<view class="vlog-list">
		<block v-for="vlog in publicVlogList" :key="vlog.id" >
			<video 
				class="vlog-cover" 
				:src="vlog.cover" 
				@click="goToVlog(vlog.id)"
				mode="aspectFit">
			</video>
		</block>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				currentTab:0,
				publicVlogList:[
					{
						id:1,
						cover:require('../../../static/img/tabbar/me/me/share_5dcd70c6e6d7add2cbeefee50119561a.mp4'),
					},
					{
						id:2,
						cover:require('../../../static/img/tabbar/me/me/share_79a09a8d46c794590c02d83948a28b55.mp4'),
					},
					{
						id:3,
						cover:require('../../../static/img/tabbar/me/me/share_1276326b0513e8d1ebb43378fec61ec9.mp4'),
					},
					{
						id:4,
						cover:require('../../../static/img/tabbar/me/me/share_2846016b041cbecc65a2796efa2e0a01.mp4'),
					}
				],
			}
		},
		onLoad() {
	
		},
		methods: {
	
		}
	}
</script>

<style>
	.vlog-list {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-between;
		background-color: #000000;
	}
	.vlog-cover {
		width: 32.8%;
		height: 440rpx;
		border: 1rpx solid #000000;
		align-self: center;
		show-play-btn: false;
		controls: false;
		show-fullscreen-btn: false;
	}
</style>
