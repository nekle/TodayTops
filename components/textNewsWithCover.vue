<template>
	<view class="news-container">

		<!-- 文本部分 -->
		<view class="news-text">
			<view class="news-title">
				<text class="higher-view-text">{{title}}</text>
			</view>
			<view class="news-description">
				<text style="font-size: 1vh; color: red; ">{{status}}</text>
				<text style="font-size: 1vh;">{{author}}</text>
				<text style="font-size: 1vh;">{{date}}</text>
			</view>
		</view>

		<!-- 封面图部分 -->
		<image class="news-cover-img" :src="coverSource" mode="aspectFit" lazy-load ></image>


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
			coverSource: String,
		},

		data() {
			return {
				srcHighDef: 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/6acec660-4f31-11eb-a16f-5b3e54966275.jpg',
				srcLowDef: 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/6acec660-4f31-11eb-a16f-5b3e54966275.jpg',
			};
		},

		methods: {
			previewImg() {
				let _this = this
				let imgsArray = []
				imgsArray[0] = _this.srcHighDef
				uni.previewImage({
					current: 0,
					urls: imgsArray
				})
			},
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
	}

	.news-container {
		display: flex;
		align-items: center;
		width: 100%;
		height: 15vh;
		border-top: .01vh solid rgba(123, 123, 123, .1);
		border-bottom: .01vh solid rgba(123, 123, 123, .1);
	}

	.news-text {
		width: 55%;
		height: 100%;
		display: inline-block;
	}

	.news-title {
		width: 100%;
		height: 80%;
		display: flex;
		align-items: flex-start;
	}

	.higher-view-text {
		font-size: 2.5vh;
		display: flex;
		text-align: left;
		justify-content: flex-start;
		color: #222222;
	}

	.news-description {
		display: flex;
		justify-content: flex-start;
		align-items: flex-end;
		height: 20%;
	}

	.news-description text {
		margin-right: 1vh;
		color: #c8c8c8;
	}





	.news-cover-img {
		display: inline-block;
		width: 40%;
		height: 100%;
	}
</style>
