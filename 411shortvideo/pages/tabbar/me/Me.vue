<template>
	<view class="page">
		<view v-if="!userIsLogin" class="login-info-wrapper" style="height: 100%" @click="goLogin()">
			<text class="login-info" style="align-self: center;" >{{loginWords}}</text>
		</view>
		
		<view v-if="userIsLogin" style="height: 80%;">
			<!-- <view :style="{height: screenHeight + 'px'}"> -->
			<image id="mybg"
				:src="userInfo.bgUrl" 
				mode="aspectFill" 
				@click="changeMyBg()"
				class="bgimage">
			</image>
			<view class="bgadd"></view>
			<view class="other-more in-one-line">
				<view 
					@click="goMyInfo()"
					class="other-more-visitor in-one-line">
					<text class="other-more-visitor-text">
						<image 
							src="../../../static/img/tabbar/me/me/访客.png"
							style="width: 40rpx;height: 40rpx;margin-bottom: -12rpx;">
						</image>
						新访客 {{userInfo.newVisitors}}
					</text>
				</view>
				<image
					src="../../../static/img/tabbar/me/me/更多.png"
					@click="addFriends()"
					class="other-more-set">
				</image>
			</view>
			<!-- 点击获赞的弹窗 -->
			<uni-popup ref="popup" type="center">
			    <view class="win-praise">
					<image 
						mode="widthFix"
						src="../../../static/img/tabbar/me/qq_pic_merged_1639501330923.jpg">
					</image>
					<view class="win-praise-text">"{{userInfo.name}}"共获得{{userInfo.winPraise}}个赞</view>
					<hr style="color: #000000;opacity: 0.5;">
					<button style="background-color: #FFFFFF;line-height: 100rpx;" @click="close()">确认</button>
				</view>
			</uni-popup>
			<view class="mine">
				<view class="in-one-line">
					<image 
						:src="userInfo.faceUrl" 	
						mode="aspectFill" 
						@click="changeMyFace()"
						class="heat-image"></image>
					<view class="heat-info in-one-line">
						<view class="heat-info-one in-one-column" @click="open()">
							<text class="heat-info-title">获赞</text>
							<text class="heat-info-num">{{userInfo.winPraise}}</text>
						</view>
						<view class="heat-info-one in-one-column" @click="goMyFollows()">
							<text class="heat-info-title">关注</text>
							<text class="heat-info-num">{{userInfo.concern}}</text>
						</view>
						<view class="heat-info-one in-one-column" @click="goMyFans()">
							<text class="heat-info-title">粉丝</text>
							<text class="heat-info-num">{{userInfo.fans}}</text>
						</view>
					</view>
				</view>
				<view class="mine-infos in-one-column">
					<view class="infos-info">
						<text class="infos-info-name">{{userInfo.name}}</text><br>
						<text class="infos-info-code">拾刻号：</text>
						<text class="infos-info-code" @click="myQrCode()">{{userInfo.SKId}}</text>
						<image
							src="../../../static/img/tabbar/me/me/二维码.png"
							@click="myQrCode()"
							style="width: 20px;height: 20px;margin: 0 5px -5px;">
						</image>
					</view>
					<hr style="width: 100%;color: #FFFFFF;opacity: 0.2;">
					<text class="infos-introduction">
						{{userInfo.introduce}}
						<image
							src="../../../static/img/tabbar/me/me/编辑.png"
							style="width: 18px;height: 18px;margin-left: 13px;">
						</image>
					</text>
					<!-- <text style="position: relative; top: -520rpx;color: #ffffff;font-size: 14px;margin: 0 30rpx;">10年＋IT互联网老司机。5年在线教育经验。曾任技术经理、项目经理、技术总监、部门经理。福瑞博课创始人&CTO。</text> -->
					<view class="in-one-line">
						<view v-for="bq in userInfo.labels" :key="bq.id">
							<view class="infos-label-bg">
								<text class="infos-label-text">{{bq.label}}</text>
							</view>
						</view>
					</view>
				
					<view class="infos-btn in-one-line">
						<view @click="goMyInfo()" class="infos-btn-data infos-btn-data-first in-one-line">
							<text class="infos-btn-text">编辑资料</text>
						</view>
						<view @click="addFriends()" class="infos-btn-data in-one-line">
							<text class="infos-btn-text">添加好友</text>
						</view>
					</view>
				</view>
			</view>
			<!-- <view style="display: flex;flex-direction: row;justify-content: center;margin-right: 30rpx;"> 
			
			判断当前页是否是自己，如果是自己则显示编辑资料和设置，如果不是，则显示关注或取关 
				<view v-if="!isMe && isFollow" 
					@click="cancelFollow()"
					style="margin-right: 20rpx;border-width: 1px;border-color: #FFFFFF;width: 200rpx;height: 66rpx;background-color: #545456;opacity: 0.8;border-radius: 40rpx;display: flex;flex-direction: row;justify-content: center;align-self: center;">
					<text style="font-size: 13px;color: #FFFFFF;font-weight: 500;align-self: center;">已关注</text>
				</view>
				<view v-if="!isMe && !isFollow" 
					@click="followMe()"
					style="margin-right: 20rpx;border-width: 1px;border-color: #FFFFFF;width: 200rpx;height: 66rpx;background-color: #ef274d;opacity: 0.8;border-radius: 40rpx;display: flex;flex-direction: row;justify-content: center;align-self: center;">
					<text style="font-size: 13px;color: #FFFFFF;font-weight: 500;align-self: center;">关注我</text>
				</view>
			</view> -->
			<view class="content">
				<view class="in-one-line">
					<view class="title-one" @click="switchTab(0)">
						<text class="tab-normal" style="align-self: center;" :class="{'tab-selected': currentTab == 0}">作品</text>
						<view v-if="currentTab == 0"
							style="margin-top: 5px;height: 5rpx;width: 100%;border-radius: 6rpx;background-color: #ef274d;"></view>
					</view>
					<view class="title-one" @click="switchTab(1)">
						<text class="tab-normal" style="align-self: center;" :class="{'tab-selected': currentTab == 1}">私密</text>
						<view v-if="currentTab == 1"
							style="margin-top: 5px;height: 5rpx;width: 100%;border-radius: 6rpx;background-color: #ef274d;"></view>
					</view>
					<view class="title-one" @click="switchTab(2)">
						<text class="tab-normal" style="align-self: center;" :class="{'tab-selected': currentTab == 2}">赞过</text>
						<view v-if="currentTab == 2"
							style="margin-top: 5px;height: 5rpx;width: 100%;border-radius: 6rpx;background-color: #ef274d;"></view>
					</view>
					<view class="title-one" @click="switchTab(3)">
						<text class="tab-normal" style="align-self: center;" :class="{'tab-selected': currentTab == 3}">收藏</text>
						<view v-if="currentTab == 2"
							style="margin-top: 5px;height: 5rpx;width: 100%;border-radius: 6rpx;background-color: #ef274d;"></view>
					</view>
				</view>
				<view class="vlog-list">
					<block v-for="vlog in publicVlogList" :key="vlog.id" >
						<video 
							class="vlog-cover" 
							:src="vlog.cover" 
							@click="goToVlog(vlog.id)"
							mode="aspectFit">
						</video>
					</block>
				</view>
					
				<view v-if="publicVlogList.length == 0" class="empty">
					<text style="color: #FFFFFF;font-size: 14px;margin-top: 200rpx;">~ 空空如也 ~</text>
				</view>
						
				<view v-if="publicVlogList.length > 0">
					<view style="background-color: #000000;position: absolute;bottom: -192rpx;width: 100%;height: 235rpx;">
						
					</view>
					<view class="end">
						<text style="color: #FFFFFF;font-size: 14px;">- 知深浅 | 唯有你 -</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import uniPop from 'uni_modules/uni-popup/components/uni-popup/uni-popup.vue'
	
	export default {
		data() {
			return {
				userIsLogin:true,
				userInfo:{
					bgUrl: '/static/img/tabbar/me/me/1.jpg',
					faceUrl: '/static/img/tabbar/me/me/face.jpg',
					newVisitors: 73,
					winPraise: "1.5w",
					concern: 198,
					fans: 2679,
					name: "罗涵娱乐",
					SKId: "LuoHan0728",
					SKQrcodeUrl: "",
					introduce: "点击添加介绍...",
					labels: [
						{
							id:0,
							label:'33岁',
						},
						{
							id:1,
							label:'成都',
						},
						{
							id:2,
							label:'上海戏剧学院'
						},
					],
					sex: "",
					birthday: "",
				},
				
				title: 'Hello',
				loginWords:"请登录",
				
				currentTab:0,
				publicVlogList:[
					{
						id:1,
						cover:require('../../../static/img/tabbar/me/me/share_5dcd70c6e6d7add2cbeefee50119561a.mp4'),
					},
					{
						id:2,
						cover:require('../../../static/img/tabbar/me/me/share_79a09a8d46c794590c02d83948a28b55.mp4'),
					},
					{
						id:3,
						cover:require('../../../static/img/tabbar/me/me/share_1276326b0513e8d1ebb43378fec61ec9.mp4'),
					},
					{
						id:4,
						cover:require('../../../static/img/tabbar/me/me/share_2846016b041cbecc65a2796efa2e0a01.mp4'),
					}
				],
				control:false,
			}
		},
		methods: {
			open(){
				 this.$refs.popup.open();
			},
			close(){
				this.$refs.popup.close();
			},
			changeMyBg(){
				var that = this;
				uni.navigateTo({
					animationType: "fade-in",
					url: "component/ChangeBg?bg="+that.userInfo.bgUrl,
				})
			},
			changeMyFace(){
				var that = this;
				uni.navigateTo({
					animationType: "fade-in",
					url: "component/ChangeFace?faceUrl="+that.userInfo.faceUrl,
				})
			},
			myQrCode(){
				var that = this;
				uni.navigateTo({
					animationType: "fade-in",
					url: "component/QrCode?faceUrl="+that.userInfo.faceUrl+"&name="+that.userInfo.name,
				})
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
	.in-one-line{
		display: flex;
		flex-direction: row;
	}
	.in-one-column{
		display: flex;
		flex-direction: column;	
	}
	/* 背景图片 */
	.bgimage{
		width: 100%;
		height: 320rpx; 
	}
	/* 信息底色 */
	.bgadd{
		width: 100%;
		height: 100rpx;
		position: relative;
		top: -70rpx;
		background-color: #333333;
		border-radius: 35rpx;
	}
	.other-more{
		position:absolute;
		top: 20rpx;
		left: 56%;
	}
	.other-more-visitor{
		justify-content: center;
		align-self: center;
		width: 200rpx;
		height: 66rpx;
		background-color: #545456;
		opacity: 0.8;
		border-radius: 40rpx;
		margin-left: 20rpx;
	}
	.other-more-visitor-text{
		font-size: 13rpx;
		color: #FFFFFF;
		font-weight: 500;
		align-self: center;
	}
	.other-more-set{
		width: 40rpx;
		height: 40rpx;
		margin-left: 20rpx;
		padding: 13rpx;
		background-color: #545456;
		opacity: 0.8;
		border-radius: 40rpx;
	}
	
	/* 我的 */
	.mine{
		position: relative;
		left: 9%;
		top: -202rpx;
		width: 82%;
		align-self: center;
	}
	/* 头像 */
	.heat-image{
		width: 150rpx;
		height: 150rpx;
		border-radius: 150rpx;
		border: #333333 8rpx solid;
	}
	.heat-info{
		width: 55%;
	}
	.heat-info-one{
		/* margin-left: 55%; */
		padding: 0 15%;
		justify-content: center;
	}
	.heat-info-title{
		color: #ffffff;
		font-size: 12px;
		font-weight: 300;
		align-self: center;
	}
	.heat-info-num{
		color: #ffffff;
		font-size: 14px;
		font-weight: bold;
		align-self: center;
	}
	
	
	/* 我的信息 */
	.mine-infos{
		position: relative;
		justify-content: space-between;
	}
	.infos-info{
		padding-top: 20rpx;
		padding-bottom: 20rpx;
	}
	.infos-info-name{
		display: inline-block;
		font-size: 20px;
		color: #FFFFFF;
		font-weight: 600;
		margin: 10rpx 0 15rpx;
	}
	.infos-info-code{
		display: inline-block;
		font-size: 10px;
		color: #FFFFFF;
		opacity: 0.7;
		font-weight: 300;
		margin: 15rpx 0 0;
	}
	.infos-introduction{
		display: inline-block;
		position: relative; 
		color: #FFFFFF;
		opacity: 0.7;
		font-size: 15px;
		margin-top: 35rpx;
		margin-bottom: 10rpx;
	}
	.infos-label-bg{
		height: 24px;
		background-color: #474747;
		margin-right: 8px;
		border-radius: 3px;
	}
	.infos-label-text{
		font-size: 10px;
		color: #FFFFFF;
		opacity: 0.7;
		margin: 5px 5px;
	}
	.infos-btn{
		margin: 40rpx 0;
	}
	.infos-btn-data{
		justify-content: center;
		align-self: center;
		width: 50%;
		height: 95rpx;
		line-height: 95rpx;
		background-color: #4d4d4f;
	}
	.infos-btn-data-first{
		margin-right: 15rpx;
	}
	.infos-btn-text{
		font-size: 15px;
		color: #FFFFFF;
		font-weight: 500;
		align-self: center;
	}
	
	/* 内容 */
	.content{
		position: relative;
		top: -190rpx;
		width: 100%;
	}
	.title-one{
		width: 25%;
		align-self: center;
		text-align: center;
	}
	.tab-normal {
		line-height: 74rpx;
		font-size: 18px;
		color: #808080;
	}
	.tab-selected{
		font-weight: 500;
		color: #FFFFFF;
	}
	.vlog-list {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: left;
		background-color: #000000;
	}
	.vlog-cover {
		width: 32.8%;
		height: 440rpx;
		border: 1rpx solid #000000;
		align-self: center;
		show-play-btn: false;
		controls: false;
		show-fullscreen-btn: false;
	}
	.empty{
		width: 750rpx;
		height: 300rpx;
		top: -480rpx;
		display: flex;
		flex-direction: row;
		justify-content: center;
		position: relative; 
		background-color: #000000;
	}
	.end{
		width: 750rpx;
		display: flex;
		flex-direction: row;
		justify-content: center;
		position: relative; 
		background-color: #000000;
		top: 130rpx;
	}
	
	/* 点击获赞的弹窗 */
	.win-praise{
		background-color: #FFFFFF;
	}
	.win-praise-text{
		color: #000000;
		font-size: 30rpx;
		line-height: 140rpx;
		text-align: center;
	}
</style>
