<template>
    <div class="col-md-6">
						<h2>购物车</h2>
						<table class="table table-bordered">
							<thead>
								<th>商品名称</th>
								<th>商品单价</th>
								<th>商品数量</th>
								<th>删除</th>
							</thead>
							<tbody>
								<tr v-for="(value,index) in cartList">
									<td>{{value.name}}</td>
									<td>{{value.price}}</td>
									<td>
										<counter v-bind:obj="value"
											v-on:addEvent="add(index)"
											v-on:subEvent="sub"
											v-bind:index="index"
										>
										</counter>
									</td>
									<td>
			                			<button v-on:click="del(index)" class="btn btn-primary">删除</button>
			           				</td>
								</tr>
							</tbody>
						</table>
						<button v-on:click="checkout" class="btn btn-success">结账</button>
					</div>
</template>
<script>
    import bus from "../bus.js";
    import counter from "./counter.vue";
    export default{
        components:{counter},
    mounted:function(){
            var self = this;
            bus.$on("addGoods",function(obj){
                for(var i=0;i<self.cartList.length;i++){
                    if(obj.name===self.cartList[i].name){
                        self.cartList[i].count+=obj.count;
                        return;
                    }
                }
                self.cartList.push(obj);
            })
        },
        data:function(){
            return {
                cartList:[
                    {name:"鸿星尔克",price:"350",count:1},
                    {name:"范思哲男装",price:"750",count:1},
                    {name:"安吉达男士",price:"850",count:1}
                ]
            }
        },
            methods:{
            del:function(index){
                this.cartList.splice(index,1);
            },
            add:function(i){
                this.cartList[i].count++;
            },
            sub:function(a){
                if(this.cartList[a].count>1){
                    this.cartList[a].count--;
                }
            },
            checkout:function(){
                var sum = 0;
                for(var i=0;i<this.cartList.length;i++){
                    var price = this.cartList[i].price;
                    var num = this.cartList[i].count;
                    sum += price*num;
                    
//                    sum = this.accAdd(this.accMul(price,num),sum);
                }
                alert(`您总计消费 ${sum} 元`);
            }
        }
    }
</script>
<style></style>