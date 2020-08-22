<template>
	<view>
		<view class="goods-price red-price">￥{{ vipPrice }}</view>
		<view class="goods-price color-9 fsz28"  v-if="$db.get('userToken')">原价:￥{{ sellPrice }}</view>
	</view>
</template>

<script>
	export default {
		props: {
			vipPrice: "",
			sellPrice: "",
		}
	}
</script>

<style>

</style>
