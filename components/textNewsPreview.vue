<template>
	<view>
		<text class="higher-view-text">{{title}}</text>
		<view class="lower-view">
			<text style="font-size: 10px; color: red; ">{{status}}</text>
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

<style scoped>
	* {
		text-decoration: none;
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font: Arial, Helvetica, sans-serif;
	}

	.higher-view-text {
		font-size: 20px;
		display: flex;
		text-align: left;
		justify-content: flex-start;
		color: #222222;
	}

	.lower-view {
		display: flex;
		justify-content: flex-start;
	}
	
	.lower-view text {
		text-align: left;
		margin-right: 5px;
		color: #c8c8c8;
	}
</style>
