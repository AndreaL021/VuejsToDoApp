<template>
  <v-app-bar app color="dark" dark>
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

    <v-spacer />
    <v-spacer />
    <v-spacer />

    <router-link to="/" class="mx-3">Registra</router-link>
    <v-divider vertical />
    <router-link to="/home" class="mx-3">Home</router-link>
    <v-divider vertical />
    <router-link to="/albo" class="mx-3">Albo</router-link>
    <v-divider v-if="user != -1 && tasks.length > 0" vertical />
    <router-link
      v-if="user != -1 && tasks.length > 0"
      to="/archive"
      class="mx-3"
      >Completate</router-link
    >

    <v-spacer v-if="users.length > 1" />
    <v-spacer v-if="users.length > 1" />
    <div v-if="users.length > 1" class="d-flex align-center mt-3">
      <p class="white--text mr-5">Utente:</p>
      <v-autocomplete
        @change="select"
        v-model="selected"
        :items="users"
        item-text="name"
        item-value="id"
      />
    </div>
  </v-app-bar>
</template>

<script>
export default {
  name: "MyNavbar",

  data() {
    return {
      selected: 0,
    };
  },
  methods: {
    select() {
      this.$store.dispatch("changeSelect", this.selected);
    },
  },
  computed: {
    users() {
      return this.$store.getters.getUsers;
    },
    user() {
      return this.$store.getters.getSelect;
    },
    tasks() {
      return this.$store.getters.getArchive;
    },
  },
  mounted(){
    this.select();
  }
};
</script>