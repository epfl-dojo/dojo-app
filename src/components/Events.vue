<template>
  <!-- root node required -->
  <div>
    <!-- your content -->
    <div class="timeline-label">
      <h4>Events</h4>
    </div>
    <div class="timeline">
       <dojo-time-line-item :event="event" v-for="event in events"></dojo-time-line-item>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import DojoTimeLineItem from './DojoTimeLineItem'
export default {
  components: {DojoTimeLineItem},
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
