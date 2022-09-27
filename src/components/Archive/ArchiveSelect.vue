<template>
    <v-row class="d-flex justify-center">
      <v-col v-if="users.length>0 && tasks.length>0">
        
          <select v-model="selected" class="select" v-if="users.length>0">
            <option :value="-1">All</option>
            <option v-for="user in users" :key="user.id" :value="user.id">{{user.name}}</option>
          </select>
          <v-btn @click="changeSelect">select</v-btn>
      </v-col>
    </v-row>
</template>

<script>

  
export default{
    name:'ArchiveSelect',
    data(){
        return{
            selected:-1
        }
    },
    computed:{
        users(){
            return this.$store.getters.getUsers
        },
        select(){
            return this.$store.getters.getArchiveSelect()
        },
        tasks(){
            return this.$store.getters.getArchive
        }
    },
    methods:{
        userTasks(selected){
            if (this.selected===-1) {
                return this.$store.getters.getArchive
            }else{
                return this.$store.getters.getUserTasks(selected)
            }
        },
        changeSelect(){
            this.$store.dispatch('changeArchiveSelect', this.selected),
            this.$emit('getUserTasks', this.userTasks(this.selected))
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