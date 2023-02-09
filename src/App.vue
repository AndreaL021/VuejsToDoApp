<template>
  <v-app>
    <Navbar/>

    <v-main>
      <router-view />
    </v-main>

  </v-app>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {

  name: 'App',

  data() {
    return {};
  },
  components:{
    Navbar
  },
  computed:{}

};
</script>
<style>
a{text-decoration: none;}
a:hover{color: limegreen;}
</style>