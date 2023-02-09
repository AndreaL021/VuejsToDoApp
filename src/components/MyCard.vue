<template>
  <v-col cols="12">
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
            <span v-if="task.done===true">Completata</span>
            <span v-else-if="task.done===false">Non completata</span>
            <span v-else>To do</span>
          </v-list-item-title>
        </v-list-item-content>
        <v-card-actions v-if="task.user_id==connected">
          <v-btn v-if="task.done==null"
          class="success"
            outlined
            rounded
            @click="done(task.id)"
          >
            <font-awesome-icon icon="fa-regular fa-square-check fa-2x" size="2x" />
          </v-btn>
          <v-icon color="primary"> fa-solid fa-vault </v-icon>

          <v-btn v-if="task.done===null"
          class="error mx-2"
            outlined
            rounded
            @click="toDo(task.id)"
          >
            <font-awesome-icon icon="fa-regular fa-rectangle-xmark" size="2x" />
          </v-btn>

          <EditTask :task="task"/>

          <v-btn v-if="task.done===true"
          class="grey"
            outlined
            rounded
            @click="archive"
          >
            <font-awesome-icon icon="fa-solid fa-vault" size="2x" />
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
import EditTask from './EditTask.vue'

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
  remove(id){
    this.$store.dispatch('removeTask', id).then(() => {
          console.log('OK');
      });
  },
  done(id){
    this.$store.dispatch('doneCheck', id);
    this.d= this.task.done;
  },
  toDo(id){
    this.$store.dispatch('toDoCheck', id);
    this.d= this.task.done;
  },
  archive(){
    this.$store.dispatch('archiveTask', this.task);
    this.$store.dispatch('removeTask', this.task.id);
  }
},
computed:{
  user(){
    return this.$store.getters.getUser(this.task.user_id)
  },
  connected(){
    return this.$store.getters.getSelect
  }
},
components:{
    EditTask
}
}
</script>