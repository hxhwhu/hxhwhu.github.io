<template>
  <div>
    <h4>消息详情</h4>
    <ul>
      <li>消息id: {{ $route.query.id }}</li>
      <li>消息title: {{ $route.query.title }}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'InfoDetail',
    mounted() {
      console.log(this.$route);
    }
  };
</script>
