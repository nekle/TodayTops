<template>
	<view class="video-card-cotainer">
		<video class="video-container" :src="videoSrc" controls :poster="posterSrc"></video>
		<scroll-view scroll-y="true" class="related-videos">
			<view class="video-description">
				<view class="video-author">猫咪好可爱</view>
				<view class="video-title">两只小猫咪，一只花猫咪，一只白猫咪</view>
				<view class="other-info">播放次数:192万</view>
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
						{{commentSum}}
					</view>
					<view style="display: inline-flex; flex-direction: column;" @click="like">
						<uni-icons type="hand-thumbsup" v-show="!liked"></uni-icons>
						<uni-icons type="hand-thumbsup-filled" v-show="liked"></uni-icons>
						{{likeSum}}
					</view>
					<view style="display: inline-flex; flex-direction: column;">
						<uni-icons type="arrowthindown"></uni-icons>
						下载
					</view>
				</view>
				<view style="width: 100%;height: 1vh; display: block;"></view>
			</view>
			<view v-for="(item,index) in videos" :key="index + 'video'" @click="item_clicked(index)">
				<videoPreview class="related-video-card" :autoPlay="false"></videoPreview>
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
				videos: [1, 2, 3, 4, 5, 6, 7, 8, 9],
				commentSum: 12345,
				likeSum: 666,
				collected: false,
				liked: false,
			};
		},
		methods: {
			collect() {
				this.collected = !this.collected
			},
			like() {
				if(!this.liked)
				this.likeSum++
				else
				this.likeSum--
				this.liked = !this.liked
			},
			item_clicked(index) {
				uni.navigateTo({
					url: '/pages/detail/videoDetail/videoDetail?index=' + index,
					events: {
						success: function() {
							console.log("成功")
						},
						fail: function() {
							console.log("跳转失败")
						}
					}
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
		mounted() {}
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
