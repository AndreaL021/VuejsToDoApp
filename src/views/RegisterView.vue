<template>
  <v-form>
    <v-container>
      <h1 class="text-center">Registra utente</h1>
      <v-row class="d-flex justify-center">
        <v-col cols="4">
          <v-text-field 
            label="Nome"
            v-model="name"
          ></v-text-field>
          <div class="red--text">{{message}}</div>
        </v-col>
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn @click="add" class="align-self-center" icon dark v-bind="attrs" v-on="on">
            <v-icon color="success" large> mdi-content-save </v-icon>
          </v-btn>
        </template>
        <span>Salva</span>
      </v-tooltip>
      </v-row>
      <b>Utenti:</b>
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