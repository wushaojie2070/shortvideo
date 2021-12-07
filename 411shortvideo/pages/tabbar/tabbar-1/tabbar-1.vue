<template>
	<view class="header" :style="{marginTop:statusBarHeight+'px'}" v-if="!isLoading">
		<text class="header-left"></text>
		<view class="header-center">
			<view class="header-item" @click="tapFollow(0)">
				<text class="header-item-title">附近</text>
				<view class="header-item-line" :class="{'activate-line': curIndex === 0}"></view>
			</view>
			<view class="header-item" @click="tapFollow(1)">
				<text class="header-item-title">关注</text>
				<view class="header-item-line" :class="{'activate-line': curIndex === 1}"></view>
			</view>
			<view class="header-item" @click="tapFollow(2)">
				<text class="header-item-title">推荐</text>
				<view class="header-item-line" :class="{'activate-line': curIndex === 2}"></view>
			</view>
		</view>
		<image class="header-right-search normal-img" src="../../../static/images/icon-search.png" @click="goSearch">
	</view>
</template>

<script>
export default {
	data() {
		return {
			title: 'Hello',
			isLoading: false,
			curIndex: 2,
		};
	},
	onLoad() {},
	methods: {
		// 点击头部选项卡，切换页面
		tapFollow: function(current) {
			this.curIndex = current;
			this.playFollowStatus = this.curIndex === 1 ? true : false;
			this.playStatus = this.curIndex === 2 ? true : false;
		},
		
		showLoading() {
			this.isLoading = true;
		},
		hideLoading() {
			this.isLoading = false;
		},
	}
};
</script>

<style scoped>
	/* index start */
	.page {
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		background-color: #000000;
	}
	/* index end */
	
	/* 顶部选项卡 start */
	.header {
		position: absolute;
		left: 0;
		right: 0;
		flex-direction: row;
		height: 100rpx;
		line-height: 100rpx;
		align-items: center;
		padding-left: 40rpx;
		padding-right: 40rpx;
	}
	
	.header-center {
		flex: 1;
		flex-direction: row;
		align-items: center;
		justify-content: center;
	}
	
	.header-left,
	.header-right {
		color: #999;
		height: 100rpx;
		line-height: 100rpx;
		align-items: flex-start;
		justify-content: flex-end;
		font-family: iconfont;
	}
	
	.header-right-search {
		height: 100rpx;
		align-items: flex-start;
		justify-content: flex-end;
	}
	
	.header-item {
		align-items: center;
		margin-left: 6rpx;
		margin-right: 6rpx;
	}
	
	.header-item-title {
		width: 120rpx;
		text-align: center;
		height: 60rpx;
		line-height: 60rpx;
		color: #00aaff;
		font-size: 16px;
		font-weight: 600;
	}
	.header-refresh-title {
		width: 300rpx;
		text-align: center;
		height: 60rpx;
		line-height: 60rpx;
		color: #00aaff;
		font-size: 16px;
		font-weight: 600;
	}
	.header-item-line {
		height: 5rpx;
		line-height: 8rpx;
		width: 60rpx;
		border-radius: 8rpx;
	}
	/* 顶部选项卡 end */
	
	/* 选项卡轮播组件 start */
	.my-swiper {
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
	}
	.near-by {
		background-color: #000000;
		align-items: center;
		justify-content: center;
	}
	.my-follow {
		background-color: #000000;
		align-items: center;
		justify-content: center;
	}
	/* 选项卡轮播组件 end */
	.warn-info {
		color: #FFFFFF;
		font-size: 36rpx;
		font-weight: 600;
	}
	.normal-img {
		width: 50rpx;
		height: 50rpx;
		opacity: 0.8;
	}
</style>
