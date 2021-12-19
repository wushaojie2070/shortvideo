<template>
	<view>
		<view class="news">
			<view class="txt">
				消息
			</view>
		<view @click="addopen()">
			<image class="img-jiahao" src="../../../static/img/news/jiahao.png" mode=""></image>
		</view>
		<view @click="tosearch()">
			<image class="img-search" src="../../../static/img/news/search.png" mode=""></image>
		</view>
		<view style="width: 100%;height: 1px;background: #393a43;"></view>
		</view>
		<view class="add-box" :class="addclass" v-show="addshow">
			<add @addclose="addclose"></add>
		</view>
	</view>
</template>

<script>
	import add from './add.vue'
	export default {
		components:{
			add
		},
		data(){
			return{
				addshow:false,
				addclass:"animated fadeInUpBig",
			}
		},
		methods:{
			addopen(){
				if(this.addshow===false){
					this.addshow=true;
					}
				},
			addclose(res){
				this.addshow=res;
			},
			tosearch(){
				uni.navigateTo({
					url:'search'
				})
			}
			},
	}
</script>

<style>
	.news{
		width:100%;
		height: 40px;
		background: #333333;
		position: relative;
	}
	.txt{
		text-align: center;
		line-height: 40px;
		font-size: 20px;
		color: #FFFFFF;
	}
	.img-jiahao{
		position: absolute;
		top: 4.5px;
		left: -10px;
		width: 57px;
		height: 31px;
	}
	.img-search{
		position: absolute;
		top:2px;
		right: 5px;
		width: 44px;
		height: 35px;
	}
	.add-box{
		position: fixed;
		bottom: 0;
		height: 400px;
		width: 100%;
		background-color: #161822;
		border-radius: 20px 20px 0 0;
		border-top: #808080 solid 2px;
	}
</style>
