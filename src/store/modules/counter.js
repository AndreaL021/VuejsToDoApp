const state= {
  counter:0,
};
const getters= {
  getCounter: state=> state.counter
};
const mutations= {
  addCounter:state=>state.counter++
};
const actions= {
  addCounter:({commit})=>commit('addCounter')
};
export default{
    state,
    getters,
    mutations,
    actions
}