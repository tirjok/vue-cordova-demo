import 'bulma/css/bulma.css'
import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'
import Router from 'vue-router'
import axios from 'axios'
import App from './App'
import auth from './services/auth'

Vue.use(Router)
import VueCordova from 'vue-cordova'
Vue.use(VueCordova, {
  optionTestKey: 'optionTestValue'
})

// add cordova.js only if serving the app through file://
if (window.location.protocol === 'file:' || window.location.port === '3000') {
  var cordovaScript = document.createElement('script')
  cordovaScript.setAttribute('type', 'text/javascript')
  cordovaScript.setAttribute('src', 'cordova.js')
  document.body.appendChild(cordovaScript)
}
Vue.directive('focus', {
  // When the bound element is inserted into the DOM...
  inserted: function (el) {
    // Focus the element
    el.focus()
  }
})

import {router} from './router'
import {baseUrl} from './config'

axios.defaults.headers.common['Authorization'] = 'Bearer ' + window.localStorage.getItem('id_token')
axios.defaults.baseURL = baseUrl

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!auth.loggedIn()) {
      next({
        name: 'login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next() // make sure to always call next()!
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  data: function () {
    return {
      cordova: Vue.cordova
    }
  }
})
