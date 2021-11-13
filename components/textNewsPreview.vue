<template>
	<view>
		<text style="font-size: 14px;">{{title}}</text>
		<view>
			<text style="font-size: 10px; color: red;">{{status}}</text>
			<text style="font-size: 10px;">{{author}}</text>
			<text style="font-size: 10px;">{{date}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		
		name: "textNewsPreview",
		
		props: {
			title: String,
			status: String,
			author: String,
			date: String,
		},
		
		data() {
			return {};
		},
		
		methods: {

		},

		mounted() {
			
		}

	}
</script>

<style>

</style>
