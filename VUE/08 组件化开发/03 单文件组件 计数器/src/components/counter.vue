<template>
	<!--向外暴露一个容器-->
	<div>
		<h3>{{title}}</h3>
		<button v-on:click="sub">-</button>
		<span>{{count}}</span>
		<button v-on:click="add">+</button>
	</div>
</template>

<script>
	/*组件的数据和方法等需要用export default暴露出去*/
	export default {
		data:function(){
			return {
				count:0,
				title:"计数器"
			}
		},
		methods:{
			sub:function(){
				this.count--;
			},
            add:function(){
                this.count++;
            }
		}
	}
	
</script>

<style>
</style>