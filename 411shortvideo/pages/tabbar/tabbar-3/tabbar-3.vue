<template>
	<view>
		<view>
			<form @submit="formSubmit" @reset="formReset">

				<view class="uni-form-item uni-column">
					<view class="title">wsj上传测试</view>
					<input type="text" value="请输入你的标题" />
				</view>
				<view class="uni-form-item uni-column">
					<view class="title">checkbox</view>
					<checkbox-group name="checkbox">
						<label>
							<checkbox value="checkbox1" /><text>选项一</text>
						</label>
						<label>
							<checkbox value="checkbox2" /><text>选项二</text>
						</label>
					</checkbox-group>
				</view>
				<view class="uni-form-item uni-column">
					<view class="title">slider</view>
					<slider value="50" name="slider" show-value></slider>
				</view>
				<view class="uni-form-item uni-column">
					<view class="title">input</view>
					<input class="uni-input" name="input" placeholder="这是一个输入框" />
				</view>
				<view>{{text}}</view>
				<view class="uni-btn-v">
					<button form-type="submit">提交</button>
					<button type="default" form-type="reset">重置</button>
					<button type="default" @click="getphone()">测试</button>
				</view>
			</form>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				text:"测试"
			}
		},
		methods: {
			formSubmit: function(e) {
				console.log('form发生了submit事件，携带数据为：' + JSON.stringify(e.detail.value))
				var formdata = e.detail.value
				uni.showModal({
					content: '表单数据内容：' + JSON.stringify(formdata),
					showCancel: false
				});
			},
			formReset: function(e) {
				console.log('清空数据')
			},
			getphone(){
				uni.request({
					url:"https://skrvideo.fun/vlog/indexList?page=1&pageSize=3",
					method:'GET',
					success: (res) => {
					    console.log(res)
						this.text="请求成功"
					}
				})
			}
		}
	}
</script>

<style>
	.content {
		margin: 0 auto;
		padding: 20upx;
		box-shadow: 0px 2px 5px 2px rgba(0, 0, 0, 0.1);
	}
</style>
