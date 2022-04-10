<template>
  <view class="page">
    <view class="bg-wrapper in-one-column" :style="{height: windowHeight+'px'}">
      <image mode="aspectFill" :src="bgImg" class="bg-size"></image>
      <!-- 			<htz-image-upload mediaType='image' class="bg-size" :max="1" v-model="bgImg"
				@uploadSuccess="ceshiUploadSuccess" action="https://skrvideo.fun/upload"></htz-image-upload> -->
      <view v-if="isMe == 'true'" @click="changeBg()" class="bg-change in-one-column"
        :class="{'button-change-bg':!changeTouched, 'button-change-bg-touched': changeTouched}">
        <text style="color: #FFFFFF;align-self: center;">更换背景</text>
      </view>
    </view>
    <view class="save" @click="getBg()">
      <view class="save-bg">
        <image src="../../../../static/img/me/me/保存.png" class="save-image">
        </image>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        bgImg: '',
        isMe: true,
        userId: '',
        userPageId: '',
        userToken: '',
        changeTouched: false,
        windowHeight: 0,
      }
    },
    onLoad(option) {
      console.log(option.isMe)
      this.isMe = option.isMe;
      this.getInfo(option.isMe);
    },
    methods: {
      getInfo(flag) {
        console.log("f", flag)
        uni.getSystemInfo({
          success: (res) => {
            this.windowHeight = res.windowHeight;
          }
        });
        if (flag == "true") {
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
                  this.bgImg = res.data.data.bgImg;
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
                  this.bgImg = res.data.data.bgImg;
                }
              })
            }
          });
        }

      },
      // changeBg() {
      // 	let that = this;
      // 	this.changeTouched = true;
      // 	uni.chooseImage({
      // 		count: 1,
      // 		sourceType: ['album'], //从相册选择
      // 		success: (resp) => {
      // 			that.bgImg = resp.tempFilePaths[0];
      // 			uni.uploadFile({
      // 				url: 'https://skrvideo.fun/upload',
      // 				filePath: resp.tempFilePaths[0],
      // 				name: 'file',
      // 				success: (uploadFileRes) => {
      // 					console.log("http://skrvideo.fun:9000" + uploadFileRes.data.slice(72,-2));

      // 					uni.request({
      // 						url: "https://skrvideo.fun/userInfo/modifyImage",
      // 						method: 'POST',
      // 						data: {
      // 							"type": 1,
      // 							"userId": this.userId,
      // 							"file": "http://skrvideo.fun:9000" + uploadFileRes.data.slice(72,-2)
      // 						},
      // 						header: {
      // 							"headerUserId": this.userId,
      // 							"headerUserToken": this.userToken
      // 						},
      // 						success: (res) => {
      // 							console.log("suc",res);
      // 						},
      // 						fail: (res) => {
      // 							console.log("fail",res);
      // 						}
      // 					});
      // 				}
      // 			});
      // 		}
      // 	});
      // },

      changeBg() {
        let that = this;
        this.changeTouched = true;
        uni.chooseImage({
          count: 1,
          sourceType: ['album'], //从相册选择
          success: (resp) => {
            that.bgImg = resp.tempFilePaths[0];
            console.log("临时的路径" + that.bgImg)
            uni.uploadFile({
              url: 'https://skrvideo.fun/userInfo/modifyImage',
              filePath: resp.tempFilePaths[0],
              name: 'file',
              formData: {
                "type": 1,
                "userId": this.userId,
              },
              header: {
                "headerUserId": this.userId,
                "headerUserToken": this.userToken
              },
              success: (aaa) => {
                console.log("成功了"+JSON.stringify(aaa))
                // console.log("http://skrvideo.fun:9000" + uploadFileRes.data.slice(72, -2));

              }
            });
          }
        });
      },


      getBg() {
        var that = this;
        uni.saveImageToPhotosAlbum({
          filePath: that.bgImg,
          success: function() {
            console.log('save success');
          }
        });
      }
    },
    watch: {
      /* 			bgImg(newValue, oldValue) {
      				var that = this;
      				let pages = getCurrentPages(); //获取所有页面栈实例列表
      				let prevPage = pages[pages.length - 2]; //上一页页面实例
      				console.log("prevPage",prevPage.$vm);
      				prevPage.$vm.userInfo.bgImg = that.bgImg;
      				console.log(prevPage.$vm.userInfo.bgUrl);
      			} */
    }
  }
</script>

<style>
  .page {
    height: 100%;
    background-color: #333333;
    color: #d4d4d4;
  }

  .in-one-column {
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

  .bg-change {
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

  .save {
    position: absolute;
    bottom: 20rpx;
    left: 665rpx;
  }

  .save-bg {
    width: 70rpx;
    height: 50rpx;
    padding: 10rpx 0;
    background-color: #858383;
    border-radius: 5rpx;
    text-align: center;
  }

  .save-image {
    width: 50rpx;
    height: 50rpx;
  }
</style>
