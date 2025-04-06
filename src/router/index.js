import VueRouter from "vue-router";
import EmptyState from "@/pages/EmptyState";
import TodoDemo from "@/pages/TodoDemo";
import GithubSearch from "@/pages/GithubSearch";
import CountVuex from "@/pages/CountVuex";
import MultiRoute from "@/pages/MultiRoute";
import ChildrenRoute1 from "@/pages/MultiRoute/ChildrenRoute1.vue";
import ChildrenRoute2 from "@/pages/MultiRoute/ChildrenRoute2.vue";
import InfoDetail from "@/pages/MultiRoute/InfoDetail.vue";

export default new VueRouter({
  routes: [{
    path: '/',
    component: EmptyState
  }, {
    path: '/todo',
    component: TodoDemo
  }, {
    path: '/githubSearch',
    component: GithubSearch
  }, {
    path: '/count',
    component: CountVuex
  }, {
    path: '/multiRoute',
    component: MultiRoute,
    children: [{
      path: 'child1',
      component: ChildrenRoute1
    }, {
      path: 'child2',
      component: ChildrenRoute2,
      children: [{
        path: 'detail',
        component: InfoDetail
      }]
    }]
  }]
});
