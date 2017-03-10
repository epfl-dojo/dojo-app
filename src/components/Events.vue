<template>
  <!-- root node required -->
  <div>
    <!-- your content -->
    <div class="layout-padding">
      <!-- if you want automatic padding -->
      <img src="https://unsplash.it/392/220?image=739" class="responsive" /><br>
      Here comes the next dojo information
      <pre>{{ events }}</pre>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  data () {
    return {
      events: []
    }
  },
  created () {
    // TODO: Centralize the load of events in App.vue or even better in a vuex store
    this.$http.get('https://rawgit.com/epfl-dojo/dojo-data/master/events.hjson')
    .then((response) => {
      let events = this.$hjson.parse(response.data).events
      this.events = events.filter(function (i, n) {
        return moment(i.date) > moment()
      })
    })
  }
}
</script>
