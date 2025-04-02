<template>
  <div class="top-margin-20">
    <TodoItem
      v-for="todo in todos"
      :key="todo.id"
      :todo="todo"
      :changeTodoDone="changeTodoDone"
      :deleteTodo="deleteTodo"
    />
  </div>
</template>

<script>
  import TodoItem from './TodoItem.vue';
  export default {
    name: 'TodoList',
    components: {
      TodoItem
    },
    props: ['todos', 'changeTodoDone', 'deleteTodo']
  }
</script>

<style>
  .top-margin-20 {
    margin-top: 20px;
    height: 300px;
  }
</style>
