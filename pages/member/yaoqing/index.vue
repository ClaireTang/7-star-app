<template>
	<view class="bg">

		<!-- <view class="imglist">
			<view :style="[{ width:widths+'upx'}]">
				<block v-for="(swiperLists,index) in swiperList" :key="index">
					<image @click="selseimg(swiperLists.posterImg)" :src="swiperLists.posterImg" mode="aspectFill"></image>
				</block>
			</view>
		</view> -->
		<view class="content">
			<view class="quat">
				<view class="item" @click="toMoney">
					<image class="icon" src="/static/image/ic-me-balance.png" mode=""></image>
					<view class="text">邀请收益 ({{userdata.money}})</view>
				</view>
				<view class="item" @click="toList">
					<image class="icon" src="/static/image/ic-me-invite.png" mode=""></image>
					<view class="text">我邀请的 ({{userdata.number}})</view>
				</view>
			</view>
			<view class="canvas">
				<canvas :style="{ width: cansWidth + 'px', height: cansHeight + 'px', borderRadius: '10px', overflow: 'hidden' }" canvas-id="firstCanvas"></canvas>
			</view>
			
			<view class="rule">
				<view class="title">邀请奖励规则</view>
				<view class="text-second">
					<view>1、有效用户定义：下载后当时完成注册</view>
					<view>2、七星优购保留本活动的最终解释权，并经严查恶意刷好友等虚假邀请行为，一经发现将取消奖励资格</view>
				</view>
			</view>
		</view>
		
		<view class="footer bottom">
				<view @click="saveCans(1)">保存海报</view>
				<view @click="saveCans(2)">一键邀请</view>
		</view>
		

		<jc-popUp position="bottom" ref="pop1" markTapHide="true" closeIcon="false">
			<view class="tishi-box">
				<view class="tishi-box-a" @click="weixin">
					<image src="/static/images/haoyou.png" mode="scaleToFill"></image>
					<view>微信好友</view>
				</view>
				<view class="tishi-box-a" @click="bengyouquan">
					<image src="/static/images/pengyouquan.png" mode="scaleToFill"></image>
					<view>朋友圈</view>
				</view>
			</view>
		</jc-popUp>
	</view>
</template>

<script>
	var that
	import {apiBaseUrl} from '@/config/config.js'
	import jcPopUp from '@/components/tankuang/jc-popUp/jc-popUp.vue'; //分享弹框，插件地址  https://ext.dcloud.net.cn/plugin?id=249
	export default {
		components: {
			jcPopUp
		},
		data() {
			return {
				uid: '',
				cansWidth: 260, //海报宽度
				cansHeight: 370, //海报高度
				widths: "", //图片列表动态宽度
				imgsrc: "", //保存图片的路径
				userdata: {
					erweima: '',
					code: '',
					number: 0,
					money: 0
				}, //个人数据
				swiperList: [{
						posterImg: "/static/images/j-1.jpg"
					},
					{
						posterImg: "/static/images/j-2.jpg"
					}
				] //海报数组
			};
		},
		onLoad: function(option) {
			that = this
			that.uid = option.uid
		},
		onShow() {
			that.ifwxl()
			that.huizhihaibao();
		},
		methods: {
			// 判断是不是微信浏览器
			ifwxl(){
				that.ifwx = that.$common.isWeiXinBrowser()
			},
			//去佣金明细
			toMoney() {
				this.$common.navigateTo('../balance/details?status=5');
			},
			//去邀请列表
			toList() {
				this.$common.navigateTo('/pages/member/invite/list');
			},
			
			//获取数据
			getInviteData() {
				return new Promise((resolve, reject) => {
					that.$api.myInvite(res => {
						if (res.status) {
							resolve(res.data)
						} else {
							reject(res.data)
						}
					});
				})
			},
			
			async huizhihaibao() {
				uni.showLoading({
					title: '加载中',
					mask: true
				});
				that.userdata = await that.getInviteData()
				that.userdata.erweima = `${apiBaseUrl}merapi/upgrade/qrcode/uid/${that.uid}`,
				that.selseimg("/static/images/j-2.jpg")
				uni.hideLoading();
			},
			//画带圆角的矩形
			roundRect(ctx,x, y, w, h, r) {
				if (w< 2 * r) r = w / 2;
				if (h < 2 * r) r = h / 2;
				ctx.beginPath();
				ctx.moveTo(x + r, y);
				ctx.arcTo(x + w, y, x + w, y + h, r);
				ctx.arcTo(x + w, y + h, x, y + h, r);
				ctx.arcTo(x, y + h, x, y, r);
				ctx.arcTo(x, y, x + w, y, r);
				ctx.closePath();
			},
			//绘制海报
			selseimg(e) {
				
				const context = uni.createCanvasContext('firstCanvas')

				context.drawImage(e, 0, 0, 260, 370) //海报背景
				
				// that.roundRect(context,10, 280, 260, 110, 10);
				
				// context.setFillStyle('white')
				// context.fillRect(10, 280, 260, 110)

				context.setFillStyle('#333333')
				context.setFontSize(16)
				context.fillText(`我的邀请码: ${that.userdata.code}`, 70, 90)
				context.fill()

				// context.setFillStyle('#333333')
				// context.setFontSize(20)
				// context.fillText(that.userdata.text, 80, 335) //昵称
				// context.fill()

				context.setFillStyle('#666666')
				context.setFontSize(12)
				context.fillText('邀请你加入七星优购商城，', 70, 115)
				context.fillText('这里有你想不到的优惠！', 70, 140)
				context.fill()

				context.drawImage(that.userdata.erweima, 60, 160, 140, 140) //二维码图片
				// context.save()
				// context.beginPath()
				// context.arc(44, 350, 25, 0, 2 * Math.PI)
				// context.clip()
				// context.drawImage(that.userdata.img, 17, 322, 55, 55) //头像
				// context.restore()
				context.draw()
				
			},
			saveCans(e) { //保存海报
				uni.showLoading({
					title: '保存海报中'
				});

				console.log('保存');
				let tempRatio = 1.5;

				// #ifdef H5 || APP-PLUS
				tempRatio = 1;
				// #endif

				uni.canvasToTempFilePath({
					x: 0,
					y: 0,
					width: that.cansWidth * tempRatio,
					height: that.cansHeight * tempRatio,
					destWidth: that.cansWidth * tempRatio * 2,
					destHeight: that.cansHeight * tempRatio * 2,
					canvasId: 'firstCanvas',
					success: function(res) {
						uni.hideLoading()
						uni.saveImageToPhotosAlbum({
							filePath: res.tempFilePath,
							success: function(red) {
								uni.showToast({
									title: '保存相册成功'
								})
								that.imgsrc = res.tempFilePath
								if (e == 2) {
									that.gofenxiang()
								}
							},
							fail(res) {
								if (res.errMsg == "saveImageToPhotosAlbum:fail auth deny") {
									uni.showModal({
										title: '您需要授权相册权限',
										success(res) {
											if (res.confirm) {
												uni.openSetting({
													success(res) {

													},
													fail(res) {
														console.log(res)
													}
												})
											}
										}
									})
								}
							}
						});
					},
					fail(res) {
						uni.hideLoading()
					}
				}, this)
			},
			gofenxiang() {
				that.$refs.pop1.show();
			},
			weixin() {
				uni.share({
					provider: "weixin",
					scene: "WXSceneSession",
					type: 2,
					imageUrl: that.imgsrc,
					success: function(res) {
						console.log(JSON.stringify(res));
					},
					fail: function(err) {
						console.log(JSON.stringify(err));
					}
				});
				that.$refs.pop1.hide();
			},
			bengyouquan() {
				uni.share({
					provider: "weixin",
					scene: "WXSenceTimeline",
					type: 2,
					imageUrl: that.imgsrc,
					success: function(res) {
						console.log(JSON.stringify(res));
					},
					fail: function(err) {
						console.log(JSON.stringify(err));
					}
				});
				that.$refs.pop1.hide();
			},
			qq() {
				uni.share({
					provider: "qq",
					type: 2,
					imageUrl: that.imgsrc,
					success: function(res) {
						console.log(JSON.stringify(res));
					},
					fail: function(err) {
						console.log(JSON.stringify(err));
					}
				});
				that.$refs.pop1.hide();
			}
		}
	}
</script>

<style lang="scss" scoped>
	/* page {
		background-color: #F1F1F1;
	} */
	page {
		/* #ifndef APP-PLUS */
		height: 100%;
		/* #endif */
		/* #ifdef APP-PLUS */
		height: 100vh;
		/* #endif */
	}
	
	.bg {
		/* #ifndef APP-PLUS */
		height: 100%;
		/* #endif */
		/* #ifdef APP-PLUS */
		height: 100vh;
		/* #endif */
		background-color: #fff;
		// padding: 0 60rpx;
	
		.content {
			padding: 20rpx 60rpx 80rpx;
			min-height: 100%;
			box-sizing: border-box;
			background-color: #fff;
		}
	
		.footer {
			margin-top: -100rpx;
			height: 100rpx;
			align-items: center;
			display: flex;
			justify-content: space-around;
			/* #ifdef APP-PLUS */
			position: fixed;
			width: 100%;
			left: 0;
			bottom: 0;
			/* #endif */
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
		margin-top: 30rpx;
		line-height: 2;
		.title {
			font-size: 16px;
		}
	}
	.footer view:first-child {
		padding: 20upx 60upx;
		background: #FF8A00;
		border-radius: 44upx;
		font-size: 30upx;
		color: #FFFFFF;
	}
	
	.footer view:last-child {
		padding: 20upx 60upx;
		background: #FF5256;
		border-radius: 44upx;
		font-size: 30upx;
		color: #FFFFFF;
	}
	.pageHeader {
		height: var(--status-bar-height);
		background-color: #FFFFFF;
	}

	.box-header {
		position: fixed;
		top: 0upx;
		width: 100%;
		z-index: 100;
	}

	.top-box {
		height: 100upx;
		width: 100%;
	}

	.canvas {
		display: flex;
		justify-content: center;
	}

	.imglist {
		width: 100%;
		padding: 20upx 0;
		overflow: auto;
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
