<template>
	<view class="chatroomcontext">
		<view class="fans">
			<view class="fanstxt">
				青
			</view>
		<view>
			<image @click="renews()" class="img-return" src="../../../../static/img/news/chahao-1.png" mode=""></image>
		</view>
		<view>
			<image @click="chatroommore()" class="img-dian" src="../../../../static/img/news/dian.png" mode=""></image>
		</view>
		<view style="width: 100%;height: 1px;background: #393a43;"></view>
		</view>
		<scroll-view class="chat" scroll-y="true" scroll-with-animation="true" :scroll-into-view="scrolltoview">
			<view :class="{'chat-main1':!ispadding,'chat-main2':ispadding}" >
				<view v-for="item in messagelist" :class="{'chat-ls1':item.isleft,'chat-ls2':!item.isleft}" :id="'msg'+item.id">
					<view class="chat-time">{{item.time}}</view>
					<view :class="{'msg-left':item.isleft,'msg-right':!item.isleft}">
						<image class="user-img" :src="item.s"></image>
						<view :class="{'message-box1':item.isleft,'message-box2':!item.isleft}">
							<view class="message" v-if="!item.isimg">{{item.message}}</view>
							<image mode="aspectFit" class="message-img" v-if="item.isimg" :src="item.imgsrc" @tap="lookimg()"></image>
						</view>
					</view>					
				</view>
			</view>
		</scroll-view>
		<view>
			<submit @inputs = "msgadd" @padding ="changepadding(arguments)" @imgadd = "imgadd"></submit>
		</view>
	</view>
</template>

<script>
	import submit from './submit.vue'
	import {formatDate} from '../date.js'
	export default {
		components:{
			submit
		},
		data() {
			return {
				ispadding:false,
				scrolltoview:'',
				messagelist:[
					{
						id:0,
						time:'2021年12月12日',
						message:'你好！我的朋友！多日不见，甚是想念！床前明月光疑是地上霜举头望明月低头思故乡',
						s:'../../../../static/img/news/friends3-2.png',
						isleft:true,
						isimg:false,
						imgsrc:''
					},
					{
						id:1,
						time:'2021年12月12日',
						message:'是的！我的朋友！多日不见，甚是想念！',
						s:'../../../../static/img/news/friends1.png',
						isleft:false,
						isimg:false,
						imgsrc:''
					},
					{
						id:2,
						time:'2021年12月12日',
						message:'是的！我的朋友！多日不见，甚是想念！',
						s:'../../../../static/img/news/friends3-2.png',
						isleft:true,
						isimg:false,
						imgsrc:''
					},
					{
						id:3,
						time:'2021年12月12日',
						message:'是的！我的朋友！多日不见，甚是想念！',
						s:'../../../../static/img/news/friends3-2.png',
						isleft:true,
						isimg:false,
						imgsrc:''
					},
					{
						id:4,
						time:'2021年12月12日',
						message:'',
						s:'../../../../static/img/news/friends3-2.png',
						isleft:true,
						isimg:true,
						imgsrc:'../../../../static/img/news/i1.jpg'
					},
					{
						id:5,
						time:'2021年12月12日',
						message:'',
						s:'../../../../static/img/news/friends3-2.png',
						isleft:true,
						isimg:true,
						imgsrc:'../../../../static/img/news/i1.jpg'
					},
					{
						id:6,
						time:'2021年12月12日',
						message:'是的！我的朋友！多日不见，甚是想念！',
						s:'../../../../static/img/news/friends3-2.png',
						isleft:true,
						isimg:false,
						imgsrc:''
					},
					{
						id:7,
						time:'2021年12月12日',
						message:'是的！我的朋友！多日不见，甚是想念！',
						s:'../../../../static/img/news/friends3-2.png',
						isleft:true,
						isimg:false,
						imgsrc:''
					},
				]
			}
		},
		methods: {
			renews(){
				uni.switchTab({
					url:'../tabbar-4'
				})
			},
			chatroommore(){
				uni.navigateTo({
					url:'./chatroommore'
				})
			},
			msgadd(e){
				let len = this.messagelist.length;
				let date = new Date();
				let times = formatDate(date,'yyyy年MM月dd日 hh:mm')
				let data = {
					id:len,
					time:times,
					message:e,
					s:'../../../../static/img/news/friends1.png',
					isleft:false,
					isimg:false,
					imgsrc:''
				};
				this.messagelist.push(data);
				this.gobottom();
			},
			imgadd(e){
				let len = this.messagelist.length;
				let date = new Date();
				let times = formatDate(date,'yyyy年MM月dd日 hh:mm')
				let data = {
					id:len,
					time:times,
					message:'',
					s:'../../../../static/img/news/friends1.png',
					isleft:false,
					isimg:true,
					imgsrc:e
				};
				this.messagelist.push(data);
				this.gobottom();
			},
			changepadding(res){
				if(res[0]===false&&res[1]===false){
					this.ispadding=false;					
				}else if(res[0]===true&&res[1]===false||
				res[0]===false&&res[1]===true){
					this.ispadding=true;
				}
				this.gobottom();
			},
			gobottom(){
				this.scrolltoview='';
				this.$nextTick(function(){
					var len =this.messagelist.length-1;
					this.scrolltoview='msg'+this.messagelist[len].id;
				})
			},
			lookimg(){
				var imgs = [];
				for(var i=0;i<this.messagelist.length;i++){
					if(this.messagelist[i].isimg===true){
						imgs.push(this.messagelist[i].imgsrc);						
					}
				}
				uni.previewImage({
					urls:imgs,
					 longPressActions: {
					    itemList: ['发送给朋友', '保存图片', '收藏'],
					    success: function(data) {
					        console.log('选中了第' + (data.tapIndex + 1) + '个按钮,第' + (data.index + 1) + '张图片');
					    },
					    fail: function(err) {
					        console.log(err.errMsg);
					    }
					}
				})
			}
		}
	}
</script>

<style>
	.chatroomcontext{
	position: absolute;
	top: 0;
	width: 100%;
	height: 100%;
	bottom: 0;
	background-color: #333333;
	}
.	.fans{
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
	.img-dian{
		position: absolute;
		right: 9px;
		top: 5px;
		width: 29px;
		height: 29px;
	}
	.chat{
		background-color: #333333;
		height: 100%;
	}
	.chat-main1{
		padding-left:10px ;
		padding-right:10px;
		padding-bottom: 50px;
	}
	.chat-main2{
		padding-left:10px ;
		padding-right:10px;
		padding-bottom: 250px;
	}
	.chat-ls1{
		width: 100%;
	}
	.chat-ls2{
		width: 100%;
	}
	.chat-time{
		color: #8b8c91;
		font-size: 15px;
		line-height: 40px;
		text-align: center;
	}
	.msg-left{
		width: 100%;
		flex-direction: row;
		display: flex;
	}
	.user-img{
		width: 50px;
		height: 50px;
		margin-right: 5px;
		margin-left: 5px;
	}
	.msg-right{
		width: 100%;
		display: flex;
		flex-direction: row-reverse;
	}
	.message-box1{
		max-width: 200px;
		background: #393a43;
		border-radius: 5px 20px 20px 20px;
		position: relative;
	}
	.message{
		font-size: 20px;
		color: #FFFFFF;
		padding: 5px 5px 5px 5px;
		margin-right: 2px;
		margin-left: 10px;
		line-height: 30px;
	}
	.message-box2{
		max-width: 200px;
		background:#4873e1;
		border-radius: 20px 5px 20px 20px;
		position: relative;
	}
	.message-img{
		padding: 10px 10px 10px 10px;
		max-width: 180px;
	}
</style>
