(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/goods/index/group"],{"36d1":function(t,o,n){"use strict";var e={uniCountdown:function(){return n.e("components/uni-countdown/uni-countdown").then(n.bind(null,"2057"))},uniSegmentedControl:function(){return n.e("components/uni-segmented-control/uni-segmented-control").then(n.bind(null,"5a8b"))},uniRate:function(){return n.e("components/uni-rate/uni-rate").then(n.bind(null,"6c75"))},uniLoadMore:function(){return n.e("components/uni-load-more/uni-load-more").then(n.bind(null,"897a"))},lvvPopup:function(){return n.e("components/lvv-popup/lvv-popup").then(n.bind(null,"6125"))},spec:function(){return n.e("components/spec/spec").then(n.bind(null,"088b"))},uniNumberBox:function(){return n.e("components/uni-number-box/uni-number-box").then(n.bind(null,"ec84"))},uniFab:function(){return n.e("components/uni-fab/uni-fab").then(n.bind(null,"f583"))}},i=function(){var t=this,o=t.$createElement,n=(t._self._c,parseFloat(t.product.mktprice));t.$mp.data=Object.assign({},{$root:{m0:n}})},s=[];n.d(o,"b",(function(){return i})),n.d(o,"c",(function(){return s})),n.d(o,"a",(function(){return e}))},"39bf":function(t,o,n){"use strict";var e=n("6f77"),i=n.n(e);i.a},"6f77":function(t,o,n){},7347:function(t,o,n){"use strict";n.r(o);var e=n("36d1"),i=n("8b09");for(var s in i)"default"!==s&&function(t){n.d(o,t,(function(){return i[t]}))}(s);n("39bf");var r,u=n("f0c5"),a=Object(u["a"])(i["default"],e["b"],e["c"],!1,null,null,null,!1,e["a"],r);o["default"]=a.exports},"8b09":function(t,o,n){"use strict";n.r(o);var e=n("b438"),i=n.n(e);for(var s in e)"default"!==s&&function(t){n.d(o,t,(function(){return e[t]}))}(s);o["default"]=i.a},b438:function(t,o,n){"use strict";(function(t){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var e=n("df48"),i=n("cf70");function s(t){return c(t)||a(t)||u(t)||r()}function r(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(t,o){if(t){if("string"===typeof t)return d(t,o);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(t,o):void 0}}function a(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function c(t){if(Array.isArray(t))return d(t)}function d(t,o){(null==o||o>t.length)&&(o=t.length);for(var n=0,e=new Array(o);n<o;n++)e[n]=t[n];return e}var l=function(){n.e("components/uni-segmented-control/uni-segmented-control").then(function(){return resolve(n("5a8b"))}.bind(null,n)).catch(n.oe)},m=function(){n.e("components/lvv-popup/lvv-popup").then(function(){return resolve(n("6125"))}.bind(null,n)).catch(n.oe)},f=function(){n.e("components/uni-number-box/uni-number-box").then(function(){return resolve(n("ec84"))}.bind(null,n)).catch(n.oe)},p=function(){n.e("components/uni-rate/uni-rate").then(function(){return resolve(n("6c75"))}.bind(null,n)).catch(n.oe)},h=function(){n.e("components/uni-load-more/uni-load-more").then(function(){return resolve(n("897a"))}.bind(null,n)).catch(n.oe)},g=function(){n.e("components/uni-fab/uni-fab").then(function(){return resolve(n("f583"))}.bind(null,n)).catch(n.oe)},b=function(){n.e("components/uni-countdown/uni-countdown").then(function(){return resolve(n("2057"))}.bind(null,n)).catch(n.oe)},v=function(){n.e("components/spec/spec").then(function(){return resolve(n("088b"))}.bind(null,n)).catch(n.oe)},_=function(){n.e("components/share/shareByWx").then(function(){return resolve(n("2a91"))}.bind(null,n)).catch(n.oe)},y=function(){n.e("components/jshop/jshop-content").then(function(){return resolve(n("589b"))}.bind(null,n)).catch(n.oe)},w={components:{uniSegmentedControl:l,lvvPopup:m,uniNumberBox:f,uniRate:p,uniLoadMore:h,uniFab:g,uniCountdown:b,spec:v,jshopContent:y,shareByWx:_},data:function(){return{swiper:{indicatorDots:!0,autoplay:!0,interval:3e3,duration:800},items:["图文详情","商品参数","买家评论"],current:0,goodsId:0,groupId:0,goodsInfo:{},cartNums:0,product:{},goodsParams:[],goodsComments:{loadStatus:"more",page:1,limit:5,list:[]},buyNum:1,minBuyNum:1,type:1,isfav:!1,favLogo:["/static/image/ic-me-collect.png","/static/image/ic-me-collect2.png"],horizontal:"right",vertical:"bottom",direction:"vertical",pattern:{color:"#7A7E83",backgroundColor:"#fff",selectedColor:"#007AFF",buttonColor:"#FF7159"},content:[{iconPath:"/static/image/tab-ic-hom-selected.png",selectedIconPath:"/static/image/tab-ic-hom-unselected.png",active:!1,url:"/pages/index/index"},{iconPath:"/static/image/tab-ic-me-selected.png",selectedIconPath:"/static/image/tab-ic-me-unselected.png",active:!1,url:"/pages/member/index/index"}],indicatorDots:!1,autoplay:!1,interval:2e3,duration:500,lasttime:{hour:!1,minute:0,second:0},shareUrl:"/pages/share/jump"}},onLoad:function(o){this.goodsId=o.id,this.groupId=o.group_id,this.goodsId&&this.groupId?(this.getGoodsInfo(),this.getGoodsParams(),this.getGoodsComments()):this.$common.errorToShow("获取失败",(function(){t.navigateBack({delta:1})})),this.getCartNums()},computed:{minNums:function(){return this.product.stock>this.minBuyNum?this.minBuyNum:this.product.stock},isSpes:function(){return!(!this.product.hasOwnProperty("default_spes_desc")||!Object.keys(this.product.default_spes_desc).length)},promotion:function(){var t=[];if(this.product.promotion_list)for(var o in this.product.promotion_list)t.push(this.product.promotion_list[o]);return t},typeName:function(){return 3==this.goodsInfo.group_type?"团购":"秒杀"},shareHref:function(){var t=getCurrentPages(),o=t[t.length-1];return i.apiBaseUrl+"wap/"+o.route+"?id="+this.goodsId+"&group_id="+this.groupId},shopMobile:function(){return this.$store.state.config.shop_mobile||0},goodsShowWord:function(){return this.$store.state.config.goods_show_word}},onReachBottom:function(){2===this.current&&"more"===this.goodsComments.loadStatus&&this.getGoodsComments()},methods:{backBtn:function(){var o=getCurrentPages();o.length>1?t.navigateBack({delta:1}):t.switchTab({url:"/pages/index/index"})},getGoodsInfo:function(){var o=this,n={id:this.goodsId,group_id:this.groupId},i=(0,e.get)("userToken");i&&(n["token"]=i);var s=this;this.$api.groupInfo(n,(function(n){if(n.status)if(n.data.length<1)o.$common.errorToShow("该商品不存在，请返回重新选择商品。",(function(){t.navigateBack({delta:1})}));else if(1!=n.data.marketable)o.$common.errorToShow("该商品已下架，请返回重新选择商品。",(function(){t.navigateBack({delta:1})}));else{var e=n.data,r=n.data.product;o.goodsInfo=e,o.isfav="true"===o.goodsInfo.isfav,o.product=o.spesClassHandle(r);var u=n.data.lasttime;s.lasttime=u,i&&o.goodsBrowsing()}}))},getCartNums:function(){var t=this,o=this.$db.get("userToken");o&&""!=o&&this.$api.getCartNum({},(function(o){o.status&&(t.cartNums=o.data)}))},toshow:function(t){this.type=t,this.$refs.lvvpopref.show()},toclose:function(){this.$refs.lvvpopref.close()},changeSpes:function(o){var n=this,e=o.v,i=o.k;if(this.product.default_spes_desc[e][i].hasOwnProperty("product_id")&&this.product.default_spes_desc[e][i].product_id){var s={id:this.product.default_spes_desc[e][i].product_id,type:"group"},r=this.$db.get("userToken");r&&(s["token"]=r),this.$api.getProductInfo(s,(function(t){1==t.status&&(n.buyNum=t.data.stock>n.minBuyNum?n.minBuyNum:t.data.stock,n.product=n.spesClassHandle(t.data))})),t.showLoading({title:"加载中"}),setTimeout((function(){t.hideLoading()}),1e3)}},spesClassHandle:function(t){if(t.hasOwnProperty("default_spes_desc")){var o=t.default_spes_desc;for(var n in o)for(var e in o[n])o[n][e].hasOwnProperty("is_default")&&!0===o[n][e].is_default?this.$set(o[n][e],"cla","pop-m-item selected"):o[n][e].hasOwnProperty("product_id")&&o[n][e].product_id?this.$set(o[n][e],"cla","pop-m-item not-selected"):this.$set(o[n][e],"cla","pop-m-item none");t.default_spes_desc=o}return t},bindChange:function(t){this.buyNum=t},collection:function(){var t=this,o={goods_id:this.goodsInfo.id};this.$api.goodsCollection(o,(function(o){o.status?(t.isfav=!t.isfav,t.$common.successToShow(o.msg)):t.$common.errorToShow(o.msg)}))},onClickItem:function(t){this.current!==t&&(this.current=t)},getGoodsParams:function(){var t=this;this.$api.goodsParams({id:this.goodsId},(function(o){1==o.status&&(t.goodsParams=o.data)}))},getGoodsComments:function(){var t=this,o={page:this.goodsComments.page,limit:this.goodsComments.limit,goods_id:this.goodsId};this.goodsComments.loadStatus="loading",this.$api.goodsComment(o,(function(o){if(1==o.status){var n=o.data.list;n.forEach((function(o){o.ctime=t.$common.timeToDate(o.ctime),o.hasOwnProperty("images_url")||t.$set(o,"images_url",[])})),t.goodsComments.list=[].concat(s(t.goodsComments.list),s(n)),o.data.count>t.goodsComments.list.length?(t.goodsComments.loadStatus="more",t.goodsComments.page++):t.goodsComments.loadStatus="noMore"}else t.$common.errorToShow(o.msg)}))},goodsBrowsing:function(){var t={goods_id:this.goodsInfo.id};this.$api.addGoodsBrowsing(t,(function(t){}))},buyNow:function(){var t=this;if(this.buyNum>0){var o={product_id:this.product.id,nums:this.buyNum,order_type:1};this.$api.addCart(o,(function(o){if(o.status){t.toclose();var n=o.data;t.$common.navigateTo("/pages/goods/place-order/index?cart_ids="+JSON.stringify(n))}else t.$common.errorToShow(o.msg)}))}},Group:function(){var t=this;if(this.buyNum>0){var o={product_id:this.product.id,nums:this.buyNum,order_type:this.type};this.$api.addCart(o,(function(o){if(o.status){t.toclose();var n=o.data;t.$common.navigateTo("/pages/goods/place-order/index?cart_ids="+JSON.stringify(n))}}))}},redirectCart:function(){t.switchTab({url:"/pages/cart/index/index"})},trigger:function(o){this.content[o.index].active=!o.item.active,t.switchTab({url:o.item.url})},goShare:function(){this.$refs.share.show()},closeShare:function(){this.$refs.share.close()},clickImg:function(o){t.previewImage({urls:o.split()})},showChat:function(){},getShareUrl:function(){var t=this,o={client:2,url:"/pages/share/jump",type:1,page:9,params:{goods_id:this.goodsId,group_id:this.groupId}},n=this.$db.get("userToken");n&&""!=n&&(o["token"]=n),this.$api.share(o,(function(o){t.shareUrl=o.data}))}},watch:{goodsId:{handler:function(){this.getShareUrl()},deep:!0}},onShareAppMessage:function(){return{title:this.goodsInfo.name,imageUrl:this.goodsInfo.album[0],path:this.shareUrl}}};o.default=w}).call(this,n("543d")["default"])},e5c9:function(t,o,n){"use strict";(function(t){n("7c19");e(n("66fd"));var o=e(n("7347"));function e(t){return t&&t.__esModule?t:{default:t}}t(o.default)}).call(this,n("543d")["createPage"])}},[["e5c9","common/runtime","common/vendor"]]]);