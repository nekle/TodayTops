<template>
	<view class="container">
		
		<view style="height: 40px;background-color: #F8F8F8;">
			<searchBar></searchBar>
			<button style="display: inline-block; width: 20%; height: 80%; box-sizing: border-box; color: #e25448; border: 0 0 none;">搜索</button>
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
	
	.tabs {
		flex: 1;
		flex-direction: column;
		overflow: hidden;
		background-color: #ffffff;
		/* #ifdef MP-ALIPAY || MP-BAIDU */
		height: 100vh;
		/* #endif */
	}

	.scroll-h {
		width: 750upx;
		height: 80upx;
		flex-direction: row;
		/* #ifndef APP-PLUS */
		white-space: nowrap;
		/* #endif */
		/* flex-wrap: nowrap; */
		/* border-color: #cccccc;
     border-bottom-style: solid;
     border-bottom-width: 1px; */
	}

	.uni-tab-item {
		/* #ifndef APP-PLUS */
		display: inline-block;
		/* #endif */
		flex-wrap: nowrap;
		padding-left: 34upx;
		padding-right: 34upx;
	}

	.uni-tab-item-title {
		color: #555;
		font-size: 30upx;
		height: 80upx;
		line-height: 80upx;
		flex-wrap: nowrap;
		/* #ifndef APP-PLUS */
		white-space: nowrap;
		/* #endif */
	}

	.uni-tab-item-title-active {
		color: #e24d48;
	}
</style>
