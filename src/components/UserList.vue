<template>
  <div>
    <el-skeleton :rows="6" animated v-show="showLoading" style="margin-top: 20px;" />
    <el-col :sm="50" :lg="50">
      <el-result icon="error" :title="errMsg" v-show="showError" />
    </el-col>
    <el-table
      :data="list"
      border
      style="width: 100%; margin-top: 20px;"
      v-show="list.length > 0 && !showLoading">
      <el-table-column
        prop="login"
        label="login"
        width="250">
        <template slot-scope="scope">
          <el-link :href="scope.row.html_url" type="primary" target="_blank">
            {{ scope.row.login }}
          </el-link>
        </template>
      </el-table-column>
      <el-table-column
        prop="id"
        label="id"
        width="250">
      </el-table-column>
      <el-table-column
        prop="type"
        label="type">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    name: 'UserList',
    data() {
      return {
        showLoading: false,
        showError: false,
        errMsg: 'Sorry request failed 422',
        list: []
      }
    },
    mounted() {
      this.$bus.$on('getRes', (res) => {
        this.showLoading = res.showLoading;
        this.showError = res.showError;
        this.errMsg = res.errMsg;
        if(res.list.length > 5) this.list = res.list.slice(0, 5);
        else this.list = res.list;
      });
    },
    beforeDestroy() {
      this.$bus.$off('getRes');
    }
  }
</script>
