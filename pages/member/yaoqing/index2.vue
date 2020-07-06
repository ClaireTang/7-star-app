<template>
	<view class="bg">
		<view class="content">
			<view class="code">
				{{code}}
				<button size="mini" class="theme-bt plain copy" hover-class="none" @click="copy(code)">复制</button>
			</view>
			<view class="quat">
				<view class="item">
					<image class="icon" src="/static/image/ic-me-invite.png" mode=""></image>
					<view class="text">邀请我的</view>
				</view>
				<view class="item">
					<image class="icon" src="/static/image/ic-me-invite.png" mode=""></image>
					<view class="text">我邀请的</view>
				</view>
			</view>
			<view class="rule">
				<view class="title">邀请奖励规则</view>
				<view class="text-second">
					<view>1、有效用户定义：完成注册</view>
					<view>2、七星优购保留本活动的最终解释权，并经严查恶意刷好友等虚假邀请行为，一经发现将取消奖励资格</view>
				</view>
			</view>
		</view>


		<view class="footer">
			<button size="" class="theme-bt" hover-class="none" @click="beforeShare">邀请好友</button>
			<!-- #ifdef MP-WEIXIN -->
			<button class="share-btn" open-type="share">邀请好友</button>
			<!-- #endif -->
		</view>
		
	</view>

</template>

<script>
	import {
		apiBaseUrl
	} from '@/config/config.js'
	import {
		h5Url
	} from '@/config/config.js'
	// #ifdef MP-TOUTIAO
	import {
		ttPlatform
	} from '@/config/config.js'
	// #endif
	export default {
		data() {
			return {
				code: 23534,
				uid: '',
			}
		},
		computed: {

		},
		onLoad: function(option) { //option为object类型，会序列化上个页面传递的参数
			this.uid = option.uid
		},
		onShow() {

		},
		onShareAppMessage(res) {
			return {
				title: '微信小程序分享',
				path: '/pages/index/index'
			}
		},
		methods: {
			copy(value) {
				let _this = this
				uni.setClipboardData({
					data: value,
					success: function() {
						_this.$common.successToShow('复制成功');
					}
				});
			},
			/* share() {
				let _this = this
				console.log(this.uid)
				// #ifdef APP-PLUS || APP-NVUE
				uni.share({
					provider: 'weixin',
					scene: 'WXSceneSession',
					type: 0,
					href: `${apiBaseUrl}merapi/upgrade/qrcode/uid/${this.uid}`,
					title: '七星优购分享',
					summary: `hi,快来体验七星优购吧，这里有你想不到的优惠哦！     扫描链接二维码下载app`,
					imageUrl: `${apiBaseUrl}merapi/upgrade/qrcode/uid/${this.uid}`,
					success: function (res) {
						// _this.$common.successToShow("success:" + JSON.stringify(res));
						_this.$common.successToShow("唤起分享成功");
					},
					fail: function (err) {
						_this.$common.successToShow("fail:" + JSON.stringify(err));
					}
				})
				// #endif
			}, */
			beforeShare() {
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	page {
		/* #ifndef APP-PLUS */
		height: 100%;
		/* #endif */
		/* #ifdef APP-PLUS */
		height: 100vh;
		/* #endif */
	}

	.theme-bt {
		font-size: 32rpx;
		padding: 0 20rpx;
		color: #fff;
		background-color: #FF7159;

		&::after {
			border-color: #FF7159;
		}

		&.plain {
			color: #FF7159;
			background-color: transparent;

			&::after {
				border-color: #FF7159;
			}
		}
	}

	.bg {
		/* #ifndef APP-PLUS */
		height: 100%;
		/* #endif */
		/* #ifdef APP-PLUS */
		height: 100vh;
		/* #endif */
		background-color: #fff;
		padding: 0 60rpx;

		.content {
			padding: 20rpx 0 80rpx;
			min-height: 100%;
			box-sizing: border-box;
		}

		.footer {
			margin-top: -80rpx;
			/* #ifdef APP-PLUS */
			position: fixed;
			width: 100%;
			left: 0;
			bottom: 0;

			/* #endif */
			.theme-bt {
				height: 80rpx;
				line-height: 80rpx;
			}
		}
	}

	.code {
		position: relative;
		font-size: 26px;
		text-align: center;
		font-weight: 800;
		margin-bottom: 40px;

		.copy {
			position: absolute;
			right: 20px;
			bottom: 0;
			font-size: x-small;
			font-weight: normal;
		}

	}

	.quat {
		display: flex;
		margin-bottom: 20rpx;
		padding: 20rpx;
		background-color: #eee;
		border-radius: 20rpx;
		align-items: center;
		justify-content: space-around;

		.icon {
			width: 50rpx;
			height: 50rpx;
		}

		.item {
			text-align: center;
			flex: 1 1 auto;
			color: #8a8a8a;

			&:last-child {
				border-left: 2rpx solid #d3d3d3;
			}
		}
	}

	.rule {
		margin-top: 100rpx;
		line-height: 2;

		.title {
			font-size: 16px;
		}
	}

	.canvas {
		display: flex;
		justify-content: center;
	}

	.bottom {
		padding: 20upx 0;
		width: 100%;
		display: flex;
		justify-content: space-around;
		position: fixed;
		bottom: 0;
		background-color: #ffffff;
	}

	.bottom view:first-child {
		padding: 20upx 60upx;
		background: #FF8A00;
		border-radius: 44upx;
		font-size: 30upx;
		color: #FFFFFF;
	}

	.bottom view:last-child {
		padding: 20upx 60upx;
		background: #FF5256;
		border-radius: 44upx;
		font-size: 30upx;
		color: #FFFFFF;
	}

	.imglist {
		width: 100%;
		padding: 20upx 0;
		overflow: auto;
		/* background-color: #ffffff; */
	}

	.imglist view {
		display: flex;
		justify-content: space-around;
	}

	.imglist image {
		width: 200upx;
		height: 200upx;
		border-radius: 10upx;
	}

	.tishi-box {
		display: flex;
		align-items: center;
		justify-content: space-around;
		background-color: #FFFFFF;
		position: fixed;
		bottom: 0;
		width: 100%;
		height: 260upx;
		background: #FFFFFF;
		border-radius: 20upx 20upx 0upx 0upx;
		text-align: center;
	}

	.tishi-box view {
		font-size: 28upx;
		font-family: PingFang SC;
		font-weight: 500;
		color: #333333;
		line-height: 50upx;
	}

	.tishi-box image {
		width: 100upx;
		height: 100upx;
		border-radius: 50%;
	}
</style>
