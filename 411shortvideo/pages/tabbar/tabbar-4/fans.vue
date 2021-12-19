<template>
	<view class="fantab">
		<view class="fans">
			<view class="fanstxt">
				粉丝
			</view>
		<view>
			<image @click="renews()" class="img-return" src="../../../static/img/news/chahao-1.png" mode=""></image>
		</view>
		<view style="width: 100%;height: 1px;background: #393a43;"></view>
		</view>
		<view class="List" >
			<view class="List-item" v-for="item in fanslist" :key="item.id">
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
						关注了你
					</view>
				</view>
				<view class="List-icon">
					<button style="background-color: #e9445a;color: #FFFFFF;line-height: 30px; font-size: 14px;" @click="clickbtn(item)" v-show="!item.guanzhu">回关</button>
					<button style="background-color: #393a43;color: #ebebec;line-height: 30px; font-size: 14px;" @click="clickbtn(item)" v-show="item.guanzhu">互相关注</button>
				</view>
			</view>
		</view>
		</view>
</template>

<script>
	export default{
		data(){
			return{
				fanslist:[
					{
						id:1,
						s:'../../../static/img/news/fans1.png',
						name:'小鱼（音乐推荐）',
						guanzhu:false
					},
					{
						id:2,
						s:'../../../static/img/news/friends3-2.png',
						name:'青',
						guanzhu:true
					},
					{
						id:3,
						s:'../../../static/img/news/friends1.png',
						name:'宁波财经学院',
						guanzhu:true
					},
					{
						id:4,
						s:'../../../static/img/news/friends2.png',
						name:'IceKiller',
						guanzhu:true
					},
				]
			}
		},
		methods:{
			renews(){
				uni.switchTab({
					url:'tabbar-4'
				})
			},
			clickbtn(item){
				item.guanzhu=!item.guanzhu
			}
		}
	}
</script>

<style>
	.fantab{
		position: absolute;
		top: 0;
		width: 100%;
		height: 100%;
		flex: 1;
		background-color: #333333;
	}
	.fans{
		width:100%;
		height: 40px;
		background: #333333;
		position: relative;
	}
	.fanstxt{
		text-align: center;
		line-height: 40px;
		font-size: 20px;
		color: #FFFFFF;
	}
	.img-return{
		position: absolute;
		left: 9px;
		top: 5px;
		width: 29px;
		height: 29px;
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
		width: 50px;
		height: 50px;
	}
	.List-text{
		margin-top: 5px;
		float: left;
		margin-left: 15px;
		height: 60px;
		width: 100px;
		color: #e8e8e9;
	}
	.List-top{
		width: 150px;
		height: 20px;
		line-height: 20px;
	}
	.List-name{
		float: left;
		font-size: 12px;
	}
	.List-icon{
		margin-top: 10px;
		float: right;
		height: 30px;
		width: 90px;
	}
	.List-content{
		margin-top: 2px;
		height: 25px;
		line-height: 25px;
		font-size: 10px;
	}
</style>
