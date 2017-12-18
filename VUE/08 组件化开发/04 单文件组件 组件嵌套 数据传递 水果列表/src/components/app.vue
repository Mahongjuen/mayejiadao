<template>
	<div>
		<myform></myform>
		<list></list>
	</div>
</template>

<script>
	import myform from "./myform.vue";
	import list from "./list.vue";
	
	/*注册myform和list组件，并向外暴露*/
	export default {
		components:{myform,list}
	}
</script>

<style>
</style>