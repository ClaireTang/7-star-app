(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/classify/index"],{"0b62":function(t,e,i){},"16bc":function(t,e,i){"use strict";var s={lvvPopup:function(){return i.e("components/lvv-popup/lvv-popup").then(i.bind(null,"6125"))}},a=function(){var t=this,e=t.$createElement;t._self._c},r=[];i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return s}))},"1a14":function(t,e,i){"use strict";(function(t){i("7c19");s(i("66fd"));var e=s(i("ede7"));function s(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,i("543d")["createPage"])},"1f80":function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=function(){i.e("components/lvv-popup/lvv-popup").then(function(){return resolve(i("6125"))}.bind(null,i)).catch(i.oe)},a={data:function(){return{current:0,id:"",showView:!1,goodsList:[],minPrice:"",maxPrice:"",ajaxStatus:!1,loading:!0,loadingComplete:!1,nodata:!1,toView:"",searchData:{where:{},limit:10,page:1,order:{key:"sort",sort:"asc"}},searchKey:"请输入关键字搜索",alllist:!0,allgrid:!1,screents:!0,screentc:!1,sPrice:"",ePrice:"",brand_list:[],cat_list:[],label_list:[]}},onLoad:function(t){var e={};t.id&&(e={cat_id:t.id}),t.key&&(e={search_name:t.key},this.searchKey=t.key),t.type&&("hot"==t.type&&(e={hot:!0}),"recommend"==t.type&&(e={recommend:!0})),t.cat_id&&(e.cat_id=t.cat_id),t.brand_id&&(e.brand_id=t.brand_id),t.hot&&(e.hot=t.hot),t.recommend&&(e.recommend=t.recommend),t.label_id&&(e.label_id=t.label_id),this.setSearchData({where:e}),this.getGoods()},components:{lvvPopup:s},methods:{listGrid:function(){0==this.current?this.current=1:this.current=0},setSearchData:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=this.searchData;this.searchData=this.$common.deepCopy(i,t),e&&(this.goodsList=[])},onChangeShowState:function(){var t=this;t.showView=!t.showView},comprehensive:function(){this.setSearchData({order:{key:"sort",sort:"asc"},page:1},!0),this.getGoods()},salesVolume:function(){"buy_count"==this.searchData.order.key?"desc"==this.searchData.order.sort?this.searchData.order.sort="asc":this.searchData.order.sort="desc":this.searchData.order={key:"buy_count",sort:"desc"},this.searchData.page=1,this.setSearchData(this.searchData,!0),this.getGoods()},priceSort:function(){"price"==this.searchData.order.key?"desc"==this.searchData.order.sort?this.searchData.order.sort="asc":this.searchData.order.sort="desc":this.searchData.order={key:"price",sort:"asc"},this.searchData.page=1,this.setSearchData(this.searchData,!0),this.getGoods()},onPullDownRefresh:function(){},goodsDetail:function(t){var e="/pages/goods/index/index?id="+t;this.$common.navigateTo(e)},getGoods:function(){var e=this;return!e.ajaxStatus&&(e.ajaxStatus=!0,e.loading=!0,e.loadingComplete=!1,e.nodata=!0,e.loadingComplete?(e.$common.errorToShow("暂时没有数据了"),!1):void e.$api.goodsList(e.conditions(),(function(i){if(i.status){var s=!1;i.data.list.length<e.searchData.limit&&(s=!0);var a=!1;if(1==e.searchData.page&&0==i.data.list.length&&(a=!0),""!=i.data.class_name?t.setNavigationBarTitle({title:i.data.class_name}):i.data.where&&i.data.where.search_name&&""!=i.data.where.search_name&&t.setNavigationBarTitle({title:"商品搜索"}),e.goodsList=e.goodsList.concat(i.data.list),e.ajaxStatus=!1,e.loading=!s&&!a,e.toView="",e.loadingComplete=s&&!a,e.nodata=a,i.data.filter){var r=i.data.filter;if(r.brand_ids){for(var o=0;o<r.brand_ids.length;o++)r.brand_ids[o].isSelect=!1;e.brand_list=r.brand_ids}if(r.goods_cat){for(var n=0;n<r.goods_cat.length;n++)r.goods_cat[n].isSelect=!1;e.cat_list=r.goods_cat}if(r.label_ids){for(var c=0;c<r.label_ids.length;c++)r.label_ids[c].isSelect=!1;e.label_list=r.label_ids}}}})))},lower:function(){var t=this;t.toView="loading",t.loadingComplete||(t.setSearchData({page:t.searchData.page+1}),t.getGoods())},listgrid:function(){var t=this;t.alllist?(t.allgrid=!0,t.listgrid=!0,t.alllist=!1):(t.allgrid=!1,t.listgrid=!1,t.alllist=!0)},conditions:function(){var t=this.searchData,e={};if(e=this.$common.deepCopy(e,t),t.where&&(e.where=JSON.stringify(t.where)),t.order){var i=t.order.key+" "+t.order.sort;"sort"!=t.order.key&&(i+=",sort asc"),e.order=i}else e.order="sort asc";return e},search:function(){this.setSearchData({page:1,where:{search_name:this.keyword}},!0),this.getGoods()},goSearch:function(){var e=getCurrentPages(),i=e[e.length-2];if(i&&i.route){var s=i.route;"pages/index/search"==s?t.navigateBack({delta:1}):this.$common.navigateTo("/pages/index/search")}else this.$common.navigateTo("/pages/index/search")},toshow:function(){this.$refs.lvvpopref.show(),this.screents=!1,this.screentc=!0},toclose:function(){this.$refs.lvvpopref.close(),this.screentc=!1,this.screents=!0},filterNo:function(){this.ePrice="",this.sPrice="";for(var t=0;t<this.cat_list.length;t++)this.cat_list[t].isSelect=!1;for(var e=0;e<this.brand_list.length;e++)this.brand_list[e].isSelect=!1;for(var i=0;i<this.label_list.length;i++)this.label_list[i].isSelect=!1;this.filterOk(),this.toclose()},filterOk:function(){for(var t=this.searchData,e=0;e<this.cat_list.length;e++)this.cat_list[e].isSelect&&(t.where.cat_id=this.cat_list[e].goods_cat_id);for(var i="",s=0;s<this.brand_list.length;s++)this.brand_list[s].isSelect&&(i+=this.brand_list[s].brand_id+",");i&&(i=i.substr(0,i.length-1)),t.where.brand_id=i,t.where.label_id="";for(var a=0;a<this.label_list.length;a++)this.label_list[a].isSelect&&(t.where.label_id=this.label_list[a].id);if(t.where.price_f="",t.where.price_t="",1*this.sPrice<0||""!=this.ePrice&&this.ePrice<=0||1*this.ePrice<0||1*this.sPrice>1*this.ePrice&&""!=this.sPrice&&""!=this.ePrice)return this.$common.errorToShow("价格区间有误"),!1;t.where.price_f=this.sPrice,t.where.price_t=this.ePrice,this.setSearchData(t,!0),this.getGoods(),this.toclose()},selectKey:function(t,e){if("cat_list"==t)for(var i=0;i<this.cat_list.length;i++)this.cat_list[i].goods_cat_id==e?this.cat_list[i].isSelect=!this.cat_list[i].isSelect:this.cat_list[i].isSelect=!1;if("brand_list"==t)for(var s=0;s<this.brand_list.length;s++)this.brand_list[s].brand_id==e&&(this.brand_list[s].isSelect=!this.brand_list[s].isSelect);if("label_list"==t)for(var a=0;a<this.label_list.length;a++)this.label_list[a].id==e?this.label_list[a].isSelect=!this.label_list[a].isSelect:this.label_list[a].isSelect=!1}}};e.default=a}).call(this,i("543d")["default"])},"61b4":function(t,e,i){"use strict";i.r(e);var s=i("1f80"),a=i.n(s);for(var r in s)"default"!==r&&function(t){i.d(e,t,(function(){return s[t]}))}(r);e["default"]=a.a},9665:function(t,e,i){"use strict";var s=i("0b62"),a=i.n(s);a.a},ede7:function(t,e,i){"use strict";i.r(e);var s=i("16bc"),a=i("61b4");for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);i("9665");var o,n=i("f0c5"),c=Object(n["a"])(a["default"],s["b"],s["c"],!1,null,null,null,!1,s["a"],o);e["default"]=c.exports}},[["1a14","common/runtime","common/vendor"]]]);