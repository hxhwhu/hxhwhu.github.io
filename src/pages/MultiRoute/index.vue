<template>
  <div>
    <router-link to="/multiRoute/child1">子路由1</router-link><br>
    <router-link to="/multiRoute/child2">子路由2</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'MultiRoute'
  };
</script>
