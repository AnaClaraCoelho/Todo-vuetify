<template>
  <v-form v-model="valid">
    <v-container>
      <v-row class="d-flex flex-column align-center">
        <v-col cols="12" md="4">
          <v-text-field
            v-model="Usuario"
            :rules="regrasUser"
            :counter="10"
            label="Nome de usuario"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field
            type="password"
            v-model="Senha"
            :rules="passwordRules"
            :counter="10"
            label="Senha"
            required
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
export default {
  name: "RegistroView",
  data: () => ({
    valid: false,
    Usuario: "",
    regrasUser: [
      (v) => !!v || "É obrigatório ter um nome de usuario",
      (v) => v.length <= 10 || "O nome não pode ultrapassar 10 caracteres!",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "É obrigatório ter um E-mail",
      (v) => /.+@.+/.test(v) || "O E-mail não é valido",
    ],
    Senha: "",
    passwordRules: [
      (v) => v.length >= 8 || "A senha precisa conter entre 8 e 10 caracteres",
    ],
  }),
};
</script>
