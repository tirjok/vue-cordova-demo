<template>
    <div>
        <nav class="nav has-shadow">
            <div class="container">
                <div class="nav-left">
                    <router-link :to="{ name: 'dashboard' }" class="nav-item">
                        <span class="icon">
                            <i class="fa fa-chevron-circle-left"></i>
                        </span>
                        <span> <strong>Home</strong></span>
                    </router-link>
                </div>

                <div class="nav-center">
                    <div class="nav-item"><strong>Reports</strong></div>
                </div>
                <div class="nav-right"></div>
            </div>
        </nav>
    </div>
</template>
<script>
  export default {
    name: 'report-index'
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
