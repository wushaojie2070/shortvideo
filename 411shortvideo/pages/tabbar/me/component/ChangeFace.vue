<template>
	<view class="page">
		<view class="face-wrapper in-one-column" :style="{height: windowHeight+'px'}">
			<image mode="aspectFill" :src="faceUrl" class="face-size" v-if="faceUrl"></image>
			
			<view 
				@click="changeFace()"
				class="face-change in-one-column"
				:class="{'button-change-face':!changeTouched, 'button-change-face-touched': changeTouched}">
				<text style="color: #FFFFFF;align-self: center;">更换头像</text>
			</view>
		</view>
		<view class="save" @click="getFace()">
			<view class="save-face">
				<image
					src="../../../../static/img/me/me/保存.png"
					class="save-image">
				</image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return{
				faceUrl: "",
				updata: true,
				changeTouched: false,
				windowHeight: 0,
			}
		},
		onLoad(option) {
			var that = this;
			// console.log(option.faceUrl);
			that.faceUrl = option.faceUrl;
			uni.getSystemInfo({
			    success: function (res) {
			        that.windowHeight = res.windowHeight;
			    }
			});
		},
		methods:{
			changeFace(){
				let that = this;
				
				this.changeTouched = true;
				uni.chooseImage({
					count:1,
					sourceType: ['album'],    //从相册选择
					/* crop: {
						quality: 60,
						width: 750,
						height: 320,
					}, */
					success(resp) {
						console.log(resp);
						that.faceUrl = resp.tempFilePaths[0];
						console.log(that.faceUrl);
					}
				});
			},
			getFace(){
				var that = this;
				uni.saveImageToPhotosAlbum({
			        filePath: that.faceUrl,
				    success: function () {
		                console.log('save success');
			        }
		        });
			}
		},
		watch: {
			faceUrl(newValue,oldValue){
				var that = this;
				let pages = getCurrentPages();  //获取所有页面栈实例列表
				// let nowPage = pages[ pages.length - 1];  //当前页页面实例
				let prevPage = pages[ pages.length - 2 ];  //上一页页面实例
				console.log("prevPage",prevPage.$vm);
				prevPage.$vm.userInfo.faceUrl = that.faceUrl; 
				console.log(prevPage.$vm.userInfo.faceUrl);
				console.log(1);
			}
		}
	}
</script>

<style>
	.page {
		height: 100%;
		background-color: #333333;
		color: #d4d4d4;
	}
	.in-one-column{
		display: flex;
		flex-direction: column;	
		justify-content: center;
	}
	.face-wrapper {
		width: 100%;
		/* min-height: 1247rpx; */
	}
	.face-size {
		width: 750rpx;
		height: 750rpx;
		overflow: hidden;
		align-self: center;
	}
	.face-change{
		width: 250rpx;
		height: 80rpx;
		border-radius: 10rpx;
		margin-top: 150rpx;
		align-self: center;
	}
	.button-change-face {
		background-color: #1e1e1e;
	}
	.button-change-face-touched {
		background-color: #a8a5a5;
	}
	.save{
		position: absolute;
		bottom: 20rpx;
		left: 665rpx;
	}
	.save-face{
		width: 70rpx;
		height: 50rpx;
		padding: 10rpx 0;
		background-color: #858383;
		border-radius: 5rpx;
		text-align: center;
	}
	.save-image{
		width: 50rpx;
		height: 50rpx;
	}
</style>
