<template>
  <el-row :gutter="20" style="line-height: 40px;">
    <el-col :span="20">
      <el-input
        placeholder="Please enter something to search"
        v-model="keyWord"
      />
    </el-col>
    <el-col :span="4">
      <el-button icon="el-icon-search" @click="searchUser"></el-button>
    </el-col>
  </el-row>
</template>

<script>
  import axios from 'axios';
  export default {
    name: 'SearchUser',
    data() {
      return {
        keyWord: ''
      }
    },
    methods: {
      searchUser() {
        this.$bus.$emit('getRes', {
          showLoading: true,
          showError: false,
          errMsg: '',
          list: []
        });
        // vue-resource插件和axios使用几乎一样，axios换成this.$http即可
        axios.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
          (response) => {
            this.$bus.$emit('getRes', {
              showLoading: false,
              showError: false,
              errMsg: '',
              list: response.data.items
            });
            this.$message({
              message: '请求成功',
              type: 'success'
            });
          },
          (response) => {
            this.$message.error(response.message);
            this.$bus.$emit('getRes', {
              showLoading: false,
              showError: true,
              errMsg: response.message,
              list: []
            });
          }
        );
      }
    }
  }
</script>
