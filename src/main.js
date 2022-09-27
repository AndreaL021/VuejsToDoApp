import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faVault } from '@fortawesome/free-solid-svg-icons'
import { faRectangleXmark } from '@fortawesome/free-regular-svg-icons'
import { faSquareCheck } from '@fortawesome/free-regular-svg-icons'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faUpload } from '@fortawesome/free-solid-svg-icons'
import { faCircleLeft } from '@fortawesome/free-solid-svg-icons'
import { faCircleRight } from '@fortawesome/free-solid-svg-icons'

library.add(faVault, faRectangleXmark, faSquareCheck, faPenToSquare, faUpload, faCircleLeft, faCircleRight)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(VueAxios, axios)
Vue.config.productionTip = false


new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
