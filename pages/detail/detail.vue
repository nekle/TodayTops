<template>
	<view class="container">
		<scroll-view scroll-y="true" class="content-area">
			<!-- <page-head :title="title"></page-head> -->
			<view class="title">
				<text style="font-weight: 900;font-size: 4vh;">{{article.title}}</text>
			</view>
			<view class="author-card">
				<view>
					<image src="../../static/logo.png" class="avatar" mode="aspectFit"></image>
				</view>
				<view class="author-description">
					<text style="font-weight: bold;">{{article.author}}</text>
					<text style="color: #666666;">8小时前 - 央视新闻网</text>
				</view>

			</view>
			<view class="main-content">
				<view v-html="article.content"></view>
			</view>
			<view class="comment-area"></view>
		</scroll-view>

		<view class="comment-fixed">
			<view class="comment-input-container">
				<uni-icons type="chat" style="width: 10%; margin: 0 0 0 10%;"></uni-icons>
				<input type="text" class="comment-input" placeholder="点击进行评论">
			</view>
		</view>
	</view>
</template>

<script>
	import textNewsPreview from "../../components/textNewsPreview.vue"
	export default {
		components: {
			textNewsPreview
		},
		data() {
			return {
				article: {},
				articleId: '',
			}
		},
		methods: {
			getNews() {
				this.$ajax.get('getNewsById?id=' + this.articleId).then(res => {
					console.log("id 为" + this.articleId)
					console.log(res)
					this.article = res.data.result
					console.log(this.article)
				})
			}
		},
		mounted() {

			this.getNews()
		},
		onLoad(option) {
			this.articleId = option.id
		}
	}
</script>

<style scoped>
	* {
		text-decoration: none;
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}

	.content-area {
		height: 88vh;
	}

	.container {
		width: 95vw;
		margin: 0 2.5vw 0 2.5vw;
	}

	.author-card {
		display: flex;
		margin: 1vw 0 1vw 0;
	}

	.avatar {
		width: 10vw;
		height: 10vw;
		border-radius: 5vw 5vw;
		margin: 2vw;
	}

	.author-description {
		display: flex;
		flex-direction: column;
	}

	.comment-fixed {
		display: flex;
		align-items: center;
		width: 95vw;
		height: 6vh;
		text-align: center;
	}

	.comment-input-container {
		width: 47.5vw;
		display: flex;
		align-items: center;
		background-color: rgba(123, 123, 123, .2);
		border-radius: 2.5vh;
	}

	.comment-input {
		width: 80%;
		height: 4.8vh;
		margin: 0 1% 0 0;
	}

	p>img {
		width: 100%;
	}
</style>
