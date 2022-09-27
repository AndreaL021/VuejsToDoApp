<template>
      <v-row align="center" justify="center">
        <v-col>
          
            <select v-model="selected" class="select" v-if="users.length>0">
              <option v-for="user in users" :key="user.id" :value="user.id">{{user.name}}</option>
            </select>
            <v-btn v-if="users.length>0" @click="select">select</v-btn>
        </v-col>
      </v-row>
</template>

<script>

    
export default{
    name:'UserSelect',
    data(){
        return{
          selected:0
        }
    },
    computed:{
        users(){
            return this.$store.getters.getUsers
        }
    },
    methods:{
        select(){
            this.$store.dispatch('changeSelect', this.selected);
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