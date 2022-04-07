<template>
  <view class="friends">
    <view style="width: 100%;height: 1px;background: #393a43;"></view>
    <scroll-view class="List">
      <view class="fantab">
        <view class="List">
          <view class="List-item" v-for="item in followslist" :key="item.vlogerId">
            <view class="List-img-box">
              <image class="List-img" :src="item.face" mode=""></image>
            </view>
            <view class="List-text">
              <view class="List-top">
                <view class="List-name">
                  {{item.nickname}}
                </view>
              </view>
              <view class="List-content">
                你的关注
              </view>
            </view>
            <view class="List-icon">
              <button style="background-color: #e9445a;color: #FFFFFF;line-height: 30px; font-size: 14px;"
                @click.stop="clickbtn(item)" v-show="!item.followed">关注</button>
              <button style="background-color: #393a43;color: #ebebec;line-height: 30px; font-size: 14px;"
                @click.stop="clickbtn(item)" v-show="item.followed">取关</button>
            </view>
          </view>
        </view>
      </view>
    </scroll-view>
    <view style="width: 100%;height: 1px;background: #393a43;"></view>
    <view class="more">
      无更多关注
    </view>
  </view>
</template>

<script>
  export default {

    data() {
      return {
        followslist: [],
		userId:'',
      }
    },
    mounted() {
      var that = this;
	  uni.getStorage({
	  	key: 'userId',
	  	success: function (res) {
	  		console.log(res.data);
			that.userId = res.data
			uni.request({
			  url: "https://skrvideo.fun/fans/queryMyFollows",
			  method: "GET",
			  data: {
			    "myId": that.userId,
			    "page": 1,
			    "pageSize": 10
			  },
			  dataType: "json",
			  success: (res) => {
			    console.log("followslist",res);
			    that.followslist = res.data.data.rows
			  },
			  fail: (res) => {
			    console.log("fail",res)
			  }
			})
	  	},
		fail: function(res) {
			console.log(res)
		}
	  });
      console.log(1);
    },
    methods: {
      tochat() {
        uni.navigateTo({
          url: 'chatroom/chatroom'
        })
      },
      clickbtn(item) {
		this.$emit('follows',false);  
        console.log(item)
		item.followed=!item.followed
        if(item.followed==true){
			uni.request({
				url: "https://skrvideo.fun/fans/follow",
				method: "POST",
				header: {
				"Content-Type": "application/x-www-form-urlencoded"
					},
				data: {
					"myId": this.userId,
					"vlogerId": item.vlogerId
					},
			// dataType: "json",
			success: (res) => {
				console.log("follow",res)
				},
			fail: (res) => {
				console.log(res)
				}
			})
		}else{
			uni.request({
				url: "https://skrvideo.fun/fans/cancel",
				method: "POST",
				header: {
				"Content-Type": "application/x-www-form-urlencoded"
					},
				data: {
				"myId": this.userId,
				"vlogerId": item.vlogerId
					},
			// dataType: "json",
			success: (res) => {
				console.log("cancel",res)
				},
			fail: (res) => {
				console.log(res)
				}
			})
		}
        
      }
    }
  }
</script>

<style>
  .List {
    background: #333333;
  }

  .List-item {
    height: 50px;
    padding: 15px 10px;
  }

  .List-img-box {
    float: left;
    margin-left: 10px;
  }

  .List-img {
    width: 55px;
    height: 55px;
    border-radius: 40px;
  }

  .List-text {
    margin-top: 5px;
    float: left;
    margin-left: 15px;
    height: 60px;
    width: 50%;
    color: #e8e8e9;
  }

  .List-top {
    width: 150px;
    height: 20px;
    line-height: 20px;
  }

  .List-name {
    float: left;
    font-size: 15px;
  }

  .List-icon {
    margin-top: 5px;
    float: right;
    font-size: 25px;
    color: #8b8c91;
  }

  .List-content {
    margin-top: 2px;
    height: 25px;
    line-height: 25px;
    font-size: 12px;
    color: #8b8c91;
  }

  .more {
    width: 100%;
    height: 100%;
    line-height: 50px;
    font-size: 10px;
    color: #e8e8e9;
    text-align: center;
  }
</style>