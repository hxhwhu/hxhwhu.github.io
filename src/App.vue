<template>
  <div>
    <el-container>
      <el-header><h1>Vue 是一套用于构建用户界面的渐进式框架</h1></el-header>
      <el-divider/>
      <el-container>
        <el-aside width="200px">
          <el-row class="tac">
            <el-col :span="24">
              <el-menu
                class="el-menu-vertical-demo"
                router
              >
                <el-menu-item index="/todo">
                  <i class="el-icon-tickets"></i>
                  <span slot="title">todo</span>
                </el-menu-item>
                <el-menu-item index="/githubSearch">
                  <i class="el-icon-search"></i>
                  <span slot="title">githubSearch</span>
                </el-menu-item>
                <el-menu-item index="/count">
                  <i class="el-icon-plus"></i>
                  <span slot="title">count</span>
                </el-menu-item>
                <el-menu-item index="/multiRoute">
                  <i class="el-icon-menu"></i>
                  <span slot="title">嵌套路由</span>
                </el-menu-item>
              </el-menu>
            </el-col>
          </el-row>
        </el-aside>
        <el-main>
          <el-row :gutter="20">
            <el-col :span="12" class="container" style="min-height: 110px;">
              <router-view></router-view>
            </el-col>
          </el-row>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>
  .container {
    border: 1px #409EFF solid;
    border-radius: 4px;
    margin: 40px;
    padding: 20px;
  }
</style>
