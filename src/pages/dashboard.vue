<template>
    <div class="container is-fluid">
        <pos-nav></pos-nav>

        <div class="event-timeline">
            <article class="media">
                <figure class="media-left">
                    <p class="image is-48x48 avatar">
                        <img src="http://bulma.io/images/placeholders/48x48.png">
                    </p>
                </figure>
                <div class="media-content">
                    <div class="content">
                        <h1 class="title is-4" v-text="company.business_name">
                            Superhero Scaffolding
                        </h1>
                    </div>
                </div>
            </article>

        </div>

        <section style="padding-top: 50px">
            <div class=" event-timeline">
                <p class="event-item">
                    <span class="icon"><i class="fa fa-cubes"></i></span>
                    <strong class="event-item-title">ITEMS</strong>
                    <strong class="pull-right" v-text="counts.get('total_items')">0</strong>
                </p>

                <p class="event-item">
                    <span class="icon"><i class="fa fa-battery-1"></i></span>
                    <strong class="event-item-title">LOW INVENTORY</strong>
                    <strong class="pull-right" v-text="counts.get('low_inventory')">0</strong>
                </p>

                <p class="event-item" v-if="isAdmin">
                    <span class="icon"><i class="fa fa-shopping-cart"></i></span>
                    <strong class="event-item-title">Total Sales</strong>
                    <strong class="pull-right" v-text="counts.get('total_sales')">0</strong>
                </p>

                <p class="event-item" v-if="counts.get('exp_inventory') > 0">
                    <span class="icon"><i class="fa fa-exclamation-triangle"></i></span>
                    <strong class="event-item-title">Expire Next</strong>
                    <strong class="pull-right" v-text="counts.get('exp_inventory')">0</strong>
                </p>
            </div>
        </section>

        <section class="event-timeline">
            <p class="has-text-centered" style="padding-top: 40px">
                <a class="button is-primary is-medium is-fullwidth">
                    Manage Plan
                </a>
            </p>
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
      },

      company () {
        return this.$store.state.user.company
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

<style>
    .event-timeline {
        margin: 10px;
    }
    p.event-item {
        padding: 10px 10px 10px 0;
        border-bottom: 1px solid #f1f1f1;
    }

    .event-item-title {
        margin: 0 15px;
        text-transform: uppercase;
    }
</style>
