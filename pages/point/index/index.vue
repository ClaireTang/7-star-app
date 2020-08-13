<template>
	<view class="point">
		<view class="uni-padding-wrap">
			<view class="page-section swiper">
				<view class="page-section-spacing">
					<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
						<swiper-item v-for="(item,index) in bannerList" :key="index">
							<view class="swiper-item" @click="redirect(item)">
								<image  class="swiper-image" :src="item.img" mode="heightFix" />
							</view>
						</swiper-item>
					</swiper>
				</view>
			</view>
		</view>
		

		<!-- 搜索框 -->
		<view class="search" ref="searchBar" id="search">
			<view class='search-c' @click='goSearch()'  >
				<view class='search-input search-input-p'>
					<view class="search-input-p-c">
						{{keywords}}
					</view>
				</view>
				<image class='icon search-icon' src='/static/image/zoom.png'></image>
			</view>
		</view>
		<!-- 搜索框 -->

		<view  v-if="goodsLists.list.length">
		<view class="goods-list">
			<view class="goods-item"  v-for="(item, index) in goodsLists.list" :key="index">
				<navigator @click="goodsDetail(item.id)">
					<view class="goods-image">
						<image class="image" :src="item.mast_image.url"/>
					</view>
					<view class="goods-detail">
						<view class="name">
							{{item.name}}
						</view>	
						<view class="price">
							<text class="text">
								{{item.point}}积分    
							</text>
							<text class="buy">
								兑
							</text>	
						</view>	
					</view>	
				</navigator>	
			</view>	
		
		</view>
		<uni-load-more :status="goodsLists.loadStatus"></uni-load-more>
		</view>
		<view class="goods-none" v-else>
			<text>暂无积分商品</text>
		</view>
		
	</view>
</template>

<script>
	import uniLoadMore from '@/components/uni-load-more/uni-load-more.vue';
	export default {
		components:{
			uniLoadMore,
		},
		data() {
			return {
				indicatorDots: true,
				autoplay: false,
				interval: 2000,
				duration: 500,
				keywords:"搜索",
				bannerList:[],
				goodsLists: {
					loadStatus: 'more',
					page: 1,
					limit: 5,
					list: []
				}, //
			}
		},
		mounted() {
			this.getBannerLists();
			this.getGoodPoints();
		},
		onReachBottom() {
			if (his.goodsLists.loadStatus === 'more') {
				this.getGoodPoints();
			}
		},
		methods: {
			goSearch() {
				uni.navigateTo({
					url: '/pages/index/search'
				});
			},
			redirect(item){
				if(item.url){
					this.$common.navigateTo(item.url);
				}
			},
			//跳转到商品详情页面
			goodsDetail: function(id) {
				let url = '/pages/point/detail/detail?id=' + id;
				this.$common.navigateTo(url);
			},
			getBannerLists(){
				this.$api.pointBanner({},res=>{
					this.bannerList = res.data;
				});
			},
			getGoodPoints(){
				let data = {
					page: this.goodsLists.page,
					limit: this.goodsLists.limit,
				}
				this.goodsLists.loadStatus = 'loading';
				
				this.$api.goodsPoints(data,res=>{
					if (res.code == 200) {
						let _list = res.data.data;
						let count = res.data.count;
						this.goodsLists.list = [...this.goodsLists.list, ..._list];
						// 根据count数量判断是否还有数据
						if (res.data.total > this.goodsLists.list.length) {
							this.goodsLists.loadStatus = 'more';
							this.goodsLists.page++;
						} else {
							this.goodsLists.loadStatus = 'noMore';
						}
					} else {
						this.$common.errorToShow(res.msg);
					}
				});
			},
			
			changeIndicatorDots(e) {
				this.indicatorDots = !this.indicatorDots
			},
			changeAutoplay(e) {
				this.autoplay = !this.autoplay
			},
			intervalChange(e) {
				this.interval = e.target.value
			},
			durationChange(e) {
				this.duration = e.target.value
			}
		}
	}
</script>

<style>
	.swiper-image{
		width:100%;
		height: 320upx;
	}
	.menu{
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		height: 110upx;
		margin-top: 20upx;
	}
	.point .search{
		backgroud:#eee;
	}
	.menu .item {
		width: 25%;
	}
	.menu .item .nav-image{
		width: 100%;
		height: 110upx;
	}
	.search-input-p {
		color: #888;
	}
	.square{
		border-radius: 0;
	}
	.radius{
		border-radius: 12upx;
	}
	.image-banner{
		width: 100%;
		height: 450upx;
	}
	.goods-list{
		margin-top: 10upx;
		display: flex;
		flex-flow: row wrap;
		justify-content: start;
		align-items: center;	
	}
	.goods-list .goods-item{
		background: #fff;
		border-radius: 8upx;
		height: 450upx;
		width: 47.5%;
		margin-bottom: 20upx;
		margin-left:15upx;
	}
	.goods-list .goods-item .goods-detail{
		padding:10upx 20upx;
	}
	.goods-list .goods-item .image{
		width: 100%;
		height: 300upx;
	}
	.goods-list .goods-item .name{
		height: 72upx;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		font-size: 28upx;
		line-height:36upx;
	}
	.goods-list .goods-item .price{
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.goods-list .goods-item .price .text{
		color: #ff5555;
		font-size:32upx;
		text-overflow: ellipsis;
		display: -webkit-box;
		overflow: hidden;
		-webkit-line-clamp: 1;
		-webkit-box-orient: vertical;
		word-break: break-all;
	}
	.goods-list .goods-item .price .buy{
		background: #ff5555;
		color: #fff;
		vertical-align: middle;
		width: 1.1rem;
		padding: 0;
		text-align: center;
		line-height: 1.1rem;
	}
	.goods-none{
		padding:30upx;
		display: flex;
		justify-content: center;
		align-items: center;
		color:#999;
	}
</style>
