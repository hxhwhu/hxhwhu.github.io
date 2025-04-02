<template>
  <div class="container">
    <TodoHeader :receiveTodo="receiveTodo" />
    <TodoList :todos="todos" :changeTodoDone="changeTodoDone" :deleteTodo="deleteTodo" />
    <TodoFooter :todos="todos" :clearAllDone="clearAllDone" :checkAll="checkAll" />
  </div>
</template>

<script>
  import TodoHeader from './components/TodoHeader.vue';
  import TodoList from './components/TodoList.vue';
  import TodoFooter from './components/TodoFooter.vue';

  export default {
    name: 'App',
    components: {
      TodoHeader,
      TodoList,
      TodoFooter
    },
    data() {
      return {
        todos: JSON.parse(localStorage.getItem('todos')) || []
      }
    },
    methods: {
      receiveTodo(todo) {
        this.todos.unshift(todo);
      },
      changeTodoDone(id) {
        for(let todo of this.todos) {
          if(todo.id === id) {
            todo.done = !todo.done;
            break;
          }
        }
      },
      deleteTodo(id) {
        for(let i = 0; i < this.todos.length; i++) {
          if(this.todos[i].id === id) {
            this.todos.splice(i, 1);
            break;
          }
        }
      },
      checkAll(done) {
        this.todos.forEach((todo) => {
          todo.done = done;
        });
      },
      clearAllDone() {
        this.todos = this.todos.filter(todo => !todo.done);
      }
    },
    watch: {
      todos: {
        deep: true,
        handler(value) {
          localStorage.setItem('todos', JSON.stringify(value));
        }
      }
    }
  }
</script>

<style>
  .container {
    width: 500px;
    height: 500px;
    border: 1px black solid;
    margin: 20px auto;
    padding: 20px;
  }
</style>
