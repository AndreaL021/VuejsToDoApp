<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>

      <UserSelect/>
    </v-app-bar>
    

    <v-main>
      <nav class="text-center mt-5">
        <router-link to="/" class="mx-3">Register</router-link> 
        <router-link to="/home" class="mx-3">Home</router-link> 
        <router-link to="/albo" class="mx-3">Albo</router-link> 
        <router-link v-if="user!=-1 && tasks.length>0" to="/archive" class="mx-3">Completed</router-link> 
      </nav>
      <router-view />
    </v-main>

  </v-app>
</template>

<script>
import UserSelect from './components/UserSelect.vue'

export default {
  name: 'App',
  components:{
    UserSelect
  },
  computed:{
    user(){
      return this.$store.getters.getSelect
    },
    tasks(){
      return this.$store.getters.getArchive
    }
  }

};
</script>
