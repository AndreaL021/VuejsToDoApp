<template>
    <v-form>
      <v-container>
        <h1 class="text-center">Completed task</h1>
        <v-row class="text-center my-3">
            <v-col cols="12">
                <Select @getUserTasks="getTasks($event)"/>
            </v-col>
        </v-row>
        <Search @getUserTasks="getTasks($event)"/>
        <Card @getUserTasks="getTasks($event)" 
        v-for="task in userTasks" :key="task.id" :task="task"/>
      </v-container>
    </v-form>
</template>

<script>
import Card from '../components/Archive/ArchiveCard.vue'
import Select from '../components/Archive/ArchiveSelect.vue'
import Search from '../components/Archive/ArchiveSearch.vue'

export default {
    name: 'ArchiveView',
    data(){
        return {
            userTasks:[],
            id:null
        }
    },
    components: {
        Card,
        Select,
        Search
    },
    methods:{
        getTasks(tasks){
            this.userTasks=[];
            for (let i = 0; i < tasks.length; i++) {
                this.userTasks.push(tasks[i])
            }

        },
        search(){
            this.userTasks=[];
            for (let i = 0; i < this.tasks.length; i++) {
                if (this.tasks[i].name.includes(this.name)) {
                    this.userTasks.push(this.tasks[i])
                }
            }
            for (let i = 0; i < this.users.length; i++) {
                if (this.users[i].name==this.name) {
                    this.getTasks
                }
            }
        }
    },
    computed:{
        tasks(){
            return this.$store.getters.getTasks
        },
        users(){
          return this.$store.getters.getUsers
        }

    }   
}
</script>

    