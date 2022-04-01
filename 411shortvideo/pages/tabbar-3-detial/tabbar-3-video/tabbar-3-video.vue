<template>
    <view>
		<view>标题</view>
		<input type="text" value="" placeholder="请输入你的标题"/>
			<htz-image-upload 
			:max="3" 
			v-model="ceshiData" 
			@uploadSuccess="ceshiUploadSuccess" 
			action="https://skrvideo.fun/upload"
			></htz-image-upload>
    </view>
</template>
<script>
    import htzImageUpload from '@/components/htz-image-upload/htz-image-upload.vue'
    export default {
        data() {
            return {
                ceshiData: [],
            }
        },
        onLoad() {

        },
        components: {
            htzImageUpload,
        },
        methods: {
			ceshiUploadSuccess(res) { //上传成功
				var _res = JSON.parse(res.data);
				console.log(_res)
				console.log(res.status)
				console.log("判断",_res.status == 200)
				if (_res.status == 200) {
					let urlid = "http://skrvideo.fun:9000"+_res.data.slice(21)
					console.log("---------",urlid)
					this.ceshiData.push(urlid)
				}
				console.log(this.ceshiData)
			},
        }
    }
</script>