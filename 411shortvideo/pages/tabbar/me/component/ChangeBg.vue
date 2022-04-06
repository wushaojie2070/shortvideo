<template>
	<view class="page">
		<view class="bg-wrapper in-one-column" :style="{height: windowHeight+'px'}">
			<!-- <image mode="aspectFill" :src="bgUrl" class="bg-size" v-if="bgUrl"></image> -->
			<htz-image-upload mediaType='image' class="bg-size" :max="1" v-model="bgUrl" @uploadSuccess="ceshiUploadSuccess"
				action="https://skrvideo.fun/upload"></htz-image-upload>
			<view 
				v-if="isMe == true"
				@click="changeBg()"
				class="bg-change in-one-column"
				:class="{'button-change-bg':!changeTouched, 'button-change-bg-touched': changeTouched}">
				<text style="color: #FFFFFF;align-self: center;">更换背景</text>
			</view>
		</view>
		<view class="save" @click="getBg()">
			<view class="save-bg">
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
				bgUrl: '',
				isMe: true,
				userId: '',
				userToken: '',
				changeTouched: false,
				windowHeight: 0,
			}
		},
		onLoad(option) {
			var that = this;
			console.log(option);
			this.bgUrl = option.bg;
			if(option.isMe == null ||option.isMe == true){
				this.isMe = true;
			}else{
				this.isMe = false;
			}
			uni.getStorage({
				key: 'userId',
				success: function(res){
					that.userId = res.data;
				}
			})
			uni.getStorage({
				key: 'userToken',
				success: function(res){
					that.userToken = res.data;
				}
			})
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
					success(resp) {
						console.log(resp);
						that.bgUrl = resp.tempFilePaths[0];
						console.log(that.bgUrl);
						uni.request({
							method: "POST",
							url: "https://skrvideo.fun/upload",
							data: {
								"file": that.bgUrl
							},
							// dataType:'json',
							success:function(res){
								console.log(res)
							}
						})
						/* uni.request({
							url:"https://skrvideo.fun/userInfo/modifyImage",
							method: 'POST',
							data: {
								"type": 1,
								"userId": that.userId,
								"file": that.bgUrl
							},
							dataType:'json',
							header: {
								"headerUserId": that.userId,
								"headerUserToken": that.userToken
							},
							success: function(res){
								console.log(res);
							}
						}) */
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
				let prevPage = pages[ pages.length - 2 ];  //上一页页面实例
				/* console.log("prevPage",prevPage.$vm); */
				prevPage.$vm.userInfo.bgUrl = that.bgUrl; 
				/* console.log(prevPage.$vm.userInfo.bgUrl); */
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
