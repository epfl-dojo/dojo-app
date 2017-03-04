<template>
<!-- root node required -->
<div>
  <!-- item -->
  <div class="timeline-item" v-for="archive in archives">
    <div class="timeline-badge">
      <!-- badge with avatar -->
      <img src="~assets/dojo.png" />
    </div>
    <!-- title -->
    <div class="timeline-title">
      Dojo #{{ archive.dojoid }}
    </div>

    <div class="card">
      <div class="card-title">
        {{ archive.kick }}
      </div>
      <img src="https://unsplash.it/350/150?random&1">
      <div class="card-content">
        {{ archive.desc }}
      </div>
    </div>

    <div class="card">
      <div class="card-title">
        Dojo avancés
      </div>
      <img src="https://unsplash.it/350/150?random&2">
      <div class="card-content">
        EPFL Dojo app with quasar <a href="https://github.com/epfl-dojo/dojo-app">Dojo App</a>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
  components: {},
  data () {
    return {
      archives: [],
      events: []
    }
  },
  created () {
    axios.get('https://raw.githubusercontent.com/epfl-dojo/dojo-data/master/src/archives.json')
    .then((response) => {
      console.log(response.data)
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
