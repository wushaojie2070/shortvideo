<template>
	<view class="news" @click="gologin()">
		<view>
			<top @fans="isfans"></top>
			<friends v-if="lookfans" ref="friends"></friends>
			<follows v-if="!lookfans" ref="follows"></follows>
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
			this.$refs.follows.getlist()
			this.$refs.friends.getlist()
		},
		data() {
			return {
				key1: 0,
				key2: 0,
				userIsLogin: false,
				lookfans: true
			}
		},
		onLoad() {
			uni.getStorage({
				key: 'userId',
				success: function(res) {
					this.userIsLogin = true
				},
				fail: (res) => {
					console.log('fail', res)
					this.gologin()
				}
			})
		},
		methods: {
			gologin() {
				if (this.userIsLogin == false) {
					uni.navigateTo({
						animationType: "slide-in-bottom",
						url: "../me/Login"
					})
				}
			},
			isfans(res) {
				console.log(res)
				this.lookfans = res
			}
		},
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
