<template>
	<view class="content">
		<view>作者的个人信息页面(待编写)(类似"我"页面)</view>
		<view>这个作者的id:{{userPageId}}</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				userPageId: "",
			}
		},
		onLoad(params) {
			// 从视频页面，点击用户头像传递过来的id
			var userPageId = params.userPageId;
			this.userPageId = userPageId;

		},
		methods: {

		}
	}
</script>

<style>
	.content {
		text-align: center;
		height: 400upx;
		margin-top: 200upx;
	}
</style>
