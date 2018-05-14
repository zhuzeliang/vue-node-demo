<template>
  <div class="page">
    <h1>{{msg}}</h1>
    <div>
      <h1>{{cc}}</h1>
      <h1>{{count}}</h1>
      <el-button @click="add">add++</el-button>
      <el-button @click="reduce">reduce--</el-button>
      <el-button @click="addAction">addAction++</el-button>
      <el-button @click="reduceAction">reduceAction--</el-button>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations, mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      msg: 'vuex demo',
    }
  },
  computed: mapState({
    count: state => state.count,
    cc: state => state.cc,
  }),//此处mapStat函数形式科直接替代mapGetters处理数据

  //mapState两种形式
  // computed:{
  //   ...mapState([
  //     'count',
  //     'cc',
  //   ]),
  //   ...mapGetters([
  //     'count',
  //   ]),
  // },//此处对象扩展需在vuex文件用getters
  mounted() {
    console.log(this.count);
    // if (process.env.NODE_ENV == 'development') {
    //   console.log(999)
    // } else {
    //   console.log(666)
    // }

  },
  methods: {
    ...mapMutations(["add", "reduce"]),
    ...mapActions(["addAction", "reduceAction"]),

  }
}

</script>
<style lang="scss">


</style>
