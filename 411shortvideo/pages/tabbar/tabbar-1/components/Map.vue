<template>
	<view>
		<page-head :title="title"></page-head>
		<view class="box">
			<!-- <view @click="getlocation()" style="text-align: center; border: 3px solid green;">请选择当前位置</view> -->
			<view class="map">
				<!-- <input style="text-align: center; border: 3px solid green;height: auto;" v-model="value" 
				placeholder="请点击下方地图选择您的当前位置" :type="type" :border="border" @click="inputHandle"></input> -->
				<view style="text-align: center; border: 3px solid green;height: auto;" :type="type" :border="border" @click="inputHandle">
				{{ value == '' ? '请点击下方地图选择您的当前位置' : '您的当前位置为:'+value }}</view> 
				<map v-show="" @tap="clickHandle" id="map" :latitude="latitude" :longitude="longitude" :markers="markers"></map>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

				value: uni.getStorageSync('address') ? uni.getStorageSync('address') : '',
				type: 'text',
				border: true,
				latitude: '',
				longitude: '',
				markers: [{
					latitude: '',
					longitude: '',
					// latitude: 29.887006604013127,
					// longitude: 121.481766,

					// iconPath: '../../static/imgs/bg.png'
				}],
			}
		},
		// onShow(params) {
		// 	console.log("12435463"+this.value)
		// 	var value = JSON.parse(decodeURIComponent(params.value));
		// 	this.value = value;
		// 	console.log("12435463"+value)
		// },
		created() {
			this.onLoadHadnle();
			this.value = getApp().globalData.localplace
		},
		methods: {
			getlocation() {},
			frame() {
				uni.chooseLocation({
					success: res => {
						this.latitude = res.latitude;
						this.longitude = res.longitude;
						this.value = res.address;
						this.markers[0].latitude = res.latitude;
						this.markers[0].longitude = res.longitude;
						getApp().globalData.localplace = res.address;
            getApp().globalData.localprovince = res.address.slice(0,res.address.indexOf("省")+1)
            getApp().globalData.localcity = res.address.slice(res.address.indexOf("省")+1,res.address.indexOf("市")+1)
            
						console.log("地址已存再全局变量里::::"+res.address)
            // var str = res.address;
            console.log("省:::"+res.address.slice(0,res.address.indexOf("省")+1));  // 2
            console.log("市:::"+res.address.slice(res.address.indexOf("省")+1,res.address.indexOf("市")+1));  // 5
            // slice(2,5)
            // console.log("取市"+res.address.slice(res.address.indexOf("省")+1,res.address.indexOf("市")+1))
						// this.markers[0].iconPath = '../../static/imgs/map.png';
					}
				});
			},
			onLoadHadnle(params) {
				uni.getLocation({
					type: 'wgs84',
					success: res => {
						this.longitude = res.longitude;
						this.latitude = res.latitude;
						this.markers[0].latitude = res.latitude;
						this.markers[0].longitude = res.longitude;
						// this.markers[0].iconPath = '../../static/imgs/map.png';
					}
				});
			},
			inputHandle(e) {
				this.frame();
			},
			clickHandle(e) {
				this.frame();
			}

		},
	}
</script>


<style lang="scss" scoped>
	.box {
		height: 100vh;
		.map {
			width: 100%;
			height: 100%;

			map {
				width: 100%;
				height: 100%;
			}
		}
	}
</style>
