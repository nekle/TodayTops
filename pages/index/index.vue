<template>
	<view class="container">
		<view style="height: 40px;background-color: #e35549;">
			<searchBar></searchBar>
			<uni-icons type="plus" size="30" style="margin: 0 5% 20% 5%; color: #fdfcff;"></uni-icons>
		</view>
		<!-- 顶部选项卡 -->
		<scroll-view scroll-x class="scroll-h" :scroll-into-view="scrollInto" scroll-with-animation>
			<view v-for="(item,index) in tabBars" :key="index" :id="'tab'+index" style="height: 100rpx;"
				class="uni-tab-item" :class=" {'uni-tab-item-title-active' :tabIndex==index}" @click="changeTab(index)">
				{{item.name}}
			</view>
		</scroll-view>

		<view name="newsArea">
			<swiper :duration="550" :current="tabIndex" @change="onChangeTab" :style="'height:'+scrollH+'px;'">
				<swiper-item @click="item_clicked(index)"></swiper-item>
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
			item_clicked(index){
				console.log(index+"********")
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
