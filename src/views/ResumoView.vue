<template>
  <!-- App.vue -->

  <v-app>
    <!-- Sizes your content based upon application components -->

    <!-- Provides the application the proper gutter -->
    <v-container style="height: 10%" fluid>
      <!-- If using vue-router -->
      <div>
        <v-card max-width="100%" max-height="100%" class="mx-auto">
          <v-system-bar color="blue darken-1" dark></v-system-bar>

          <v-app-bar dark color="blue">
            <v-toolbar-title>Meu Resumo</v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn icon>
              <v-icon>mdi-magnify</v-icon>
            </v-btn>
          </v-app-bar>

          <v-container>
            <v-row dense>
              <v-col cols="12">
                <v-card color="#385F73" dark>
                  <v-card-title class="text-h5">
                    Criar uma nova anotação ✍️
                  </v-card-title>

                  <v-card-subtitle
                    >Não perca mais nada, anote suas metas e seus deveres, mude
                    e deixe participarmos da sua evolução.</v-card-subtitle
                  >

                  <v-card-actions>
                    <v-btn outlined rounded @click="novaTarefa">
                      Nova anotação
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>

              <v-col v-for="(item, i) in items" :key="i" cols="12">
                <v-card :color="item.color" dark>
                  <div class="d-flex flex-no-wrap justify-space-between">
                    <div>
                      <v-card-title
                        class="text-h5"
                        v-text="item.title"
                      ></v-card-title>

                      <v-card-subtitle v-text="item.artist"></v-card-subtitle>

                      <v-card-actions>
                        <v-btn class="ml-2 mt-5" outlined rounded small>
                          Visualizar
                        </v-btn>
                      </v-card-actions>
                    </div>
                  </div>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
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
                <v-btn outlined rounded text @click="editTask(task)">
                  Editar
                </v-btn>
                <v-btn outlined rounded text @click="removeTask(task)">
                  Deletar
                </v-btn>
              </v-card-actions>
            </v-card>
          </div>
        </v-card>
      </div>
      <router-view></router-view>
    </v-container>

    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>

<script>
import TasksAPi from "@/TasksApi";
export default {
  data: () => ({
    value: 1,
    items: [
      {
        color: "#1F7087",
        title: "Favoritos ❤️",
        artist: "Suas anotações preferidas estão aqui 😍",
      },
      {
        color: "#952175",
        title: "Arquivados 📁",
        artist:
          "Aquelas metas que você já bateu e sente o mesmo orgulho que nós 🥺",
      },
    ],
    tasks: [],
  }),
  methods: {
    novaTarefa() {
      this.$router.push({ name: "addtarefa" });
    },
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
  },
  created() {
    this.getTasks();
  },
};
</script>
