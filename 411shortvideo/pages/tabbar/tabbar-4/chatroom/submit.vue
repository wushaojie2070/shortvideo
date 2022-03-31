<template>
	<view class="chat-box">
		<view class="submit-box">
			<view class="submit-chat">
				<view class="bt-img">
					<image class="chat-img" src="../../../../static/img/news/zxj.png"></image>
				</view>
				<textarea class="chat-text" auto-height="true" placeholder="发送消息" @input="inputs($event)" v-model="msg" @focus="focus()"></textarea>
				<view class="bt-img" @click="changeisemoji()">
					<image class="chat-img" src="../../../../static/img/news/bq.png"></image>
				</view>
				<view class="bt-img" @click="changeismore()">
					<image class="chat-img" src="../../../../static/img/news/jh.png"></image>
				</view>
			</view>
			<view class="emoji" v-if="isemoji">
				<view class="emoji-send">
					<view class="emoji-send-det" @click="emojiback()">
						<image class="det" src="../../../../static/img/news/back.png"></image>
					</view>
					<view class="emoji-send-bt" @click="send()">发送</view>
				</view>
				<emoji @emotion="emotion"></emoji>
			</view>
			<view class="more" v-if="ismore">
				<view class="more-list" @tap="zp()">
					<image class="more-list-img" src="../../../../static/img/news/zp.png"></image>
					<view class="more-list-title">照片</view>
				</view>
				<view class="more-list" @tap="ps()">
					<image class="more-list-img" src="../../../../static/img/news/ps.png"></image>
					<view class="more-list-title">拍摄</view>
				</view>
				<view class="more-list">
					<image class="more-list-img" src="../../../../static/img/news/wdxh.png"></image>
					<view class="more-list-title">我的喜欢</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import emoji from './emoji.vue'
	export default{
		components:{
			emoji
		},
		data(){
			return{
				isemoji:false,
				ismore:false,
				msg:'',
			}
		},
		methods:{
			changeisemoji(){
				this.isemoji=!this.isemoji;
				this.ismore=false;
				this.$emit('padding',this.isemoji,this.ismore);
			},
			changeismore(){
				this.ismore=!this.ismore;
				this.isemoji=false;
				this.$emit('padding',this.isemoji,this.ismore);
			},
			inputs(e){
				var chatm = e.detail.value;
				var pos = chatm.indexOf("\n");
				if(pos>0 && chatm.length>1){
					this.$emit('inputs',this.msg);
					this.msg='';
				}
			},
			send(){
				this.$emit('inputs',this.msg);
				this.msg='';
			},
			emojiback(){
				if(this.msg.length>0){
					this.msg = this.msg.substring(0,this.msg.length-1);						
				}
			},
			emotion(e){
				this.msg=this.msg+e;
			},
			focus(){
				this.isemoji=false;
				this.ismore=false;
				this.$emit('padding',this.isemoji,this.ismore);
			},
			//图片发送
			zp(){
				uni.chooseImage({
				    count: 1, //默认9
				    sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
				    sourceType: ['album'], //从相册选择
				    success: (res) =>{
						this.$emit('imgadd',res.tempFilePaths);
				        console.log(JSON.stringify(res.tempFilePaths));
				    }
				});
			},
			ps(){
				uni.chooseImage({
				    count: 1, //默认9
				    sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
				    sourceType: ['camera'], //从相册选择
				    success: (res) =>{
						this.$emit('imgadd',res.tempFilePaths);
				        console.log(JSON.stringify(res.tempFilePaths));
				    }
				});
			},
		}
	}
</script>

<style>
	.submit-box{
		position: fixed;
		bottom: 0px;
		flex: auto;
		width: 100%;
		background-color: #292a33;
	}
	.submit-chat{
		width: 100%;
		display: flex;
		align-items: flex-end;
		box-sizing: border-box;
	}
	.chat-img{
		width: 30px;
		height: 30px;
		padding: 5px 5px;
	}
	.chat-text{
		flex: auto;
		background-color: #292a33;
		color: #FFFFFF;
		max-height: 30px;
		margin-bottom: 15px;
	}
	.emoji{
		width: 100%;
		height: 150px;
		bottom: 0px;
		box-shadow: 0px -1px 0px 0px;
	}
	.emoji-send{
		width: 150px;
		height: 40px;
		background-color: rgba(41,42,51,0.8);
		position: fixed;
		bottom: 0;
		right: 0;
		display: flex;
		padding-bottom: 5px;
	}
	.emoji-send-det{
		width: 60px;
		height: 30px;
		background: #FFFFFF;
		font-size: 15px;
		text-align: center;
		line-height: 30px;
		border-radius: 10px;
		margin-left: 5px;
	}
	.emoji-send-bt{
		width: 60px;
		height: 30px;
		background: #e9445a;
		font-size: 15px;
		text-align: center;
		line-height: 30px;
		border-radius: 10px;
		margin-left: 5px;
	}
	.det{
		width: 30px;
		height: 22px;
		margin-top: 4px;
	}
	.more{
		width: 100%;
		height: 150px;
		bottom: 0px;
		background-color: #292a33;
	}
	.more-list{
		padding-top: 25px;
		width: 33%;
		text-align: center;
		float: left;
		margin-top: 15px;
	}
	.more-list-img{
		width: 60px;
		height: 60px;
		border-radius: 10px;
	}
	.more-list-title{
		color: #F8F8F8;
		line-height: 20px;
		font-size: 15px;
	}
</style>
