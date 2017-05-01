<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Vue from 'vue'
import store from 'src/vuex/store'

export default {
  store,
  methods: {
    pluginEnabled: function (pluginName) {
      return this.cordova.plugins.indexOf(pluginName) !== -1
    }
  },
  data: function () {
    return {
      cordova: Vue.cordova,
      plugins: {
        'cordova-plugin-camera': function () {
          if (!Vue.cordova.camera) {
            window.alert('Vue.cordova.camera not found !')
            return
          }
          Vue.cordova.camera.getPicture((imageURI) => {
            window.alert('Photo URI : ' + imageURI)
          }, (message) => {
            window.alert('FAILED : ' + message)
          }, {
            quality: 50,
            destinationType: Vue.cordova.camera.DestinationType.FILE_URI
          })
        },
        'cordova-plugin-device': function () {
          if (!Vue.cordova.device) {
            window.alert('FAILED : device information not found')
          } else {
            window.alert('Device : ' + Vue.cordova.device.manufacturer + ' ' + Vue.cordova.device.platform + ' ' + Vue.cordova.device.version)
          }
        },
        'cordova-plugin-geolocation': function () {
          if (!Vue.cordova.geolocation) {
            window.alert('Vue.cordova.geolocation not found !')
            return
          }
          Vue.cordova.geolocation.getCurrentPosition((position) => {
            window.alert('Current position : ' + position.coords.latitude + ',' + position.coords.longitude)
          }, (error) => {
            window.alert('FAILED Error #' + error.code + ' ' + error.message)
          }, {
            timeout: 1000,
            enableHighAccuracy: true
          })
        },
        'cordova-plugin-contacts': function () {
          if (!Vue.cordova.contacts) {
            window.alert('Vue.cordova.contacts not found !')
            return
          }
          const ContactFindOptions = ContactFindOptions || function () {}
          Vue.cordova.contacts.find(['displayName'], (contacts) => {
            window.alert('Contacts found : ' + contacts.length)
          }, (error) => {
            window.alert('FAILED : ' + error.code)
          })
        }
      }
    }
  }
}
</script>
