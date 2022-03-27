<template>
  <view class="comment-detail">
    <view style="width: 100%; height: 100%; left: 20rpx;" @click="cmtclose()">
      <image class="close-img" src="../../../../static/img/news/chahao.png" mode=""></image>
    </view>
    <!-- 评论内容 -->
    <view class="list">
      <scroll-view scroll-y="true" style="height: 300px">
        <view class="list-item" v-for="(item, index) in commentList" :key="item.id" @tap="_replyComment(item)">
          <image class="avatar" :src="item.commentUserFace" mode="" v-if="item.commentUserFace"></image>
          <!-- <image class="avatar" src=item.commentUserFace mode="" v-else></image> -->
          <view class="top-right">
            <view class="l">
              <view class="username">{{ item.commentUserNickname }}</view>
              <view class="time">{{ item.createTime }}</view>
              <view class="cotent">{{ item.content }}</view>
              <!-- <view class="reply">
					<view class="reply-username">@{{ item.reply_user.username }}:</view>
					<view class="reply-content">{{ item.reply_user.content }}</view>
				</view> -->
            </view>
            <view class="r" @tap.stop="_commentLike(item, index)">
              <image class="comment-kudos_icon" src="../../../../static/img/index/xin.png" mode=""
                v-if="item.isLike == 0"></image>
              <image class="comment-kudos_icon" src="../../../../static/img/index/xin-2.png" mode="" v-else></image>
              <text class="comment-item_kudos">获赞数:{{ item.likeCounts }}</text>
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
    data() {
      return {
        isemoji: false,
        ismore: false,
        msg: '',
        cmtList: [], //这个是接口拿到的评论数组

      }
    },
    onLoad() {
      // this.getcmt()
      console.log("调用评论接口onload")
    },
    methods: {
      // getcmt(){

      // },
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
        console.log(id, isLike, index)
        //此处应接点赞接口
        if (isLike == 1) {
          this.$props.commentList[index].isLike = 0
          this.$props.commentList[index].likeCounts--
        } else {
          this.$props.commentList[index].isLike = 1
          this.$props.commentList[index].likeCounts++
        }
        console.log("摁后"+this.$props.commentList[index].id, this.$props.commentList[index].isLike, index)
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
    flex: 1;
    padding-right: 30rpx;
  }

  .top-right {
    display: flex;
    flex: 1;
  }

  .r {
    display: flex;
    flex-direction: column;
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
    color: #FFFFFF;
  }

  .time {
    font-size: 24rpx;
    color: #FFFFFF;
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
