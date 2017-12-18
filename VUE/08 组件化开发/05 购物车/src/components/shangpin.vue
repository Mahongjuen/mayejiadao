<template>
     <div class="col-md-6">
						<h2>商品列表</h2>
						<table class="table table-bordered">
							<thead>
								<th>商品名称</th>
								<th>商品单价</th>
								<th>商品数量</th>
								<th>添加至购物车</th>
							</thead>
							<tbody>
								<tr v-for="(value,index) in goodsList">
									<td>{{value.name}}</td>
									<td>{{value.price}}</td>
									<td>
										<counter v-bind:obj="value"
										v-bind:index="index"
										v-on:subEvent="sub"
										v-on:addEvent="add(index)"
										>
										</counter>
									</td>
									<td>
										<button v-on:click="addObj(index)" class="btn btn-primary">添加购物车</button>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
</template>
<script>
    import bus from "../bus.js";
    import counter from "./counter.vue";
    export default{
        components:{counter},
    data:function(){
            return {
                goodsList:[
                    {name:"安踏",price:"350",count:0},
                    {name:"乔丹",price:"450",count:0},
                    {name:"李宁",price:"650",count:0}
                ]
            }
        },
        methods:{
            sub:function(data){
                if(this.goodsList[data].count>0){
                    this.goodsList[data].count--;
                }
            },
            add:function(i){
                this.goodsList[i].count++;
            },
            clone:function(obj){
                var newObj={};
                for(var i in obj){
                    newObj[i]=obj[i];
                }
                return newObj;
            },
            addObj:function(index){
                if(this.goodsList[index].count===0){
                    alert("最少买一个吧");
                    return;
                }
                var newObj=this.clone(this.goodsList[index]);
                bus.$emit("addGoods",newObj);
                this.goodsList[index].count=0;
            }
        }
    }
</script>
<style></style>