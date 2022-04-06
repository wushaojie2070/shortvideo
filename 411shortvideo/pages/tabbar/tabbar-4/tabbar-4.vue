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
			uni.getStorage({
			  key: 'userId',
			  success: function(res) {
			    this.userIsLogin = true
			  },
			  fail: (res)=> {
			     console.log('fail',res)
				uni.navigateTo({
				  animationType: "slide-in-bottom",
				  url: "../me/Login"
				})
			  }
			})
		},
		methods:{
			
		},
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
