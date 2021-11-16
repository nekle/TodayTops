<template>
	<view class="container">

		<!-- 搜索栏 -->
		<view class="search-area">
			<view @click="toSearch">
				<searchBar @click="toSearch"></searchBar>
			</view>
			<view class="plus-icon">
				<uni-icons type="plus" size="30" style=" color: #fdfcff;"></uni-icons>
			</view>
		</view>

		<!-- 顶部选项卡 -->
		<view class="tab-bars">
			<scroll-view scroll-x class="scroll-h" :scroll-into-view="scrollInto" scroll-with-animation>
				<view v-for="(item,index) in tabBars" :key="index" :id="'tab'+index" style="height: 100%;"
					class="uni-tab-item" :class=" {'uni-tab-item-title-active' :tabIndex==index}"
					@click="changeTab(index)">
					{{item.name}}
				</view>
			</scroll-view>
		</view>


		<view name="newsArea" style="height: 88%;">
			<!-- 横向滚动 -->
			<swiper :duration="250" :current="tabIndex" @change="onChangeTab" style="height: 100%;">

				<swiper-item v-for="(item,index) in tabBars" :key="index">
					<newsContent :tabName=item.name v-if="index!=3"> </newsContent>
					<videoContent :tabName=item.name v-if="index==3"> </videoContent>
				</swiper-item>

			</swiper>

		</view>


	</view>
</template>

<script>
	import searchBar from "../../components/searchBar.vue"
	import textNewsPreview from "../../components/textNewsPreview.vue"
	import newsContent from "../../components/newsContent.vue"
	import videoContent from "../../components/videoContent.vue"
	export default {
		components: {
			textNewsPreview,
			newsContent,
			searchBar,
			videoContent,
		},
		data() {
			return {
				// 窗口高度
				windowHeight: '',
				// 列表高度
				scrollH: 200,
				// 顶部选项卡
				scrollInto: '',
				tabIndex: 0,
				tabBars: [{
						name: "关注",
						initData: []
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
				newsList: [],
				currentPage: 1,
				more: 'more'
			}
		},
		methods: {
			toSearch() {
				//在起始页面跳转到searchIndex.vue页面并传递参数
				console.log("跳转到搜索界面")
				uni.navigateTo({
					url: '/pages/index/searchIndex/searchIndex',
					events: {
						success: function() {
							console.log("成功")
						},
						fail: function() {
							console.log("跳转失败")
						}

					}
				});
			},
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
						this.windowHeight = res.windowHeight
						console.log(this.windowHeight)
					}
				})
			},
			// 监听滑动
			onChangeTab(e) {
				this.changeTab(e.detail.current)
			}

		},

		mounted() {},
	}
</script>

<style scoped>
	* {
		text-decoration: none;
		box-sizing: border-box;
		padding: 0;
		margin: 0;
	}

	.container {
		width: 100vw;
		height: 80vh;
	}

	.tab-bars {
		width: 100vw;
		height: 5vh;
		border-bottom: 1px solid rgba(186, 186, 186, .3);
	}

	.plus-icon {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 20%;
		height: 100%;
	}

	.scroll-h {
		width: 100%;
		height: 100%;
		flex-direction: row;
		/* #ifndef APP-PLUS */
		white-space: nowrap;
		/* #endif */
		/* flex-wrap: nowrap; */
	}

	.uni-tab-item {
		display: flex;
		justify-content: center;
		align-items: center;
		/* #ifndef APP-PLUS */
		display: inline-flex;
		/* #endif */
		flex-wrap: nowrap;
		padding-left: 5%;
		padding-right: 5%;
	}

	.uni-tab-item-title-active {
		color: #e24d48;
	}


	.search-area {
		display: flex;
		flex-direction: row;
		justify-content: center;
		height: 7vh;
		width: 100%;
		background-color: #e24d48;
	}
</style>
