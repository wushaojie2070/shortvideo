<template>
  <view class="bg">
    <view>
      <uni-section title="" type="line">
        <uni-card :isFull="true" :thumbnail="avatar">
          <input type="text" placeholder="请输入标题" v-model="title" />
        </uni-card>
        <uni-card title="简介" :isFull="true" :thumbnail="avatar">
          <view>
            <textarea style="height: 100px;" v-model="text" placeholder="请描述你的视频" maxlength="30" />
            <view class="annotation">
              还能输入{{remain}}个字
            </view>
          </view>
        </uni-card>
        <view class="content">
          <view>请添加视频</view>
          <htz-image-upload mediaType='video' :max="1" v-model="ceshiData" @uploadSuccess="ceshiUploadSuccess"
            action="https://skrvideo.fun/upload"></htz-image-upload>
        </view>
      </uni-section>
    </view>
    <button type="primary" @click="pushVideo()">发布</button>
	<swiper style="padding-top: 18px;" indicator-dots="true" autoplay="true" interval="3000" circular="true">
		<swiper-item v-for="item in imgsrc">
			<image class="img" mode="widthFix" :src="item.src"></image>
		</swiper-item>
	</swiper>
  </view>
</template>
<script>
  import htzImageUpload from '@/components/htz-image-upload/htz-image-upload.vue'
  export default {
    data() {
      return {
        ceshiData: [],
        text: "",
        remain: 30,
        userId: 0,
        title: '',
        city: 0,
        province: 0,
		imgsrc:[
		{
			id:0,
			src:"../../../static/htz-image-upload/lb1.jpg"
		},
		{
			id:1,
			src:"../../../static/htz-image-upload/lb2.jpg"
		},
		{
			id:2,
			src:"../../../static/htz-image-upload/lb3.jpg"
		},
		{
			id:3,
			src:"../../../static/htz-image-upload/lb4.jpg"
		}
		]
      }
    },
    computed: {
      newremain() {
        this.remain = 30 - this.text.length
      }
    },
    onLoad() {

      this.getmap()
    },
    onShow() {
      this.getmap()
    },
    components: {
      htzImageUpload,
    },
    methods: {
      getmap() {
        uni.getStorage({
          key: 'userId',
          success: (res) => {
            console.log(res)
            this.userId = res.data
          },
          fail: (res) => {
            uni.showToast({
              title: '请先登录',
              icon: 'error',
              mask: true
            })
            console.log('跳转成功123123')
            setTimeout(() => {
              uni.switchTab({
                url: '../me/Me',
                success() {
                  console.log('跳转成功')
                },
                fail() {
                  console.log('跳转失败')
                }
              })
            }, 1000)

          }
        })
        // 
        // uni.getStorage({
        // 	key:'city',
        // 	success:(res) =>{
        // 		this.city = res.data
        // 	},
        // 	 fail: (res) => {
        // 	 	uni.showToast({
        // 	 		title:'请先选择地址1'
        // 	 	})
        // 	}
        // })
        // uni.getStorage({
        // 	key:'province',
        // 	success:(res) =>{
        // 		this.province = res.data
        // 	},
        // 	 fail: (res) => {
        // 	 	uni.showToast({
        // 	 		title:'请先选择地址2'
        // 	 	})
        // 	}
        // })
      },
      ceshiUploadSuccess(res) { //上传成功
        var _res = JSON.parse(res.data)
        // console.log(_res)
        if (_res.status == 200) {
          let urlid = "http://skrvideo.fun:9000" + _res.data.slice(21)
          console.log("---------", urlid)
          this.ceshiData.push(urlid)
          console.log("测试data[0]1111:::"+this.ceshiData[0])
        }
        if (_res.status == 5132) {
          uni.showLoading({
            title: '你的视频时间过长请重新拍摄'
          })
        }
      },
      pushVideo() {
        console.log("测试data[0]2222:::"+this.ceshiData[0])
        if (this.title === '') {
          uni.showToast({
            title: '请输入标题',
            icon: 'error'
          })
          return
        } else if (this.text === '') {
          uni.showToast({
            title: '请描述你的视频',
            icon: 'error'
          })
          return
        } else if (this.ceshiData.length === 0) {
          uni.showToast({
            title: '添加你的视频',
            icon: 'error'
          })
          return
        }
        console.log("测试data[0]3333:::"+this.ceshiData[0])
        var videourl = this.ceshiData[0]
        var title = this.title
        uni.getStorage({
            key: "userId",
            success: (res) => {
              this.myId = res.data;
              this.page = 0
              console.log("测试data[0]4444:::"+videourl)
              this.dataList = []
              console.log("测试data[0]555:::"+videourl)
              uni.request({
                url: 'https://skrvideo.fun/userInfo/query?userId=' + this.myId,
                method: 'GET',
                success: (res) => {
                  this.province = res.data.data.province
                  this.city = res.data.data.city
                  console.log("测试data[0]666:::"+videourl)
                  uni.request({
                      url: 'https://skrvideo.fun/vlog/publish',
                      method: 'POST',
                      data: {
                        "city": this.city,
                        "commentsCounts": 0,
                        "cover": videourl + "?x-oss-process=video/snapshot,t_1,f_jpg,ar_auto",
                        "height": 0,
                        "id": "",
                        "likeCounts": 0,
                        "province": this.province,
                        "title": title,
                        "url": videourl,
                        "vlogerId": this.userId,
                        "width": 0
                      },
                      success(res) {
                        console.log(res)
                        uni.showToast({
                          title: '发布成功',
                          icon: 'success'
                        })


                      },
                      fail(res) {
                        console.log(res)
                      }
                  })
              }, 
            })
          },
        })

      this.text = ''
      this.title = ''
      this.ceshiData.shift()
    },
  },
  }
</script>
<style>
  .bg {
    width: 100%;
    height: calc(100vh - var(--window-bottom) - var(--window-top));

    background-color: #f8f8f8;
  }

  .annotation {
    text-align: right;
    color: #868e96;
  }

  .content {
    margin-left: 40rpx;
  }
  .img{
	  width: 100%;
	  
  }
</style>
