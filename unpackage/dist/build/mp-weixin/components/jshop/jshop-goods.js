(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/jshop/jshop-goods"],{2740:function(t,n,o){"use strict";var e,a=function(){var t=this,n=t.$createElement,o=(t._self._c,t.__map(t.jdata.params.list,(function(n,o){var e=t._f("substr")(n.name);return{$orig:t.__get_orig(n),f0:e}})));t.$mp.data=Object.assign({},{$root:{l0:o}})},r=[];o.d(n,"b",(function(){return a})),o.d(n,"c",(function(){return r})),o.d(n,"a",(function(){return e}))},"2bdd":function(t,n,o){"use strict";o.r(n);var e=o("fa66"),a=o.n(e);for(var r in e)"default"!==r&&function(t){o.d(n,t,(function(){return e[t]}))}(r);n["default"]=a.a},"5b08":function(t,n,o){"use strict";o.r(n);var e=o("2740"),a=o("2bdd");for(var r in a)"default"!==r&&function(t){o.d(n,t,(function(){return a[t]}))}(r);o("b12a");var u,i=o("f0c5"),s=Object(i["a"])(a["default"],e["b"],e["c"],!1,null,null,null,!1,e["a"],u);n["default"]=s.exports},8115:function(t,n,o){},b12a:function(t,n,o){"use strict";var e=o("8115"),a=o.n(e);a.a},fa66:function(t,n,o){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e=o("bbcf"),a={filters:{substr:function(t){return 0!=t.length&&void 0!=t&&(t.length>13?t.substring(0,13)+"...":t)}},mixins:[e.goods],name:"jshopgoods",props:{jdata:{required:!0}},computed:{count:function(){return this.jdata.params.list.length>0}},methods:{goodsDetail:function(t){var n="/pages/goods/index/index?id="+t;this.$common.navigateTo(n)}}};n.default=a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/jshop/jshop-goods-create-component',
    {
        'components/jshop/jshop-goods-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("5b08"))
        })
    },
    [['components/jshop/jshop-goods-create-component']]
]);
