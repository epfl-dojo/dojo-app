<template>
<!-- root node required -->
<div>
  <!-- label -->
  <div class="timeline-label">
    <h4>Archives</h4>
  </div>
  <div class="timeline">
     <dojo-time-line-item :event="event" v-for="event in events"></dojo-time-line-item>
  </div>
</div>
</template>

<script>
import moment from 'moment'
import DojoTimeLineItem from './partials/DojoTimeLineItem'
export default {
  components: {DojoTimeLineItem},
  data () {
    return {
      events: []
    }
  },
  created () {
    this.$http.get('https://rawgit.com/epfl-dojo/dojo-data/master/events.hjson')
    .then((response) => {
      let events = this.$hjson.parse(response.data).events
      this.events = events.sort(function (a, b) {
        return b.dojoid - a.dojoid
      }).filter(function (i) {
        return moment(i.date).format('YYYY-MM-DD') <= moment().format('YYYY-MM-DD')
      })
    })
  }
}
</script>
