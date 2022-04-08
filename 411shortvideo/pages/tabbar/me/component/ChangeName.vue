<template>
	<view class="page" :style="{height: windowHeight+'px'}">
		<view class="single-line-box">
			<view class="name-title">我的昵称</view>
			<input class="name-input" type="text" v-model="name" placeholder="请填入昵称..." maxlength="20" />
			<view class="name-label">
				<view class="label-cal">
					<text class="label-tips">*注：请设置2-20的昵称长度</text>
				</view>
				<view class="length-cal">
					<text class="length-text">{{wordsLength}}/20</text>
				</view>
			</view>
			<button :class="{'introduce-btn-change':!ifChange,'introduce-btn': ifChange}"
				@click="saveName()">保存</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userToken: '',
				userId: '',
				name: "",
				wordsLength: 0,
				windowWidth: 0,
				windowHeight: 0,
			}
		},
		onLoad() {
			this.getInfo();
		},
		/* 点击标签按钮的方法 */
		onNavigationBarButtonTap() {},
		methods: {
			getInfo() {
				uni.getSystemInfo({
					success: (res) => {
						this.windowWidth = res.windowWidth;
						this.windowHeight = res.windowHeight;
					}
				});
				uni.getStorage({
					key: "userToken",
					success: (res) => {
						this.userToken = res.data
					}
				});
				uni.getStorage({
					key: "userId",
					success: (res) => {
						this.userId = res.data;
						uni.request({
							url: 'https://skrvideo.fun/userInfo/query?userId=' + this.userId,
							method: 'GET',
							success: (res) => {
								this.name = res.data.data.nickname;
								this.wordsLength = res.data.data.nickname.length;
							}
						})
					}
				})
			},
			saveName() {
				var userInfoChange = {
					"id": this.userId,
					"nickname": this.name
				};
				if (this.name.length > 20 || this.name.length < 2) {
					uni.showToast({
						icon: "none",
						title: "昵称长度为2-20"
					})
				} else {
					var that = this;
					uni.request({
						url: "https://skrvideo.fun/userInfo/modifyUserInfo?type=1",
						method: "post",
						data: userInfoChange,
						dataType: "json",
						header: {
							"headerUserId": that.userId,
							"headerUserToken": that.userToken
						},
						success: (res) => {
							let pages = getCurrentPages(); //获取所有页面栈实例列表
							let prevPage = pages[pages.length - 2]; //上一页页面实例
							prevPage.$vm.userInfo.nickname = res.data.data.nickname;
							uni.showToast({
								icon: "none",
								title: "修改成功！"
							});
							uni.navigateBack({
								delta: 1,
							});
						}
					});
				}
			}
		},
		watch: {
			name:{
				deep:true,
				handler(newValue,oldValue){
					this.wordsLength = newValue.length
				}
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

	.in-one-line {
		display: flex;
		flex-direction: row;
	}

	.in-one-column {
		display: flex;
		flex-direction: column;
	}

	.single-line-box {
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: 30rpx;
		margin-top: 20rpx;
	}

	.name-title {
		font-size: 15px;
		line-height: 70rpx;
		margin: 10rpx 15rpx;
	}

	.name-input {
		margin: 0 10rpx;
		padding-left: 10px;
		color: #FFFFFF;
		font-size: 15px;
		height: 50px;
		background-color: #4a4c52;
		border-radius: 10px;
	}

	.name-label {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		margin: 0 5rpx;
	}

	.label-cal {
		padding: 10rpx;
	}

	.label-tips {
		font-size: 12px;
		font-weight: 400;
		color: #d4d4d4;
	}

	.length-cal {
		padding: 10rpx;
	}

	.length-text {
		font-size: 12px;
		font-weight: 400;
		color: #d4d4d4;
	}

	.introduce-btn {
		color: #FFFFFF;
		margin: 5%;
		background-color: #f43530;
	}

	.introduce-btn-change {
		color: #cfcfcf;
		margin: 5%;
		background-color: #cf2b28;
	}
</style>
