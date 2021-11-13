<template>
	<view>
		{{name}}
		<input type="text" :value="name">
		<button @click="print('哈哈')" class="">点击</button>
	</view>
</template>

<script>
	export default {
		name:"newComponent",
		data() {
			return {
				name:"zhuowei",
				age:"22",
				gender:"male",
			};
		},
		methods:{
			print(str) {
				console.log("我是卓威" + str)
			}
		},
		mounted() {
			this.print("初次启动")
		}
	}
</script>

<style>

</style>
