<template>
  <div>
    <v-parallax
      height="1000"
      dark
      src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
    >
      <v-snackbar
        v-model="snackbar.show"
        :value="true"
        absolute
        left
        shaped
        top
      >
        {{ snackbar.message }}
      </v-snackbar>
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <h1 class="text-h2 font-weight-thin mb-4">To Do list</h1>
          <h4 class="text-h5">Guarde, Realize, Seja!</h4>
          <div class="text-center">
            <h1 class="text-center msg-login">Bem-vindo(a)!</h1>
            <v-icon color="grey lighten-1" large> mdi-account </v-icon>
          </div>

          <v-container>
            <form action="">
              <v-row no-gutters class="caixa-login">
                <v-col cols="1" sm="4" md="4">
                  <v-card class="pa-2" outlined tile
                    ><v-text-field
                      v-model="username"
                      :error-messages="nameErrors"
                      :counter="10"
                      label="Usuario"
                      required
                      @input="$v.user.$touch()"
                      @blur="$v.user.$touch()"
                      placeholder="Insira seu usuario"
                      prepend-icon="mdi-account-circle"
                    ></v-text-field>
                  </v-card>
                </v-col>
                <v-col cols="6" md="4">
                  <v-card class="pa-2" outlined tile
                    ><v-text-field
                      v-model="password"
                      :error-messages="passwordErrors"
                      @input="$v.password.$touch()"
                      @blur="$v.password.$touch()"
                      :type="showPassword ? 'text' : 'password'"
                      label="Senha"
                      placeholder="Insira sua senha"
                      prepend-icon="mdi-lock"
                      :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                      @click:append="showPassword = !showPassword"
                      required
                    />
                  </v-card>
                </v-col>
              </v-row>
              <v-row align="center" justify="space-around">
                <v-layout justify-center>
                  <v-btn
                    :loading="loading"
                    class="btn-login"
                    color="primary"
                    rounded
                    @click="submit"
                  >
                    Login
                  </v-btn>
                  <v-btn
                    class="justify-center"
                    color="primary"
                    rounded
                    @click="vaiParaRegistro"
                  >
                    Registrar-se
                  </v-btn>
                </v-layout>
              </v-row>
            </form>
          </v-container>
        </v-col>
      </v-row>
    </v-parallax>
  </div>
</template>

<script>
import AuthApi from "@/api/auth.api.js";
import { validationMixin } from "vuelidate";
import { required, maxLength, minLength } from "vuelidate/lib/validators";
export default {
  mixins: [validationMixin],
  name: "LoginView",
  validations: {
    username: { required, maxLength: maxLength(10) },
    password: { required, minLength: minLength(8) },
  },
  data: () => ({
    loading: false,
    valid: false,
    snackbar: {
      show: false,
      message: "",
    },
    password: "",
    username: "",
    selection: 1,
    showPassword: false,
  }),
  computed: {
    nameErrors() {
      const errors = [];
      if (!this.$v.username.$dirty) return errors;
      !this.$v.username.maxLength &&
        errors.push("Usu??rio deve ter, no m??nimo 10 caracteres");
      !this.$v.username.required && errors.push("Usu??rio necess??rio.");
      return errors;
    },
    passwordErrors() {
      const errors = [];
      if (!this.$v.password.$dirty) return errors;
      !this.$v.password.required && errors.push("Password is required.");
      return errors;
    },
  },
  methods: {
    vaiParaRegistro() {
      this.$router.push({ name: "registro" });
    },
    submit() {
      this.loading = true;
      AuthApi.login(this.username, this.password)
        .then((user) => {
          console.log("login ok", user);
          this.saveLoggedUser(user);
          this.$router.push({ name: "resumo" });
        })
        .catch((error) => {
          console.log("login falhou", error);
          this.snackbar.message = "Usuario ou senha invalida";
          this.snackbar.show = true;
        })
        .finally(() => {
          this.loading = false;
        });
    },
    saveLoggedUser(user) {
      window.localStorage.setItem("loggedUser", user.id);
      window.localStorage.setItem("loggedUserToken", user.token);
    },
  },
};
</script>
<style scoped>
.caixa-login {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: space-around;
  margin: auto;
}
.btn-login {
  margin-right: 13.5%;
}
.msg-login {
  margin-top: 10%;
}
</style>
