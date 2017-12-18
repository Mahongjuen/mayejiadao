<template>
	<form v-on:submit.prevent="add">
		<input type="text" v-model="caipu"/>
		<input type="submit" value="添加"/>
	</form>
</template>

<script>
	import bus from "../bus.js";
	export default{
		data:function(){
			return {
				caipu:""
			}
		},
		methods:{
			add(){
				/*推荐使用注释部分*/
				/*bus.$emit("myEvent",this.caipu);*/
				
				bus.busa.$emit("myEvent",this.caipu);
				this.caipu = "";
			}
		}
	}
</script>

<style>
</style>