<template>
  <div>
    <h3>子路由2的内容</h3>
    <ul>
      <li :style="{opacity}">Hello Vue2!</li>
      <li v-for="info in infos" :key="info.id">
        <!-- 1.路由传参query的字符串写法 -->
        <!-- <router-link :to="`/multiRoute/child2/detail?id=${info.id}&title=${info.title}`">
          {{ info.title }}
        </router-link> -->
        <!-- 2.路由传参query的对象写法 -->
        <router-link :to="{
          path: '/multiRoute/child2/detail',
          query: {
            id: info.id,
            title: info.title
          }
        }">
          {{ info.title }}
        </router-link>
        <input type="text">
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'ChildrenRoute2',
    data() {
      return {
        infos: [
          { id: '001', title: '消息001' },
          { id: '002', title: '消息002' },
          { id: '003', title: '消息003' },
          { id: '004', title: '消息004' }
        ],
        opacity: 1
      };
    },
    beforeDestroy() {
      console.log('ChildrenRoute2组件即将被销毁')
    },
    activated() {
      this.timer = setInterval(() => {
        console.log('@')
        this.opacity -= 0.1;
        if(this.opacity < 0) this.opacity = 1;
      }, 50);
    },
    deactivated() {
      clearInterval(this.timer);
    }
  };
</script>
