<template>
  <div>
    <el-link type="primary" @click="changeAuth">修改鉴权信息</el-link><br>
    <el-link type="primary" @click="recoverAuth">恢复鉴权信息</el-link><br>
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
    name: 'MultiRoute',
    methods: {
      changeAuth() {
        localStorage.setItem('id', new Date().getTime());
        this.$message({
          message: '鉴权信息修改成功',
          type: 'success'
        });
      },
      recoverAuth() {
        localStorage.setItem('id', 'hxh');
        this.$message({
          message: '鉴权信息恢复成功',
          type: 'success'
        });
      }
    },
    mounted() {
      localStorage.setItem('id', 'hxh');
    }
  };
</script>
