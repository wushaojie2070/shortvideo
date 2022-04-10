<template>
	<view class="news">
		<view>
			<top @fans="isfans"></top>
			<friends v-show="lookfans" ref="friend"></friends>
			<follows v-show="!lookfans" ref="follow"></follows>
		</view>
	</view>
</template>

<script>
	import top from './top.vue'
	import friends from './friends.vue'
	import follows from './follows.vue'
	export default {
		components: {
			top,
			friends,
			follows,
		},
		onShow() {
			this.$refs.follow.getlist()
			this.$refs.friend.getlist()
		},
		data() {
			return {
				userIsLogin: false,
				lookfans: true
			}
		},
		onLoad() {
			uni.getStorage({
				key: 'userId',
				success: function(res) {
					this.userIsLogin = true
					console.log("true")
					this.cont++
				},
				fail: (res) => {
					console.log('fail', res)
					this.gologin()
					this.cont++
				}
			})
		},
		methods: {
			gologin() {
				if (this.userIsLogin == false) {
					uni.reLaunch({
						url: "../me/index"
					})
				}
			},
			isfans(res) {
				console.log(res)
				this.lookfans = res
			}
		}
	}
</script>

<style>
	.news {
		position: absolute;
		top: 0;
		width: 100%;
		height: 100%;
		flex: 1;
		justify-content: center;
		align-items: center;
		background-color: #333333;
	}
</style>
