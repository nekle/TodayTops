<template>
	<view class="news-container">

		<!-- 文本部分 -->
		<view class="news-text">
			<text class="higher-view-text">{{title}}图文新闻</text>
			<view class="lower-view">
				<text style="font-size: 10px; color: red; ">{{status}}图文新闻</text>
				<text style="font-size: 10px;">{{author}}图文新闻</text>
				<text style="font-size: 10px;">{{date}}图文新闻</text>
			</view>
		</view>

		<!-- 封面图部分 -->
		<image class="news-cover-img" :src="src" mode="aspectFit" lazy-load></image>


	</view>
</template>

<script>
	export default {

		name: "textNewsWithCover",

		props: {
			title: String,
			status: String,
			author: String,
			date: String,
		},

		data() {
			return {
				src: 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/6acec660-4f31-11eb-a16f-5b3e54966275.jpg'
			};
		},

		methods: {},

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

	.news-container {
		height: 100%;
		width: 100%;
	}

	.news-text {
		border-right: 1px solid #999999;
		width: 55%;
		display: inline-block;
	}

	.news-cover-img {
		display: inline-block;
		width: 40%;
		height: 100%;
	}
</style>
