import axios from 'axios'
import store from '../vuex/store'
import {router} from '../router'
import {clientId, clientSecret} from '../config'
import {getCompanyInfo} from '../api/common'

export default {
  user: {
    authenticated: true,
    profile: null
  },

  check () {
    if (window.localStorage.getItem('id_token') !== null) {
      axios.get(
        'api/v1/users/profile',
      ).then(response => {
        this.user.authenticated = true
        this.user.profile = response.data.data
        store.dispatch('setProfile', this.user.profile)
        this.redirectTo()
      })
        .catch(err => {
          console.log(err)
          if (err.body.error === 'token_invalid') {
            this.signout()
          }
        })
    } else {
      this.user.authenticated = false
      router.push({name: 'login'})
    }
  },

  loggedIn () {
    return this.user.authenticated
  },

  signin (context, email, password) {
    axios.post(
      'oauth/token',
      {
        username: email,
        password: password,
        grant_type: 'password',
        client_id: clientId,
        client_secret: clientSecret
      }
    ).then(response => {
      context.error = false
      window.localStorage.setItem('id_token', response.data.access_token)
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + window.localStorage.getItem('id_token')

      this.user.authenticated = true
      axios.get('api/v1/users/profile').then(resp => {
        this.user.profile = resp.data.data
        store.dispatch('setProfile', this.user.profile)
      })
      this.redirectTo()
    }, response => {
      context.error = true
    })
  },

  redirectTo () {
    this.getCompanyData()
    router.push({name: 'dashboard'})
  },

  signout () {
    window.localStorage.removeItem('id_token')
    this.user.authenticated = false
    this.user.profile = null
    store.dispatch('setProfile', null)
    router.push({name: 'login'})
  },

  getCompanyData () {
    getCompanyInfo()
      .then(resp => {
        store.dispatch('setCompany', resp.body.result)
      })
      .catch(err => {
        console.log(err.body)
      })
  }
}
