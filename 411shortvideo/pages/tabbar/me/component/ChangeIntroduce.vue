<template>
	<view class="page">
		<view class="introduce" :style="{'width': windowWidth + 'px','height': windowHeight +'px'}">
			<text class="introduce-title">个人简介</text>
			<view @click="ifChange = true">
				<textarea
					class="introduce-textarea" 
					v-model="introduce" 
					maxlength="200">
				</textarea>
			</view>
			<button :class="{'introduce-btn-change':!ifChange,'introduce-btn': ifChange}" @click="saveIntroduce()">保存</button>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return {
				introduce: "",
				windowWidth: 0,
				windowHeight: 0,
				ifChange: false,
			}
		},
		onLoad(option){
			var that = this;
			console.log(option);
			this.introduce = option.introduce;
			uni.getSystemInfo({
			    success: function (res) {
					that.windowWidth = res.windowWidth;
			        that.windowHeight = res.windowHeight;
			    }
			});
			
		},
		methods:{
			saveIntroduce(){
				var that = this;
				let pages = getCurrentPages();  //获取所有页面栈实例列表
				//let nowPage = pages[ pages.length - 1];  //当前页页面实例
				let prevPage = pages[ pages.length - 2 ];  //上一页页面实例
				prevPage.userInfo.introduce = that.introduce;
				uni.navigateBack({
					delta: 1,
				})
			},
		},
	}
</script>

<style>
	.page {
		height: 100%;
		background-color: #333333;
		color: #d4d4d4;
	}
	.in-one-line{
		display: flex;
		flex-direction: row;
	}
	.in-one-column{
		display: flex;
		flex-direction: column;	
		justify-content: center;
	}
	
	/* 文本内容 */
	.introduce{
		vertical-align: middle;
	}
	.introduce-title{
		display: inline-block;
		font-size: 14px;
		margin: 5% 5% 2%;
	}
	.introduce-textarea{
		display: inline-block;
		font-size: 14px;
		color: #FFFFFF;
		width: 80%;
		margin: 0 5%;
		padding: 5%;
		background-color: #707070;
		border-radius: 10rpx;
	}
	.introduce-textarea:checked{
		color: #FFFFFF !important;
	}
	.introduce-btn{
		color: #FFFFFF;
		margin: 5%;
		background-color: #f43530;
	}
	.introduce-btn-change{
		color: #cfcfcf;
		margin: 5%;
		background-color: #cf2b28;
	}
</style>
