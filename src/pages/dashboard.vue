<template>
    <section>
        <pos-nav></pos-nav>
        <h1 class="title">Dashboard</h1>
        {{profile}}
    </section>
</template>
<script>
  import PosNav from '../components/common/navbar'
  export default {
    components: {
      PosNav
    },

    computed: {
      profile () {
        return this.$store.state.user.profile
      }
    }
  }
</script>
