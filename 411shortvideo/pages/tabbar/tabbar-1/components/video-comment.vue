<template>
  <view class="comment-detail" @blur="cmtclose()">
    <view style="width: 100%; height: 100%; left: 20rpx;" @click="cmtclose()">
      <uni-icons type="closeempty" size="35" color="#ffffff"></uni-icons>

    </view>
    <!-- 评论内容 -->
    <view class="list">
      <scroll-view scroll-y="true" style="height: 300px">
        <view class="list-item" v-for="(item, index) in commentList" :key="item.id" @tap="_replyComment(item)">
          <image class="avatar" :src="item.commentUserFace" mode="" v-if="item.commentUserFace"></image>
          <view class="top-right">
            <view class="l">
              <view class="username">{{ item.commentUserNickname }}</view>
              <view class="time">{{ item.createTime }}</view>
              <view class="cotent">{{ item.content }}</view>
            </view>
            <view class="r">
              <view @tap.stop="_commentLike(item, index)">
                <image class="comment-kudos_icon" src="../../../../static/img/index/xin.png" mode=""
                  v-if="item.isLike == 1"></image>
                <image class="comment-kudos_icon" src="../../../../static/img/index/xin-2.png" mode="" v-else></image>
                <text class="comment-item_kudos">获赞数:{{ item.likeCounts }}</text>
              </view>
              <!-- <button @click="delclick(index)" v-if="userId == item.commentUserId" class="delbtn">删除</button> -->
              <view @click="delclick(index)" v-if="userId == item.commentUserId" class="delbtn">
                <uni-icons type="trash" size="25" color="#ffffff"></uni-icons>
                <text class="comment-item_kudos">删除</text>
              </view>
            </view>
          </view>
          <view class="list1"></view>
        </view>
      </scroll-view>
    </view>
    <!-- 评论内容结束 -->
  </view>
</template>

<script>
  // import commentList from './comment.js'
  export default {
    props: ["commentList"],
    // data: function () {
    //   return { dataList: this.commentList }
    // },monted
    data() {
      return {
        delbtnshow: true,
        dataList: this.commentList,
        isemoji: false,
        ismore: false,
        msg: '',
        cmtList: [], //这个是接口拿到的评论数组
        userId: 0,
        commentId: 0,
        vlogId: 0,
      }
    },
    mounted() {
      console.log("aaaaaaaaaaaamounted")
      uni.getStorage({
        key: 'userId',
        success: (res) => {
          this.userId = res.data
        },
      });
    },
    methods: {
      delclick(index) {
        this.commentId = this.$props.commentList[index].commentId
        this.vlogId = this.$props.commentList[index].vlogId
        uni.getStorage({
          key: 'userId',
          success: (res) => {
            this.userId = res.data
            if (this.userId == this.$props.commentList[index].commentUserId) {
              uni.request({
                url: "https://skrvideo.fun/comment/delete",
                method: "DELETE",
                header: {
                  "Content-Type": "application/x-www-form-urlencoded"
                },
                data: {
                  commentId: this.commentId,
                  commentUserId: this.userId,
                  vlogId: this.vlogId,
                },
                // dataType: "json",
                success: (res) => {
                  console.log("删除成功")
                  this.$emit('changecmtlist');
                  uni.showToast({
                    title: "删除成功"
                  })
                },
                fail: (res) => {
                  console.log(res)
                }
              })

            }
          },
          fail: (res) => {
            console.log('fail', res);
            uni.switchTab({
              url: '/pages/tabbar/me/index'
            });
          }
        });

      },
      cmtclose() {
        console.log("cmtclose");
        this.$emit('cmtclose', false);
      },
      _replyComment({
        id,
        commentUserNickname
      }) {
        this.id = id
        this.placeholder = `回复@${commentUserNickname}`
      },
      _commentLike({
        id,
        isLike
      }, index) {
        this.commentId = this.$props.commentList[index].commentId
        uni.getStorage({
          key: 'userId',
          success: (res) => {
            this.userId = res.data
            //此处应接点赞接口
            if (isLike == 1) {
              //如果当前喜欢,接不喜欢接口
              uni.request({
                url: "https://skrvideo.fun/comment/unlike",
                method: "POST",
                header: {
                  "Content-Type": "application/x-www-form-urlencoded"
                },
                data: {
                  commentId: this.commentId,
                  userId: this.userId,
                },
                // dataType: "json",
                success: (res) => {
                  console.log("res.data" + res.data)
                  this.$emit('changecmtlist');
                },
                fail: (res) => {
                  console.log(res)
                }
              })
            } else {
              // console.log("this.userId::"+this.userId)
              uni.request({
                url: "https://skrvideo.fun/comment/like",
                method: "POST",
                header: {
                  "Content-Type": "application/x-www-form-urlencoded"
                },
                data: {
                  commentId: this.commentId,
                  userId: this.userId,
                },
                // dataType: "json",
                success: (res) => {
                  console.log(res)
                  this.$emit('changecmtlist');
                },
                fail: (res) => {
                  console.log(res)
                }
              })

            }
          },
          fail: (res) => {
            console.log('fail', res);
            uni.switchTab({
              url: '/pages/tabbar/me/index'
            });
          }
        });
      },
    },
  }
</script>
<style lang="scss" scoped>
  .list1 {
    width: 100%;
    height: 2rpx;
    background: #aaa;
  }

  .close-img {
    width: 30px;
    height: 30px;
    float: right;
    margin-right: 10px;
    margin-top: 10px;
  }

  .no-data {
    font-size: 24rpx;
    color: #FFFFFF;
    text-align: center;
  }

  .reply-content {
    font-size: 24rpx;
    color: #FFFFFF;
  }

  .reply-username {
    color: #FFFFFF;
    font-size: 24rpx;
    margin-right: 8rpx;
  }

  .reply {
    margin-top: 10rpx;
    display: flex;
  }

  .l {
    width: 500rpx;
    // flex: 1;
    padding-right: 30rpx;
  }

  .top-right {
    flex-direction: row;
    display: flex;
  }

  .r {
    flex: 1;
    // width: 20%;
    // display: flex;
    flex-direction: column;
    margin-left: 20rpx;
  }

  .delbtn {
    // background-color: #FFFFF2;
    // width: 150rpx;
    // height: 70rpx;
    margin-top: 20rpx;
    // padding-bottom: 30rpx;
    margin-bottom: 10rpx;
    // color: fuchsia;
  }

  .comment-kudos_icon {
    width: 40rpx;
    height: 40rpx;
    font-size: 0;
  }

  .comment-item_kudos {
    position: absolute;
    color: #FFFFFF;
    font-size: 28rpx;
    text-align: center;
    margin-left: 45rpx;
  }

  .list {
    .list-item {
      margin-bottom: 25rpx;
      display: flex;
    }

    .list-title {
      margin-bottom: 30rpx;
    }

    background-color: #000000;
    padding: 30rpx;

  }

  .cotent {
    margin-top: 10rpx;
    font-size: 32rpx;
    color: #f0fffc;
	margin-bottom: 15rpx;
  }

  .time {
    font-size: 24rpx;
    color: #717171;
  }

  .username {
    font-size: 28rpx;
	color: #FFFFFF;
  }

  .avatar {
    width: 80rpx;
    height: 80rpx;
    border-radius: 50%;
    margin-right: 20rpx;
	margin-bottom: 10rpx;
  }

  .comment-detail_top {
    padding: 30rpx;
    display: flex;
    background-color: gray;
    margin-bottom: 20rpx;
  }

  .comment_input {
    height: 80rpx;
    border-radius: 40rpx;
    background-color: #FFFFFF;
    font-size: 28rpx;
    flex: 1;
    padding: 0 24rpx;
  }

  .comment-input_box {
    border-top: 1rpx solid #FFFFFF;
    height: 110rpx;
    padding: 20rpx;
    align-items: center;
    flex-direction: row;
    background-color: gray;
    position: fixed;
    width: 100%;
    bottom: 0;
    left: 0;
  }
</style>
