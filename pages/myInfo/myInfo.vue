<template>
	<view class="container">
		<view class="view_image_text" v-if="unlogined">
			<button @click="auth()" class="login-btn">登陆</button>
		</view>
		<view class="view_image_text" v-show="show">
			<image class="image_radius" :src="picture" />
			<text>{{nickname}}</text>
		</view>
		<view
			style="display:inline-flex; width: 95vw; background-color: white;justify-content: space-around;height: 10vh;border-radius: 2%;box-shadow: 1vw 1vw rgba(123,123,123,.2);">
			<view class="login-btns">
				<uni-icons type="heart" color="red"></uni-icons>
				<text>
					消息通知
				</text>
			</view>
			<view class="login-btns">
				<uni-icons type="heart" color="red"></uni-icons>
				<text>
					收藏
				</text>
			</view>
			<view class="login-btns">
				<uni-icons type="heart" color="red"></uni-icons>
				<text>
					浏览历史
				</text>
			</view>
			<view class="login-btns">
				<uni-icons type="heart" color="red"></uni-icons>
				<text>
					下载管理
				</text>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				nickname: '',
				picture: '',
				unlogined: true,
				show: false
			}
		},
		methods: {
			is_logined() {
				console.log('函数外部\n' + this.nickname + this.picture)
				console.log(this.nickname)
				console.log(this.picture)
				if (this.nickname == '' && this.picture == '') {
					console.log('进来了');
					this.unlogined = false;
					this.show = true;
					console.log(this.unlogined + this.show)
				}
				console.log(this.unlogined)
				console.log(this.show)
			},
			auth() {
				let _this = this
				let obj = {
					that: _this,
					provider: 'weixin',
					success: function(loginRes) {
						let that = obj.that
						let obj2 = {
							that: that,
							provider: 'weixin',
							success: function(infoRes) {
								console.log('用户昵称为：' + infoRes.userInfo.nickName);
								obj2.that.nickname = infoRes.userInfo.nickName;
								console.log('头像为' + infoRes.userInfo.avatarUrl);
								obj2.that.picture = infoRes.userInfo.avatarUrl;
								obj2.that.unlogined = false
								obj2.that.show = true
							},
						}
						// 获取用户信息
						uni.getUserInfo(obj2);
					},
				}
				uni.login(obj);
			}
		},
		onLoad() {
			// this.is_logined();
		}
	}
</script>

<style>
	* {
		text-decoration: none;
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
		height: 86vh;
		background: rgb(248, 248, 248);
	}

	.view_image_text {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		width: 100%;
		height: 20vh;
		margin: 10vh 0 10vh 0;
	}

	.image_radius {

		height: 50px;
		width: 50px;
		border-radius: 30px;
	}

	.login-btn {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 30vw;
		height: 30vw;
		border-radius: 15vw 15vw;
		background-color: red;
		color: white;
		font: 6vw bolder;
		box-shadow: 1vw 1vw rgba(123, 123, 123, .4);
	}

	.login-btns {
		display: inline-flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 20%;
		height: 100%;
		font-size: 3vw;
	}
</style>
