import Vue from 'vue'
import Vuelidate from 'vuelidate'
import VueMeta from 'vue-meta'
import Paginate from 'vuejs-paginate'
import dateFilter from '@/filters/date.filter'
import currencyFilter from '@/filters/currency.filter'
import localizeFilter from '@/filters/localize.filter'
import tooltipDirective from '@/directives/tooltip.directive'
import messagePlugin from '@/utils/message.plugin'
import titlePlugin from '@/utils/title.plugin'
import M from 'materialize-css'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import Loader from '@/components/app/Loader.vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'materialize-css/dist/js/materialize.min'

Vue.config.productionTip = false

Vue.use(M)
Vue.use(messagePlugin)
Vue.use(titlePlugin)
Vue.use(Vuelidate)
Vue.use(VueMeta)
Vue.filter('date', dateFilter)
Vue.filter('localize', localizeFilter)
Vue.filter('currency', currencyFilter)
Vue.directive('tooltip', tooltipDirective)
Vue.component('Loader', Loader)
Vue.component('Paginate', Paginate)

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
