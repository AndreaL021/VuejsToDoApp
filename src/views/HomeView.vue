<template>
  <v-container>
    <h1 class="text-center">Task</h1>
    <v-row class="d-flex justify-center">
      <v-col cols="12" md="4">
        <v-text-field 
          v-model="name"
          label="Task" 
          required
        ></v-text-field>
        <div class="red--text">{{message}}</div>
      </v-col>
      <v-btn @click="add" class="align-self-center light-green accent-3">
        submit
      </v-btn>
    </v-row>
    <v-row>
      <Card v-for="task in tasks" :key="task.id" :task="task"/>
    </v-row>
    
  </v-container>
</template>

<script>
import Card from '../components/MyCard.vue'

export default {
  name: 'HomeView',
  data(){
    return{
      name:"",
      done:null,
      message:''
    }
  },
components: {
  Card,
},
methods:{
  add(){
    if (this.$store.getters.getSelect!=-1) {
      this.$store.dispatch('addTask', {
        id:this.$store.getters.getCounter,
        user_id:this.$store.getters.getSelect,
        name:this.name,
        done:this.done
      }),
      this.$store.dispatch('addCounter'),
      this.message=''
      
    }else{
      this.message='No user selected'
    }
  }
},
computed:{
  tasks(){
    return this.$store.getters.getTasks
  }
  
}
}
</script>
