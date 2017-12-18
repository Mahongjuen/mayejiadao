<template>
    <h1>{{numbera}}</h1>
</template>
<script>
  export default{
      computed:{
      numbera(){
          return this.$store.state.number;
      }
          }
  }  
</script>