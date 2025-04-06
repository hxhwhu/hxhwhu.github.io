<template>
  <div>
    <router-link to="/multiRoute/child1">子路由1</router-link><br>
    <router-link to="/multiRoute/child2">子路由2</router-link>
    <!-- 保活多个组件可以写数组 -->
    <keep-alive include="ChildrenRoute2">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
  export default {
    name: 'MultiRoute'
  };
</script>
