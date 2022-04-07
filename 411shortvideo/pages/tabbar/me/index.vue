<template>
	<view :style="{height: windowHeight + 'px',}">
		<!-- 未登录-->
		<view v-if="!userIsLogin" class="login-info-wrapper" @tap="" @click="goLogin()">
			<text class="login-info" style="align-self: center;">请登录</text>
		</view>
		<Me v-if="userIsLogin" :isMine="true"></Me>
	</view>
</template>

<script>
	import Me from "./Me.vue"

	export default {
		data() {
			return {
				windowHeight: 0,
				userIsLogin: false,
			}
		},
		onLoad() {
			this.getinfo()
		},
		methods: {
			getinfo() {
				uni.getSystemInfo({
					success: (res) => {
						this.windowHeight = res.windowHeight;
					}
				});
				uni.getStorage({
					key: 'userId',
					success: (res) => {
						this.userIsLogin = true
						console.log("success", this.userIsLogin)
					},
					fail: (res) => {
						this.userIsLogin = false
						uni.navigateTo({
							animationType: "slide-in-bottom",
							url: "Login"
						})
						console.log("fail", this.userIsLogin)
					}
				});
			},
			goLogin() {
				if (!this.userIsLogin) {
					uni.navigateTo({
						animationType: "slide-in-bottom",
						url: "Login"
					})
				}
			}
		},
		components: {
			Me
		}
	}
</script>

<style>
	.in-one-line {
		display: flex;
		flex-direction: row;
	}

	.in-one-column {
		display: flex;
		flex-direction: column;
	}

	/* 未登录*/
	.login-info-wrapper {
		height: 100%;
		background-color: #333333;
		display: flex;
		flex-direction: column;
		justify-content: center;
		text-align: center;
	}

	.login-info {
		color: #FFFFFF;
		font-size: 36rpx;
	}
</style>
