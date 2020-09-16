import Vue from 'vue'
import Vuelidate from 'vuelidate'
import dateFilter from '@/filters/date.filter'
import messagePlugin from '@/utils/message.plugin'
import M from 'materialize-css'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'materialize-css/dist/js/materialize.min'

Vue.config.productionTip = false

Vue.use(M)
Vue.use(messagePlugin)
Vue.use(Vuelidate)
Vue.filter('date', dateFilter)

firebase.initializeApp({
  apiKey: 'AIzaSyA48aJ1TGr5QvqcLkgFsCU_vyJk4dfiKWQ',
  authDomain: 'vue-crm-mg.firebaseapp.com',
  databaseURL: 'https://vue-crm-mg.firebaseio.com',
  projectId: 'vue-crm-mg',
  storageBucket: 'vue-crm-mg.appspot.com',
  messagingSenderId: '754791876484',
  appId: '1:754791876484:web:da11406996cb50d1b93fd1'
})

let app

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: (h) => h(App),
    }).$mount('#app')
  }
})
