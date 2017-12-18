import Vue from "vue";
/*引入app组件,包括路径*/
/*方式一*/
/*import appa from "./components/app.vue";*/

/*方式二*/
import app from "./components/app.vue";

new Vue({
	el:"#app",
	/*方式一*/
	/*components:{appb:appa}*/
	
	/*方式二*/
	/*注册组件,不注册不能使用*/
	components:{app}
})
