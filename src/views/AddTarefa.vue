<template>
  <div>
    <font-awesome-icon icon="spinner" />
    <!-- area do botao de logout -->
    <v-layout justify-end>
      <v-btn class="margem" color="primary" @click="voltaParaLogin">
        Logout
      </v-btn>
    </v-layout>
    <!-- fim botao logout -->

    <!--INICIO ITEM DE ANOTAÇOES -->
    <v-layout justify-center>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-row>
          <v-col cols="40">
            <v-text-field
              v-model="title"
              :counter="40"
              :rules="titleRules"
              label="Titulo"
              color="orange orange-darken-4"
              required
            ></v-text-field>

            <v-textarea
              v-model="conteudo"
              :rules="conteudoRules"
              label="Conteúdo"
              color="orange orange-darken-4"
              required
            ></v-textarea>

            <v-text-field
              v-model="data"
              :counter="40"
              label="Data"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-btn :disabled="valid" color="success" class="mr-4" @click="validate">
          Salvar
        </v-btn>

        <v-btn color="error" class="mr-4" @click="reset"> Excluir </v-btn>

        <v-btn color="warning" @click="resetValidation"> Editar </v-btn>
      </v-form>
    </v-layout>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  data: () => ({
    loading: false,
    selection: 1,
    valid: true,
    title: "",
    titleRules: [(v) => !!v || "É preciso escrever um titulo!"],
    conteudo: "",
    conteudoRules: [(v) => !!v || "É preciso escrever algo"],
    data: new Date.toString(),
  }),
};
</script>
<style scoped>
.margem {
  margin-right: 15px;
  margin-top: 20px;
}
.criar-tarefa {
  margin-right: 50%;
}
</style>
