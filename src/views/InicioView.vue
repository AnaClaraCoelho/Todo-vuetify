<template>
  <div>
    <div>
      <v-parallax
        dark
        height="1010"
        src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
      >
        <v-row class="texto-parallax" align="center" justify="center">
          <v-col class="text-center" cols="6">
            <h1 class="text-h2 font-weight-thin mb-6">To Do list</h1>
            <h4 class="text-h5 subheading">Guarde, Realize, Seja!</h4>
          </v-col>
        </v-row>
        <v-layout justify-space-around align-start>
          <v-btn
            class=""
            color="white"
            elevation="20"
            absolute
            outlined
            x-large
            @click="vaiParaLogin"
            >Iniciar</v-btn
          >
        </v-layout>
      </v-parallax>
    </div>
  </div>
</template>

<script>
export default {
  name: "InicioView",
  data: () => ({}),
  methods: {
    vaiParaLogin() {
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped>
.texto-parallax {
  margin-bottom: 10%;
}
</style>
