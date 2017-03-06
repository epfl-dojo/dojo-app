<template>
<!-- root node required -->
<div>
  <!-- label -->
  <div class="timeline-label">
    <h4>Archives</h4>
  </div>
  <div class="timeline">
     <archive-item :event='event' v-for="event in events"></archive-item>
  </div>
</div>
</template>

<script>
import ArchiveItem from './ArchiveItem'
export default {
  components: {ArchiveItem},
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
      })
    })
  }
}
</script>
