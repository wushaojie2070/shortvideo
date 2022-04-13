<template>
	<view class="page">
		<view class="face-wrapper in-one-column" :style="{height: windowHeight+'px'}">
			<image mode="aspectFill" :src="face" class="face-size" v-if="face"></image>
			
			<view 
				v-if="isMe == 'true' || isMe == true"
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
				face: "",
				isMe: true,
				userId: '',
				userPageId: '',
				userToken: '',
				updata: true,
				changeTouched: false,
				windowHeight: 0,
			}
		},
		onLoad(option) {
			console.log(option.isMe)
			this.isMe = option.isMe;
			this.getInfo(option.isMe);
		},
		methods:{
			getInfo(flag) {
				console.log("f", flag)
				uni.getSystemInfo({
					success: (res) => {
						this.windowHeight = res.windowHeight;
					}
				});
				if (flag == "true" || flag == null) {
					uni.getStorage({
						key: "userToken",
						success: (res) => {
							this.userToken = res.data
						}
					});
					uni.getStorage({
						key: "userId",
						success: (res) => {
							this.userId = res.data
							uni.request({
								url: 'https://skrvideo.fun/userInfo/query?userId=' + this.userId,
								method: 'GET',
								success: (res) => {
									console.log("u", res.data.data);
									if(res.data.data.face.slice(0,21) == "http://127.0.0.1:9000"){
										this.face = "http://skrvideo.fun:9000" + res.data.data.face.slice(21);
									}
								}
							})
						}
					});
				} else if (flag == "false") {
					uni.getStorage({
						key: "userPageId",
						success: (res) => {
							this.userPageId = res.data
							uni.request({
								url: 'https://skrvideo.fun/userInfo/query?userId=' + this.userPageId,
								method: 'GET',
								success: (res) => {
									console.log("p", res.data.data);
									if(this.userInfo.face.slice(0,21) == "http://127.0.0.1:9000"){
										this.userInfo.face = "http://skrvideo.fun:9000" + this.userInfo.face.slice(21);
									}
								}
							})
						}
					});
				}
			},
			changeFace(){
				let that = this;
				this.changeTouched = true;
				uni.chooseImage({
					count:1,
					sourceType: ['album'],    //从相册选择
					success: (resp) => {
						console.log(resp);
						// that.face = resp.tempFilePaths[0];
						console.log("临时的路径" + that.face)
						uni.uploadFile({
							url: 'https://skrvideo.fun/userInfo/modifyImage',
							filePath: resp.tempFilePaths[0],
							name: 'file',
							formData: {
								"type": 2,
								"userId": this.userId,
							},
							header: {
								"headerUserId": this.userId,
								"headerUserToken": this.userToken
							},
							success: (res) => {
								console.log("成功了 http://skrvideo.fun:9000" + res.data.split(",")[7].slice(29,-1))
								this.face = "http://skrvideo.fun:9000" + res.data.split(",")[7].slice(29,-1);
								let pages = getCurrentPages(); //获取所有页面栈实例列表
								let prevPage = pages[pages.length - 2]; //上一页页面实例
								if (pages.length == 2) {
									prevPage.$vm.$children[0].userInfo.face = "http://skrvideo.fun:9000" + res.data.split(",")[7].slice(29,-1);
								} else if (pages.length == 3) {
									prevPage.$vm.userInfo.face = "http://skrvideo.fun:9000" + res.data.split(",")[7].slice(29,-1);
									uni.navigateBack({
										delta:1
									})
								}
								uni.showToast({
									icon: "none",
									title: "修改成功！"
								});
							}
						});
					}
				});
			},
			getFace(){
				var that = this;
				uni.saveImageToPhotosAlbum({
			        filePath: that.face,
				    success: function () {
		                console.log('save success');
			        }
		        });
			}
		},
		watch: {
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
