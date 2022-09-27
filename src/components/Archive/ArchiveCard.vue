<template>
    <v-col>
      <v-card class="mx-auto" max-width="700" outlined 
        :class="{
            'light-green accent-4': task.done, 
            'red': !task.done, 
            'grey' : task.done==null
          }" 
      >
        <v-list-item three-line>
          <v-list-item-content>
            <v-list-item-title class="text-h5 mb-1">
              #{{task.id}} - {{task.name}} - {{user.name}}
              <span v-if="task.done===true">Completed</span>
              <span v-else-if="task.done===false">Not completed</span>
              <span v-else>To do</span>
            </v-list-item-title>
          </v-list-item-content>
          <v-card-actions v-if="task.user_id==connected">
            <v-btn v-if="task.done===true"
            class="grey"
              outlined
              rounded
              @click="publish"
            >
              <font-awesome-icon icon="fa-solid fa-upload" size="2x"/>
            </v-btn>
            <v-btn
            class="error"
              text
              @click="remove(task.id)"
            >
              Delete
            </v-btn>
          </v-card-actions>
        </v-list-item>
    
      </v-card>
    </v-col>
  </template>
  
  <script>
  
  export default{
    name:'MyCard',
    props:{
      task:{
        type:Object,
        default:()=>({
          id:0,
          name:'',
          done:true,
          user_id:0
        }),
      },
    },
  methods:{
    userTasks(select){
        if (select===-1) {
            return this.$store.getters.getArchive
        }else{
            return this.$store.getters.getUserTasks(select)
        }
    },
    remove(id){
        this.$store.dispatch('publishTask', id);
        this.$emit('getUserTasks', this.userTasks(this.select))
    },
    publish(){
        this.$store.dispatch('publishTask', this.task.id);
        this.$store.dispatch('addTask', this.task);
        this.$emit('getUserTasks', this.userTasks(this.select))
    }
  },
  computed:{
    user(){
      return this.$store.getters.getUser(this.task.user_id)
    },
    select(){
        return this.$store.getters.getArchiveSelect
    },
    connected(){
      return this.$store.getters.getSelect
    }
  }
  }
  </script>