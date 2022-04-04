<template>
	<view class="news">
		<view>
			<top></top>
			<friends></friends>
		</view>
	</view>
</template>

<script>
	import top from './top.vue'
	import friends from './friends.vue'
	export default {
		components:{
			top,
			friends,
		},
		data() {
			return {
				userIsLogin:false,
			}
		},
		onLoad() {
			var that = this;
			uni.getStorage({
			  key: 'userId',
			  success: function(res) {
			    that.userIsLogin = true
			  },
			  fail: function(res) {
			    // console.log('fail',res)
			    that.userIsLogin = false
				that.goLogin();
			  }
			})
			},
		methods: {
			goLogin() {
			  var that = this;
			  if (!this.userIsLogin) {
			    uni.navigateTo({
			      animationType: "slide-in-bottom",
			      url: "../me/Register"
			    })
			  }
			}
		}
	}
</script>

<style>
.news{
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
