<template>
    <nav class="nav has-shadow">
        <div class="container">
            <div class="nav-left">
                <router-link :to="{ name: back_route }" class="nav-item">
                        <span class="icon">
                            <i class="fa fa-chevron-circle-left"></i>
                        </span>
                    <span> <strong>Home</strong></span>
                </router-link>
            </div>

            <div class="nav-center">
                <div class="nav-item"><strong v-text="nav_title"></strong></div>
            </div>
            <div class="nav-right"></div>
        </div>
    </nav>
</template>
<script>
  export default {
    props: {
      back_route: {
        type: String,
        default: 'dashboard'
      },
      nav_title: {
        type: String,
        default: ''
      }
    }
  }
</script>
<style scoped>
    .nav .container {
        color: white;
    }

    strong {
        color: white;
    }
</style>
