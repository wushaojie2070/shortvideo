<template>
  <view class="page">
    <view :style="{height: windowHeight + 'px',width: windowWidth + 'px'}">
      <view class="register-bg">
        <view class="register-info">
          <input class="reg-input" type="text" v-model="phone" placeholder="请输入电话" placeholder-style="color: #ffffff" />
          <view class="in-one-line" style="margin-bottom: 40rpx;">
            <input class="reg-input input-auth" type="text" v-model="verificationCode" placeholder="请输入验证码"
              placeholder-style="color: #ffffff" />
            <button class="reg-auth-code" @click="getSMSCode()">获取验证码</button>
          </view>
          <button class="register" @click="register()">立即注册</button>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        windowHeight: 0,
        windowWidth: 0,
        phone: '',
        verificationCode: '',
      }
    },
    onLoad() {
      var that = this;
      uni.getSystemInfo({
        success: function(res) {
          that.windowHeight = res.windowHeight;
          that.windowWidth = res.windowWidth;
        }
      });
    },
    methods: {
      getSMSCode() {
        var that = this;
        if (this.phone == '') {
          uni.showToast({
            title: '手机号不可为空！',
            icon: 'none'
          })
        } else if (this.phone.length != 11) {
          uni.showToast({
            title: '输入手机号不符合标准！',
            icon: 'none'
          })
        } else {
          uni.request({
            url: 'https://skrvideo.fun/passport/getSMSCode?mobile=' + that.phone,
            method: 'POST',
            dataType: 'json',
            success: (res) => {
              console.log(res)
              if (res.data.status == 505) {
                uni.showToast({
                  title: '短信发送太快啦~请稍后再试！',
                  icon: 'none'
                });
              } else {
                uni.showToast({
                  title: '验证码已发送！',
                  icon: 'none'
                })
              }
            },
            fail: (res) => {
              console.log('fail', res);
            }
          })
        }
      },
      register() {
        var that = this;
        let pages = getCurrentPages();
        let beforePage = pages[pages.length - 2];
        if (this.verificationCode == '') {
          uni.showToast({
            title: '验证码不可为空!',
            icon: 'none'
          });
        } else if (this.phone != '' && this.phone.length == 11) {
          uni.request({
            url: 'https://skrvideo.fun/passport/login',
            method: 'POST',
            data: {
              "mobile": that.phone,
              "smsCode": that.verificationCode
            },
            dataType: 'json',
            success: (res) => {
              console.log('success', res);
              if (res.data.status == 506) {
                uni.showToast({
                  title: '验证码错误，请重新获取！',
                  icon: 'none'
                });
              } else {
                uni.setStorage({
                  key: 'userId',
                  data: res.data.data.id,
                })
                console.log("userId存至setStorage:::" + res.data.data.id)
                uni.showToast({
                  title: '登录成功！',
                  icon: 'none'
                });
                uni.getStorage({
                  key: 'userId',
                  success: (res) => {

                    this.userId = res.data
                    uni.request({
                      url: 'https://skrvideo.fun/userInfo/query?userId=' + this.userId,
                      method: 'GET',
                      dataType: 'json',
                      success: (res) => {
                        console.log(res.data.data);
                        this.userInfo = res.data.date;
                        if (this.province == "" || this.city == "") {
                          setTimeout(() => {
                            uni.navigateTo({
                              // url:"components/Map?value=" + encodeURIComponent(localplace) 
                              url: '../tabbar-1/components/Map'
                            })
                          }, 500);
                        }
                      }
                    })

                  },
                  fail: (res) => {
                    this.userIsLogin = false
                  },

                })

                beforePage.onLoad();
                // uni.navigateBack({
                // 	delta: 1
                // });
              }
            },
            fail: (res) => {
              console.log('fail', res);
            }
          })
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

  /* 背景 */
  .register-bg {
    height: 100%;
    width: 100%;
    background-image: linear-gradient(to top left, #aaaaff, #a5e7ff);
  }

  .register-info {
    text-align: center;
    padding: 60% 10%;
  }

  .reg-input {
    color: #FFFFFF;
    text-align: left;
    width: 93.13%;
    height: 80rpx;
    line-height: 80rpx;
    padding: 0 20rpx;
    margin-bottom: 40rpx;
    border: 1rpx #ffffff solid;
    border-radius: 10rpx;
  }

  .reg-input:focus {
    box-shadow: 0 0 20rpx #000000;
  }

  .input-auth {
    width: 60%;
    margin-bottom: 0;
  }

  .reg-auth-code {
    color: #FFFFFF;
    font-size: 16px;
    width: 40%;
    height: 84rpx;
    line-height: 84rpx;
    padding: 0 20rpx;
    margin-left: 20rpx;
    background-color: #aaaaff;
  }

  .reg-auth-code:active {
    color: #dfdfdf;
    background-color: #9999e5;
  }

  .register {
    color: #FFFFFF;
    width: 100%;
    height: 90rpx;
    line-height: 90rpx;
    font-size: 18px;
    background-color: #aaaaff;
  }
</style>
