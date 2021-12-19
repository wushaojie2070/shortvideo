<template>
	<view class="search-box">
		<view class="top">
			<view class="close-box" @click="addclose()">
				<image class="close-img" src="../../../static/img/news/chahao-1.png" mode=""></image>
			</view>
			<view class="input">
				<input placeholder="搜索" v-model='query' />
			</view>
		</view>
		<view class="friends-list" v-for="item in friendslist" :key="item.id" v-show="item.shows">
			<view class="touxiang-box">
				<image class="touxiang" :src="item.s"></image>
			</view>
			<view class="text">
				<view class="name">
					{{item.name}}
				</view>
			</view>
		</view>
		<view class="List" v-if='show'>
			<view class="List-item">
				<view class="List-img-box">
					<image class="List-img" src="../../../static/img/news/search1.png" mode=""></image>
				</view>
				<view class="List-text">
					<view class="List-top">
						<view class="List-name">
							搜索
						</view>
						<view class="List-search">
							{{query}}
						</view>
					</view>
					<view class="List-content">
						视频、用户、音乐、话题、地点等
					</view>
				</view>
				<view class="List-icon">
					>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				query:'',
				show:false,
				friendslist:[
					{
						id:1,
						s:'../../../static/img/news/friends3.png',
						name:"青",
						shows:true
					},
					{
						id:2,
						s:'../../../static/img/news/friends1.png',
						name:"宁波财经学院",
						shows:true
					},
					{
						id:3,
						s:'../../../static/img/news/friends2.png',
						name:"IceKiller",
						shows:true
					},
				],
			}
		},
		methods:{
			addclose(){
				uni.switchTab({
					url:'./tabbar-4'
				})
			},			
			changeshow(text){
				if(text!=''){
					this.show=true;
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
					this.show=false;
					this.friendslist[1].shows=true;
					this.friendslist[2].shows=true;
					this.friendslist[0].shows=true;
				}
			}

		},
		watch:{
			'query':function(newVal){
				this.changeshow(newVal);
			},
		}		
	}
</script>

<style>
	.search-box{
		position: absolute;
		top: 0;
		width: 100%;
		height: 100%;
		bottom: 0;
		background-color: #333333;
	}
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
		font-size: 15px;
		color: #e8e8e9;
	}
	.List{
	background: #333333;
}
.List-item{
	height: 50px;
	padding-top: 10px;
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
	margin-left: 10px;
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
.List-search{
	float: left;
	font-size: 15px;
	margin-left: 5px;
	color: #ffdc38;
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
</style>
