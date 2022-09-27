import Vue from 'vue'
import Vuex from 'vuex'
import Counter from './modules/counter'
import Tasks from './modules/tasks'
import Archive from './modules/archive'
import Users from './modules/users'

Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    Counter,
    Tasks,
    Archive,
    Users
  }
})
