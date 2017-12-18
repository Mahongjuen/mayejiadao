<template>
    <div>
        <button v-on:click="sub">-</button>
        <span>{{obj.count}}</span>
        <button v-on:click="add">+</button>
    </div>
</template>


<script>
   export default{
       props:["obj"],
       methods:{
          sub: function () {
                    this.$emit("subEvent", this.index);
                }
                , add: function () {
                    this.$emit("addEvent");
                }
            } 
       }
 
</script>