<template>
  <v-form>
    <v-container>
      <h1 class="text-center">Task completate</h1>
      <v-row justify="center" class="my-3">
        <v-col cols="4">
          <v-autocomplete
            @change="search"
            v-model="selected"
            :items="users"
            item-text="name"
            item-value="id"
          />
        </v-col>
      </v-row>

      <v-row class="d-flex justify-center">
        <v-col cols="4">
          <v-text-field label="Search" v-model="name"></v-text-field>
        </v-col>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="search"
              class="align-self-center"
              icon
              dark
              v-bind="attrs"
              v-on="on"
            >
              <v-icon color="success" large> mdi-magnify </v-icon>
            </v-btn>
          </template>
          <span>Cerca</span>
        </v-tooltip>
      </v-row>
      <Card
        @getUserTasks="getTasks($event)"
        v-for="task in tasks"
        :key="task.id"
        :task="task"
      />
    </v-container>
  </v-form>
</template>

<script>
import Card from "../components/ArchiveCard.vue";

export default {
  name: "ArchiveView",
  data() {
    return {
      selected: null,
      name: "",
      tasks: [],
      totTasks: [],
      userTasks: [],
    };
  },
  components: {
    Card,
  },
  methods: {
    getTasks() {
      this.totTasks = this.$store.getters.getArchive;
      this.tasks = this.totTasks;
    },
    search() {
      this.tasks = [];
      this.userTasks = [];
      if (this.selected != null) {
        this.totTasks.forEach((t) => {
          if (t.user_id === this.selected) {
            this.userTasks.push(t);
          }
        });
      }
      if (this.userTasks.length > 0) {
        if (this.name != "") {
          for (let i = 0; i < this.userTasks.length; i++) {
            if (this.userTasks[i].name.includes(this.name))
              this.tasks.push(this.userTasks[i]);
          }
          console.log(this.tasks);
        } else {
          this.tasks = Array.from(this.userTasks);
        }
      } else {
        for (let i = 0; i < this.totTasks.length; i++) {
          if (this.totTasks[i].name.includes(this.name))
            this.tasks.push(this.totTasks[i]);
        }
      }
    },
  },
  mounted() {
    this.getTasks();
  },
  computed: {
    users() {
      return this.$store.getters.getUsers;
    },
    select() {
      return this.$store.getters.getArchiveSelect();
    },
  },
};
</script>

    