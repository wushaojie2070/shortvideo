<template>
	<view class="page">
		<view class="orcde" :style="{height: windowHeight+'px'}">
			<view style="width: 100%;height: 55%;">
				<image
					mode="widthFix"
					src="../../../../static/img/me/qrcode/二维码_图.png"
					style="width: 90%;position: relative;left: 5%;top: 90rpx">
				</image>
				<image
					mode="aspectFill"
					:src="faceUrl"
					style="width: 220rpx;height: 220rpx;border-radius: 110rpx;position: absolute;left: 260rpx;top: 327rpx">
				</image>
			</view>
			<view class="orcde-text">
				<view class="text-title">{{name}}</view>
				<view class="text-context">拾刻扫一扫，立即关注我</view>
			</view>
			
			<view class="orcde-btn in-one-line">
				<view class="btn-one" @click="scan()">
					<view class="btn-bg">
						<image
							mode="aspectFit"
							src="../../../../static/img/me/qrcode/扫一扫.png"
							style="width: 70rpx;height: 70rpx;"
							class="btn-image">
						</image>
					</view>
					<view class="btn-name">扫一扫</view>
				</view>
				<view class="btn-one">
					<view class="btn-bg" @click="getQrCode()">
						<image
							mode="aspectFit"
							src="../../../../static/img/me/qrcode/保存.png"
							style="width: 65rpx;height: 65rpx;"
							class="btn-image">
						</image>
					</view>
					<view class="btn-name" @click="getQrCode()">保存</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
		data(){
			return{
				bgUrl: "",
				faceUrl: "",
				name: "",
				windowHeight: 0,
				windowWidth: 0,
			}
		},
		onLoad(option) {
			const that = this;
			console.log(option);
			this.faceUrl = option.faceUrl;
			this.name = option.name;
			uni.getSystemInfo({
			    success: function (res) {
			        that.windowHeight = res.windowHeight;
					that.windowWidth = res.windowWidth;
			    }
			});
		},
		methods:{
			goBack(){
				uni.navigateBack({
					delta: 1,
				})
			},
			scan(){
				var that = this;
				uni.scanCode({
					scanType: "qrCode",
					complete: function (resp) {
						console.log('条码类型：' + resp.scanType);
						console.log('条码内容：' + resp.result);
					}
				})
			},
			getQrCode(){
				console.log("该功能尚未开发，敬请期待...");
			}
		},
	}
</script>

<style>
	.page {
		height: 100%;
		background-color: #333333;
		color: #d4d4d4;
	}
	.in-one-line{
		display: flex;
		flex-direction: row;
		justify-content: center;
	}
	.in-one-column{
		display: flex;
		flex-direction: column;	
		justify-content: center;
	}
	/* 文字 */
	.orcde-text{
		width: 100%;
		text-align: center;
		position: relative;
		top: 50rpx;
	}
	.text-title{
		color: #FFFFFF;
		font-size: 24px;
		font-weight: bold;
		padding: 10rpx 0;
	}
	.text-context{
		font-size: 14px;
		padding: 20rpx 0;
	}
	/*  按钮 */
	.orcde-btn{
		width: 100%;
		position: relative;
		top: 13%;
	}
	.btn-one{
		text-align: center;
		width: 50%;
	}
	.btn-bg{
		display: inline-block;
		width: 120rpx;
		height: 120rpx;
		border-radius: 60rpx;
		background-color: #474747;
		vertical-align: middle;
		margin: 10rpx 0;
	}
	.btn-image{
		display: block;
		padding: 28rpx 28rpx;
	}
	.btn-name{
		font-size: 12px;
	}
</style>
