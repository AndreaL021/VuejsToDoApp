const state= {
    users:[
        {
          id:0,
          name:"Andrea"
        }
    ],
    selectedUser:-1,
    userCounter:1
  };
  const getters= {
    getUserCounter: state=> state.userCounter,
    getUsers: state=> state.users.slice().reverse(),
    getUser: state=> id=> state.users.find(user=>user.id===id),
    getUserSearchTasks:state=>name=>state.users.filter(
      user=>user.name.toUpperCase().includes(name.toUpperCase())
    ),
    getSelect: state=>state.selectedUser
  };
  const mutations= {
    addUserCounter:state=>state.userCounter++,
    addUser: (state, user) =>{state.users.push(user)},
    changeSelect:(state, id) =>{state.selectedUser=id},
    removeUser:(state, id) => (state.users=state.users.filter( user=>user.id != id)),
  };
  const actions= {
    addUserCounter:({commit})=>commit('addUserCounter'),
    addUser: ({commit}, newTask)=>commit('addUser', newTask),
    changeSelect: ({commit}, id)=>commit('changeSelect', id),
    removeUser: ({commit}, id)=> commit('removeUser', id)
  };
  export default{
      state,
      getters,
      mutations,
      actions
  }