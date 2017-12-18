<template>
    <div>
        <ul>
            <li><router-link to="/home">首页</router-link></li>
            <li><router-link to="/movies">电影</router-link></li>
            <li><router-link to="/images">图片</router-link></li>
        </ul>
         <!-- 路由匹配到的组件将渲染在这里 -->
          <router-view></router-view>
    </div>
</template>


<script>

</script>


<style>

</style>