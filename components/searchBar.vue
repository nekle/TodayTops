<template>
	<view class="search-input-area" >
		<view class="search-icon">
			<uni-icons type="search" size="20"></uni-icons>
		</view>
		<input class="search-bar" type="text" :value="searchContent" :placeholder="placeHolder" />
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
		display: inline-flex;
		align-items: center;
		box-sizing: border-box;
		background-color: #fefefe;
		border-radius: 50px;
		border-bottom: .01vh solid rgba(123, 123, 123, .1);
		height: 90%;
		width: 80vw;
		margin-left: 1vw;
	}


	.search-icon {
		display: inline-flex;
		justify-content: center;
		align-items: center;
		padding-left: 3%;
		padding-right: 3%;
	}

	.search-bar {
		display: inline-flex;
		align-items: center;
		box-sizing: border-box;
		width: 85%;
		height: 30upx;
		margin: 10upx 0 10upx 0;
		border-radius: 15upx;
	}

	.search-button {
		display: inline-block;
		box-sizing: border-box;
		/* margin: 10% 5% 1% 5%; */
		width: 20%;
		height: 20%;
	}
</style>
