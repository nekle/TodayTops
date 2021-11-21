<template>
	<view class="video-card-cotainer">
		<video class="video-container" :src="video.url" controls></video>
		<scroll-view scroll-y="true" class="related-videos">
			<view class="video-description">
				<view class="video-author">{{video.author}}</view>
				<view class="video-title">{{video.title}}</view>
				<view class="other-info">播放次数:{{video.playSum}}</view>
				<view style="display: flex; justify-content: space-around;width: 100%;">
					<view style="display: inline-flex; flex-direction: column;">
						<uni-icons type="redo"></uni-icons>
						分享
					</view>
					<view style="display: inline-flex; flex-direction: column;" @click="collect">
						<uni-icons type="heart" v-show="!collected"></uni-icons>
						<uni-icons type="heart-filled" v-show="collected"></uni-icons>
						收藏
					</view>
					<view style="display: inline-flex; flex-direction: column;">
						<uni-icons type="chat"></uni-icons>
						{{video.commentSum}}
					</view>
					<view style="display: inline-flex; flex-direction: column;" @click="like">
						<uni-icons type="hand-thumbsup" v-show="!liked"></uni-icons>
						<uni-icons type="hand-thumbsup-filled" v-show="liked"></uni-icons>
						{{video.likeSum}}
					</view>
					<view style="display: inline-flex; flex-direction: column;">
						<uni-icons type="arrowthindown"></uni-icons>
						下载
					</view>
				</view>
				<view style="width: 100%;height: 1vh; display: block;"></view>
			</view>
			<view v-for="(item,index) in videos" :key="index + 'video'" @click="item_clicked(item._id)">
				<videoPreview class="related-video-card" :autoPlay="false" :author="item.author" :title="item.title"
					:videoSrc="item.url"></videoPreview>
			</view>
		</scroll-view>

	</view>
</template>

<script>
	import videoPreview from "../../../components/videoPreview.vue"
	export default {
		name: "videoDetail",
		components: {
			videoPreview,
		},
		data() {
			return {
				videoSrc: 'https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/%E7%AC%AC1%E8%AE%B2%EF%BC%88uni-app%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D%EF%BC%89-%20DCloud%E5%AE%98%E6%96%B9%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B@20200317.mp4',
				posterSrc: 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/6acec660-4f31-11eb-a16f-5b3e54966275.jpg',
				videos: [],
				video: {},
				commentSum: 12345,
				likeSum: 666,
				collected: false,
				liked: false,
				_id: '',
			};
		},
		methods: {
			getNews() {
				this.$ajax.get('getVideoById?id=' + this._id).then(res => {
					this.video = res.data.result
				})
				this.$ajax.get('getVideos').then(res => {
					this.videos = res.data.result
				})
			},
			collect() {
				this.collected = !this.collected
			},
			like() {
				if (!this.liked)
					this.likeSum++
				else
					this.likeSum--
				this.liked = !this.liked
			},
			item_clicked(_id) {
				uni.navigateTo({
					url: '/pages/detail/videoDetail/videoDetail?_id=' + _id,
					events: {
						success: function() {
							console.log("成功")
						},
						fail: function() {
							console.log("跳转失败")
						}
					},
					animationType: 'pop-in',
					animationDuration: 50,
				})
			},
			autoPlaySelector() {
				let query = uni.createSelectorQuery()
				let node = query.select("#scroll-video")
				let query2 = uni.createSelectorQuery().in(query2)

				let callback = function(res) {
					console.log(res)
				}

				query2.selectViewport(CallFunctionParam)


			}
		},
		onLoad(option) {
			console.log('视频id: ' + option._id)
			this._id = option._id
		},
		mounted() {
			this.getNews()
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

	.video-card-container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		width: 100%;
		padding: 1vh 0 1vh 0;
		background-color: red;
		border-bottom: .1vh solid rgba(123, 123, 123, .3);
	}

	.video-description {
		width: 100vw;
		padding: 3vw;
	}

	.video-author {
		width: 100%;
		font-size: 4vh;
		margin: 0 0 2vh 0;
	}

	.video-title {
		width: 100%;
		font-size: 4vh;
		font-weight: 600;
		margin: 0 0 1vh 0;
	}

	.video-container {
		width: 100vw;
		border-top: .01vh solid rgba(123, 123, 123, 1);
		border-bottom: .01vh solid rgba(123, 123, 123, 1);
	}

	.other-info {
		font-size: 2vh;
		color: #808080;
		margin: 0 0 1vh 0;
	}

	.related-videos {
		width: 100%;
		height: 68vh;
	}

	.related-video-card {
		width: 94vw;
		display: flex;
		flex-direction: column;
		margin: 0 3% 5% 3%;
		border-top: .1vh solid rgba(123, 123, 123, .1);
	}
</style>
