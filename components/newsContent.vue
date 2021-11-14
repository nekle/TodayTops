<template>
	<view style="width: 100%; height: 100%;">
		<!-- scroll-left="120"；右边的元素上来的距离 -->
		<scroll-view class="scroll-view_V" scroll-y="true" show-scroll-bar=true>
			<view class="scroll-view-item_V" v-for="(item,index) in data" :key="index">
				<textNewsPreview :title="item.title" :author="item.author" :status="item.status" :date="item.date">
				</textNewsPreview>
			</view>
			<view style="height: 20%">
				<!-- 带封面新闻 -->
				<textNewsWithCover></textNewsWithCover>
				<textNewsWithCover></textNewsWithCover>
				<textNewsWithCover></textNewsWithCover>
				<textNewsWithCover></textNewsWithCover>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import textNewsWithCover from "./textNewsWithCover.vue"
	import textNewsPreview from "./textNewsPreview.vue"
	export default {
		name: "newsContent",
		components: {
			textNewsPreview,
			textNewsWithCover,
		},
		data() {
			return {
				data: [],
			};
		},
		methods: {
			getNews() {
				this.$ajax.get('getTextNews').then(res => {
					this.data = res.data.result
				})
			}
		},
		props: {
			tabName: String
		},
		mounted() {
			this.getNews()
		}
	}
</script>

<style>
	* {
		text-decoration: none;
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}

	.scroll-view_V {
		/* 文本不会换行，文本会在在同一行上继续，直到遇到 <br> 标签为止。 */
		white-space: nowrap;
		width: 100%;
		height: 100%;
		margin-left: 2%;
	}

	.scroll-view-item_V {
		width: 80%;
		height: 10%;
	}

</style>
