<template>
	<view>
		<view class="news">
			<view v-show="isfans" class="txt">
				我的粉丝
			</view>
			<view v-show="!isfans" class="txt">
				我的关注
			</view>
		<!-- <view :class="'icon'+(isfans==true? 'transform:rotate(90deg);':'')" > -->
		<view  :class="(isfans==true?'icon1':'icon2')" >
			<uni-icons type="tune" size="30" color="#ffffff" @click="sendfans()"></uni-icons>
		</view>
		<view style="width: 100%;height: 1px;background: #393a43;"></view>
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return{
				addclass:"animated fadeInUpBig",
				isfans:true,
			}
		},
		methods:{
			sendfans(){
				this.$forceUpdate()
				this.isfans=!this.isfans
				this.$emit('fans',this.isfans);
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
	.icon1{
		position: absolute;
		right: 5px;
		top: 5px;
		transform:rotateX(180deg)
	}
	.icon2{
		position: absolute;
		right: 5px;
		top: 5px;
	}
</style>
