<template>
    <nav class="nav has-shadow">
        <div class="container">
            <div class="nav-left">
                <a class="nav-item">
                    <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma logo">
                </a>
            </div>

            <label for="menu-toggle" class="nav-toggle">
                <span></span>
                <span></span>
                <span></span>
            </label>
            <input type="checkbox" id="menu-toggle" class="is-hidden"/>

            <div class="nav-right nav-menu">
                <a v-if="profile" class="nav-item" v-text="profile.name">
                    About
                </a>
                <router-link :to="{ name: 'reports-dashboard' }" class="nav-item">
                    Reports
                </router-link>
                <a class="nav-item" @click="signout">
                    Log-out
                </a>
            </div>
        </div>
    </nav>
</template>
<script>
  import auth from '../../services/auth'
  import * as authHelper from '../../helpers/authHelper'
  export default {
    beforeCreate () {
      auth.check()
    },

    computed: {
      isAdmin () {
        return authHelper.isAdmin(this.$store.state.user.roles)
      },

      profile () {
        return this.$store.state.user.profile
      }
    },

    methods: {
      signout () {
        auth.signout()
      }
    }
  }
</script>
<style>
    @media screen and (max-width: 768px) {
        #menu-toggle:checked + .nav-menu {
            display: block;
        }
    }

    .nav {
        background: none;
        padding-top: 10px;
    }
</style>
