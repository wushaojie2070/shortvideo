<template>
	<view class="page">
		<view class="bg-wrapper in-one-column" :style="{height: windowHeight+'px'}">
			<image mode="aspectFill" :src="bgUrl" class="bg-size" v-if="bgUrl"></image>
			<!-- <image src="../../static/images/defaultBgImg.png" class="bg-size" style="align-self: center;"></image> -->
			<view 
				@click="changeBg()"
				class="bg-change in-one-column"
				:class="{'button-change-bg':!changeTouched, 'button-change-bg-touched': changeTouched}">
				<text style="color: #FFFFFF;align-self: center;">更换背景</text>
			</view>
		</view>
		<view class="save" @click="getBg()">
			<view class="save-bg">
				<image
					src="../../../../static/img/tabbar/me/me/保存.png"
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
				bgUrl: "",
				updata: true,
				changeTouched: false,
				windowHeight: 0,
			}
		},
		onLoad(option) {
			var that = this;
			console.log(option.bg);
			this.bgUrl = option.bg;
			uni.getSystemInfo({
			    success: function (res) {
			        that.windowHeight = res.windowHeight;
			    }
			});
		},
		methods:{
			changeBg(){
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
						that.bgUrl = resp.tempFilePaths[0];
						console.log(that.bgUrl);
					}
				});
			},
			getBg(){
				var that = this;
				uni.saveImageToPhotosAlbum({
			        filePath: that.bgUrl,
				    success: function () {
		                console.log('save success');
			        }
		        });
			}
		},
		watch: {
			bgUrl(newValue,oldValue){
				var that = this;
				let pages = getCurrentPages();  //获取所有页面栈实例列表
				// let nowPage = pages[ pages.length - 1];  //当前页页面实例
				let prevPage = pages[ pages.length - 2 ];  //上一页页面实例
				console.log("prevPage",prevPage.$vm);
				prevPage.$vm.userInfo.bgUrl = that.bgUrl; 
				console.log(prevPage.$vm.userInfo.bgUrl);
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
	.bg-wrapper {
		width: 100%;
		/* min-height: 1247rpx; */
	}
	.bg-size {
		width: 750rpx;
		height: 320rpx;
		overflow: hidden;
		align-self: center;
	}
	.bg-change{
		width: 250rpx;
		height: 80rpx;
		border-radius: 10rpx;
		margin-top: 150rpx;
		align-self: center;
	}
	.button-change-bg {
		background-color: #1e1e1e;
	}
	.button-change-bg-touched {
		background-color: #a8a5a5;
	}
	.save{
		position: absolute;
		bottom: 20rpx;
		left: 665rpx;
	}
	.save-bg{
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
