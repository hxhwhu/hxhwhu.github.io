<template>
  <div v-show="total" class="todo-item-margin">
    <el-row :gutter="20" style="line-height: 40px;">
      <el-col :span="18">
        <el-checkbox v-model="allFinished">
          已完成{{finish}}/全部{{total}}
        </el-checkbox>
      </el-col>
      <el-col :span="6">
        <el-button type="danger" size="mini" :disabled="finish === 0" @click="delAllDone">
          清除已完成任务
        </el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'TodoItem',
    props: ['todos', 'clearAllDone', 'checkAll'],
    computed: {
      finish() {
        return this.todos.reduce((pre, cur) => pre + (cur.done ? 1 : 0), 0);
      },
      total() {
        return this.todos.length;
      },
      allFinished: {
        get() {
          return this.finish !== 0 && this.total !== 0 && this.finish === this.total;
        },
        set(newVal) {
          this.checkAll(newVal);
        }
      }
    },
    methods: {
      delAllDone() {
        this.clearAllDone();
      }
    }
  }
</script>
