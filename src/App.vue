<template>
  <div>
    <el-container>
      <el-header><h1>Vue 是一套用于构建用户界面的渐进式框架</h1></el-header>
      <el-container>
        <el-aside width="200px">
          <el-row class="tac">
            <el-col :span="24">
              <el-menu
                default-active="1"
                class="el-menu-vertical-demo"
              >
                <el-menu-item index="1">
                  <i class="el-icon-tickets"></i>
                  <span slot="title"><router-link to="/todo">todo</router-link></span>
                </el-menu-item>
                <el-menu-item index="2">
                  <i class="el-icon-search"></i>
                  <span slot="title"><router-link to="/githubSearch">githubSearch</router-link></span>
                </el-menu-item>
                <el-menu-item index="3">
                  <i class="el-icon-plus"></i>
                  <span slot="title"><router-link to="/count">count</router-link></span>
                </el-menu-item>
              </el-menu>
            </el-col>
          </el-row>
        </el-aside>
        <el-main>
          <el-row :gutter="20">
            <el-col :span="12" class="container">
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
