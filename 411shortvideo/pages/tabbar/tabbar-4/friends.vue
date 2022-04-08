<template>
	<view class="friends">
		<view style="width: 100%;height: 1px;background: #393a43;"></view>
		<scroll-view :style="{height: windowHeight + 'px',}" scroll-y="true" @scrolltolower="lower">
			<view class="fantab">
				<view class="List">
					<view class="List-item" v-for="item in fanslist" :key="item.fanId">
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
								关注了你
							</view>
						</view>
						<view class="List-icon">
							<button style="background-color: #e9445a;color: #FFFFFF;line-height: 30px; font-size: 14px;"
								@click.stop="clickbtn(item)" v-show="!item.friend">回关</button>
							<button style="background-color: #393a43;color: #ebebec;line-height: 30px; font-size: 14px;"
								@click.stop="clickbtn(item)" v-show="item.friend">互相关注</button>
						</view>
					</view>
				</view>
				<view style="width: 100%;height: 1px;background: #393a43;"></view>
				<view class="more" v-show="(total==0)||isshow">
					无更多粉丝
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {

		data() {
			return {
				fanslist: [],
				userId: '',
				page: 1,
				total: 0,
				records: 0,
				isshow: false,
			}
		},
    // onShow() {
    //    Object.assign(this, this.$options.data());
    // },
		mounted() {
			var that = this;
			uni.getStorage({
				key: 'userId',
				success: function(res) {
					console.log(res.data);
					that.userId = res.data
					uni.request({
						url: "https://skrvideo.fun/fans/queryMyFans",
						method: "GET",
						data: {
							"myId": that.userId,
							"page": that.page,
							"pageSize": 8,
						},
						dataType: "json",
						success: (res) => {
							console.log("fanslist", res);
							that.fanslist = res.data.data.rows
							that.total = res.data.data.total
							that.records = res.data.data.records
						},
						fail: (res) => {
							console.log("fail", res)
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
				console.log(item)
				item.friend = !item.friend
				if (item.friend == true) {
					uni.request({
						url: "https://skrvideo.fun/fans/follow",
						method: "POST",
						header: {
							"Content-Type": "application/x-www-form-urlencoded"
						},
						data: {
							"myId": this.userId,
							"vlogerId": item.fanId
						},
						// dataType: "json",
						success: (res) => {
							console.log(res)
						},
						fail: (res) => {
							console.log(res)
						}
					})
				} else {
					uni.request({
						url: "https://skrvideo.fun/fans/cancel",
						method: "POST",
						header: {
							"Content-Type": "application/x-www-form-urlencoded"
						},
						data: {
							"myId": this.userId,
							"vlogerId": item.fanId
						},
						// dataType: "json",
						success: (res) => {
							console.log(res)
						},
						fail: (res) => {
							console.log(res)
						}
					})
				}
			},
			lower(e) {
				this.page++;
				if (this.total > this.page) {
					uni.request({
						url: "https://skrvideo.fun/fans/queryMyFans",
						method: "GET",
						data: {
							"myId": this.userId,
							"page": this.page,
							"pageSize": 8
						},
						dataType: "json",
						success: (res) => {
							console.log("fanslist2", res);
							for (let i = 0; i < 8; i++) {
								this.fanslist.push(res.data.data.rows[i]);
							}
							console.log(this.fanslist);
						},
						fail: (res) => {
							console.log("fail", res)
						}
					})
				} else if (this.total == this.page) {
					uni.request({
						url: "https://skrvideo.fun/fans/queryMyFans",
						method: "GET",
						data: {
							"myId": this.userId,
							"page": this.page,
							"pageSize": 8
						},
						dataType: "json",
						success: (res) => {
							console.log("fanslist3", res);
							for (let i = 0; i < (8 * this.page - this.records); i++) {
								this.fanslist.push(res.data.data.rows[i]);
							}
							console.log(this.fanslist);
						},
						fail: (res) => {
							console.log("fail", res)
						}
					})
				} else {
					this.isshow = true
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
		background-color: #333333;
	}
</style>
