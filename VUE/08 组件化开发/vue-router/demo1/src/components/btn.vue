<template>
    <div>
        <button v-on:click="sub">-</button>
        <button v-on:click="add">+</button>
    </div>
</template>
<script>
export default{
    methods:{
        sub:function(){
            this.$store.commit("suba");
        },
        add:function(){
            this.$store.commit("adda");
        }
    }
}
</script>