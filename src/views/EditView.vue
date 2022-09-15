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
              v-model="newTask.title"
              :counter="40"
              :rules="titleRules"
              label="Titulo"
              color="orange orange-darken-4"
              required
            ></v-text-field>

            <v-select
              v-model="newTask.project"
              :rules="conteudoRules"
              label="Projeto"
              color="orange orange-darken-4"
              required
              :items="['Estudos', 'Financeiro', 'Trabalho']"
            >
            </v-select>

            <v-col cols="12" sm="6" md="4">
              <v-dialog
                ref="dialog"
                v-model="modal"
                :return-value.sync="date"
                persistent
                width="300px"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="date"
                    label="Picker in dialog"
                    prepend-icon="mdi-calendar"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker v-model="newTask.dueTo" scrollable>
                  <v-spacer></v-spacer>
                  <v-btn text color="primary" @click="modal = false">
                    Cancel
                  </v-btn>
                  <v-btn text color="primary" @click="$refs.dialog.save(date)">
                    OK
                  </v-btn>
                </v-date-picker>
              </v-dialog>
            </v-col>
          </v-col>
        </v-row>

        <v-btn color="error" class="mr-4" @click="voltar"> Voltar </v-btn>

        <v-btn color="warning" @click="reset" class="mr-4"> Limpar </v-btn>
        <v-btn :disabled="false" color="success" class="mr-4" @click="editTask">
          Editar
        </v-btn>
      </v-form>
    </v-layout>
  </div>
</template>

<script>
import TasksApi from "@/TasksApi";
export default {
  data: () => ({
    valid: true,
    titleRules: [(v) => !!v || "É preciso escrever um titulo!"],
    conteudoRules: [(v) => !!v || "É preciso escrever algo"],
    newTask: {
      title: "",
      project: "",
      dueTo: "",
    },
    date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substr(0, 10),
    menu: false,
    modal: false,
    menu2: false,
  }),
  methods: {
    reserve() {
      this.loading = true;
      setTimeout(() => (this.loading = false), 2000);
    },
    voltaParaLogin() {
      this.$router.push({ name: "login" });
    },
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },

    voltar() {
      this.$router.push({ name: "resumo" });
    },
    editTask() {
      TasksApi.updateTask(this.$route.params.id, this.newTask);
      this.$router.push({ name: "resumo" });
    },
  },
  created() {
    this.newTask = this.$route.params.task || "";
  },
};
</script>
