<template>
  <div class="manag" v-loading="loading">
    <h1>{{msg}}</h1>
    <div>
      <h1>{{count}}</h1>
      <h1>{{count}}</h1>
      <el-button @click="addAction">vuex++</el-button>
      <el-button @click="reduceAction" type="primary">vuex--</el-button>
      <el-button @click="handle">axios</el-button>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations, mapGetters, mapActions } from "vuex"
import { getLogin } from "@/api/getData"
import { Loading } from 'element-ui'

export default {
  name: 'manage',
  data() {
    return {
      msg: 'vuex demo',
      fullscreenLoading: false,
      loading: true
    }
  },
  computed: mapState({
    count: state => state.count * 3
  }),
  mounted() {
    console.log(this.count);
    if (process.env.NODE_ENV == 'development') {
      console.log(999)
    } else {
      console.log(666)
    }
  },
  methods: {
    ...mapMutations(["add", "reduce"]),
    ...mapActions(["addAction", "reduceAction"]),
    async handle() {
      const loading = this.$loading();
      try {
        var res = await getLogin();
        console.log(res.data);
        loading.close();
      } catch (err) {
        console.log(err)
      }

    }
  }
}

</script>
<style lang="scss">


</style>
