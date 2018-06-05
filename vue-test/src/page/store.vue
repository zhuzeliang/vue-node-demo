<template>
  <div class="page-vuex">
    <h1>{{msg}}</h1>
    <div>
      <button @click="addNum">vuex</button>
      <span>{{num}}</span>
      <button @click="getUserInfoAction">vuex 异步</button>
      <button @click="handle">handle</button>
      <span>{{userInfo.user}}</span>
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
  computed: {
    ...mapState({
      num: state => state.a.num,
      userInfo:state => state.a.userInfo,
    })
  },
  mounted(){
    
  },
  methods: {
    ...mapMutations(['addNum','fun']),
    ...mapActions(['getUserInfoAction']),
    handle() {
      console.log(this.$store)
    }

  }
}

</script>
