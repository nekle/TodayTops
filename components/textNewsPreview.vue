<template>
	<view class="container">
		<text class="higher-view-text">{{title}}</text>
		<view class="lower-view">
			<!-- <text style="font-size: 1.5vh; color: red; ">{{status}}</text> -->
			<text style="font-size: 1.5vh;">{{author}}</text>
			<text style="font-size: 1.5vh;">{{date}}</text>
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

<style scoped>
	* {
		text-decoration: none;
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font: Arial, Helvetica, sans-serif;
	}
	
	.container {
		width: 96vw;
	}
	.higher-view-text {
		font-size: 3vh;
		display: flex;
		width: 100%;
		text-align: left;
		justify-content: flex-start;
		color: #222222;
	}

	.lower-view {
		width:100%;
		display: flex;
		justify-content: flex-start;
	}
	
	.lower-view text {
		text-align: left;
		margin-right: 5px;
		color: #c8c8c8;
	}
</style>
