(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-login-login-index1"],{"0bc3":function(t,i,e){var n=e("c363");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=e("4f06").default;o("de17c694",n,!0,{sourceMap:!1,shadowMode:!1})},"178e":function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=e("cf70"),o=e("bbcf"),a={mixins:[o.goBack,o.jumpBackPage],data:function(){return{maxMobile:11,mobile:"",pwd:"",isCaptcha:!1,captcha:"",captchaUrl:"",btnb:"btn btn-square btn-c btn-all",weixinBrowser:!1,thirdPartyLogins:[]}},onLoad:function(t){t.invitecode&&this.$db.set("invitecode",t.invitecode),this.weixinBrowser=this.$common.isWeiXinBrowser(),this.weixinBrowser&&this.getAuths()},onShow:function(){this.$db.get("userToken")&&uni.switchTab({url:"/pages/index/index"})},computed:{loginButtonClass:function(){return this.mobile&&11===this.mobile.length&&this.pwd?this.btnb+" btn-b":this.btnb},logoImage:function(){return this.$store.state.config.shop_logo},getThirdLoginImg:function(t){return function(t){return"Wxofficial"==t?"/static/image/ic-wechat.png":"weixin"==t?"/static/image/ic-wechat.png":void 0}}},methods:{rightMobile:function(){var t={};return this.mobile?/^1[3456789]{1}\d{9}$/gi.test(this.mobile)?this.pwd?t.status=!0:(t.status=!1,t.msg="请输入密码"):(t.status=!1,t.msg="手机号格式不正确"):(t.status=!1,t.msg="请输入手机号"),t},loginHandler:function(){this.mobile&&11===this.mobile.length&&this.pwd&&(this.rightMobile().status?this.toLogin():this.$common.errorToShow(this.rightMobile().msg))},getCaptchaUrl:function(){this.captchaUrl=this.$config.apiBaseUrl+"captcha.html"},toReg:function(){this.$common.navigateTo("/pages/login/register/index")},toLogin:function(){var t=this,i={mobile:this.mobile,password:this.pwd};this.isCaptcha&&(i.captcha=this.captcha);var e=this.$db.get("invitecode");e&&(i.invitecode=e),this.$api.login(i,(function(i){i.status?(t.$db.set("userToken",i.data),t.redirectHandler()):t.$common.errorToShow(i.msg,(function(){10013!==i.data&&10012!==i.data||(t.isCaptcha=!0),t.isCaptcha&&t.getCaptchaUrl()}))}))},redirectHandler:function(){this.$db.del("invitecode"),this.handleBack()},selectLoginType:function(){this.$common.redirectTo("/pages/login/login/index")},getAuths:function(){var t=this,i={url:n.baseUrl+"wap/pages/author"};this.$api.getTrustLogin(i,(function(i){i.status&&(t.thirdPartyLogins=i.data)}))},handleThirdLogin:function(t){this.$common.redirectTo("");var i=this.$store.state.redirectPage;this.$db.set("redirectPage",i),window.location.href=t},getAppAuths:function(){var t=this;t.thirdPartyLogins=[],uni.getProvider({service:"oauth",success:function(i){"getProvider:ok"==i.errMsg&&(t.thirdPartyLogins=i.provider)}})},handleThirdLoginApp:function(t){uni.showLoading({title:"加载中"});var i=this;uni.login({provider:t,success:function(e){uni.getUserInfo({provider:t,success:function(e){if("getUserInfo:ok"==e.errMsg){var n={user:e.userInfo,type:t},o=i.$db.get("invitecode");o&&(n.invitecode=o),i.$api.appTrustLogin(n,(function(t){if(uni.hideLoading(),t.status){if("undefined"!=typeof t.data.token)return i.$db.set("userToken",t.data.token),uni.navigateBack({delta:1}),!1;uni.redirectTo({url:"/pages/login/login/index?user_wx_id="+t.data.user_wx_id})}else i.$common.errorToShow("登录失败，请重试")}))}else uni.hideLoading(),i.$common.errorToShow("登录失败，请重试")}})}})},goAgreement:function(){var t=this.$store.state.config.user_agreement_id;this.$common.navigateTo("/pages/article/index?id_type=1&id="+t)},goPrivacy:function(){var t=this.$store.state.config.privacy_policy_id;this.$common.navigateTo("/pages/article/index?id_type=1&id="+t)},goForgetpwd:function(){this.$common.navigateTo("/pages/login/forget/forget")}}};i.default=a},"22b7":function(t,i,e){"use strict";e.r(i);var n=e("39cd"),o=e("84ef");for(var a in o)"default"!==a&&function(t){e.d(i,t,(function(){return o[t]}))}(a);e("8577");var s,r=e("f0c5"),c=Object(r["a"])(o["default"],n["b"],n["c"],!1,null,"73f10d74",null,!1,n["a"],s);i["default"]=c.exports},"39cd":function(t,i,e){"use strict";var n,o=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"content"},[e("v-uni-view",{staticClass:"login-t"},[e("v-uni-image",{staticClass:"login-logo",attrs:{src:t.logoImage,mode:"aspectFill"}})],1),e("v-uni-view",[e("v-uni-view",{staticClass:"login-m"},[e("v-uni-view",{staticClass:"login-item"},[e("v-uni-input",{attrs:{type:"number",maxlength:t.maxMobile,placeholder:"请输入手机号码","placeholder-class":"login-item-i-p fsz26"},model:{value:t.mobile,callback:function(i){t.mobile=i},expression:"mobile"}})],1),e("v-uni-view",{staticClass:"login-item flc"},[e("v-uni-input",{staticClass:"login-item-input",attrs:{password:!0,"placeholder-class":"login-item-i-p fsz26",type:"text",placeholder:"请输入密码"},model:{value:t.pwd,callback:function(i){t.pwd=i},expression:"pwd"}})],1),t.isCaptcha?e("v-uni-view",{staticClass:"login-item"},[e("v-uni-input",{staticClass:"login-item-input",attrs:{"placeholder-class":"login-item-i-p fsz26",type:"text",placeholder:"输入验证码"},model:{value:t.captcha,callback:function(i){t.captcha=i},expression:"captcha"}}),e("img",{staticClass:"codeimg",attrs:{src:t.captchaUrl,alt:""}})],1):t._e(),e("v-uni-view",{staticClass:"goforgetpwd color-9 fsz24",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goForgetpwd()}}},[t._v("忘记密码？")])],1),e("v-uni-view",{staticClass:"login-b"},[e("v-uni-button",{class:t.loginButtonClass,attrs:{"hover-class":"btn-hover"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.loginHandler.apply(void 0,arguments)}}},[t._v("登录")]),e("v-uni-view",{staticClass:"color-9 fsz24 agreement"},[t._v("登录即代表你同意"),e("v-uni-text",{staticClass:"color-o",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goAgreement()}}},[t._v("用户协议")]),t._v("和"),e("v-uni-text",{staticClass:"color-o",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goPrivacy()}}},[t._v("隐私政策")])],1),e("v-uni-view",{staticClass:"login-other flc"},[e("v-uni-view",{staticClass:"fz12 item",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.selectLoginType.apply(void 0,arguments)}}},[t._v("验证码登录")]),e("v-uni-view",{staticClass:"fz12 item",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.toReg.apply(void 0,arguments)}}},[t._v("注册")])],1)],1)],1),t.weixinBrowser?[e("v-uni-view",{staticClass:"fz12 g5"},[t._v("第三方账号登录：")]),e("v-uni-view",{staticClass:"flc third-block"},t._l(t.thirdPartyLogins,(function(i,n,o){return e("v-uni-view",{key:o,staticClass:"third-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleThirdLogin(i)}}},[e("v-uni-image",{staticClass:"third-item-img",attrs:{src:t.getThirdLoginImg(n),mode:"aspectFill"}})],1)})),1)]:t._e()],2)},a=[];e.d(i,"b",(function(){return o})),e.d(i,"c",(function(){return a})),e.d(i,"a",(function(){return n}))},"84ef":function(t,i,e){"use strict";e.r(i);var n=e("178e"),o=e.n(n);for(var a in n)"default"!==a&&function(t){e.d(i,t,(function(){return n[t]}))}(a);i["default"]=o.a},8577:function(t,i,e){"use strict";var n=e("0bc3"),o=e.n(n);o.a},bbcf:function(t,i,e){"use strict";e("c975"),e("b64b"),Object.defineProperty(i,"__esModule",{value:!0}),i.tools=i.checkLogin=i.jumpBackPage=i.goBack=i.goods=i.orders=void 0;var n={mounted:function(){},methods:{orderDetail:function(t){this.$common.navigateTo("/pages/member/order/orderdetail?order_id="+t)},toPay:function(t){this.$common.navigateTo("/pages/goods/payment/index?order_id="+t+"&type=1")},toEvaluate:function(t){this.$common.navigateTo("/pages/member/order/evaluate?order_id="+t)},showExpress:function(t,i){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",n=encodeURIComponent("code="+t+"&no="+i+"&add="+e);this.$common.navigateTo("/pages/member/order/express_delivery?params="+n)}}};i.orders=n;var o={mounted:function(){},methods:{goodsDetail:function(t){this.$common.navigateTo("/pages/goods/index/index?id="+t)},goodsList:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i="/pages/classify/index";Object.keys(t).length&&(i=this.$common.builderUrlParams(i,t)),this.$common.navigateTo(i)},groupDetail:function(t,i){this.$common.navigateTo("/pages/goods/index/group?id="+t+"&group_id="+i)},pintuanDetail:function(t,i){i?this.$common.navigateTo("/pages/goods/index/pintuan?id="+t+"&team_id="+i):this.$common.navigateTo("/pages/goods/index/pintuan?id="+t)}}};i.goods=o;var a={onBackPress:function(t){if("navigateBack"===t.from)return!1;var i=["/pages/cart/index/index","/pages/member/index/index"],e=this.$store.state.redirectPage;return i.indexOf(e)>-1?(this.$store.commit({type:"redirect",page:""}),uni.switchTab({url:"/pages/index/index"}),!0):void 0}};i.goBack=a;var s={methods:{handleBack:function(){var t=this.$store.state.redirectPage;this.$store.commit({type:"redirect",page:""});var i=["/pages/index/index","/pages/member/index/index"];i.indexOf(t)>-1?uni.switchTab({url:t}):t?uni.redirectTo({url:t}):uni.switchTab({url:"/pages/index/index"})}}};i.jumpBackPage=s;var r={methods:{checkIsLogin:function(){uni.showToast({title:"请先登录！",icon:"none",duration:800,success:function(t){setTimeout((function(){uni.hideToast(),uni.navigateTo({url:"/pages/login/login/index1"})}),800)}})}}};i.checkLogin=r;var c={methods:{copyData:function(t){var i=this;uni.setClipboardData({data:t,success:function(){i.$common.errorToShow("复制成功")}})}}};i.tools=c},c363:function(t,i,e){var n=e("24fb");i=n(!1),i.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.content[data-v-73f10d74]{height:calc(100vh - %?90?%);background-color:#fff;padding:%?0?% %?100?%}.login-t[data-v-73f10d74]{text-align:center;padding:%?50?% 0}.login-logo[data-v-73f10d74]{width:%?180?%;height:%?180?%;-webkit-border-radius:%?20?%;border-radius:%?20?%;background-color:#f8f8f8}.login-m[data-v-73f10d74]{margin-bottom:%?100?%}.login-item[data-v-73f10d74]{border-bottom:%?2?% solid #d0d0d0;overflow:hidden;padding:%?10?%;font-size:%?28?%;color:#333;margin-bottom:%?30?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.login-item-input[data-v-73f10d74]{display:inline-block;-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-sizing:border-box;box-sizing:border-box}.codeimg[data-v-73f10d74]{width:%?210?%}.login-item .btn[data-v-73f10d74]{display:inline-block;font-size:%?28?%;border:none;width:40%;padding:0;line-height:1.7;float:right}.login-b .btn[data-v-73f10d74]{color:#999}.btn-b[data-v-73f10d74]{color:#fff!important}.registered-item[data-v-73f10d74]{overflow:hidden;width:100%}.registered[data-v-73f10d74]{float:right}.registered-item .btn-square[data-v-73f10d74]{color:#333}.third-block[data-v-73f10d74]{-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;padding-top:%?40?%}.third-block .third-item[data-v-73f10d74]{width:%?80?%;height:%?80?%;background:#eee;-webkit-border-radius:50%;border-radius:50%;padding:%?16?%}.third-block .third-item-img[data-v-73f10d74]{display:block;width:100%;height:100%}.login-other[data-v-73f10d74]{margin-bottom:%?40?%}.login-other .item[data-v-73f10d74]{padding:%?20?% 0}.agreement[data-v-73f10d74]{margin:%?20?% 0;text-align:center}.agreement .color-o[data-v-73f10d74]{margin:0 %?10?%}.goforgetpwd[data-v-73f10d74]{width:100%;text-align:right}',""]),t.exports=i}}]);