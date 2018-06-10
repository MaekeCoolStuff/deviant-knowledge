import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue';
import Snippets from './components/Snippets.vue';
import Questions from './components/Questions.vue';

import "./assets/sass/main.scss";

Vue.config.productionTip = false
Vue.use(VueRouter);

const routes = [
  { path: '/', component: Snippets },
  { path: '/snippets', component: Snippets },
  { path: '/questions', component: Questions }
];

const router = new VueRouter({
  routes: routes
});

new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app')

//render: h => h(App)