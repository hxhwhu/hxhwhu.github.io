<template>
  <div>
    <h3>子路由1的内容</h3>
  </div>
</template>

<script>
  export default {
    name: 'ChildrenRoute1',
    beforeDestroy() {
      console.log('ChildrenRoute1组件即将被销毁')
    }
  };
</script>
