<template>
  <v-form v-model="valid">
    <v-container>
      <v-row class="d-flex flex-column align-center">
        <v-col cols="12" md="4">
          <v-text-field
            v-model="usuario"
            :rules="regrasUser"
            :counter="10"
            label="Nome de usuario"
            required
            @input="$v.usuario.$touch()"
            @blur="$v.usuario.$touch()"
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
            @input="$v.email.$touch()"
            @blur="$v.email.$touch()"
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field
            type="password"
            v-model="senha"
            :rules="passwordRules"
            :counter="10"
            label="Senha"
            required
            @input="$v.senha.$touch()"
            @blur="$v.senha.$touch()"
          ></v-text-field>
        </v-col>
        <v-btn class="justify-center" color="primary" rounded @click="submit">
          Registrar-se
        </v-btn>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, maxLength, minLength } from "vuelidate/lib/validators";
export default {
  mixins: [validationMixin],
  name: "RegistroView",
  validations: {
    usuario: { required, maxLength: maxLength(10) },
    senha: { required, minLength: minLength(8) },
    email: { required },
  },
  data: () => ({
    valid: false,
    usuario: "",
    regrasUser: [
      (v) => !!v || "É obrigatório ter um nome de usuario",
      (v) => v.length <= 10 || "O nome não pode ultrapassar 10 caracteres!",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "É obrigatório ter um E-mail",
      (v) => /.+@.+/.test(v) || "O E-mail não é valido",
    ],
    senha: "",
    passwordRules: [
      (v) => v.length >= 8 || "A senha precisa conter entre 8 e 10 caracteres",
    ],
  }),
  methods: {
    submit() {
      this.$v.$touch();
      if (!this.usuario == "" || !this.senha == "" || !this.email == "") {
        this.$router.push({ name: "login" });
      }
    },
  },
};
</script>
