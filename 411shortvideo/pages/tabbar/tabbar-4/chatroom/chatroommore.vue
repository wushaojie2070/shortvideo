<template>
	<view class="context">
		<view class="chantroommore">
			<view class="fanstxt">
				聊天详情
			</view>
		<view>
			<image @click="rechat()" class="img-return" src="../../../../static/img/news/chahao-1.png" mode=""></image>
		</view>
		<view style="width: 100%;height: 1px;background: #393a43;"></view>
		</view>
		<view class="List-item">
			<view class="List-text">
				<view class="List-name">
					查找聊天内容
				</view>
			</view>
			<view class="List-icon">
				>
			</view>
		</view>
		<view style="width: 100%;height: 1px;background: #393a43;"></view>
		<view class="List-item">
			<view class="List-text">
				<view class="List-name">
					消息免打扰
				</view>
			</view>
			<view>
				<switch style="position: absolute;right: 5px;zoom:.8;"></switch>
			</view>
		</view>
		<view style="width: 100%;height: 1px;background: #393a43;"></view>
		<view class="List-item">
			<view class="List-text">
				<view class="List-name">
					置顶聊天
				</view>
			</view>
			<view>
				<switch style="position: absolute;right: 5px;zoom:.8;"></switch>
			</view>
		</view>
		<view style="width: 100%;height: 1px;background: #393a43;"></view>
		<view class="List-item">
			<view class="List-text">
				<view class="List-name">
					设置备注
				</view>
			</view>
			<view class="List-icon">
				>
			</view>
		</view>
		<view style="width: 100%;height: 1px;background: #393a43;"></view>
		<view class="List-item">
			<view class="List-text">
				<view class="List-name">
					举报
				</view>
			</view>
			<view class="List-icon">
				>
			</view>
		</view>
		<view style="width: 100%;height: 1px;background: #393a43;"></view>
		<view class="List-item">
			<view class="List-text">
				<view class="List-name">
					拉黑
				</view>
			</view>
			<view class="List-icon">
				>
			</view>
		</view>
		<view style="width: 100%;height: 1px;background: #393a43;"></view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		methods:{
			rechat(){
					uni.navigateTo({
						url:'chatroom'
					})
				}
		}
	}
</script>

<style>
	.context{
		width: 100%;
		height: 100%;
		background-color: #333333;
		position: absolute;
	}
	.chantroommore{
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
	.List-item{
		height: 20px;
		padding: 15px 5px;
		background-color: #333333;
	}
	.List-text{
		float: left;
		margin-left: 15px;
		width: 50%;
		color: #e8e8e9;
	}
	.List-name{
		font-size: 18px;
		line-height: 20px;
	}
	.List-icon{
		float: right;
		font-size: 25px;
		line-height: 20px;
		color: #8b8c91;
	}
</style>
