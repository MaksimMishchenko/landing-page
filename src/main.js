import Vue from 'vue'
import Vuelidate from 'vuelidate/src'
import VueTelInput from 'vue-tel-input'
import 'vue-tel-input/dist/vue-tel-input.css'
import App from './App.vue'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

Vue.use(Vuelidate)
Vue.use(VueTelInput)

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
