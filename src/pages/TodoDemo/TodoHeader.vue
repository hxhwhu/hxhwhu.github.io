<template>
    <el-input
      v-model="content"
      placeholder="请输入内容，按下回车键进行添加"
      @change="addTodo"
    />
</template>

<script>
  import { nanoid } from 'nanoid';
  export default {
    name: 'TodoHeader',
    data() {
      return {
        content: ''
      }
    },
    methods: {
      addTodo() {
        if(this.content.trim().length === 0) {
          this.$message({
            message: '输入不能为空！',
            type: 'warning'
          });
          return;
        }
        this.$emit('receiveTodo', {
          id: nanoid(),
          content: this.content,
          done: false
        });
        this.content = '';
      }
    }
  }
</script>
