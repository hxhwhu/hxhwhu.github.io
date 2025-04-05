<template>
  <div>
    <TodoItem
      v-for="todo in todos"
      :key="todo.id"
      :todo="todo"
    />
  </div>
</template>

<script>
  import TodoItem from './TodoItem';
  export default {
    name: 'TodoList',
    components: {
      TodoItem
    },
    props: ['todos']
  }
</script>
