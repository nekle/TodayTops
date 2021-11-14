<template>
		<view class="search-input-area" @click="toSearch">
			<view
				style="display: inline-block; width: 30px; height: 30px; margin-bottom:20px; center; transform: translate(25%,-25%);">
				<uni-icons type="search" size="18" style="display: inline-block;"></uni-icons>
			</view>
			<input class="search-bar" type="text" :value="searchContent"
				:placeholder="placeHolder" />
		</view>
</template>

<script>
	export default {
		name: "searchBar",
		data() {
			return {
				searchContent: "",
				placeHolder: "搜索内容"
			};
		},
		methods: {
			toSearch() {
				//在起始页面跳转到test.vue页面并传递参数
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
			}
		},
		props: {
			searchStatus: false
		}
	}
</script>

<style>
	* {
		text-decoration: none;
		box-sizing: border-box;
	}

	.search-are {
		display: inline-block;
		box-sizing: border-box;
		background-color: #fefefe;
		border-radius: 50px;
		margin: 0 0 5% 5%;
		width: 75%;
		height: 95%;
	}

	.search-input-area {
		display: inline-block;
		box-sizing: border-box;
		background-color: #fefefe;
		border-radius: 50px;
		margin: 0 0 5% 5%;
		width: 75%;
		height: 95%;
	}



	.search-bar {
		display: inline-block;
		box-sizing: border-box;
		width: 60%;
		height: 30upx;
		margin: 10upx 0 10upx 0;
		border-radius: 15upx;
	}

	.search-bar-gray {
		background-color: #f2f2f2;
	}
	.search-button {
		display: inline-block;
		box-sizing: border-box;
		/* margin: 10% 5% 1% 5%; */
		width: 20%;
		height: 20%;
	}
</style>
