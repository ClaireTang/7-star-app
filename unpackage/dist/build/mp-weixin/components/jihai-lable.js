(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/jihai-lable"],{"1fc6":function(e,t,n){"use strict";n.r(t);var u=n("f91f"),a=n.n(u);for(var c in u)"default"!==c&&function(e){n.d(t,e,(function(){return u[e]}))}(c);t["default"]=a.a},"3f55":function(e,t,n){"use strict";n.r(t);var u=n("7177"),a=n("1fc6");for(var c in a)"default"!==c&&function(e){n.d(t,e,(function(){return a[e]}))}(c);var i,r=n("f0c5"),f=Object(r["a"])(a["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],i);t["default"]=f.exports},7177:function(e,t,n){"use strict";var u,a=function(){var e=this,t=e.$createElement;e._self._c},c=[];n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){return u}))},f91f:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u={data:function(){return{type_list:[{value:"1",name:"仅退款",checked:!0,disabled:!1},{value:"2",name:"退货退款",checked:!1,disabled:!1}]}},methods:{radioChange:function(e){var t=this;this.type_list.forEach((function(n){n.value===e.target.value?(n.checked=!0,t.aftersale_type=e.target.value):n.checked=!1})),this.type_list[0].checked?this.refund_input_noedit=!0:this.refund_input_noedit=!1}}};t.default=u}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/jihai-lable-create-component',
    {
        'components/jihai-lable-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("3f55"))
        })
    },
    [['components/jihai-lable-create-component']]
]);
