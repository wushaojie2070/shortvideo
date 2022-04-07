<template>
	<!-- 	<view class="page" :style="{height: windowHeight+'px'}"> -->
	<view class="page" style="height: 100%;">
		<!-- <scroll-view scroll-y="true"> -->
		<view class="face-box in-one-column">
			<image mode="aspectFill" class="user-face" @click="changeMyFace()" :src="userInfo.face">
			</image>
			<view style="padding-top: 40rpx;">点击更换头像</view>
		</view>

		<view class="single-line-box in-one-line">
			<text class="left-lable" style="align-self: center;">昵称</text>

			<view class="right-part in-one-line" @click="ChangeName()">
				<text class="right-content" style="align-self: center;">{{userInfo.nickname}}</text>
				<image class="right-arrow" style="align-self: center;" src="/static/img/me/Info/右单书名号.png"></image>
			</view>
		</view>

		<view class="single-line-box in-one-line" @click="ChangeSKId()">
			<text class="left-lable" style="align-self: center;">拾刻号</text>

			<view class="right-part in-one-line">
				<text class="right-content" style="align-self: center;">{{userInfo.imoocNum}}</text>
				<image class="right-arrow" style="align-self: center;" src="/static/img/me/Info/右单书名号.png"></image>
			</view>
		</view>

		<view class="single-line-box in-one-line">
			<text class="left-lable" style="align-self: center;">性别</text>

			<view class="right-part in-one-line">
				<picker style="align-self: center;" @change="bindPickerChange($event,sex)" :value="userInfo.sex"
					:range="sex">
					<text class="right-content">{{sex[userInfo.sex]}}</text>
					<image class="right-arrow" style="align-self: center;" src="/static/img/me/Info/右单书名号.png"></image>
				</picker>
			</view>
		</view>

		<view class="single-line-box in-one-line">
			<text class="left-lable" style="align-self: center;">生日</text>

			<view class="right-part in-one-line">
				<picker mode="date" :start="startDate" :end="endDate" @change="bindDateChange($event)"
					:value="userInfo.birthday">
					<text class="right-content" style="align-self: center;">{{userInfo.birthday}}</text>
					<image class="right-arrow" style="align-self: center;" src="/static/img/me/Info/右单书名号.png"></image>
				</picker>
			</view>
		</view>

		<view class="single-line-box in-one-line">
			<text class="left-lable" style="align-self: center;">所在地</text>
			<view class="right-part in-one-line" @click="modifyLocation()">
				<picker mode="multiSelector" @change="bindAreaChange($event)" :range="array">
					<text class="right-content" style="align-self: center;">
						{{userInfo.country}}{{userInfo.province==""?"":' '+userInfo.province}}{{userInfo.city==""?"":' '+userInfo.city}}
					</text>
					<image class="right-arrow" style="align-self: center;" src="/static/img/me/Info/右单书名号.png"></image>
				</picker>
			</view>
		</view>

		<view class="single-line-box in-one-line">
			<text class="left-lable" style="align-self: center;">个人简介</text>

			<view class="right-part in-one-line" @click="changeIntroduce()">
				<text class="right-content my-desc-info" style="align-self: center;">{{userInfo.introduce}}</text>
				<image class="right-arrow" style="align-self: center;" src="/static/img/me/Info/右单书名号.png"></image>
			</view>
		</view>

		<view class="single-line-box in-one-line">
			<text class="left-lable" style="align-self: center;">二维码</text>

			<view class="right-part in-one-line" @click="myQrCode()">
				<image class="right-content my-desc-info" style="width: 25px;height: 25px;"
					src="/static/img/me/me/二维码.png"></image>
				<image class="right-arrow" style="align-self: center;" src="/static/img/me/Info/右单书名号.png"></image>
			</view>
		</view>

		<view class="single-line-box in-one-line">
			<text class="left-lable" style="align-self: center;">主页背景</text>

			<view class="right-part in-one-line" @click="changeMyBg()">
				<text class="right-content my-desc-info" style="align-self: center;">更换背景图片</text>
				<image class="right-arrow" style="align-self: center;" src="/static/img/me/Info/右单书名号.png"></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userId: '',
				userToken: '',
				userInfo: {},
				sex: ['女', '男', '请选择'],
				array: [
					['中国'],
					['浙江', '江苏', '成都', '东北', '大连'],
					['杭州', '绍兴', '宁波', '温州', '富阳', '余杭']
				],
				windowHeight: 0,
				windowWidth: 0,
			}
		},
		onLoad() {
			this.getInfo()
		},
		computed: {
			startDate() {
				return this.getDate('start');
			},
			endDate() {
				return this.getDate('end');
			}
		},
		methods: {
			getInfo() {
				uni.getSystemInfo({
					success: function(res) {
						that.windowWidth = res.windowWidth;
						that.windowHeight = res.windowHeight;
					}
				});
				uni.getStorage({
					key: "userToken",
					success: (res) => {
						this.userToken = res.data
					}
				})
				uni.getStorage({
					key: "userId",
					success: (res) => {
						this.userId = res.data
						uni.request({
							url: 'https://skrvideo.fun/userInfo/query?userId=' + this.userId,
							method: 'GET',
							success: (res) => {
								console.log("12", res.data.data);
								this.userInfo = res.data.data;
								//时间格式转换
								let temp = res.data.data.birthday.split('T') 
								//split()方法，以T字符为截断，划分成2块，返回一个数组
								this.userInfo.birthday = temp[0]
							}
						})
					}
				})
			},
			/* 修改性别 */
			bindPickerChange: function(e) {
				console.log('picker发送选择改变，携带值为', e.target.value);
				var userInfoChange = {
					"id": this.userId,
					"sex": e.target.value
				}
				var that = this;
				uni.request({
					url: "https://skrvideo.fun/userInfo/modifyUserInfo?type=3",
					method: "post",
					data: userInfoChange,
					dataType: "json",
					header: {
						"headerUserId": that.userId,
						"headerUserToken": that.userToken
					},
					success: (res) => {
						this.userInfo = res.data.data;
						let temp = res.data.data.birthday.split('T') //split()方法， 以T字符为截断，划分成2块，返回一个数组
						this.userInfo.birthday = temp[0];
						uni.showToast({
							icon: "none",
							title: "修改成功！"
						});
					}
				})
			},
			getDate(type) {
				const date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();

				if (type === 'start') {
					year = year - 40;
				} else if (type === 'end') {
					year = year + 2;
				}
				month = month > 9 ? month : '0' + month;
				day = day > 9 ? day : '0' + day;
				return `${year}-${month}-${day}`;
			},
			bindDateChange: function(e) {
				console.log('picker发送选择改变，携带值为', e.target.value);
				var date = e.target.value.split("-");
				date[2] = parseInt(date[2]) + 1
				var userInfoChange = {
					"id": this.userId,
					"birthday": date[0] + "-" + date[1] + "-" + date[2]
				}
				console.log("bdsc ", userInfoChange.birthday);
				var that = this;
				uni.request({
					url: "https://skrvideo.fun/userInfo/modifyUserInfo?type=4",
					method: "post",
					data: userInfoChange,
					dataType: "json",
					header: {
						"headerUserId": that.userId,
						"headerUserToken": that.userToken
					},
					success: (res) => {
						console.log("12", res.data.data);
						this.userInfo = res.data.data;
						let temp = res.data.data.birthday.split('T') //split()方法， 以T字符为截断，划分成2块，返回一个数组
						this.userInfo.birthday = temp[0];
						uni.showToast({
							icon: "none",
							title: "修改成功！"
						});
					}
				})
			},
			bindAreaChange: function(e) {
				console.log('picker发送选择改变，携带值为', e.detail.value);
				var userInfoChange = {
					"id": this.userId,
					"country": this.array[0][e.detail.value[0]],
					"province": this.array[1][e.detail.value[1]],
					"city": this.array[2][e.detail.value[2]]
				}
				var that = this;
				uni.request({
					url: "https://skrvideo.fun/userInfo/modifyUserInfo?type=5",
					method: "post",
					data: userInfoChange,
					dataType: "json",
					header: {
						"headerUserId": that.userId,
						"headerUserToken": that.userToken
					},
					success: (res) => {
						this.userInfo = res.data.data;
						let temp = res.data.data.birthday.split('T') //split()方法， 以T字符为截断，划分成2块，返回一个数组
						this.userInfo.birthday = temp[0];
						uni.showToast({
							icon: "none",
							title: "修改成功！"
						});
					}
				})
			},
			changeMyFace() {
				var that = this;
				uni.navigateTo({
					animationType: "fade-in",
					url: "ChangeFace",
				})
			},
			ChangeName() {
				var that = this;
				uni.navigateTo({
					animationType: "fade-in",
					url: "ChangeName",
				})
			},
			ChangeSKId() {
				var that = this;
				if (this.userInfo.canImoocNumBeUpdated) {
					uni.navigateTo({
						animationType: "fade-in",
						url: "ChangeSKId",
					})
				}else {
					uni.showToast({
						icon: "none",
						title: "拾刻号未到可修改时间！"
					})
				}

			},
			myQrCode() {
				var that = this;
				uni.navigateTo({
					animationType: "zoom-fade-out",
					url: "QrCode",
				})
			},
			changeIntroduce() {
				var that = this;
				uni.navigateTo({
					animationType: "zoom-fade-out",
					url: "ChangeIntroduce",
				})
			},
			changeMyBg() {
				var that = this;
				uni.navigateTo({
					animationType: "zoom-fade-out",
					url: "ChangeBg",
				})
			},
		},
		watch: {
			userInfo: {
				deep: true,
				handler(newValue, oldValue) {
					let pages = getCurrentPages(); //获取所有页面栈实例列表
					let prevPage = pages[pages.length - 2]; //上一页页面实例
					prevPage.$vm.$children[0].userInfo = this.userInfo;
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
		justify-content: center;
	}

	.in-one-column {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	/* 头像 */
	.face-box {
		text-align: center;
		padding-top: 80rpx;
		margin-bottom: 80rpx;
	}

	.user-face {
		width: 200rpx;
		height: 200rpx;
		border-radius: 100rpx;
		border-width: 1px;
		border-color: #F1F1F1;
		align-self: center;
	}

	/* 列表更改项 */
	.single-line-box {
		justify-content: space-between;
		padding: 30rpx;
	}

	.right-part {
		justify-content: flex-end;
	}

	.right-arrow {
		width: 32rpx;
		height: 32rpx;
		margin-left: 20rpx;
	}

	.left-lable {
		color: #FFFFFF;
		font-size: 15px;
	}

	.right-content {
		color: #bfbfbf;
		font-size: 15px;
	}

	.my-desc-info {
		width: 360rpx;
		text-align: right;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
</style>
