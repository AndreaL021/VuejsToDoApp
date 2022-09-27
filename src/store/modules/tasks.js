const state= {
  tasks:[]
};
const getters= {
  getTasks: state=> state.tasks.slice().reverse(),
  getTask: state=> id=> state.tasks.find(task=>task.id===id)
};
const mutations= {
  addTask: (state, newTask) =>{state.tasks.push(newTask)},
  removeTask:(state, id) => (state.tasks=state.tasks.filter( task=>task.id != id)),
    
  toDoCheck:(state, id) => {
      let task= state.tasks.find(task=>task.id === id);
      if (task) {
          task.done=false;
      }
  },
  doneCheck:(state, id) => {
      let task= state.tasks.find(task=>task.id === id);
      if (task) {
          task.done=true;
      }
  }
};
const actions= {
  addTask: ({commit}, newTask)=>commit('addTask', newTask),
  removeTask: ({commit}, id)=> commit('removeTask', id),
  doneCheck: ({commit}, id)=> commit('doneCheck', id),
  toDoCheck:({commit}, id)=> commit('toDoCheck', id)
};
export default{
    state,
    getters,
    mutations,
    actions
}