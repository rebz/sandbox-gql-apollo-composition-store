import Vue from 'vue'
import VueCompositionAPI, { provide } from '@vue/composition-api'
Vue.use(VueCompositionAPI)

import '@/sass/_index.scss'

import { DefaultApolloClient } from '@vue/apollo-composable'
import { createProvider } from './vue-apollo'
import { createStore } from '@/store'
import App from './App.vue'
import router from './router'

const apolloClient = createProvider()

Vue.config.productionTip = false

new Vue({
  router,
  setup () {
    provide(DefaultApolloClient, apolloClient.defaultClient)
    provide('store', createStore())
  },
  render: h => h(App)
}).$mount('#app')
