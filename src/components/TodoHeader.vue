<template>
  <div>
    <el-input v-model="content" placeholder="请输入内容" @change="addTodo"></el-input>
  </div>
</template>

<script>
  import { nanoid } from 'nanoid';
  export default {
    name: 'TodoHeader',
    props: ['receiveTodo'],
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
        this.receiveTodo({
          id: nanoid(),
          content: this.content,
          done: false
        });
        this.content = '';
      }
    }
  }
</script>
