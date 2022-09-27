const state= {
    archive:[],
    archiveSelect:-1
  };
  const getters= {
    getArchive: state=> state.archive.slice().reverse(),
    getUserTasks:state=>id=>state.archive.filter(task=>task.user_id===id).reverse(),
    getSearchTasks:state=>name=>state.archive.filter(
      task=>task.name.toUpperCase().includes(name.toUpperCase())
    ),
    getArchiveSelect: state=>state.archiveSelect
  };
  const mutations= {
    archiveTask: (state, task) =>{state.archive.push(task)},
    publishTask:(state, id) => (state.archive=state.archive.filter( task=>task.id != id)),
    changeArchiveSelect:(state, id) =>{state.archiveSelect=id}
  };
  const actions= {
    archiveTask: ({commit}, task)=>commit('archiveTask', task),
    publishTask: ({commit}, id)=> commit('publishTask', id),
    changeArchiveSelect: ({commit}, id)=>commit('changeArchiveSelect', id)
  };
  export default{
      state,
      getters,
      mutations,
      actions
  }