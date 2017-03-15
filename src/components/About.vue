<template>
  <!-- root node required -->
  <div>
    <!-- your content -->
    <div class="layout-padding">
      <!-- if you want automatic padding -->
      <h3>About EPFL dojo</h3>
      Well, it's <a href="http://codingdojo.org/WhatIsCodingDojo/">CodingDojo</a> <a href="https://www.epfl.ch">@epfl</a>.

      <h3>About this app</h3>
      <p>This app is a project started during Dojo sessions <router-link to="/archives#goto9">2017-03-03</router-link>, aiming to create
      a central point of communication and ressource, with x-platefomes access.</p>
      <h4>Tech Stack</h4>
      <p>This app is using <a href="http://quasar-framework.org/">Quasar Framework</a>,
        so it's coded in <a href="https://vuejs.org/">VueJs 2</a>;
        all the source code is avalaible on <a href="https://github.com/epfl-dojo/dojo-app">GitHub</a>.
        <br />
        Content for archives and events are stored on another GitHub repo
        (<a href="https://github.com/epfl-dojo/dojo-data">dojo-data</a>) in the
        <a href="http://hjson.org">Hjson</a> format. Some of the data (like
        contributors) are retrieved from
        <a href="https://developer.github.com/v3/">GItHub API</a>.<br />
        Logo and other design materials are stored on <a href="https://github.com/epfl-dojo/dojo-design">dojo-design</a>.
        <br />
        All images came from <a href="https://unsplash.com">unsplash</a> and are
        licensed under <a href="https://creativecommons.org/publicdomain/zero/1.0/">Creative Commons Zero</a> (Public Domain).
      </p>

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
    // Getting the list of epfl-dojo repositories
    this.$http.get('https://api.github.com/orgs/epfl-dojo/repos')
    .then((response) => {
      this.dojoRepos = response.data
      this.dojoRepos.map((repo) => {
        // For each repos, get the contributors
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
