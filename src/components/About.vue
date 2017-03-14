<template>
  <!-- root node required -->
  <div>
    <!-- your content -->
    <div class="layout-padding">
      <!-- if you want automatic padding -->
      <h3>About EPFL dojo</h3>

      <h3>About this app</h3>

      <h3>EPFL dojo repositories</h3>
      <ul>
        <li v-for="repo in dojoRepos">
           <a :href="repo.html_url">{{ repo.full_name }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      dojoRepos: [],
      dojoContributors: []
    }
  },
  created () {
    // Getting the list of epfl-dojo repositories
    this.$http.get('https://api.github.com/orgs/epfl-dojo/repos')
    .then((response) => {
      this.dojoRepos = response.data
      return this.dojoRepos
    })
  }
}
</script>
