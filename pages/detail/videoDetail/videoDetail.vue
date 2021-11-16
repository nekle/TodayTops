<template>
	<view class="video-card-cotainer">
		<video class="video-container" :src="videoSrc" controls :poster="posterSrc"></video>
		<view class="video-description">
			<view class="video-author">猫咪好可爱</view>
			<view class="video-title">两只小猫咪，一只花猫咪，一只白猫咪</view>
			<view class="other-info">播放次数:192万</view>
			<view style="display: flex; justify-content: space-around;width: 100%;">
				<view style="display: inline-flex; flex-direction: column;">
					<uni-icons type="redo"></uni-icons>
					分享
				</view>
				<view style="display: inline-flex; flex-direction: column;">
					<uni-icons type="heart"></uni-icons>
					收藏
				</view>
				<view style="display: inline-flex; flex-direction: column;">
					<uni-icons type="chat"></uni-icons>
					1234
				</view>
				<view style="display: inline-flex; flex-direction: column;">
					<uni-icons type="hand-thumbsup"></uni-icons>
					19238
				</view>
				<view style="display: inline-flex; flex-direction: column;">
					<uni-icons type="arrowthindown"></uni-icons>
					下载
				</view>
			</view>
			<view style="width: 100%;height: 1vh; display: block;"></view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "videoDetail",
		data() {
			return {
				videoSrc: 'https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/%E7%AC%AC1%E8%AE%B2%EF%BC%88uni-app%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D%EF%BC%89-%20DCloud%E5%AE%98%E6%96%B9%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B@20200317.mp4',
				posterSrc: 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/6acec660-4f31-11eb-a16f-5b3e54966275.jpg',
			};
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
		font-size: 2vh;
		margin: 0 0 2vh 0;
	}

	.video-title {
		width: 100%;
		font-size: 2.25vh;
		font-weight: 600;
		margin: 0 0 1vh 0;
	}

	.video-container {
		width: 100%;
		height: 25vh;
		border-top: .01vh solid rgba(123, 123, 123, 1);
		border-bottom: .01vh solid rgba(123, 123, 123, 1);
	}

	.other-info {
		font-size: 1vh;
		color: #808080;
		margin: 0 0 1vh 0;
	}
</style>
