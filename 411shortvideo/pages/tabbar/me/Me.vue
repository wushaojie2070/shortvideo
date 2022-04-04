<template>
  <view class="page">
    <!-- 未登录-->
    <view v-if="!userIsLogin" class="login-info-wrapper" :style="{height: windowHeight + 'px',}" @tap=""
      @click="goLogin()">
      <text class="login-info" style="align-self: center;">请登录</text>
    </view>
    <!-- 更多弹窗 -->
    <uni-drawer ref="evenMore" mode="right" :maskClick="true" width="250">
      <view style="background-color: #161824;height: 100%;">
        <scroll-view scroll-y="true" class="even-more in-one-column">
          <!-- <button @click="closeMore()" type="primary">关闭Drawer</button> -->
          <view @click="myQrCode()" class="in-one-line one-more">
            <image mode="aspectFit" src="/static/img/me/me/二维码.png" class="more-image"></image>
            <text class="more-text">我的二维码</text>
          </view>
          <view @click="" class="in-one-line one-more">
            <image mode="aspectFit" src="/static/img/me/me/观看历史.png" class="more-image"></image>
            <text class="more-text">观看历史</text>
          </view>
          <view class="in-one-line" style="margin-right: 60rpx;opacity: 0.1;">
            <hr style="width: 100%;color: #FFFFFF;padding:0;margin: 20rpx 60rpx 20rpx 0;">
          </view>
          <view @click="" class="in-one-line one-more">
            <image mode="aspectFit" src="/static/img/me/me/客服.png" class="more-image"></image>
            <text class="more-text">我的客服</text>
          </view>
          <!-- <view @click="" class="in-one-line one-more" v-for="x in 10" :key="x"> -->
          <view @click="" class="in-one-line one-more">
            <image mode="aspectFit" src="/static/img/me/me/设置.png" class="more-image"></image>
            <text class="more-text">设置</text>
          </view>
        </scroll-view>
        <view class="even-more-set">
          <view @click="" class="in-one-line more-set">
            <image mode="aspectFit" src="/static/img/me/me/更多设置.png" class="more-image-one"></image>
            <text class="more-text" style="line-height: 55rpx;">更多设置</text>
          </view>
        </view>
      </view>
    </uni-drawer>
    <!-- 已登录-->
    <view v-if="userIsLogin" :style="{height: windowHeight + 'px'}">
      <image id="mybg" :src="userInfo.bgUrl" mode="aspectFill" @click="changeMyBg()" class="bgimage"></image>
      <view class="bgadd"></view>
      <view class="other-more in-one-line">
        <view class="other-more-visitor in-one-line">
          <view class="other-more-visitor-text">
            <image src="../../../static/img/me/me/访客.png" style="width: 40rpx;height: 40rpx;margin-bottom: -12rpx;">
            </image>
            新访客{{userInfo.newVisitors}}
          </view>
        </view>
        <image src="../../../static/img/me/me/更多.png" @click="more()" class="other-more-set">
        </image>
      </view>
      <!-- 点击获赞的弹窗->
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
          <image :src="userInfo.faceUrl" mode="aspectFill" @click="changeMyFace()" class="heat-image"></image>
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
            <image src="../../../static/img/me/me/二维码.png" @click="myQrCode()"
              style="width: 20px;height: 20px;margin: 0 5px -5px;">
            </image>
          </view>
          <hr style="width: 100%;color: #FFFFFF;opacity: 0.2;">
          <view class="infos-introduction" @click="changeIntroduce()">
            <text v-if="userInfo.introduce != ''">{{userInfo.introduce}}</text>
            <text v-if="userInfo.introduce == ''">点击添加介绍...</text>
            <image src="../../../static/img/me/me/编辑.png" style="width: 18px;height: 18px;margin-left: 13px;">
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

      <view class="content">
        <view class="in-one-line">
          <view class="title-me" @click="switchTab(0),getMyPublicList()">
            <text class="tab-normal" style="align-self: center;" :class="{'tab-selected': currentTab == 0}">作品</text>
            <view v-if="currentTab == 0"
              style="margin-top: 5px;height: 5rpx;width: 100%;border-radius: 6rpx;background-color: #ef274d;">
            </view>
          </view>
          <!-- <view class="title-me" @click="switchTab(1)">
						<text class="tab-normal" style="align-self: center;"
							:class="{'tab-selected': currentTab == 1}">私密</text>
						<view v-if="currentTab == 1"
							style="margin-top: 5px;height: 5rpx;width: 100%;border-radius: 6rpx;background-color: #ef274d;">
						</view>
					</view> -->
          <view class="title-me" @click="switchTab(1),getLikeList()">
            <text class="tab-normal" style="align-self: center;" :class="{'tab-selected': currentTab == 1}">赞过</text>
            <view v-if="currentTab == 1"
              style="margin-top: 5px;height: 5rpx;width: 100%;border-radius: 6rpx;background-color: #ef274d;">
            </view>
          </view>
          <view class="title-me" @click="switchTab(2),getMyPrivateList()">
            <text class="tab-normal" style="align-self: center;" :class="{'tab-selected': currentTab == 2}">收藏</text>
            <view v-if="currentTab == 2"
              style="margin-top: 5px;height: 5rpx;width: 100%;border-radius: 6rpx;background-color: #ef274d;">
            </view>
          </view>
        </view>
        <view class="vlog-list">
          <view class="vlog-cover" v-for="vlog in publicVlogList" :key="vlog.id">
            <video style="width: 100%;height: 100%;" :src="vlog.url" :controls="true" :show-progress="false"
              :custom-cache="false" :http-cache="true" :page-gesture="false" :show-fullscreen-btn="false"
              :show-play-btn="false" :show-loading="false" :show-center-play-btn="false"
              :enable-progress-gesture="false">
            </video>
          </view>
        </view>

        <view v-if="publicVlogList.length == 0" class="empty">
          <text style="color: #FFFFFF;font-size: 30px;">~ 空空如也 ~</text>
        </view>

        <view v-if="publicVlogList.length > 0">
          <view style="background-color: #000000;position: absolute;bottom: -192rpx;width: 100%;height: 235rpx;">

          </view>
          <view class="end">
            <text style="color: #FFFFFF;font-size: 14px;">- 知深浅 | 唯有你</text>
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
        userIsLogin: true,
        userId: '',
        /* userInfo:{
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
        	introduce: "",
        	labels: [
        		{
        			id:0,
        			label:'33岁,
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
        }, */
        userInfo: {},
        title: 'Hello',
        loginWords: "请登录",
        windowHeight: 0,
        currentTab: 0,
        publicVlogList: [{
            id: 1,
            url: "http://skrvideo.fun:9000/skrvideo/P82YufItGWHgd1c7b68ae4e05c2db61e8351ea4e6237.mp4",
          },
          {
            id: 2,
            url: "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-0455454d-b373-4768-aa39-dc1226fc1362/209180d8-3dfd-42ea-9ef5-5f98ae0d95e1.mp4",
          },
          {
            id: 3,
            url: "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-0455454d-b373-4768-aa39-dc1226fc1362/bfc86ab8-bb3b-4cef-a5d2-8c5edce4ef17.mp4",
          },
          {
            id: 4,
            url: "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-0455454d-b373-4768-aa39-dc1226fc1362/53543262-55f5-4685-a5e3-b56ce75bcb88.mp4",
          }
        ],
        controls: true,
      }
    },
    onLoad() {
      this.getinfo()

    },
    onShow() {
      this.getMyPublicList()
    },
    methods: {
      getinfo() {
        uni.getSystemInfo({
          success: (res) => {
            this.windowHeight = res.windowHeight;
          }
        });
        uni.getStorage({
          key: 'userId',
          success: (res) => {
            this.userIsLogin = true
            this.userId = res.data
            uni.request({
              url: 'https://skrvideo.fun/userInfo/query?userId=' + this.userId,
              method: 'GET',
              dataType: 'json',
              success: (res) => {
                console.log(res.data.data);
                this.userInfo = res.data.date;
              }
            })

          },
          fail: (res) => {
            this.userIsLogin = false
          },

        })

      },
      error: function(e) {
        uni.showModal({
          content: e.target.errMsg,
          showCancel: false
        })
      },
      renewalClick() {
        this.$refs.renewal.open();
        setTimeout(() => {
          this.$refs.renewal.close();
        }, 500);
      },
      goLogin() {
        var that = this;
        if (!this.userIsLogin) {
          uni.navigateTo({
            animationType: "slide-in-bottom",
            url: "Register"
          })
        }
      },
      open() {
        this.$refs.popup.open();
      },
      close() {
        this.$refs.popup.close();
      },
      switchTab(id) {
        this.currentTab = id;
      },
      changeFollow(flag) {
        this.userInfo.isFollow = !flag;
      },
      changeMyBg() {
        var that = this;
        uni.navigateTo({
          animationType: "zoom-fade-out",
          url: "component/ChangeBg?bg=" + that.userInfo.bgUrl,
        })
      },
      changeMyFace() {
        var that = this;
        uni.navigateTo({
          animationType: "zoom-fade-out",
          url: "component/ChangeFace?faceUrl=" + that.userInfo.faceUrl,
        })
      },
      myQrCode() {
        var that = this;
        uni.navigateTo({
          animationType: "zoom-fade-out",
          url: "component/QrCode?faceUrl=" + that.userInfo.faceUrl + "&name=" + that.userInfo.name,
        })
      },
      changeIntroduce() {
        var that = this;
        uni.navigateTo({
          animationType: "zoom-fade-out",
          url: "component/ChangeIntroduce?introduce=" + that.userInfo.introduce,
        })
      },
      goMyInfo() {
        var that = this;
        var info = JSON.stringify(this.userInfo);
        uni.navigateTo({
          animationType: "zoom-fade-out",
          url: "component/ChangeInfo?userInfo=" + info,
        })
      },
      more() {
        this.$refs.evenMore.open();
      },
      closeMore() {
        this.$refs.evenMore.close();
      },
      getMyPublicList() {
        uni.getStorage({
          key: 'userId',
          success: (res) => {
            this.userIsLogin = true
            this.userId = res.data
            uni.request({
              url: 'https://skrvideo.fun/vlog/myPublicList',
              data: {
                "page": 1,
                "pageSize": 10,
                "userId": this.userId
              },
              success: (res) => {
                console.log(res)
                this.publicVlogList = res.data.data.rows
                console.log(this.publicVlogList)
              },
              fail: (res) => {
                console.log(res)
              }
            })
          },
        })
      },
      getLikeList() {
        uni.getStorage({
          key: 'userId',
          success: (res) => {
            this.userIsLogin = true
            this.userId = res.data
            uni.request({
              url: 'https://skrvideo.fun/vlog/myLikedList',
              data: {
                "page": 1,
                "pageSize": 10,
                "userId": this.userId
              },
              success: (res) => {
                console.log(res)
                this.publicVlogList = res.data.data.rows
                console.log(this.publicVlogList)
              },
              fail: (res) => {
                console.log(res)
              }
            })
          },
        })
      },
      getMyPrivateList() {
        uni.getStorage({
          key: 'userId',
          success: (res) => {
            this.userIsLogin = true
            this.userId = res.data
            uni.request({
              url: 'https://skrvideo.fun/vlog/myPrivateList',
              data: {
                "page": 1,
                "pageSize": 10,
                "userId": this.userId
              },
              success: (res) => {
                console.log(res)
                this.publicVlogList = res.data.data.rows
                console.log(this.publicVlogList)
              },
              fail: (res) => {
                console.log(res)
              }
            })
          },
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

  .in-one-line {
    display: flex;
    flex-direction: row;
  }

  .in-one-column {
    display: flex;
    flex-direction: column;
  }

  /* 未登录*/
  .login-info-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .login-info {
    color: #FFFFFF;
    font-size: 36rpx;
  }

  /* 背景图片 */
  .bgimage {
    width: 100%;
    height: 320rpx;
  }

  /* 信息底色 */
  .bgadd {
    width: 100%;
    height: 100rpx;
    position: relative;
    top: -70rpx;
    background-color: #333333;
    border-radius: 35rpx;
  }

  .other-more {
    position: absolute;
    top: 20rpx;
    right: 2.5%;
  }

  .other-more-visitor {
    justify-content: center;
    align-self: center;
    width: 200rpx;
    height: 66rpx;
    background-color: #545456;
    opacity: 0.8;
    border-radius: 40rpx;
    margin-left: 20rpx;
  }

  .other-more-visitor-text {
    font-size: 13px;
    color: #FFFFFF;
    font-weight: 500;
    align-self: center;
  }

  .other-more-set {
    width: 40rpx;
    height: 40rpx;
    margin-left: 20rpx;
    padding: 13rpx;
    background-color: #545456;
    opacity: 0.8;
    border-radius: 40rpx;
  }

  /* 我的 */
  .mine {
    position: relative;
    left: 9%;
    top: -202rpx;
    width: 82%;
    align-self: center;
  }

  /* 头像 */
  .heat-image {
    width: 150rpx;
    height: 150rpx;
    border-radius: 150rpx;
    border: #333333 8rpx solid;
  }

  .heat-info {
    width: 55%;
  }

  .heat-info-one {
    /* margin-left: 55%; */
    padding: 0 15%;
    justify-content: center;
  }

  .heat-info-title {
    color: #ffffff;
    font-size: 12px;
    font-weight: 300;
    align-self: center;
  }

  .heat-info-num {
    color: #ffffff;
    font-size: 14px;
    font-weight: bold;
    align-self: center;
  }


  /* 我的信息 */
  .mine-infos {
    position: relative;
    justify-content: space-between;
  }

  .infos-info {
    padding-top: 20rpx;
    padding-bottom: 20rpx;
  }

  .infos-info-name {
    display: inline-block;
    font-size: 20px;
    color: #FFFFFF;
    font-weight: 600;
    margin: 10rpx 0 15rpx;
  }

  .infos-info-code {
    display: inline-block;
    font-size: 10px;
    color: #FFFFFF;
    opacity: 0.7;
    font-weight: 300;
    margin: 15rpx 0 0;
  }

  .infos-introduction {
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

  .infos-label-bg {
    height: 24px;
    background-color: #474747;
    margin-right: 8px;
    border-radius: 3px;
  }

  .infos-label-text {
    font-size: 10px;
    color: #FFFFFF;
    opacity: 0.7;
    margin: 5px 5px;
  }

  .infos-btn {
    margin: 40rpx 0;
  }

  .infos-btn-data {
    justify-content: center;
    align-self: center;
    width: 50%;
    height: 95rpx;
    line-height: 95rpx;
    background-color: #4d4d4f;
  }

  .infos-btn-data-first {
    margin-right: 15rpx;
  }

  .infos-btn-text {
    font-size: 15px;
    color: #FFFFFF;
    font-weight: 500;
    align-self: center;
  }

  /* 内容 */
  .content {
    position: relative;
    top: -190rpx;
    width: 100%;
  }

  .title-me {
    flex: 1;
    align-self: center;
    text-align: center;
  }

  /* 	.title-other{
		width: 50% !important;
		align-self: center;
		text-align: center;
	} */
  .tab-normal {
    line-height: 74rpx;
    font-size: 18px;
    color: #808080;
  }

  .tab-selected {
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

  .empty {
    width: 750rpx;
    height: 500rpx;
    /* top: -480rpx; */
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
    position: relative;
    background-color: #000000;
  }

  .end {
    width: 750rpx;
    display: flex;
    flex-direction: row;
    justify-content: center;
    position: relative;
    background-color: #000000;
    top: 130rpx;
  }

  /* 点击获赞的弹窗/
	.win-praise{
		background-color: #FFFFFF;
	}
	.win-praise-text{
		color: #000000;
		font-size: 15px;
		line-height: 140rpx;
		text-align: center;
	}
	
	/* 更多右侧弹窗 */
  .even-more {
    height: 81%;
    background-color: #161824;
    padding: 40rpx 60rpx 50rpx 60rpx;
  }

  .one-more {
    width: 100%;
    line-height: 100rpx;
    height: 100rpx;
    text-align: center;
    vertical-align: middle;
  }

  .more-image {
    width: 11% !important;
    height: auto;
  }

  .more-image-one {
    height: 55rpx !important;
    width: 55rpx !important;
  }

  .more-text {
    text-align: center;
    font-size: 15px;
    margin-left: 40rpx;
  }

  .even-more-set {
    position: absolute;
    bottom: 60rpx;
    left: 60rpx;
    right: 60rpx;
    background-color: #3a3a44;
    padding: 26rpx;
    border-radius: 4rpx;
  }

  .more-set {
    justify-content: center;
  }
</style>
