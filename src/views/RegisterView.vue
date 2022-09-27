<template>
  <v-form>
    <v-container>
      <h1 class="text-center">Register</h1>
      <v-row class="d-flex justify-center">
        <v-col cols="4">
          <v-text-field 
            label="Name"
            v-model="name"
          ></v-text-field>
          <div class="red--text">{{message}}</div>
        </v-col>
        <v-btn @click="add" class="align-self-center light-green accent-3">
          submit
        </v-btn>
      </v-row>
      <div>Users:</div>
      <v-row>
        <v-col cols="2" v-for="user in users" :key="user.id"><div>{{user.name}}</div></v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
  export default {
    name: 'RegisterView',

    data(){
      return{
        name:"",
        message:''
      }
    },
    methods:{
      add(){
        if (this.name.length>0) {
          this.$store.dispatch('addUser', {
            id:this.$store.getters.getUserCounter,
            name:this.name
          }),
          this.$store.dispatch('addUserCounter')
        }else this.message='Name required'
      }
    },
    computed:{
    users(){
      return this.$store.getters.getUsers
    }
    }
  }
  </script>