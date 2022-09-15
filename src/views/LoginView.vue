<template>
  <div>
    <v-parallax
      height="1000"
      dark
      src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
    >
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
                      v-model="user"
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
import { validationMixin } from "vuelidate";
import { required, maxLength, minLength } from "vuelidate/lib/validators";
export default {
  mixins: [validationMixin],
  name: "LoginView",
  validations: {
    user: { required, maxLength: maxLength(10) },
    password: { required, minLength: minLength(8) },
  },
  data: () => ({
    password: "",
    user: "",
    loading: false,
    selection: 1,
    showPassword: false,
  }),
  computed: {
    nameErrors() {
      const errors = [];
      if (!this.$v.user.$dirty) return errors;
      !this.$v.user.maxLength &&
        errors.push("Usuário deve ter, no mínimo 10 caracteres");
      !this.$v.user.required && errors.push("Usuário necessário.");
      return errors;
    },
    passwordErrors() {
      const errors = [];
      if (!this.$v.password.$dirty) return errors;
      !this.$v.password.minLength &&
        errors.push("Password must be at most 8 characters long");
      !this.$v.password.required && errors.push("Password is required.");
      return errors;
    },
  },
  methods: {
    vaiParaRegistro() {
      this.$router.push({ name: "registro" });
    },
    submit() {
      this.$v.$touch();
      if (!this.user == "" && !this.password == "") {
        this.$router.push({ name: "resumo" });
      }
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
