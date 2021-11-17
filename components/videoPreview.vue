<template>
	<view class="video-card-cotainer">
		<view class="video-description">
			<view class="video-author">猫咪好可爱</view>
			<view class="video-title">两只小猫咪，一只花猫咪，一只白猫咪</view>
		</view>
		<video class="video-container" :src="videoSrc" controls :poster="posterSrc" :autoplay="autoPlay"></video>
	</view>
</template>

<script>
	export default {
		name: "videoPreview",
		props:{
			autoPlay:false
		},
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
	}

	.video-description {
		width: 90vw;
		padding: 3vw;
	}

	.video-author {
		width: 100%;
		font-size: 2vh;
	}

	.video-title {
		width: 100%;
		font-size: 2.25vh;
		font-weight: 600;
	}

	.video-container {
		width: 100%;
		border-top: .01vh solid rgba(123, 123, 123, 1);
	}
</style>
