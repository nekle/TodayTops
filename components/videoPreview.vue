<template>
	<view class="video-card-cotainer">
		<view class="video-description">
			<view class="video-author">{{author}}</view>
			<view class="video-title">{{title}}</view>
		</view>
		<video class="video-container" :src="videoSrc" controls :poster="posterSrc" :autoplay="autoPlay"></video>
	</view>
</template>

<script>
	export default {
		name: "videoPreview",
		props:{
			autoPlay:false,
			author:'',
			title:'',
			videoSrc:'',
			posterSrc:'',
		},
		data() {
			return {
				// posterSrc: 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/6acec660-4f31-11eb-a16f-5b3e54966275.jpg',
			};
		},
		mounted() {
			console.log(this.posterSrc)
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
