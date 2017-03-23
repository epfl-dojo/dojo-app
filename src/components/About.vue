<template>
  <!-- root node required -->
  <div>
    <!-- your content -->
    <div class="layout-padding">

      <h3>About EPFL dojo</h3>
      <p>
        Well, it's <a href="http://codingdojo.org/WhatIsCodingDojo/">CodingDojo</a>
        <a href="https://www.epfl.ch">@epfl</a>. As said on
        <a href="http://codingdojo.org/WhatIsCodingDojo/">codingdojo.org</a>:<br />
        <blockquote>
          A Coding Dojo is a meeting where a bunch of coders get together to work
          on a programming challenge. They are there have to fun and to engage in
          deliberate practice in order to improve their skills.
        </blockquote>
      </p>
      <p>
        We are organising two dojo sessions:
        <ul>
          <li>One for apprentice in computing (beginner)</li>
          <li>One for computer specialists (advanced)</li>
        </ul>
        <small><em>To Be Completed</em></small>
      </p>

      <h3>About this app</h3>
      <p>This app is a project started during Dojo sessions
        <router-link to="/archives#goto9">2017-03-03</router-link>,
        aiming to create a central point of communication and ressource, with
        x-platefoms access.
      </p>

      <h4>Tech Stack</h4>
      <p>
        This app is using <a href="http://quasar-framework.org/">Quasar
        Framework</a>, so it's coded in <a href="https://vuejs.org/">VueJs 2</a>;
        all the source code is avalaible on
        <a href="https://github.com/epfl-dojo/dojo-app">GitHub</a>.
        <br />
        Content for archives and events are stored on another GitHub repo
        (<a href="https://github.com/epfl-dojo/dojo-data">dojo-data</a>) in the
        <a href="http://hjson.org">Hjson</a> format. Some of the data (like
        contributors) are retrieved from
        <a href="https://developer.github.com/v3/">GItHub API</a>.<br />
        Logo and other design materials are stored on
        <a href="https://github.com/epfl-dojo/dojo-design">dojo-design</a>.
        <br />
        All images came from <a href="https://unsplash.com">unsplash</a> and are
        licensed under <a href="https://creativecommons.org/publicdomain/zero/1.0/">
          Creative Commons Zero</a> (Public Domain).
      </p>

      <h4>Releases</h4>
      You can check for releases on
      <a href="https://github.com/epfl-dojo/dojo-app/releases">GitHub</a>.
      This is the latest three:
      <ul>
        <li :appReleases="appReleases" v-for="release in appReleases">
          {{ release.created_at | shortDate }}
          (<a :href="release.html_url">{{ release.tag_name }}</a>):
          {{ release.name }}<br /><pre class="releasesnote">{{ release.body }}</pre>
        </li>
      </ul>
      An alpha version of the Android app is on the play store
      (<a href="https://play.google.com/apps/testing/ch.epfl.dojo.app">ch.epfl.dojo.app</a>)
      but as it's a closed alpha, you will need to require an access
      (i.e. mail to <a mailto="dojo-app@epfl.ch">dojo-app@epfl.ch</a>).

      <h3>EPFL dojo contributors</h3>
      <div v-for="contributor in contributors" class="contributorBlock">
        <avatar :dude="contributor" :size="20" :login="1"/>
      </div>

      <h3>EPFL dojo repositories</h3>
      <ul>
        <li v-for="repo in dojoRepos">
           <a :href="repo.html_url">{{ repo.full_name }}</a> <small><impact :repo="repo"/></small>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import Avatar from './partials/Avatar'
import Impact from './partials/Impact'
export default {
  components: {Avatar, Impact},
  data () {
    return {
      dojoRepos: [],
      dojoContributors: [],
      appReleases: []
    }
  },
  computed: {
    contributors () {
      return this.$_.uniqBy(this.dojoContributors, 'login')
    }
  },
  created () {
    // Getting the list of epfl-dojo repositories
    this.$http.get('https://api.github.com/orgs/epfl-dojo/repos?per_page=1000')
    .then((response) => {
      this.dojoRepos = response.data.sort((a, b) => {
        return b.stargazers_count - a.stargazers_count
      })
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
    // Get the 3 last releases info
    this.$http.get('https://api.github.com/repos/epfl-dojo/dojo-app/releases')
    .then((response) => {
      this.appReleases = this.$_.chunk(response.data, 3)[0]
    })
  },
  filters: {
    // Transform 2017-03-17T13:48:55Z into 2017-03-17
    shortDate: function (value) {
      if (!value) return ''
      return moment(value).format('YYYY-MM-DD')
    }
  }
}
</script>
<style>
.contributorBlock {
  line-height: 2em;
}
.releasesnote {
    white-space: pre-wrap;       /* Since CSS 2.1 */
    white-space: -moz-pre-wrap;  /* Mozilla, since 1999 */
    white-space: -pre-wrap;      /* Opera 4-6 */
    white-space: -o-pre-wrap;    /* Opera 7 */
    word-wrap: break-word;       /* Internet Explorer 5.5+ */
    font-size: small;
}
</style>
