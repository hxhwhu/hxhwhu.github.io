<template>
  <div>
    <el-row :gutter="20" style="margin-top: 20px;">
      <el-col :span="12">
        <el-statistic :value="sum" title="current count" />
      </el-col>
      <el-col :span="12">
        <el-statistic title="current binary count">
          <template slot="formatter">{{ binarySum }}</template>
        </el-statistic>
      </el-col>
    </el-row>
    <el-row>
      <el-select v-model="n" size="mini" style="width: 80px; margin: 20px 10px 0 40px;">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
      <el-button plain size="mini" @click="add(n)">+</el-button>
      <el-button plain size="mini" @click="minus(n)">-</el-button>
      <el-button plain size="mini" @click="addOdd(n)">+ if odd</el-button>
      <el-button plain size="mini" @click="addWait(n)">+ wait</el-button>
    </el-row>
  </div>
</template>

<script>
  import { mapState, mapGetters, mapActions, mapMutations } from 'vuex';
  export default {
    name: 'CountVuex',
    data() {
      return {
        n: 1,
        options: [{
          label: 1,
          value: 1
        }, {
          label: 2,
          value: 2
        }, {
          label: 3,
          value: 3
        }]
      }
    },
    computed: {
      // 借助mapState生成计算属性，从state中读取数据——数组写法
      ...mapState(['sum']),
      // 借助mapState生成计算属性，从state中读取数据——对象写法
      // ...mapState({'he': 'sum'}),
      // 借助mapGetters生成计算属性，从getters中读取数据——数组写法
      ...mapGetters(['binarySum']),
      // 借助mapGetters生成计算属性，从getters中读取数据——数组写法
      // ...mapGetters({'erjinzhihe': 'binarySum'}),
    },
    methods: {
      // 借助mapMutations生成对应的方法，方法中会调用commit去联系mutations——对象写法
      // 如果这里的函数名和mutations中的函数名一样，则可以用数组写法
      ...mapMutations({add:'ADD', minus: 'MINUS'}),

      // 借助mapMutations生成对应的方法，方法中会调用dispatch去联系actions——对象写法
      // 如果这里的函数名和actions中的函数名一样，则可以用数组写法
      ...mapActions({addOdd:'addOdd'}),

      addWait() {
        setTimeout(() => {
          this.$store.commit('ADD', this.n);
        }, 2000);
      }
    }
  }
</script>
