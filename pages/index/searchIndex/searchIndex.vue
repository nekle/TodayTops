<template>
	<view class="container">

		<view class="search-area">
			<view>
				<searchBar></searchBar>
			</view>
			
			<button class="search-button">搜索</button>
		</view>

	</view>
</template>

<script>
	import searchBar from "../../../components/searchBar.vue"

	export default {
		components: {
			searchBar,
		},
		data() {
			return {
				// 列表高度
				scrollH: 200,
				// 顶部选项卡
				scrollInto: '',
				tabIndex: 0,
				tabBars: [{
						name: "关注"
					},
					{
						name: "推荐"
					},
					{
						name: "热榜"
					},
					{
						name: "视频"
					},
					{
						name: "小说"
					},
					{
						name: "北京"
					},
					{
						name: "抗疫"
					},
					{
						name: "小视频"
					},
				],
				newsList: []
			}
		},
		methods: {
			// 切换选项卡
			changeTab(index) {
				if (this.tabIndex === index) {
					return
				}
				this.tabIndex = index
				// 滚动到指定元素
				this.scrollInto = 'tab' + index
			},
			onReady() {
				uni.getSystemInfo({
					success: res => {
						this.scrollH = res.windowHeight - uni.upx2px(100)
					}
				})
			},
			// 监听滑动
			onChangeTab(e) {
				this.changeTab(e.detail.current)
			},
		},
		mounted() {

		}
	}
</script>

<style scoped>
	* {
		text-decoration: none;
		box-sizing: border-box;
	}

	.container {
		width: 100vw;
		height: 94vh;
	}

	.search-area {
		display: flex;
		flex-direction: row;
		justify-content: center;
		height: 7%;
		width: 100%;
		/* background-color: rgba(123, 123, 123, .5); */
	}

	.search-button {
		display: inline-flex;
		justify-content: center;
		align-items: center;
		width: 20%;
		height: 100%;
		box-sizing: border-box;
		color: #e25448;
		border: none;
		font-size: 14px;
	}

	button::after {
		border: none
	}
</style>
