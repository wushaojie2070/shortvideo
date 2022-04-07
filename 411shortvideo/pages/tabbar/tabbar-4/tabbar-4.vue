<template>
	<view class="news">
		<view>
			<top @fans="isfans"></top>
			<friends v-if="lookfans" </friends>
			<follows v-if="!lookfans" ></follows>
		</view>
	</view>
</template>

<script>
	import top from './top.vue'
	import friends from './friends.vue'
	import follows from './follows.vue'
	export default {
		components:{
			top,
			friends,
			follows,
		},
		data() {
			return {
				userIsLogin:false,
				lookfans:true
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
			isfans(res){
				console.log(res)
				this.lookfans=res
			}
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
