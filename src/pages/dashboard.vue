<template>
    <div class="container is-fluid">
        <pos-nav></pos-nav>

        <section class="section">
            <div class="tile is-ancestor">
                <a class="tile is-parent">
                    <article class="tile is-child notification is-danger has-text-centered stat-tile">
                        <p class="title" v-text="counts.get('low_inventory')"></p>
                        <p class="subtitle"><i class="fa fa-battery-1"></i> LOW INVENTORY</p>
                    </article>
                </a>


                <a class="tile is-parent">
                    <article class="tile is-child notification is-primary has-text-centered stat-tile">
                        <p class="title" v-text="counts.get('total_items')"></p>
                        <p class="subtitle"><i class="fa fa-cubes"></i> ITEMS</p>
                    </article>
                </a>

                <a class="tile is-parent" v-if="isAdmin">
                    <article class="tile is-child notification is-warning has-text-centered stat-tile">
                        <p class="title" v-text="counts.get('total_sales')"></p>
                        <p class="subtitle"><i class="fa fa-shopping-cart"></i> TOTAL SALES</p>
                    </article>
                </a>

                <div class="tile is-parent" v-if="isAdmin">
                    <a
                                 class="tile is-child notification is-info has-text-centered stat-tile">
                        <p class="title" v-text="counts.get('total_customers')">212</p>
                        <p class="subtitle"><i class="fa fa-users"></i> CUSTOMERS</p>
                    </a>
                </div>
            </div>

            <div class="tile is-ancestor">
                <a class="tile is-parent">
                    <article class="tile is-child notification  is-primary has-text-centered stat-tile">
                        <p class="title" v-text="counts.get('total_receivings')"></p>
                        <p class="subtitle"><i class="fa fa-battery-1"></i> RECEIVING</p>
                    </article>
                </a>


                <a
                        :to="{name: 'items', params: {date_from: helper.expireDate().today, date_to: helper.expireDate().next_2_week_date}}"
                        class="tile is-parent">
                    <article class="tile is-child notification is-danger has-text-centered stat-tile">
                        <p class="title" v-text="counts.get('exp_inventory')"></p>
                        <p class="subtitle"><i class="fa fa-cubes"></i> EXP NEXT</p>
                    </article>
                </a>

            </div>
        </section>
    </div>
</template>
<script>
  import PosNav from '../components/common/navbar'
  import axios from 'axios'
  import * as authHelper from '../helpers/authHelper'
  import commonHelper from '../helpers/common'

  class Counts {
    constructor () {
      this.counts = {}
    }

    get (key) {
      if (this.counts[key]) {
        return this.counts[key]
      }

      return 0
    }

    record (counts) {
      this.counts = counts
    }

    clear () {
      this.counts = {}
    }
  }

  export default {
    components: {
      PosNav
    },

    data () {
      return {
        counts: new Counts(),
        helper: commonHelper
      }
    },

    computed: {
      isAdmin () {
        return authHelper.isAdmin(this.$store.state.user.roles)
      }
    },

    created () {
      this.getCounts()
    },

    methods: {
      getCounts: function () {
        axios.get('api/v1/counts/dashboard')
          .then(response => {
            this.counts.record(response.data.data)
          })
          .catch(err => {
            window.alert(err)
            this.counts.clear()
          })
      }
    }
  }
</script>
