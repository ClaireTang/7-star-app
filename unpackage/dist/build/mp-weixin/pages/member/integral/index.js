(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/member/integral/index"],{"181f":function(t,n,o){"use strict";o.r(n);var e=o("84fe"),r=o("fc6b");for(var a in r)"default"!==a&&function(t){o.d(n,t,(function(){return r[t]}))}(a);o("896f");var i,u=o("f0c5"),c=Object(u["a"])(r["default"],e["b"],e["c"],!1,null,null,null,!1,e["a"],i);n["default"]=c.exports},"42fc":function(t,n,o){"use strict";(function(t){o("7c19");e(o("66fd"));var n=e(o("181f"));function e(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,o("543d")["createPage"])},6496:function(t,n,o){"use strict";function e(t){return u(t)||i(t)||a(t)||r()}function r(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function a(t,n){if(t){if("string"===typeof t)return c(t,n);var o=Object.prototype.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(o):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?c(t,n):void 0}}function i(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function u(t){if(Array.isArray(t))return c(t)}function c(t,n){(null==n||n>t.length)&&(n=t.length);for(var o=0,e=new Array(n);o<n;o++)e[o]=t[o];return e}Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var f=function(){o.e("components/uni-load-more/uni-load-more").then(function(){return resolve(o("897a"))}.bind(null,o)).catch(o.oe)},l={data:function(){return{page:1,limit:10,pointList:[],loadStatus:"more"}},components:{uniLoadMore:f},onLoad:function(){this.userPointLog()},computed:{nowDate:function(){return this.$common.timeToDate(Math.round((new Date).getTime()/1e3))}},methods:{userPointLog:function(){var t=this,n={page:t.page,limit:t.limit};t.loadStatus="loading",t.$api.pointLog(n,(function(n){n.status?(t.pointList=[].concat(e(t.pointList),e(n.data)),n.count>t.pointList.length?(t.page++,t.loadStatus="more"):t.loadStatus="noMore"):(t.$common.errorToShow(n.msg),t.loadStatus="more")}))}},onReachBottom:function(){var t=this;"more"===t.loadStatus&&t.userPointLog()}};n.default=l},"84fe":function(t,n,o){"use strict";var e={uniLoadMore:function(){return o.e("components/uni-load-more/uni-load-more").then(o.bind(null,"897a"))}},r=function(){var t=this,n=t.$createElement;t._self._c},a=[];o.d(n,"b",(function(){return r})),o.d(n,"c",(function(){return a})),o.d(n,"a",(function(){return e}))},"896f":function(t,n,o){"use strict";var e=o("e575"),r=o.n(e);r.a},e575:function(t,n,o){},fc6b:function(t,n,o){"use strict";o.r(n);var e=o("6496"),r=o.n(e);for(var a in e)"default"!==a&&function(t){o.d(n,t,(function(){return e[t]}))}(a);n["default"]=r.a}},[["42fc","common/runtime","common/vendor"]]]);