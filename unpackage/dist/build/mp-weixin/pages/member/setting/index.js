(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/member/setting/index"],{a80d:function(t,n,e){"use strict";e.r(n);var i=e("b611"),o=e("f809");for(var a in o)"default"!==a&&function(t){e.d(n,t,(function(){return o[t]}))}(a);e("fda1");var c,u=e("f0c5"),r=Object(u["a"])(o["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],c);n["default"]=r.exports},abcf:function(t,n,e){},b611:function(t,n,e){"use strict";var i,o=function(){var t=this,n=t.$createElement;t._self._c},a=[];e.d(n,"b",(function(){return o})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){return i}))},bb1c:function(t,n,e){"use strict";(function(t){e("7c19");i(e("66fd"));var n=i(e("a80d"));function i(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])},f0fe:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={methods:{navigateToHandle:function(t){this.$common.navigateTo(t)},clearCache:function(){var t=this;this.$api.shopConfig((function(n){t.$store.commit("config",n)})),this.$db.del("areaList"),setTimeout((function(){t.$common.successToShow("清除成功")}),500)},aboutUs:function(){var t=this.$store.state.config.about_article_id;this.$common.navigateTo("/pages/article/index?id_type=1&id="+t)},logOff:function(){var n=this;this.$common.modelShow("退出","确认退出登录吗?",(function(){n.$db.del("userToken"),t.reLaunch({url:"/pages/index/index"})}))},goAgreement:function(){var t=this.$store.state.config.user_agreement_id;this.$common.navigateTo("/pages/article/index?id_type=1&id="+t)},goPrivacy:function(){var t=this.$store.state.config.privacy_policy_id;this.$common.navigateTo("/pages/article/index?id_type=1&id="+t)}}};n.default=e}).call(this,e("543d")["default"])},f809:function(t,n,e){"use strict";e.r(n);var i=e("f0fe"),o=e.n(i);for(var a in i)"default"!==a&&function(t){e.d(n,t,(function(){return i[t]}))}(a);n["default"]=o.a},fda1:function(t,n,e){"use strict";var i=e("abcf"),o=e.n(i);o.a}},[["bb1c","common/runtime","common/vendor"]]]);