import VueRouter from "vue-router";
import TodoDemo from "../pages/TodoDemo";
import GithubSearch from "../pages/GithubSearch";
import CountVuex from "../pages/CountVuex";

export default new VueRouter({
  routes: [{
    path: '/todo',
    component: TodoDemo
  }, {
    path: '/githubSearch',
    component: GithubSearch
  }, {
    path: '/count',
    component: CountVuex
  }]
});
