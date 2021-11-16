<template>
	<view class="view-1">
		<view class="view_image_text" v-if="unlogined" @click="auth()">
			<text>点击登录</text>
		</view>
		<view class="view_image_text" v-show="show">
			<image class="image_radius" :src="picture" />
			<text>{{nickname}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				nickname: '',
				picture:'',
				unlogined:true,
				show:false
			}
		},
		methods: {
			is_logined(){
				console.log('函数外部\n'+this.nickname+this.picture)
				console.log(this.nickname)
				console.log(this.picture)
				if(this.nickname==''&&this.picture==''){
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
	.view-1 {
		display: flex;
		justify-content: center;
		width: 100%;
		height: 25%;
		background: #a0deee;
	}

	.view_image_text {

		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}

	.image_radius {

		height: 50px;
		width: 50px;
		border-radius: 30px;
	}
</style>
