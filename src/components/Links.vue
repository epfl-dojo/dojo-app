<template>
  <!-- root node required -->
  <div>
    <!-- your content -->
    <div class="layout-padding">
      <!-- if you want automatic padding -->
      Here comes a bunch of links
      <ul id="dojo-links">
        <li v-for="link in links" v-if="link.use_it">
          <a :href="link.url">{{ link.title }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import hjson from 'hjson'
export default {
  components: {},
  data () {
    return {
      links: []
    }
  },
  created () {
    axios.get('https://raw.githubusercontent.com/epfl-dojo/dojo-data/master/links.hjson')
    .then((response) => {
      this.links = hjson.parse(response.data).links
    })
  }
}
</script>
