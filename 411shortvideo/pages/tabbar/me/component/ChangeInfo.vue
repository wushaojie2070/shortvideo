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
			<view class="right-part in-one-line">
<!-- 				<pickerAddress @change="changeAddress">
					{{ cityIndex }}
					<text class="right-content" style="align-self: center;">
						{{userInfo.country}}{{userInfo.province==""?"":' '+userInfo.province}}{{userInfo.city==""?"":' '+userInfo.city}}{{userInfo.district==""?"":' '+userInfo.district}}
					</text>
					<image class="right-arrow" style="align-self: center;" src="/static/img/me/Info/右单书名号.png"></image>
				</pickerAddress> -->

				<picker mode="multiSelector" 
					@change="bindAreaChange($event)" 
					:range="array" :value="cityIndex"
					@columnchange="columnchange">
					<text class="right-content" style="align-self: center;">
						中国 {{area[0] + ' ' + area[1] + ' ' + area[2]}}
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
	import Mapjs from "@/common/map.js"

	export default {
		data() {
			return {
				userId: '',
				userToken: '',
				userInfo: {},
				sex: ['女', '男', '请选择'],
				array: [
					[],
					[],
					[]
				],
				cityIndex: [0,0,0],
				area: ['','',''],
				windowHeight: 0,
				windowWidth: 0,
			}
		},
		onLoad() {
			this.getInfo()
			this.getArea()
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
				var map = Mapjs.map;
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
								if("http://127.0.0.1:9000" == res.data.data.bgImg.slice(0,21)){
									this.userInfo.bgImg = "http://skrvideo.fun:9000" + res.data.data.bgImg.slice(21);
								}
								if(res.data.data.face.slice(0,21) == "http://127.0.0.1:9000"){
									this.userInfo.face = "http://skrvideo.fun:9000" + res.data.data.face.slice(21);
								}
								this.area[0] = this.choseCityId(res.data.data.province);
								this.area[1] = this.choseCityId(res.data.data.city);
								this.area[2] = this.choseCityId(res.data.data.district);
								this.cityIndex[0] = res.data.data.province-1;
								for(var j = 0;j<map[this.cityIndex[0]].children.length;j++){
									if(map[this.cityIndex[0]].children[j].label.slice(0, 2) == this.area[1].slice(0, 2))
									this.cityIndex[1] = j;
								}
								for(var z = 0;z<map[this.cityIndex[0]].children[this.cityIndex[1]].children.length;z++){
									if(map[this.cityIndex[0]].children[this.cityIndex[1]].children[z].label.slice(0, 2) == this.area[2].slice(0, 2))
									this.cityIndex[2] = z;
								}
								this.getArea();
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
						this.userInfo.sex = res.data.data.sex;
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
						// this.userInfo = res.data.data;
						let temp = res.data.data.birthday.split('T') //split()方法， 以T字符为截断，划分成2块，返回一个数组
						this.userInfo.birthday = temp[0];
						uni.showToast({
							icon: "none",
							title: "修改成功！"
						});
					}
				})
			},
			getArea(){
				var map = Mapjs.map;
				this.array = [[],[],[]];
				for(var i = 0;i<map.length;i++){
					this.array[0].push(map[i].label);
				}
				for(var j = 0;j<map[this.cityIndex[0]].children.length;j++){
					this.array[1].push(map[this.cityIndex[0]].children[j].label);
				}
				for(var z = 0;z<map[this.cityIndex[0]].children[this.cityIndex[1]].children.length;z++){
					this.array[2].push(map[this.cityIndex[0]].children[this.cityIndex[1]].children[z].label)
				}
			},
			columnchange(d){
				console.log(d.detail.column, d.detail.value);
				if(d.detail.column == 0){
					this.cityIndex[d.detail.column] = d.detail.value;
					this.cityIndex[1] = 0;
					this.cityIndex[2] = 0;
				}else if (d.detail.column == 1){
					this.cityIndex[d.detail.column] = d.detail.value;
					this.cityIndex[2] = 0;
				}else if (d.detail.column == 2){
					this.cityIndex[d.detail.column] = d.detail.value;
				}
				this.getArea();
			},
			choseCityName(name){
				var map = Mapjs.map;
				var num = 0;
				for(var i = 0;i<map.length;i++){
					if(map[i].label.slice(0, 2) == name.slice(0,2)) 
					num = map[i].value;
					for(var j = 0;j<map[i].children.length;j++){
						if(map[i].children[j].label.slice(0, 2) == name.slice(0, 2)) 
						num = map[i].children[j].value;
						for(var z = 0;z<map[i].children[j].children.length;z++){
							if(map[i].children[j].children[z].label.slice(0, 2) == name.slice(0, 2))
								num = map[i].children[j].children[z].value;
						}
					}
				}
				return num;
			},
			choseCityId(num){
				var map = Mapjs.map;
				var name = "";
				for(var i = 0;i<map.length;i++){
					if(map[i].value == num) name = map[i].label;
					for(var j = 0;j<map[i].children.length;j++){
						if(map[i].children[j].value == num) name = map[i].children[j].label;
						for(var z = 0;z<map[i].children[j].children.length;z++){
							if(map[i].children[j].children[z].value == num)
								name = map[i].children[j].children[z].label;
						}
					}
				}
				return name;
			},
			bindAreaChange: function(e) {
				console.log('picker发送选择改变，携带值为', e.detail.value);
				this.area[0] = this.array[0][e.detail.value[0]]
				this.area[1] = this.array[1][e.detail.value[1]]
				this.area[2] = this.array[2][e.detail.value[2]]
				
				var userInfoChange = {
					"id": this.userId,
					"province": this.choseCityName(this.area[0]),
					"city": this.choseCityName(this.area[1]),
					"district": this.choseCityName(this.area[2])
				}
				console.log("userInfoChange",userInfoChange)
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
						if("http://127.0.0.1:9000" == res.data.data.bgImg.slice(0,21)){
							this.userInfo.bgImg = "http://skrvideo.fun:9000" + res.data.data.bgImg.slice(21);
						}
						if(res.data.data.face.slice(0,21) == "http://127.0.0.1:9000"){
							this.userInfo.face = "http://skrvideo.fun:9000" + res.data.data.face.slice(21);
						}
						this.area[0] = this.choseCityId(res.data.data.province);
						this.area[1] = this.choseCityId(res.data.data.city);
						this.area[2] = this.choseCityId(res.data.data.district);
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
			},
			array: {
				deep: true,
				handler(newValue,oldValue){
					console.log("no",newValue,oldValue)
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
