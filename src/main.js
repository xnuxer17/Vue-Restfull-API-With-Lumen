import Vue from "vue";
import App from "./App.vue";
//import Vue Router
import VueRouter from "vue-router";

//menggunkan Vue Router di Vue JS
Vue.use(VueRouter);

//import bootstrap css & js
import "bootstrap/dist/css/bootstrap.css";
import "jquery/dist/jquery.min";
import "popper.js/dist/popper.min";
import "bootstrap/dist/js/bootstrap.min";

//import components
import Lifecycle from "./components/LifeCycle";
import Template from "./components/Template";
import Properti from "./components/Properti";
import Directive from "./components/Directive";
import Index from "./components/Index";
import Form from "./components/Form";
import Filtering from "./Latihan/Filtering";
import Handle from "./Latihan/HandleSubmit";
import Home from "./views/Home";
import User from "./views/User";

Vue.config.productionTip = false;

const router = new VueRouter({
  routes: [
    {
      path: "/",
      name: "index",
      component: Index,
    },
    {
      path: "/home",
      name: "home",
      component: Home,
    },
    {
      path: "/user/:id",
      name: "User",
      component: User,
    },
    {
      path: "/lifecycle",
      name: "lifecycle",
      component: Lifecycle,
    },
    {
      path: "/template",
      name: "template",
      component: Template,
    },
    {
      path: "/properti",
      name: "properti",
      component: Properti,
    },
    {
      path: "/directive",
      name: "directive",
      component: Directive,
    },
    {
      path: "/form",
      name: "form",
      component: Form,
    },
    {
      path: "/filtering",
      name: "filtering",
      component: Filtering,
    },
    {
      path: "/handle",
      name: "handle",
      component: Handle,
    },
  ],
  mode: "history",
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
