<template>
    <section class="hero is-fullheight is-dark is-bold">
        <div class="hero-body">
            <div class="container">
                <div class="columns is-vcentered">
                    <div class="column is-4 is-offset-4">
                        <h1 class="title">
                            {{ loading ? 'Loading...' : 'Login' }}
                        </h1>

                        <div class="notification is-danger" v-if="error">
                            <button class="delete" @click="error = false"></button>
                            There was an error, unable to sign in with those credentials.
                        </div>

                        <div class="box" v-if="!loading">
                            <form autocomplete="off" @submit.prevent="signin">
                                <label class="label">Email</label>
                                <p class="control">
                                    <input class="input" v-focus type="text" placeholder="jsmith@example.org"
                                           v-model="email">
                                </p>
                                <label class="label">Password</label>
                                <p class="control">
                                    <input class="input" type="password" placeholder="Password" v-model="password">
                                </p>
                                <hr>
                                <p class="control">
                                    <button type="submit" class="button is-primary">Login</button>
                                </p>
                            </form>
                        </div>
                        <p class="has-text-centered is-hidden">
                            <a href="#">Forgot password</a>
                            |
                            <a href="#">Need help?</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
  import auth from '../../services/auth'

  export default {
    name: 'login',

    data () {
      return {
        email: null,
        password: null,
        error: false,
        loading: true
      }
    },

    beforeMount () {
      this.check()
    },

    methods: {
      signin () {
        auth.signin(this, this.email, this.password)
      },

      check () {
        console.log(auth.loggedIn())
        if (!auth.loggedIn()) {
          this.loading = false
        } else {
          this.$router.push({name: 'dashboard'})
        }
      }
    }
  }
</script>
