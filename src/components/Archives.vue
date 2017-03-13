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
import axios from 'axios'
import hjson from 'hjson'
import ArchiveItem from './ArchiveItem'
export default {
  components: {ArchiveItem},
  data () {
    return {
      events: []
    }
  },
  created () {
    axios.get('https://rawgit.com/epfl-dojo/dojo-data/master/events.hjson')
    .then((response) => {
      console.log(response.data.events)
      let events = hjson.parse(response.data).events
      this.events = events.sort(function (a, b) {
        return b.dojoid - a.dojoid
      })
    })
  }
}
</script>
