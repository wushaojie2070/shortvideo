<template>
	<view class="add">
		<view class="top">
			<view class="close-box" @click="addclose()">
				<image class="close-img" src="../../../static/img/news/chahao.png" mode=""></image>
			</view>
			<view class="input">
				<input placeholder="搜索用户" v-model='query' />
			</view>
		</view>
		<view class="friends-list" v-for="item in friendslist" :key="item.id" v-show="item.shows" @click="changecheck(item)">
			<view class="touxiang-box">
				<image class="touxiang" :src="item.s"></image>
			</view>
		<view class="check-box">
			<image class="check-img" src="../../../static/img/news/check-false.png" v-if="!item.check"></image>
			<image class="check-img" src="../../../static/img/news/check-true.png" v-if="item.check"></image>
		</view>	
			<view class="text">
				<view class="name">
					{{item.name}}
				</view>
			</view>
		</view>
		<view class="down">
			<button style="background-color: #24252f;color: #6e6f76;" v-if="btn0">{{bottontext}}</button>
			<button style="background-color: #e9445a;color: #FFFFFF;" v-if="!btn0">{{bottontext}}</button>
		</view>		
	</view>
</template>

<script>
	export default{
		data(){
			return{
				query:'',
				bottontext:'发起聊天',
				btn0:true,
				friendslist:[
					{
						id:1,
						s:'../../../static/img/news/friends3-1.png',
						name:"青",
						check:false,
						shows:true
					},
					{
						id:2,
						s:'../../../static/img/news/friends1-1.png',
						name:"宁波财经学院",
						check:false,
						shows:true
					},
					{
						id:3,
						s:'../../../static/img/news/friends2-1.png',
						name:"IceKiller",
						check:false,
						shows:true
					},
				],
			}
		},
		methods:{
			addclose(){
				this.$emit('addclose',false);
				this.friendslist[0].check=false;
				this.friendslist[1].check=false;
				this.friendslist[2].check=false;
				this.btn0=true;
				this.bottontext="发起聊天"
			},
			changecheck(item){
				item.check=!item.check;
				if(this.friendslist[0].check===true&&this.friendslist[1].check===false&&this.friendslist[2].check===false||
				this.friendslist[0].check===false&&this.friendslist[1].check===true&&this.friendslist[2].check===false||
				this.friendslist[0].check===false&&this.friendslist[1].check===false&&this.friendslist[2].check===true){
					this.btn0=false;
					this.bottontext="发起聊天"
				}else if(this.friendslist[0].check===false&&this.friendslist[1].check===false&&this.friendslist[2].check===false){
					this.btn0=true;
					this.bottontext="发起聊天"
				}else if(this.friendslist[0].check===true&&this.friendslist[1].check===true&&this.friendslist[2].check===false||
				this.friendslist[0].check===true&&this.friendslist[1].check===false&&this.friendslist[2].check===true||
				this.friendslist[0].check===false&&this.friendslist[1].check===true&&this.friendslist[2].check===true){
					this.btn0=false;
					this.bottontext="发起群聊(2)"
				}else if(this.friendslist[0].check===true&&this.friendslist[1].check===true&&this.friendslist[2].check===true){
					this.btn0=false;
					this.bottontext="发起群聊(3)"
				}
			},
			changeshow(text){
				this.friendslist[0].check=false;
				this.friendslist[1].check=false;
				this.friendslist[2].check=false;
				if(text!=''){
					if(this.friendslist[0].name.indexOf(text)>=0){
					this.friendslist[1].shows=false;
					this.friendslist[2].shows=false;
					this.friendslist[0].shows=true;
					}else if(this.friendslist[1].name.indexOf(text)>=0){
						this.friendslist[0].shows=false;
						this.friendslist[2].shows=false;
						this.friendslist[1].shows=true;
					}else if(this.friendslist[2].name.indexOf(text)>=0){
						this.friendslist[0].shows=false;
						this.friendslist[1].shows=false;
						this.friendslist[2].shows=true;
					}else{
						this.friendslist[1].shows=false;
						this.friendslist[2].shows=false;
						this.friendslist[0].shows=false;
					}
				}else{
					this.friendslist[1].shows=true;
					this.friendslist[2].shows=true;
					this.friendslist[0].shows=true;
				}
			},
		},
		watch:{
			'query':function(newVal){
				this.changeshow(newVal);
			},
		}
	}
</script>

<style>
	.add{
		width: 100%;
	}
	.top{
		width: 100%;
	}
	.close-box{
		width: 100%;
		height: 25px;
	}
	.close-img{
		width: 30px;
		height: 30px;
		float: right;
		margin-right: 10px;
		margin-top: 10px;
	}
	.input{
		padding: 5px 10px;
		margin-top: 20px;
		margin-left: 20px;
		margin-right: 20px;
		width: 85%;
		height: 25px;
		background-color: #57585f;
		color: #909196;
	}
	.friends-list{
		margin-top: 20px;
	}
	.touxiang-box{
		float: left;
		margin-left: 10px;
	}
	.touxiang{
		width: 55px;
		height: 55px;
	}
	.text{
		width: 100%;
		margin-left: 75px;
		height: 55px;
	}
	.name{
		line-height: 55px;
		font-size: 20px;
		color: #e8e8e9;
	}
	.check-box{
		margin-top: 5px;
		line-height: 55px;
		float: right;
		margin-right: 10px;
	}
	.check-img{
		width: 26px;
		height: 26px;
	}
	.down{
		margin-left: 5%;
		width: 90%;
		position: absolute;
		bottom: 6px;
	}
</style>
