<template>
	<ul>
		<li v-for="(val,index) in caipus">
			{{val}}
			<span @click="del(index)">删除</span>
		</li>
	</ul>
</template>

<script>
	import busb from "../bus.js";
	export default{
		data:function(){
			return {
				caipus:["火锅鸡","地三鲜","麻婆豆腐"]
			}
		},
		methods:{
			del(i){
				this.caipus.splice(i,1);
			}
		},
		mounted:function(){
			var self = this;
			/*推荐使用注释部分*/
			/*busb.$on("myEvent",function(data){
				self.caipus.push(data);
			})*/
			
			busb.busa.$on("myEvent",function(data){
				self.caipus.push(data);
			})
		}
	}
</script>

<style>
</style>