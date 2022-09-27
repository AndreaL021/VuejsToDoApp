<template>
        <v-row class="d-flex justify-center">
          <v-col v-if="users.length>0 && tasks.length>0" cols="4">
            <v-text-field 
              label="Search"
              v-model="name"
            ></v-text-field>
          </v-col>
          <v-btn @click="search" v-if="users.length>0 && tasks.length>0" class="align-self-center light-green accent-3">
            submit
          </v-btn>
        </v-row>
</template>

<script>

  
export default{
    name:'ArchiveSearch',
    data(){
        return{
            name:""
        }
    },
    computed:{
        users(){
            return this.$store.getters.getUsers
        },
        tasks(){
            return this.$store.getters.getArchive
        }
    },
    methods:{
        userTasks(name){
            if (name==="") {
                return this.$store.getters.getArchive
            }else{
                let users=this.$store.getters.getUserSearchTasks(name)
                let tasksName=this.$store.getters.getSearchTasks(name)
                let userTasks=[]
                let tasks=[]
                let out
                
                for (let i = 0; i < users.length; i++) {
                    userTasks.push(this.$store.getters.getUserTasks(users[i].id))
                }

                userTasks=userTasks[0]

                if (userTasks!= undefined) {
                    out=userTasks.concat(tasksName)
                    out = [...new Set(out)]
                    for (let i = 0; i < out.length; i++) tasks.push(out[i])
                    
                }else{
                    for (let i = 0; i < tasksName.length; i++) tasks.push(tasksName[i])
                }
                return tasks; 
            }
        },
        search(){
            
            this.$emit('getUserTasks', this.userTasks(this.name))
        }
    }
}
</script>
<style>
  .select {
width: 100%;
min-width: 5rem;
max-width: 15rem;
border: 1px solid black;
border-radius: 0.25em;
padding: 0.25em 0.5em;
font-size: 1.25rem;
cursor: pointer;
line-height: 1.1;
background-color: #fff;
background-image: linear-gradient(to top, #f9f9f9, #fff 33%);
}
</style>