<template>
	<view class="friends">
		<view class="box">
			<view class="icon" @click="tochat()">
				<view class="friends-img">
					<image class="img" src="../../../static/img/news/friends3.png" mode=""></image>
				</view>
				<view class="friends-name">
					青
				</view>
			</view>
			<view class="icon">
				<view class="friends-img">
						<image class="img" src="../../../static/img/news/friends1.png" mode=""></image>
					</view>
					<view class="friends-name">
						宁波财经学院
					</view>
				</view>
				<view class="icon">
					<view class="friends-img">
						<image class="img" src="../../../static/img/news/friends2.png" mode=""></image>
					</view>
					<view class="friends-name">
						Icekiller
					</view>
				</view>	
			</view>
		<view style="width: 100%;height: 1px;background: #393a43;"></view>
		<view class="List" @click="Tofan()">
			<view class="List-item">
				<view class="List-img-box">
					<image class="List-img" src="../../../static/img/news/fans.png" mode=""></image>
				</view>
				<view class="List-text">
					<view class="List-top">
						<view class="List-name">
							粉丝
						</view>
					</view>
					<view class="List-content">
						小鱼（音乐推荐）关注了你
					</view>
				</view>
				<view class="List-icon">
					>
				</view>
			</view>
		</view>
		<view class="List">
			<view class="List-item">
				<view class="List-img-box">
					<image class="List-img" src="../../../static/img/news/hudong.png" mode=""></image>
				</view>
				<view class="List-text">
					<view class="List-top">
						<view class="List-name">
							互动消息
						</view>
					</view>
					<view class="List-content">
						青 在评论中提到了你
					</view>
				</view>
				<view class="List-icon">
					>
				</view>
			</view>
		</view>
		<view class="List">
			<view class="List-item" v-for="item in newslist" :key="item.id">
				<view class="List-img-box">
					<image class="List-img" :src="item.s" mode=""></image>
				</view>
				<view class="List-text">
					<view class="List-top">
						<view class="List-name">
							{{item.name}}
						</view>
					</view>
					<view class="List-content">
						{{item.content}}
					</view>
				</view>
			</view>
		</view>
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
				newslist:[
					{
						id:1,
						s:'../../../static/img/news/friends3.png',
						name:"青",
						content:'在线'
					},
					{
						id:2,
						s:'../../../static/img/news/friends1.png',
						name:"宁波财经学院",
						content:'今天在线'
					},
					{
						id:3,
						s:'../../../static/img/news/friends2.png',
						name:"IceKiller",
						content:'昨天在线'
					},
				]
			};
		},
		methods:{
			Tofan(){
				uni.navigateTo({
					url:'./fans'
				})
			},
			tochat(){
				uni.navigateTo({
					url:'./chatroom/chatroom'
				})
			}
		}
	}
</script>

<style>
.friends{
	width: 100%;
	height: 100%;
	background: #333333;
}
.box{
	width: 100%;
	height: 100px;
}
.icon{
	width: 25%;
	height: 70px;
	float: left;
	margin:0 auto;
}
.friends-img{
	text-align: center;
}
.img{
	width: 60px;
	height: 60px;
	margin-top: 8px;
}
.friends-name{
	font-size: 12px;
	text-align: center;
	color: #c5c6c8;
	margin-top: 3px;
}
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