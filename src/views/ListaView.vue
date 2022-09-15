<template>
  <div>
    <v-card
      v-for="task in tasks"
      :key="task.id"
      class="mx-auto"
      max-width="344"
      outlined
    >
      <v-list-item three-line>
        <v-list-item-content>
          <div class="text-overline mb-4">{{ task.project }}</div>
          <v-list-item-title class="text-h5 mb-1">
            {{ task.title }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-card-actions>
        <v-btn
          class="mx-2 cor"
          fab
          dark
          small
          :color="task.active ? 'pink' : 'black'"
          @click="favorites(task)"
        >
          <v-icon dark> mdi-heart </v-icon>
        </v-btn>
        <v-btn outlined rounded text @click="editTask(task)"> Editar </v-btn>
        <v-btn outlined rounded text @click="removeTask(task)"> Deletar </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import TasksAPi from "@/TasksApi";
export default {
  data: () => ({
    active: false,
    tasks: [],
  }),
  methods: {
    getTasks() {
      TasksAPi.getTasks((data) => {
        this.tasks = data;
      });
    },
    removeTask(task) {
      TasksAPi.deleteTasks(task).then(() => {
        this.getTasks();
      });
    },
    editTask(task) {
      this.$router.push({ name: "edit", params: { id: task.id, task: task } });
    },
    favorites(task) {
      task.active = !task.active;
      console.log(task.active);
    },
  },
  created() {
    this.getTasks();
  },
};
</script>
