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
					<text style="color: #666666;">8小时前 - {{article.author}}</text>
				</view>

			</view>
			<view class="main-content">
				<uParse :content="article.content" @preview="zoomIn()"></uParse>
				<!-- <rich-text :nodes="article.content"  preview @itemclick="zoomIn()"></rich-text> -->
				<!-- <rich-text space='emsp' @click="点击事件" :data-nodes="数据" :nodes="数据"></rich-text> -->
			</view>
			<view class="comment-area"></view>
		</scroll-view>

		<view class="comment-fixed">
			<view class="comment-input-container" @click="share()">
				<uni-icons type="chat" style="width: 10%; margin: 0 0 0 10%;"></uni-icons>
				<input type="text" class="comment-input" placeholder="点击进行评论">
			</view>
			<button type="default" @click="share">打开点开分享弹窗</button>
		</view>
	</view>
</template>

<script>
	import textNewsPreview from "../../components/textNewsPreview.vue"
	import uParse from '@/components/gaoyia-parse/parse.vue'
	export default {
		components: {
			textNewsPreview,
			uParse,
		},
		data() {
			return {
				article: {},
				articleId: '',
				// [PopupShare分享插件]控制显示需要的分享item项
				SharelistConfing: [
					// 不填则使用组件内置的

					// @isShow  是否显示当前项
					// @Images  如果为空则使用插件自带的图标，否则用你自定义的
					// @name    如果为空则使用插件自带的名称，否则用你自定义的

					//{isShow:true,Images:'',name:''},
				],
			}
		},
		methods: {
			// @通过组件ref调用弹窗方法
			// 打开分享弹窗
			ShowShare() {
				this.$refs.PopupShare.open()
			},

			// 分享item项被点击时的事件回调
			changeShareTap(event) {
				// 返回值 event={index:索引项,name:名称}
				uni.showModal({
					title: "索引 = " + event.index,
					content: "名称 = " + event.name
				})
			},
			getNews() {
				this.$ajax.get('getNewsById?id=' + this.articleId).then(res => {
					console.log("id 为" + this.articleId)
					console.log(res)
					this.article = res.data.result
					console.log(this.article)
				})
			},
			zoomIn(e) {
				console.log("点击")
			},
			share() {
				uni.getNetworkType({
					success: function(res) {
						console.log(res.networkType);
					}
				});
				uni.share({
				    provider: "weixin",
				    scene: "WXSceneSession",
				    type: 1,
				    summary: "我正在使用HBuilderX开发uni-app，赶紧跟我一起来体验！",
				    success: function (res) {
				        console.log("success:" + JSON.stringify(res));
				    },
				    fail: function (err) {
				        console.log("fail:" + JSON.stringify(err));
				    }
				});
			},
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

	.main-content {
		width: 100%;
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

	img {
		width: 100%;
	}
</style>
