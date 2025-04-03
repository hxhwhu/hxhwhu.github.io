<template>
  <div class="container">
    <TodoHeader @receiveTodo="receiveTodo" />
    <TodoList :todos="todos" />
    <TodoFooter :todos="todos" :clearAllDone="clearAllDone" :checkAll="checkAll" />
  </div>
</template>

<script>
  import PubSub from 'pubsub-js';
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
      deleteTodo(_, id) {
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
    },
    mounted() {
      this.$bus.$on('changeTodoDone', this.changeTodoDone);
      // this.$bus.$on('deleteTodo', this.deleteTodo); // 全局事件总线实现
      this.pubId = PubSub.subscribe('deleteTodo', this.deleteTodo); // PubSub实现
    },
    beforeDestroy() {
      this.$bus.$off('changeTodoDone');
      // this.$bus.$off('deleteTodo');
      PubSub.unsubscribe(this.pubId);
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
