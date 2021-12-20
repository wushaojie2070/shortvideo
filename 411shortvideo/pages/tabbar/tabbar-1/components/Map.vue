<template>
    <view>
        <page-head :title="title"></page-head>
        <view class="uni-common-mt">
			<view style="text-align: center; border: 3px solid green;">请选择当前位置</view>
            <view>
                <map :latitude="latitude" :longitude="longitude" :markers="covers">
                </map>
            </view>
        </view>
        <!-- <image src="../../static/app-plus/location@3x.png"></image> -->
    </view>
</template>

<script>
    export default {
        data() {
            return {
                title: 'map',
                latitude: 29.887006604013127,
                longitude: 121.481766,
                covers: [{
                    latitude: 39.9085,
                    longitude: 116.39747,
                    // #ifdef APP-PLUS
                    // iconPath: '../../static/app-plus/location@3x.png',
                    // #endif
                    // #ifndef APP-PLUS
                    // iconPath: '../../static/location.png',
                    // #endif
                }]
            }
        },
        methods: {
			

        }
    }
</script>


<style>
    map {
		margin-top: 60rpx;
        width: 100%;
        height: 300rpx;
    }
	uni-common-mt {
		
	}
</style>