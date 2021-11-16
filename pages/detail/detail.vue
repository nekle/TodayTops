<template>
    <view class="content">
       <!-- <page-head :title="title"></page-head> -->
        <textNewsPreview></textNewsPreview>
    </view>
</template>

<script>
	import textNewsPreview from "../../components/textNewsPreview.vue"
	export default {
		components:{
			textNewsPreview
		},
		data() {
			return {
				index:'',
				nodes: [{name: 'div',
				        attrs: {
							class: 'div-class',
				            style: 'line-height: 60px; color: red; text-align:center;'
				        },
				        children: [{
				            type: 'text',
				            text: 'Hello&nbsp;uni-app!'
				        }]
				}],
				strings: '<div style="text-align:center;"><img src="https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/d8590190-4f28-11eb-b680-7980c8a877b8.png"/></div>'				
			}
		},
		methods: {
			
		},
		onLoad:function(option){
			console.log(option.index+"xinjiemian");
			this.index=option.index;
		}
	}
</script>

<style>

</style>
