<template>
	<view class="page">
		<view class="introduce" :style="{'width': windowWidth + 'px','height': windowHeight +'px'}">
			<text class="introduce-title">个人简介</text>
			<view @click="ifChange = true">
				<textarea class="introduce-textarea" v-model="introduce" maxlength="200" placeholder="这家伙很懒，什么都没留下~"
					placeholder-style="color: #FFFFFF;">
				</textarea>
			</view>
			<button :class="{'introduce-btn-change':!ifChange,'introduce-btn': ifChange}"
				@click="saveIntroduce()">保存</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userId: '',
				introduce: "",
				windowWidth: 0,
				windowHeight: 0,
				ifChange: false,
			}
		},
		onLoad(option) {
			this.getInfo();
		},
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
								if (res.data.data.description == "这家伙很懒，什么都没留下~") {
									this.introduce = ""
								} else {
									this.introduce = res.data.data.description;
								}
							}
						})
					}
				})
			},
			saveIntroduce() {
				var userInfoChange = {
					"id": this.userId,
					"description": this.introduce
				};
				var that = this;
				uni.request({
					url: "https://skrvideo.fun/userInfo/modifyUserInfo?type=6",
					method: "post",
					data: userInfoChange,
					dataType: "json",
					header: {
						"headerUserId": that.userId,
						"headerUserToken": that.userToken
					},
					success: (res) => {
						console.log("1", res)
						let pages = getCurrentPages(); //获取所有页面栈实例列表
						let prevPage = pages[pages.length - 2]; //上一页页面实例
						if (pages.length == 2) {
							prevPage.$vm.$children[0].userInfo.description = res.data.data.description;
						} else if (pages.length == 3) {
							prevPage.$vm.userInfo.description = res.data.data.description;
						}
						uni.showToast({
							icon: "none",
							title: "修改成功！"
						});
						uni.navigateBack({
							delta: 1,
						});
					}
				});
			},
		},
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
		justify-content: center;
	}

	/* 文本内容 */
	.introduce {
		vertical-align: middle;
	}

	.introduce-title {
		display: inline-block;
		font-size: 14px;
		margin: 5% 5% 2%;
	}

	.introduce-textarea {
		display: inline-block;
		font-size: 14px;
		color: #FFFFFF;
		width: 80%;
		margin: 0 5%;
		padding: 5%;
		background-color: #707070;
		border-radius: 10rpx;
	}

	.introduce-textarea:checked {
		color: #FFFFFF !important;
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
