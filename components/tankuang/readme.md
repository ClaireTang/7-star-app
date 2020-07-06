### popUp 自由灵活的弹层

可进行多种属性操控的弹层组件，组件名：``jcPopUp``，代码块： <jc-popUp></jc-popUp>。

**Bug修复：**

1、在属性markTapHide='true'时，本意是点击蒙层可关闭弹层。bug:点击弹层自身也会关闭。已修复！

**使用方式：**

在 ``template`` 中使用组件

```html
<jc-popUp position="bottom" ref="pop4" closeIcon="true" iconSize="40" iconTop="20" iconLeft="45">
	<view style="width:100%;height:70%;background:#FFFFFF;position:absolute;bottom:0;right:0;">
				`````````````````````````````````````````·····································
					弹层宽、高、背景色							弹层在屏幕中的位置
	</view>			
</jc-popUp>
```

在 ``script`` 中引用组件 

```javascript
import jcPopUp from '@/components/jc-popUp/jc-popUp.vue';
export default {
	data() {
		return {
			
		}
	},
	methods: {
		popFour(){
			this.$refs.pop4.show();	···在事件中使ref="pop4"的弹层出现
			this.$refs.pop4.hide();	···在事件中使ref="pop4"的弹层消失
		}
	},
    components: {jcPopUp}
}
```

**jcPopUp 属性说明：**

|属性名		|类型	|默认值	|说明												|
|---		|----	|---	|---												|
|position	|String	|''		|弹层出现的方位，必填，top/bottom/left/right可选		|
|ref		|String	|''		|弹层识别器，必填，一个页面可能会使用多个弹层			|
|closeIcon	|String	|''		|白色的关闭图标是否显示，选填，默认不显示，'true'可显示	|
|iconSize	|String	|'26'	|关闭图标的大小，单位px								|
|iconTop	|String |'0'	|图标距离屏幕顶部的距离，单位%						|
|iconLeft	|String |'0'	|图标距离屏幕左边的距离，单位%						|
|markTapHide|String |''		|点击蒙层关闭弹层，默认不关闭，'true'可关闭			|
|markMove	|String |'false'|击穿蒙层进行滑动页面，默认不击穿，'true'可击穿		|