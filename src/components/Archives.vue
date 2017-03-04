<template>
<!-- root node required -->
<div>
  <!-- label -->
  <div class="timeline-label">
    <h4>Archives</h4>
  </div>
  <div class="timeline">
     <archive-item :archives='archives'></archive-item>
  </div>
</div>
</template>

<script>
import axios from 'axios'
import ArchiveItem from './ArchiveItem'
export default {
  components: {ArchiveItem},
  data () {
    return {
      archives: [],
      events: []
    }
  },
  created () {
    axios.get('https://raw.githubusercontent.com/epfl-dojo/dojo-data/master/src/archives.json')
    .then((response) => {
      this.archives = response.data.archives
    })
    axios.get('https://raw.githubusercontent.com/epfl-dojo/dojo-data/master/src/events.json')
    .then((response) => {
      console.log(response.data)
      this.events = response.data.events
    })
  }
}
</script>
