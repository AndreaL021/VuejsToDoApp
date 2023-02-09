const state= {
    archive:[],
    archiveSelect:-1
  };
  const getters= {
    getArchive: state=> state.archive.slice().reverse(),
    getArchiveSelect: state=>state.archiveSelect
  };
  const mutations= {
    archiveTask: (state, task) =>{state.archive.push(task)},
    publishTask:(state, id) => (state.archive=state.archive.filter( task=>task.id != id)),
  };
  const actions= {
    archiveTask: ({commit}, task)=>commit('archiveTask', task),
    publishTask: ({commit}, id)=> commit('publishTask', id),
  };
  export default{
      state,
      getters,
      mutations,
      actions
  }