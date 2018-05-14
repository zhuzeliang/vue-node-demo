import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);


const state = {
    count:1,
    cc:111
}

const mutations={
    add(state){
        state.count+=1;
    },
    reduce(state){
        state.count-=1;
    }
}
const getters = {
    count: function (state) {
        return state.count += 100;
    }
}

const actions = {
    addAction(context) {
        // context.commit('add');
        setTimeout(() => { context.commit('add') }, 1000);
    },
    reduceAction(context) {
       setTimeout(() => { context.commit('reduce') }, 1000);
    }
};


export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions
});
