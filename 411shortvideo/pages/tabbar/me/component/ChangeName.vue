<template>
	<view class="page" :style="{height: windowHeight+'px'}">
		<view class="single-line-box">
			<view class="name-title">我的昵称</view>
			<input 
				class="name-input"
				type="text" 
				v-model="name" 
				placeholder="请填入昵称..."
				maxlength="20"
			/>
			<view class="name-label">
				<view class="label-cal">
					<text class="label-tips">*注：请设置2-20的昵称长度</text> 
				</view>
				<view class="length-cal">
					<text class="length-text">{{wordsLength}}/20</text> 
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				name: "",
				wordsLength: 0,
				windowWidth: 0,
				windowHeight: 0,
			}
		},
		onLoad(option) {
			var that = this;
			console.log(option);
			this.name = option.name;
			this.wordsLength = option.name.length;
			uni.getSystemInfo({
			    success: function (res) {
					that.windowWidth = res.windowWidth;
			        that.windowHeight = res.windowHeight;
			    }
			});
		},
		/* 点击标签按钮的方法 */
		onNavigationBarButtonTap() {
		},
		watch:{
			name(newValue,oldValue){
				console.log(newValue,oldValue);
				this.wordsLength = newValue.length;
				if (newValue.length > 20 || newValue.length < 2) {
					uni.showToast({
						icon: "none",
						title: "昵称长度为2-20"
					})
					return;
				}else {
					let pages = getCurrentPages();  //获取所有页面栈实例列表
					// let nowPage = pages[ pages.length - 1];  //当前页页面实例
					let prevPage = pages[ pages.length - 2 ];  //上一页页面实例
					prevPage.$vm.userInfo.name = newValue;
				}
			}
		}
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
	}
	
	.single-line-box {
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: 30rpx;
		margin-top: 20rpx;
	}
	.name-title{
		font-size: 15px;
		line-height: 70rpx;
		margin: 10rpx 15rpx;
	}
	.name-input {
		margin: 0 10rpx;
		padding-left: 10px;
		color: #FFFFFF;
		font-size: 15px;
		height: 50px;
		background-color: #4a4c52;
		border-radius: 10px;
	}
	.name-label{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		margin: 0 5rpx;
	}
	.label-cal{
		padding: 10rpx;
	}
	.label-tips {
		font-size: 12px;
		font-weight: 400;
		color: #d4d4d4;
	}
	.length-cal {
		padding: 10rpx;
	}
	.length-text {
		font-size: 12px;
		font-weight: 400;
		color: #d4d4d4;
	}
</style>
