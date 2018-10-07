import Vue from 'vue'
import App from './App.vue'
import Vuelidate from 'vuelidate'
import VuelidateErrorExtractor, { templates } from "vuelidate-error-extractor";
Vue.use(Vuelidate)

Vue.config.productionTip = false
Vue.use(VuelidateErrorExtractor, {
  i18n: false,
  messages: {
    required: "{attribute} is required!",
    notGmail: "{attribute} must gmail address",
    notPhone: "{attribute} must phone number Indonesia format",
    email: "{attribute} is not a valid Email address.",
    isEmailAvailable:
      "{attribute} is not available. Must be at least 10 characters long."
  }
});

Vue.component("form-group", templates.singleErrorExtractor.foundation6);

new Vue({
  render: h => h(App)
}).$mount('#app')
