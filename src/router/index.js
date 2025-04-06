import VueRouter from "vue-router";
import EmptyState from "@/pages/EmptyState";
import TodoDemo from "@/pages/TodoDemo";
import GithubSearch from "@/pages/GithubSearch";
import CountVuex from "@/pages/CountVuex";
import MultiRoute from "@/pages/MultiRoute";
import ChildrenRoute1 from "@/pages/MultiRoute/ChildrenRoute1.vue";
import ChildrenRoute2 from "@/pages/MultiRoute/ChildrenRoute2.vue";
import InfoDetail from "@/pages/MultiRoute/InfoDetail.vue";

const router = new VueRouter({
  routes: [{
    path: '/',
    meta: {
      title: 'hxhwhu'
    },
    component: EmptyState
  }, {
    path: '/todo',
    meta: {
      title: '待办事项'
    },
    component: TodoDemo
  }, {
    path: '/githubSearch',
    meta: {
      title: 'Github搜索'
    },
    component: GithubSearch
  }, {
    path: '/count',
    meta: {
      title: '计数器'
    },
    component: CountVuex
  }, {
    path: '/multiRoute',
    meta: {
      title: '嵌套组件（多级组件）'
    },
    component: MultiRoute,
    children: [{
      name: 'child1',
      path: 'child1',
      meta: {
        needAuth: true,
        title: '子组件一'
      },
      component: ChildrenRoute1
    }, {
      name: 'child2',
      path: 'child2',
      meta: {
        needAuth: true,
        title: '子组件二'
      },
      component: ChildrenRoute2,
      children: [{
        path: 'detail',
        meta: {
          needAuth: true,
          title: '详情'
        },
        component: InfoDetail
      }]
    }]
  }]
});

// 全局前置路由守卫————初始化时被调用、每次路由切换之前被调用
router.beforeEach((to, from, next) => {
  if(to.meta.needAuth) {
    if(localStorage.getItem('id') === 'hxh') {
      next();
    } else {
      window.$message.error('您暂时无权查看，请修改鉴权后再查看');
    }
  } else {
    next();
  }
});

// 全局后置路由守卫————初始化时被调用、每次路由切换之后被调用
router.afterEach((to) => {
  // 每次路由切换后将网页标题相应修改
  document.title = to.meta.title;
});

export default router;
