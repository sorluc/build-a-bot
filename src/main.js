import Vue from 'vue';
import App from './App.vue';
// global components use example
// import HomePage from './components/HomePage.vue';

Vue.config.productionTip = false;
// global components use example
// Vue.component('HomePage', HomePage);

new Vue({
  render: (h) => h(App),
}).$mount('#app');
