<template>
	<view style="width: 100%; height: 100%;">
		<!-- scroll-left="120"；右边的元素上来的距离 -->
		<scroll-view class="scroll-view_V" scroll-y="true"  @scrolltolower="loadMoreNewsUp()"
			lower-threshold="5" @scrolltoupper="refreshNews()" upper-threshold="50" @scroll="scroll">
			<view class="scroll-view-item_V" v-for="(item,index) in data" :key="index">
				<videoPreview :author = "item.author" :title = "item.title" :videoSrc="item.url" :_id="item._id"></videoPreview>
			</view>
			<view>
				<text>
					上滑加载更多内容
				</text>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import videoPreview from "./videoPreview.vue"
	export default {
		name: "videoContent",
		components: {
			videoPreview,
		},
		data() {
			return {
				data: [],
				picData: [1, 2],
				pullThreashold: 50,
				triggered: false,
				_freshing: false,
				scrolling: false,
				currentPage:0,
			};
		},
		methods: {
			scroll(e){
			},
			startRefresh() {



			},
			loadRereshPart() {
				this.scrolling = true
			},
			getNews() {
				this.$ajax.get('getVideos').then(res => {
					this.data = res.data.result
				})
			},
			refreshNews() {
				let pageSum
				let pageNum
				this.$ajax.get('getVideoPageSum').then(res => {
					pageSum = res.data.result
					console.log("pageSum:" + res.data.result)
					console.log("总页数" + pageSum)
					pageNum = Math.floor(Math.random() * pageSum)
					console.log("生成的页码" + pageNum)
					this.$ajax.get('getVideoByPage?pageNum=' + pageNum).then(res => {
						// console.log(res.data.result)
						this.data = res.data.result
					})
				})
			},
			// 上滑加载
			loadMoreNewsUp() {
				this.$ajax.get('getVideoByPage' + '?pageNum=' + ++this.currentPage).then(res => {
					// console.log(res.data.result)
					this.data = this.data.concat(res.data.result)
					// console.log(this.data)
				})
			},
			// 下拉刷新
			onRefresh() {
				console.log("onRefresh")
				if (this._freshing) return;
				this._freshing = true;
				this.getNews()
				this.triggered = false;
				this._freshing = false;
			},
			onRestore() {
				this.triggered = 'restore'; // 需要重置
				console.log("onRestore");
			},
			onAbort() {
				console.log("onAbort");
			}
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

	.refresh-part-load {
		width: 100%;
		height: 50px;
		display: none;
		transition: all 1s ease-in-out;
	}

	.refresh-part-not-load {
		width: 0;
		height: 0;
	}

	.scroll-view_V {
		width: 100%;
		height: 100%;
	}

	.scroll-view-item_V {
		width: 100%;
		border-bottom: .01vh solid rgba(123, 123, 123, .1);
	}
</style>
