import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


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
        setTimeout(() => { context.commit('add') }, 3000);
    },
    reduceAction(context) {
        context.commit('reduce');
    }
};


export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions
});
