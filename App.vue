<script>
	import {
		apiBaseUrl
	} from '@/config/config.js'
	export default {
		onLaunch() {
			// #ifdef APP-PLUS  
			// uni.showModal({
			// 	title: '版本号',
			// 	content: plus.runtime.version
			// })
			
			var server = `${apiBaseUrl}merapi/upgrade/version`; //检查更新地址  
			var req = { //升级检测数据  
				"appid": plus.runtime.appid,
				"version": plus.runtime.version
			};
			uni.request({
				url: server,
				data: req,
				success: (res) => {
					if (res.statusCode == 200 && res.data.status === 1) {
						uni.showModal({ //提醒用户更新  
							title: "更新提示",
							content: res.data.note,
							success: (res2) => {
								if (res2.confirm) {
									plus.runtime.openURL(res.data.url);
								}
							}
						})
					}
				}
			})
			// #endif  
			// 获取店铺配置信息  全局只请求一次
			this.$api.shopConfig(res => {
				this.$store.commit('config', res)
				// #ifdef H5
				//百度统计
				if (res.statistics) {
					var script = document.createElement("script");
					script.innerHTML = res.statistics;
					document.getElementsByTagName("body")[0].appendChild(script);
				}
				// #endif
			})

			//获取地区信息
			this.$api.getAreaList({}, res => {
				if (res.status) {
					this.$db.set('areaList', res.data)
				}
			});

			// #ifdef APP-PLUS || APP-PLUS-NVUE
			// this.checkVersion()
			// #endif
		},
		onShow: function() {
			//console.log('App Show')
		},
		onHide: function() {
			//console.log('App Hide')
		},
		methods: {
			// #ifdef APP-PLUS || APP-PLUS-NVUE
			// app更新检测
			checkVersion() {
				// 获取应用版本号
				let version = plus.runtime.version;
				this.$common.successToShow(version,'version')

				//检测当前平台，如果是安卓则启动安卓更新
				uni.getSystemInfo({
					success: res => {
						this.updateHandler(res.platform, version);
					},
					fail: error => {
						this.$common.successToShow('检测当前平台失败')
					}
				})
			},
			// 更新操作
			updateHandler(platform, version) {
				let data = {
					platform: platform,
					version: version
				}
				let _this = this;
				this.$api.getAppVersion(data,
					res => {
						this.$common.successToShow(res,'判断版本是否有更新')
						if (res.status && res.data[0].version) {
							const info = res.data[0];
							if (info.version !== '' && info.version > version) {
								uni.showModal({
									//提醒用户更新
									title: '更新提示',
									content: info.note,
									success: res => {
										if (res.confirm) {
											plus.runtime.openURL(info.download_url)
										}
									}
								})
							}
						}else{
							this.$common.successToShow(res,'判断失败了')
						}
					}
				)
			}
			// #endif
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import './static/css/style.css';

	.bgf {
		background: #FFF;
	}

	.flc {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.flc-inline {
		display: inline-flex;
		align-items: center;
	}

	.g5 {
		color: $g5;
	}

	.fz12 {
		font-size: $fz12;
	}
</style>
<style>
	@import url("/components/gaoyia-parse/parse.css");
</style>
