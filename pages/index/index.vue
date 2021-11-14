<template>
	<view class="container">
		
		<!-- 搜索栏 -->
		<view class="search-area">
			<searchBar></searchBar>
			<view class="plus-icon">
				<uni-icons type="plus" size="30" style=" color: #fdfcff;"></uni-icons>
			</view>
		</view>
		
		<!-- 顶部选项卡 -->
		<view>
			<scroll-view scroll-x class="scroll-h" :scroll-into-view="scrollInto" scroll-with-animation>
				<view v-for="(item,index) in tabBars" :key="index" :id="'tab'+index" style="height: 100rpx;"
					class="uni-tab-item" :class=" {'uni-tab-item-title-active' :tabIndex==index}"
					@click="changeTab(index)">
					{{item.name}}
				</view>
			</scroll-view>
		</view>


		<view name="newsArea" style="height: 900px;">
			<swiper :duration="550" :current="tabIndex" @change="onChangeTab" style="height: 100%;">
				<swiper-item v-for="(item,index) in tabBars" :key="index">
					<newsContent :tabName=item.name></newsContent>
				</swiper-item>
			</swiper>
		</view>


	</view>
</template>

<script>
	import searchBar from "../../components/searchBar.vue"
	import textNewsPreview from "../../components/textNewsPreview.vue"
	import newsContent from "../../components/newsContent.vue"

	export default {
		components: {
			textNewsPreview,
			newsContent,
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

	.plus-icon {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 20%;
		height: 100%;
	}

	.scroll-h {
		width: 750upx;
		height: 80upx;
		flex-direction: row;
		/* #ifndef APP-PLUS */
		white-space: nowrap;
		/* #endif */
		/* flex-wrap: nowrap; */
		border-bottom: 1px solid rgba(186, 186, 186, .3);
	}

	.uni-tab-item {
		display: flex;
		justify-content: center;
		align-items: center;
		/* #ifndef APP-PLUS */
		display: inline-flex;
		/* #endif */
		flex-wrap: nowrap;
		padding-left: 34upx;
		padding-right: 34upx;
	}

	.uni-tab-item-title-active {
		color: #e24d48;
	}


	.search-area {
		display: flex;
		flex-direction: row;
		justify-content: center;
		height: 40px;
		width: 100%;
		background-color: #e24d48;
	}
</style>
