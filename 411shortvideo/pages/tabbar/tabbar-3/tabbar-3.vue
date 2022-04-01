<template>
	<view class="content" :class="{'active':active}">
		<view class="tabbar-box-wrap">
			<view class="tabbar-box">
				<view class="tabbar-box-item" @click="goToPage('/pages/tabbar-3-detial/tabbar-3-release/tabbar-3-release')">
					<image class="box-image" src="../../../static/img/release.png" mode="aspectFit"></image>
					<text class="explain">发图文</text>
				</view>
				<view class="tabbar-box-item" @click="goToPage('/pages/tabbar-3-detial/tabbar-3-video/tabbar-3-video')">
					<image class="box-image" src="../../../static/img/video.png" mode="aspectFit"></image>
					<text class="explain">发视频</text>
				</view>
				<view class="tabbar-box-item" @click="goToPage('/pages/tabbar-3-detial/tabbar-3-qa/tabbar-3-qa')">
					<image class="box-image" src="../../../static/img/qa.png" mode="aspectFit"></image>
					<text class="explain">提问</text>
				</view>
			</view>
		</view>
	</view>
</template> 

<script>
export default {
	data() {
		return {
			active: false
		};
	},
	onLoad() {},
	onShow() {
		// setTimeout(() => {
		this.active = true;
		// }, 500);
	},
	onHide() {
		this.active = false;
	},
	methods: {
		goToPage(url) {
			if (!url) return;
			uni.navigateTo({
				url
			});
		}
	}
};
</script>

<style lang="scss" scoped>
.content {
	display: flex;
	// align-items: center;
	justify-content: center;
	width: 100%;
	/* #ifdef H5 */
	height: calc(100vh - var(--window-bottom) - var(--window-top));
	/* #endif */
	/* #ifndef H5 */
	height: 100vh;
	/* #endif */
	transition: opacity 0.3s;
	background: #999;
	opacity: 0;
	&.active {
		opacity: 1;
	}
}
.tabbar-box-wrap {
	position: absolute;
	width: 100%;
	padding: 50upx;
	box-sizing: border-box;
	.tabbar-box {
		position: relative;
		display: flex;
		width: 100%;
		background: #fff;
		border-radius: 20upx;
		padding: 15upx 20upx;
		box-sizing: border-box;
		z-index: 2;
		box-shadow: 0px 2px 5px 2px rgba(0, 0, 0, 0.1);
		&:before {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background: #ffffff;
			border-radius: 20upx;
			z-index: 2;
		}
		.tabbar-box-item {
			// position: relative;
			width: 100%;
			z-index: 3;
			margin: 10upx;
			color: $uni-color-subtitle;
			text-align: center;
			font-size: $uni-font-size-base;
			.box-image {
				width: 100%;
				height: $uni-img-size-lg;
			}
		}
	}
}
</style>
