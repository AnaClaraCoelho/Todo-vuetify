import Vue from "vue";
import VueRouter from "vue-router";
import AddTarefa from "../views/AddTarefa.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/addtarefa",
    name: "AddTarefa",
    component: AddTarefa,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/LoginView.vue"),
  },
  {
    path: "/inicio",
    name: "inicio",
    component: () => import("../views/InicioView.vue"),
  },
  {
    path: "/registro",
    name: "registro",
    component: () => import("../views/RegistroView.vue"),
  },
  {
    path: "/resumo",
    name: "resumo",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ResumoView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
