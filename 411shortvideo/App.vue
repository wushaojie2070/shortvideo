<script>
	export default {
		globalData: {
					updateApp: {
						id: null,
						path: null,
					},
          localprovince:'',
          localcity:'',
					localplace:'',
				},
		onLaunch: function() {
			console.log('App Launch');

			setTimeout(() => {
				uni.setTabBarBadge({
					index: 1,
					text: '31'
				});
				uni.showTabBarRedDot({
					index: 3
				});
			}, 1000);
			uni.getSetting({
				success(res) {
					if (!res.authSetting['scope.userLocation']) {
						// 未授权
						uni.authorize({
							scope: 'scope.userLocation',
							success() { //1.1 允许授权
								uni.getLocation()

							},
							fail() { //1.2 拒绝授权
								console.log("你拒绝了授权，无法获得周边信息")
							}
						})
					} else {
						// 已授权 ..(获取位置信息)
					}
				}
			});

		},
		onShow: function() {
			console.log('App Show');
		},
		onHide: function() {
			console.log('App Hide');
		}
	};
</script>

<style>
	/*每个页面公共css */
</style>
