<template>
	<view class="friends">
		<view style="width: 100%;height: 1px;background: #393a43;"></view>
		<scroll-view class="List">
				<view class="fantab">
					<view class="List" @click="tochat()">
						<view class="List-item" v-for="item in fanslist" :key="item.fanId">
							<view class="List-img-box">
								<image class="List-img" :src="item.face" mode=""></image>
							</view>
							<view class="List-text" >
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
								<button style="background-color: #e9445a;color: #FFFFFF;line-height: 30px; font-size: 14px;" @click.stop="clickbtn(item)" v-show="!item.friend">回关</button>
								<button style="background-color: #393a43;color: #ebebec;line-height: 30px; font-size: 14px;" @click.stop="clickbtn(item)" v-show="item.friend">互相关注</button>
							</view>
						</view>
					</view>
					</view>
		</scroll-view>
		<view style="width: 100%;height: 1px;background: #393a43;"></view>
		<view class="more">
			无更多消息
		</view>
	</view>
</template>

<script>
	export default{

		data(){
			return{
				fanslist:[],
			}
		},
		mounted() {
			var that = this;
			console.log(1);
			uni.request({
				url:"https://skrvideo.fun/fans/queryMyFans",
				method:"GET",
				data:{
					"myId":"211003H4SG5Y1ZF8",
					"page":1,
					"pageSize":3
				},
				dataType:"json",
				success:(res)=>{
					console.log(res);
					that.fanslist=res.data.data.rows
				},
				fail: (res) => {
					console.log(res)
				}
			})
		},
		methods:{
			tochat(){
				uni.navigateTo({
					url:'./chatroom/chatroom'
				})
			},
			clickbtn(item){
				console.log(item)
				item.friend=!item.friend
				uni.request({
					url:"https://skrvideo.fun/fans/follow",
					method:"POST",
					data:{
						"myId":"211003H4SG5Y1ZF8",
						"vlogerId":item.fanId
					},
					dataType:"json",
					success: (res) => {
						console.log(res)
					},
					fail: (res) => {
						console.log(res)
					}
				})
			}
		}
	}
</script>

<style>
.List{
	background: #333333;
}
.List-item{
	height: 50px;
	padding: 15px 10px;
}
.List-img-box{
	float: left;
	margin-left: 10px;
}
.List-img{
	width: 55px;
	height: 55px;
	border-radius: 40px;
}
.List-text{
	margin-top: 5px;
	float: left;
	margin-left: 15px;
	height: 60px;
	width: 50%;
	color: #e8e8e9;
}
.List-top{
	width: 150px;
	height: 20px;
	line-height: 20px;
}
.List-name{
	float: left;
	font-size: 15px;
}
.List-icon{
	margin-top: 5px;
	float: right;
	font-size: 25px;
	color: #8b8c91;
}
.List-content{
	margin-top: 2px;
	height: 25px;
	line-height: 25px;
	font-size: 12px;
	color: #8b8c91;
}
.more{
	width: 100%;
	height: 100%;
	line-height: 50px;
	font-size: 10px;
	color: #e8e8e9;
	text-align: center;
}
</style>