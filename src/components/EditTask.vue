<template>
  <v-dialog v-model="dialog" persistent max-width="500px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        class="warning"
        v-bind="attrs"
        v-on="on"
        outlined
        rounded
        @click="force"
      >
        <i class="fa-solid fa-pen-to-square"></i>
        <font-awesome-icon
          icon="fa-solid fa-pen-to-square fa-2x"
          size="2x"
          style="color: black"
        />
      </v-btn>
    </template>
    <v-card width="700">
      <v-card-title>
        <span v-if="task.done === true" class="text-h5">
          #{{ task.id }} - {{ user }} - {{ task.name }} - Completed
        </span>
        <span v-else-if="task.done === false" class="text-h5">
          #{{ task.id }} - {{ user }} - {{ task.name }} -Not completed
        </span>
        <span v-else class="text-h5">
          #{{ task.id }} - {{ user }} - {{ task.name }} -To do
        </span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-text-field label="Task" required v-model="name"></v-text-field>
              <p class="red--text">{{ message }}</p>
            </v-col>
          </v-row>
        </v-container>

        <v-btn
          v-if="d === false"
          class="success"
          outlined
          rounded
          @click="toggle"
        >
          <font-awesome-icon
            icon="fa-regular fa-square-check fa-2x"
            size="2x"
          />
        </v-btn>

        <v-btn v-if="d === true" class="error" outlined rounded @click="toggle">
          <font-awesome-icon
            icon="fa-regular fa-rectangle-xmark fa-2x"
            size="2x"
          />
        </v-btn>
        <span v-if="d === true" class="text-h5 black--text ms-2">
          #{{ task.id }} - {{ name }} - {{ user }} -Completed
        </span>
        <span v-else-if="d === false" class="text-h5 black--text ms-2">
          #{{ task.id }} - {{ name }} - {{ user }} -Not completed
        </span>
        <span v-else class="text-h5 black--text ms-2">
          #{{ task.id }} - {{ name }} - {{ user }} -To do
        </span>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="dialog = false">
          Close
        </v-btn>
        <v-btn color="blue darken-1" text @click="edit"> Save </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "EditTask",
  props: {
    task: {
      type: Object,
      default: () => ({
        id: 0,
        name: "",
        done: true,
        user_id: 0,
      }),
    },
  },
  data() {
    return {
      dialog: false,
      name: this.task.name,
      d: null,
      message: "",
    };
  },

  methods: {
    edit() {
      if (this.name.length > 0) {
        this.$store.dispatch("removeTask", this.task.id);
        this.$store.dispatch("addTask", {
          id: this.task.id,
          done: this.d,
          name: this.name,
          user_id: this.task.user_id,
        });
        this.dialog = false;
        this.message = "";
      } else this.message = "insert task name";
    },
    toggle() {
      this.d = !this.d;
    },
    force() {
      (this.d = this.task.done), this.$forceUpdate();
    },
  },
  computed: {
    done() {
      return this.task.done;
    },
    user() {
      return this.$store.getters.getUser(this.task.user_id).name;
    },
  },
};
</script>