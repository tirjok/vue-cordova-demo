<template>
    <div>
        <topbar :nav_title="'Reports'"></topbar>
    </div>
</template>
<script>
  import Topbar from '../../components/common/topbar.vue'
  export default {
    name: 'report-index',
    components: {
      Topbar
    }
  }
</script>
