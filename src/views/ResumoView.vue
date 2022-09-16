<template>
  <!-- App.vue -->
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <!--  -->
      <v-list-item-group
        v-model="group"
        active-class="blue--text text--accent-4"
      >
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-title @click="novaTarefa"
            >Nova Anotação ✍️</v-list-item-title
          >
        </v-list-item>

        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-star</v-icon>
          </v-list-item-icon>
          <v-list-item-title @click="listTasks(favoritos)"
            >Favoritos ❤️</v-list-item-title
          >
        </v-list-item>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-folder</v-icon>
          </v-list-item-icon>
          <v-list-item-title @click="listTasks(lista)"
            >Suas Tarefas 📁</v-list-item-title
          >
        </v-list-item>
      </v-list-item-group>
    </v-navigation-drawer>

    <v-app-bar app color="blue" dark>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <!--  -->
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    value: 1,
    tasks: [],
  }),
  methods: {
    novaTarefa() {
      this.$router.push({ name: "addtarefa" });
    },

    listTasks(name) {
      this.$router.push({ name: `${name}` });
    },
  },
};
</script>
