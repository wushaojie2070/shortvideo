<template>
  <view>
    <page-head :title="title"></page-head>
    <view class="box">
      <!-- <view @click="getlocation()" style="text-align: center; border: 3px solid green;">请选择当前位置</view> -->
      <view class="map">
        <!-- <input style="text-align: center; border: 3px solid green;height: auto;" v-model="value" 
				placeholder="请点击下方地图选择您的当前位置" :type="type" :border="border" @click="inputHandle"></input> -->
        <view style="text-align: center; border: 3px solid green;height: auto;" :type="type" :border="border"
          @click="inputHandle">
          {{ value == '' ? '请点击下方地图选择您的当前位置' : '您的当前位置为:'+value }}
        </view>
        <map v-show="" @tap="clickHandle" id="map" :latitude="latitude" :longitude="longitude" :markers="markers"></map>
      </view>
    </view>
  </view>
</template>

<script>
  import Mapjs from '../../../../common/map.js'
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
        }],
      }
    },
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
            console.log("地址::::" + res.address)
            //遍历字典将省市转换成数字
            var msg = Mapjs.map;
            for (var i = 0; i < 33; i++) {
              if (msg[i].label.slice(0, 2) == res.address.slice(0, 2)) {
                var sheng = msg[i].value;
                for (var j = 0; j < msg[i].children.length; j++) {
                  if (msg[i].children[j].label.slice(0, 2) == res.address.slice(msg[i].children[j].label.length,
                      msg[i].children[j].label.length + 2)) {
                    var shi = msg[i].children[j].value;
                    console.log(msg[i].label + "的数字编号::::" + sheng + ",,," + msg[i].children[j].label +
                      "的数字编号:::" + shi)
                  }
                }
              }
            }
            uni.setStorage({
              key: 'province',
              data: sheng,
            })
            uni.setStorage({
              key: 'city',
              data: shi,
            })

            //将数字转换回省市的方法

          }
        });
        uni.switchTab({
          url: "../tabbar-1"
        })
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
