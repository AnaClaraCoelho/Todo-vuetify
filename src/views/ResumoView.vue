<template>
  <v-app>
    <v-app-bar app>
      <!-- -->
      <v-toolbar
        max-height="100%"
        max-width="100%"
        dark
        src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
      >
        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-toolbar-title>Vuetify</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-export</v-icon>
        </v-btn>
      </v-toolbar>
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container>
        <!-- If using vue-router -->
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
                    <v-btn text @click="novaTarefa"> Nova anotação </v-btn>
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
                        <v-btn
                          v-if="item.artist === 'Ellie Goulding'"
                          class="ml-2 mt-3"
                          fab
                          icon
                          height="40px"
                          right
                          width="40px"
                        >
                          <v-icon>mdi-play</v-icon>
                        </v-btn>

                        <v-btn v-else class="ml-2 mt-5" outlined rounded small>
                          Visualizar
                        </v-btn>
                      </v-card-actions>
                    </div>

                    <v-avatar class="ma-3" size="125" tile>
                      <v-img :src="item.src"></v-img>
                    </v-avatar>
                  </div>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>

<script>
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
  }),
  methods: {
    novaTarefa() {
      this.$router.push("/addtarefa");
    },
  },
};
</script>
Footer
