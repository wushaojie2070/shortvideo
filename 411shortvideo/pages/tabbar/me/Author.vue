<template>
	<view class="page">
		<view v-if="!userIsLogin" class="login-info-wrapper" style="height: 100%" @click="goLogin()">
			<text class="login-info" style="align-self: center;" >{{loginWords}}</text>
		</view>
		
		<view v-if="userIsLogin" :style="{height: windowHeight + 'px'}">
			<image id="mybg" 
				:src="userInfo.bgUrl" 
				mode="aspectFill" 
				@click="changeMyBg()"
				class="bgimage"></image>
			<view class="bgadd"></view>
			<view class="other-more in-one-line">
				<view v-if="isMe" class="other-more-visitor in-one-line">
					<view class="other-more-visitor-text">
						<image 
							src="../../../static/img/me/me/访客.png"
							style="width: 40rpx;height: 40rpx;margin-bottom: -12rpx;">
						</image>
						新访客 {{userInfo.newVisitors}}
					</view>
				</view>
				<view v-if="!isMe && userInfo.isFollow" class="other-more-visitor in-one-line" @click="renewalClick()">
					<view class="other-more-visitor-text">
						<image 
							src="../../../static/img/me/me/更新.png"
							style="width: 40rpx;height: 40rpx;margin-bottom: -12rpx;margin-left: -10rpx;margin-right: 10rpx;">
						</image>
						求更新
					</view>
				</view>
				<image
					v-if="isMe"
					src="../../../static/img/me/me/更多.png"
					@click="addFriends()"
					class="other-more-set">
				</image>
			</view>
			<!-- 求更新弹窗 -->
			<uni-popup ref="renewal" type="center">
				作者已收到你的请求，更新后将发送系统通知
			</uni-popup>
			<!-- 点击获赞的弹窗-->
			<uni-popup ref="popup" type="center">
			    <view class="win-praise">
					<image 
						mode="widthFix"
						src="../../../static/img/me/me/qq_pic_merged_1639501330923.jpg">
					</image>
					<view class="win-praise-text">“{{userInfo.name}}”共获得{{userInfo.winPraise}}个赞</view>
					<hr style="color: #000000;opacity: 0.5;">
					<button style="background-color: #FFFFFF;line-height: 100rpx;" @click="close()">确认</button>
				</view>
			</uni-popup>
			<!-- 主体内容 -->
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
							v-if="isMe"
							src="../../../static/img/me/me/二维码.png"
							@click="myQrCode()"
							style="width: 20px;height: 20px;margin: 0 5px -5px;">
						</image>
						<image
							v-if="!isMe"
							src="../../../static/img/me/me/复制.png"
							@click="myQrCode()"
							style="width: 17px;height: 17px;margin: 0 5px -5px;">
						</image>
					</view>
					<hr style="width: 100%;color: #FFFFFF;opacity: 0.2;">
					<view class="infos-introduction" @click="changeIntroduce()">
						{{userInfo.introduce}}
						<image
							v-if="isMe"
							src="../../../static/img/me/me/编辑.png"
							style="width: 18px;height: 18px;margin-left: 13px;">
						</image>
					</view>
					<!-- <text style="position: relative; top: -520rpx;color: #ffffff;font-size: 14px;margin: 0 30rpx;">10年＋IT互联网老司机��年在线教育经验。曾任技术经理、项目经理、技术总监、部门经理。福瑞博课创始人&CTO��/text> -->
					<view class="in-one-line">
						<view v-for="bq in userInfo.labels" :key="bq.id">
							<view class="infos-label-bg">
								<text class="infos-label-text">{{bq.label}}</text>
							</view>
						</view>
					</view>
					
					<!-- 判断当前页是否是自己，如果是自己则显示编辑资料和设置，如果不是，则显示关注或取关  -->
					<view class="infos-btn in-one-line" v-if="isMe">
						<view @click="goMyInfo()" class="infos-btn-data infos-btn-data-first in-one-line">
							<text class="infos-btn-text">编辑资料</text>
						</view>
						<view @click="addFriends()" class="infos-btn-data in-one-line">
							<text class="infos-btn-text">添加好友</text>
						</view>
					</view>
					
					<view class="infos-btn in-one-line" v-if="!isMe">
						<view class="in-one-line" style="width: 100%;" v-if="userInfo.isFollow">
							<view @click="changeFollow(userInfo.isFollow)" class="infos-btn-data infos-btn-data-first in-one-line">
								<text class="infos-btn-text">已关注</text>
							</view>
							<view @click="" class="infos-btn-data in-one-line">
								<text class="infos-btn-text">私信</text>
							</view>
						</view>
						<view v-if="!userInfo.isFollow" 
							@click="changeFollow(userInfo.isFollow)"
							style="background-color: #ff0000; width: 100%;" 
							class="infos-btn-data in-one-line">
							<text class="infos-btn-text">关注</text>
						</view>
					</view>
				</view>
			</view>

			<view class="content">
				<view class="in-one-line">
					<view class="title-me" @click="switchTab(0)" :class="{'title-other': !isMe}">
						<text class="tab-normal" style="align-self: center;" :class="{'tab-selected': currentTab == 0}">作品</text>
						<view v-if="currentTab == 0"
							style="margin-top: 5px;height: 5rpx;width: 100%;border-radius: 6rpx;background-color: #ef274d;"></view>
					</view>
					<view class="title-me" @click="switchTab(1)" v-if="isMe">
						<text class="tab-normal" style="align-self: center;" :class="{'tab-selected': currentTab == 1}">私密</text>
						<view v-if="currentTab == 1"
							style="margin-top: 5px;height: 5rpx;width: 100%;border-radius: 6rpx;background-color: #ef274d;"></view>
					</view>
					<view class="title-me" @click="switchTab(2)" :class="{'title-other': !isMe}">
						<text class="tab-normal" style="align-self: center;" :class="{'tab-selected': currentTab == 2}">赞过</text>
						<view v-if="currentTab == 2"
							style="margin-top: 5px;height: 5rpx;width: 100%;border-radius: 6rpx;background-color: #ef274d;"></view>
					</view>
					<view class="title-me" @click="switchTab(3)" v-if="isMe">
						<text class="tab-normal" style="align-self: center;" :class="{'tab-selected': currentTab == 3}">收藏</text>
						<view v-if="currentTab == 3"
							style="margin-top: 5px;height: 5rpx;width: 100%;border-radius: 6rpx;background-color: #ef274d;"></view>
					</view>
				</view>
				<view class="vlog-list">
					<view class="vlog-cover" v-for="vlog in publicVlogList" :key="vlog.id" >
						<video 
							style="width: 100%;height: 100%;"
							:src="vlog.cover"
							:controls="true"
							:show-progress="false"
							:custom-cache="false"
							:http-cache="true" :page-gesture="false" 
							:show-fullscreen-btn="false" :show-play-btn="false" :show-loading="false" :show-center-play-btn="false" :enable-progress-gesture="false"
							@error="error($event)">
						</video>
					</view>
				</view>
					
				<view v-if="publicVlogList.length == 0" class="empty">
					<text style="color: #FFFFFF;font-size: 14px;margin-top: 200rpx;">~ 空空如也 ~</text>
				</view>
						
				<view v-if="publicVlogList.length > 0">
					<view style="background-color: #000000;position: absolute;bottom: -192rpx;width: 100%;height: 235rpx;">
						
					</view>
					<view class="end">
						<text style="color: #FFFFFF;font-size: 14px;">- 知深浅 | 唯有你-</text>
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
				isMe: true,
				userInfo:{
					id: '1234',
					bgUrl: '/static/img/me/me/1.jpg',
					faceUrl: '/static/img/me/me/face.jpg',
					newVisitors: 73,
					winPraise: "1.5w",
					concern: 198,
					fans: 2679,
					name: "罗涵娱乐",
					SKId: "LuoHan0728",
					SKQrcodeUrl: "",
					sex: 0,
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
					birthday: "",
					isFollow: true,
				},
				userPageId: '',
				title: 'Hello',
				loginWords:"请登录",
				windowHeight: 0,
				currentTab:0,
				publicVlogList:[
					{
						id:1,
						cover: "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-0455454d-b373-4768-aa39-dc1226fc1362/5017a17a-389b-45e0-8d91-711c9dc76759.mp4",
					},
					{
						id:2,
						cover: "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-0455454d-b373-4768-aa39-dc1226fc1362/209180d8-3dfd-42ea-9ef5-5f98ae0d95e1.mp4",
					},
					{
						id:3,
						cover: "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-0455454d-b373-4768-aa39-dc1226fc1362/bfc86ab8-bb3b-4cef-a5d2-8c5edce4ef17.mp4",
					},
					{
						id:4,
						cover: "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-0455454d-b373-4768-aa39-dc1226fc1362/53543262-55f5-4685-a5e3-b56ce75bcb88.mp4",
					}
				],
				controls: true,
			}
		},
		onLoad(option) {
			var that = this;
			uni.getSystemInfo({
			    success: function (res) {
			        that.windowHeight = res.windowHeight;
			    }
			});
			/* console.log(option.userPageId); */
			if(option.userPageId == this.userInfo.id || option.userPageId == null){
				console.log("此视频的作者为本人！");
				this.isMe = true;
			}else{
				console.log("此视频的作者非本人！");
				this.userPageId = option.userPageId;
				this.isMe = false;
				if(this.userInfo.introduce == "点击添加介绍..."){
					console.log("作者尚未添加自我介绍。")
					this.userInfo.introduce = "谢谢你的关注";
				}
			}
		},
		methods: {
			error: function(e){
				uni.showModal({
					content: e.target.errMsg,
				    showCancel: false
		        })
			},
			
			renewalClick(){
				this.$refs.renewal.open();
				setTimeout(()=>{
					this.$refs.renewal.close();
				},500);
			},
			open(){
				this.$refs.popup.open();
			},
			close(){
				this.$refs.popup.close();
			},
			
			switchTab(id){
				this.currentTab = id;
			},
			changeFollow(flag){
				this.userInfo.isFollow = !flag;
			},
			
			changeMyBg(){
				var that = this;
				uni.navigateTo({
					animationType: "zoom-fade-out",
					url: "component/ChangeBg?bg="+that.userInfo.bgUrl+"&isMe="+that.isMe,
				})
			},
			changeMyFace(){
				var that = this;
				uni.navigateTo({
					animationType: "zoom-fade-out",
					url: "component/ChangeFace?faceUrl="+that.userInfo.faceUrl+"&isMe="+that.isMe,
				})
			},
			myQrCode(){
				var that = this;
				if(this.isMe){
					uni.navigateTo({
						animationType: "zoom-fade-out",
						url: "component/QrCode?faceUrl="+that.userInfo.faceUrl+"&name="+that.userInfo.name,
					})
				}else{
					uni.setClipboardData({
						data:that.userInfo.SKId,
						success:function(resp){
							console.log("success",resp);
						}
					})
				}
				
			},
			changeIntroduce(){
				if(this.isMe){
					var that = this;
					uni.navigateTo({
						animationType: "zoom-fade-out",
						url: "component/ChangeIntroduce?introduce="+that.userInfo.introduce,
					})
				}
			},
			goMyInfo(){
				var that = this;
				var info = JSON.stringify(this.userInfo);
				uni.navigateTo({
					animationType: "zoom-fade-out",
					url: "component/ChangeInfo?userInfo="+info,
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
		right: 2.5%;
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
		font-size: 13px;
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
		/* overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap; */
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
	.title-me{
		width: 25%;
		align-self: center;
		text-align: center;
	}
	.title-other{
		width: 50% !important;
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
		justify-content: space-between;
		background-color: #000000;
	}
	.vlog-cover {
		width: 32.8%;
		height: 440rpx;
		border: 1rpx solid #000000;
		align-self: center;

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
	
	/* 点击获赞的弹窗*/
	.win-praise{
		background-color: #FFFFFF;
	}
	.win-praise-text{
		color: #000000;
		font-size: 15px;
		line-height: 140rpx;
		text-align: center;
	}
</style>
