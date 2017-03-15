<template>
  <!-- root node required -->
  <div>
    <!-- your content -->
    <div class="layout-padding">
      <!-- if you want automatic padding -->
      <h3>About EPFL dojo</h3>

      <h3>About this app</h3>

      <h3>EPFL dojo contributors</h3>
      <ul>
        <li v-for="contributor in contributors">
           <a :href="contributor.html_url"><img :src="contributor.avatar_url" width="30px"/>{{ contributor.login }}</a>
        </li>
      </ul>

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
  computed: {
    contributors () {
      return this.$_.uniqBy(this.dojoContributors, 'login')
    }
  },
  created () {
    this.$http.get('https://api.github.com/orgs/epfl-dojo/repos')
    .then((response) => {
      this.dojoRepos = response.data
      this.dojoRepos.map((repo) => {
        this.$http.get(repo.contributors_url)
        .then((cont) => {
          if (cont.data[0] !== undefined) {
            this.dojoContributors.push(cont.data[0])
          }
        })
      })
    })
  }
}
</script>
