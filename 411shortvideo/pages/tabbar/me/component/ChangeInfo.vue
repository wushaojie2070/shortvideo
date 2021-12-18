<template>
	<view class="page" :style="{height: windowHeight+'px'}">
		<!-- <scroll-view scroll-y="true"> -->
		<view class="face-box in-one-column">
			<image 
				mode="aspectFill"
				class="user-face" 
				@click="changeMyFace()"
				:src="userInfo.faceUrl">
			</image>
			<view style="padding-top: 40rpx;">点击更换头像</view>
		</view>
		
		<view class="single-line-box in-one-line">
			<text class="left-lable" style="align-self: center;">昵称</text>
			
			<view class="right-part in-one-line" @click="ChangeName()">
				<text class="right-content" style="align-self: center;">{{userInfo.name}}</text>
				<image 
					class="right-arrow" 
					style="align-self: center;" 
					src="/static/img/tabbar/me/Info/右单书名号.png" ></image>
			</view>
		</view>
		
		<view class="single-line-box in-one-line" @click="ChangeSKId()">
			<text class="left-lable" style="align-self: center;">拾刻号</text>
				
			<view class="right-part in-one-line">
				<text class="right-content" style="align-self: center;">{{userInfo.SKId}}</text>
				<image 
					class="right-arrow" 
					style="align-self: center;" 
					src="/static/img/tabbar/me/Info/右单书名号.png" ></image>
			</view>
		</view>
			
		<view class="single-line-box in-one-line">
			<text class="left-lable" style="align-self: center;">性别</text>
			
			<view class="right-part in-one-line" >
				<picker 
					style="align-self: center;" 
					@change="bindPickerChange($event,sex)" 
					:value="userInfo.sex" 
					:range="sex">
					<text class="right-content">{{sex[userInfo.sex]}}</text>
				</picker>
				<!-- <text class="right-content" style="align-self: center;">{{userInfo.sex == 1 ? '女' : ''}}</text>
				<text class="right-content" style="align-self: center;">{{userInfo.sex == 0 ? '男' : ''}}</text> -->
				<image 
					class="right-arrow" 
					style="align-self: center;" 
					src="/static/img/tabbar/me/Info/右单书名号.png" ></image>
			</view>
		</view>
			
		<!-- <view class="single-line-box in-one-line">
			<text class="left-lable" style="align-self: center;">生日</text>
				
			<view class="right-part in-one-line" @click="modifyBirthday()">
				<text class="right-content" style="align-self: center;">{{getGraceDateStr(new Date(myInfo.birthday))}}</text>
				<image 
					class="right-arrow" 
					style="align-self: center;" 
					src="/static/img/tabbar/me/Info/右单书名号.png"src="/static/img/tabbar/me/Info/右单书名号.png" ></image>
			</view>
		</view>
			
		<view class="single-line-box in-one-line">
			<text class="left-lable" style="align-self: center;">所在地</text>
				
			<view class="right-part in-one-line" @click="modifyLocation()">
				<text class="right-content" style="align-self: center;">{{myInfo.country}}{{myInfo.province==""?"":'·'+myInfo.province}}{{myInfo.city==""?"":'·'+myInfo.city}}</text>
				<image 
					class="right-arrow" 
					style="align-self: center;" 
					src="/static/img/tabbar/me/Info/右单书名号.png"src="/static/img/tabbar/me/Info/右单书名号.png" ></image>
			</view>
		</view> -->
			
		<view class="single-line-box in-one-line">
			<text class="left-lable" style="align-self: center;">个人简介</text>
			
			<view class="right-part in-one-line" @click="changeIntroduce()">
				<text class="right-content my-desc-info" style="align-self: center;">{{userInfo.introduce}}</text>
				<image 
					class="right-arrow" 
					style="align-self: center;" 
					src="/static/img/tabbar/me/Info/右单书名号.png" ></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userInfo: {},
				sex:['女','男'],
				sexId: 0,
				windowHeight: 0,
				windowWidth: 0,
			}
		},
		onLoad(option) {
			var that = this;
			console.log(JSON.parse(option.userInfo));
			this.userInfo = JSON.parse(option.userInfo);
			this.sexId = this.userInfo.sex;
			uni.getSystemInfo({
			    success: function (res) {
					that.windowWidth = res.windowWidth;
			        that.windowHeight = res.windowHeight;
			    }
			});
		},
		methods: {
			getSex(id){
				return this.sex[id];
			},
			/* 修改性别 */
			bindPickerChange: function(e) {
		        console.log('picker发送选择改变，携带值为', e.target.value);
	            this.userInfo.sex = e.target.value;
			},
			changeMyFace(){
				var that = this;
				uni.navigateTo({
					animationType: "fade-in",
					url: "ChangeFace?faceUrl="+that.userInfo.faceUrl,
				})
			},
			ChangeName(){
				var that = this;
				uni.navigateTo({
					animationType: "fade-in",
					url: "ChangeName?name="+that.userInfo.name,
				})
			},
			ChangeSKId(){
				var that = this;
				uni.navigateTo({
					animationType: "fade-in",
					url: "ChangeSKId?SKId="+that.userInfo.SKId,
				})
			},
			myQrCode(){
				var that = this;
				uni.navigateTo({
					animationType: "zoom-fade-out",
					url: "QrCode?faceUrl="+that.userInfo.faceUrl+"&name="+that.userInfo.name,
				})
			},
			changeIntroduce(){
				var that = this;
				uni.navigateTo({
					animationType: "zoom-fade-out",
					url: "ChangeIntroduce?introduce="+that.userInfo.introduce,
				})
			},
		}
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
