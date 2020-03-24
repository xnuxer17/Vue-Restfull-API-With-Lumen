import Vue from 'vue'
import App from './App.vue'
//import Vue Router
import VueRouter from 'vue-router'

//menggunkan Vue Router di Vue JS
Vue.use(VueRouter);

//import components
import PostsIndex from './components/posts/Index'
import PostsCreate from './components/posts/Create'
import PostsEdit from './components/posts/Edit'

Vue.config.productionTip = false

const router = new VueRouter({
  routes: [{
      path: '/',
      name: 'posts',
      component: PostsIndex
    },
    {
      path: '/create',
      name: 'create',
      component: PostsCreate
    },
    {
      path: '/edit/:id',
      name: 'edit',
      component: PostsEdit
    }
  ],
  mode: 'history'
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')