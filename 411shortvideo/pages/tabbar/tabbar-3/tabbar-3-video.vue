<template>
	<view class="bg">
		<view>
			<uni-section title="" type="line">
				<uni-card :isFull="true" :thumbnail="avatar">
					<input type="text" placeholder="请输入标题" v-model="title" />
				</uni-card>
				<uni-card title="简介" :isFull="true" :thumbnail="avatar">
					<view>
						<textarea v-model="text" placeholder="请描述你的视频" maxlength="30" />
						<view class="annotation">
							还能输入{{remain}}个字
						</view>
					</view>
				</uni-card>
				<view class="content">
					<view>请添加你的视频</view>
					<htz-image-upload mediaType='video' :max="1" v-model="ceshiData" @uploadSuccess="ceshiUploadSuccess"
						action="https://skrvideo.fun/upload"></htz-image-upload>
				</view>
			</uni-section>
		</view>
		<button type="primary" @click="pushVideo()">发布</button>
	</view>
</template>
<script>
	import htzImageUpload from '@/components/htz-image-upload/htz-image-upload.vue'
	export default {
		data() {
			return {
				ceshiData: [],
				text: "",
				remain: 30,
				userId: 0,
				title: '',
				city:'',
				province:''
			}
		},
		computed: {
			newremain() {
				this.remain = 30 - this.text.length
			}
		},
		onLoad() {
			uni.getStorage({
				key: 'userId',
				success: (res) => {
					// console.log(res)
					this.userId = res.data
				},
				fail: (res) => {
					uni.switchTab({
						url: '../../tabbar/me/Me'
					})
				}
			})
			this.getmap()
		},
		onShow(){
			this.getmap()
		},
		components: {
			htzImageUpload,
		},
		methods: {
			getmap(){
				
			},
			ceshiUploadSuccess(res) { //上传成功
				var _res = JSON.parse(res.data)
				console.log(_res)
				if (_res.status == 200) {
					let urlid = "http://skrvideo.fun:9000" + _res.data.slice(21)
					console.log("---------", urlid)
					this.ceshiData.push(urlid)
				}
				if (_res.status == 5132) {
					uni.showLoading({
						title: '你的视频时间过长请重新拍摄'
					})
				}
			},
			pushVideo() {
				uni.request({
					url:'https://skrvideo.fun/vlog/publish',
					method:'POST',
					data:{
						  "city": 1,
						  "commentsCounts": 0,
						  "cover": this.text,
						  "height": 0,
						  "id": "",
						  "likeCounts": 0,
						  "province": 500,
						  "title": this.title,
						  "url": this.ceshiData[0],
						  "vlogerId":this.userId ,
						  "width": 0
					},
					success(res) {
						console.log(res)
						uni.showToast({
							title:'发布成功',
							icon:'success'
						})
						this.ceshiData=[]
						this.text=''
						this.title=''
					},
					fail(res) {
						console.log(res)
					}
				})
			}
		},
	}
</script>
<style>
	.bg {
		width: 100%;
		height: calc(100vh - var(--window-bottom) - var(--window-top));

		background-color: #f8f8f8;
	}

	.annotation {
		text-align: right;
		color: #868e96;
	}

	.content {
		margin-left: 40rpx;
	}
</style>
