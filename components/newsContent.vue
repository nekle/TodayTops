<template>
	<view>
		{{tabName}}
		<!-- scroll-left="120"；右边的元素上来的距离 -->
		<scroll-view class="scroll-view_V" scroll-y="true" show-scroll-bar=true>
			<view class="scroll-view-item_V" v-for="(item,index) in data" :key="index">
				{{index}}
				<textNewsPreview :title="item.title" :author="item.author" :status="item.status" :date="item.date">
				</textNewsPreview>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import textNewsPreview from "./textNewsPreview.vue"
	export default {
		name: "newsContent",
		components: {
			textNewsPreview,
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
	.scroll-view_V {
		/* 文本不会换行，文本会在在同一行上继续，直到遇到 <br> 标签为止。 */
		white-space: nowrap;
		width: 100%;
		height: 900upx;
	}

	.scroll-view-item_V {
		display: block;
		width: 80%;
		height: 140upx;
		border: 1upx solid;
		text-align: center;
		font-size: 36upx;
		margin: 2% 1% 2% 1%;
	}

	.scroll-view-item_V view {
		box-sizing: border-box;
	}

</style>
