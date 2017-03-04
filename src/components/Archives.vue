<template>
<!-- root node required -->
<div>
  <!-- label -->
  <div class="timeline-label">
    <h4>Archives</h4>
  </div>
  <div class="timeline">
     <archive-item :archive='archive' v-for="archive in archives"></archive-item>
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
      archives: []
    }
  },
  created () {
    axios.get('https://raw.githubusercontent.com/epfl-dojo/dojo-data/master/src/archives.json')
    .then((response) => {
      console.log(response.data.archives)
      this.archives = response.data.archives.sort(function (a, b) {
        return b.dojoid - a.dojoid
      })
    })
  }
}
</script>
