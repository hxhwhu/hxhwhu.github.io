<template>
  <div @mouseover="handleMouseOver" @mouseout="handleMouseOut">
    <el-row :gutter="20" style="line-height: 40px;">
      <el-col :span="20" :style="itemStyle">
        <el-checkbox :checked="todo.done" @change="handleCheck(todo.id)">
          {{ todo.content }}
        </el-checkbox>
      </el-col>
      <el-col :span="4">
        <el-button
          type="danger"
          icon="el-icon-delete"
          circle
          size="mini"
          :style="btnStyle"
          @click="dialogVisible = true"
        />
      </el-col>
    </el-row>
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%">
      <span>确认删除吗？</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="ensureDelTodo(todo.id)">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
  import PubSub from 'pubsub-js';
  export default {
    name: 'TodoItem',
    props: ['todo'],
    data() {
      return {
        itemStyle: 'background-color: #FFFFFF;',
        btnStyle: 'display: none;',
        dialogVisible: false
      }
    },
    methods: {
      handleCheck(id) {
        this.$bus.$emit('changeTodoDone', id);
      },
      handleMouseOver() {
        this.itemStyle = 'background-color: #C0C4CC;';
        this.btnStyle = 'display: block;';
      },
      handleMouseOut() {
        this.itemStyle = 'background-color: #FFFFFF;';
        this.btnStyle = 'display: none;';
      },
      ensureDelTodo(id) {
        // this.$bus.$emit('deleteTodo', id); // 全局事件总线实现
        PubSub.publish('deleteTodo', id); // PubSub实现
        this.dialogVisible = false;
      }
    }
  }
</script>
