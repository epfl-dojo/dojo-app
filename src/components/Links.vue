<template>
  <!-- root node required -->
  <div>
    <!-- your content -->
    <div class="layout-padding">
      <!-- if you want automatic padding -->
      Here comes a bunch of links
      <ul id="dojo-links">
        <li v-for="link in links">
          <a :href="link.link_url">{{ link.link_title }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  components: {},
  data () {
    return {
      links: []
    }
  },
  created () {
    axios.get('https://raw.githubusercontent.com/epfl-dojo/dojo-data/master/src/links.json')
    .then((response) => {
      console.log(response.data)
      this.links = response.data.links
    })
  }
}
</script>
