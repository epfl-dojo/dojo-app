<template>
  <div>
    <div class="layout-padding">
      <h4>EPFL-ish code</h4>
      <p>This page list all the github repositories that have the "epfl" topic.</p>
      <epfl-topic :topic="topic" v-for="topic in topics" />
    </div>
  </div>
</template>

<script>
import EPFLTopic from './partials/EPFLTopic'
export default {
  components: {"epfl-topic": EPFLTopic},
  data () {
    return {
      topics: []
    }
  },
  created () {
    this.$http.get('https://api.github.com/search/repositories?q=topic:epfl')
    .then((response) => {
      this.topics = response.data.items.sort((a, b) => {
        if (a.stargazers_count == 0 && b.stargazers_count == 0) {
          return b.stargazers_count - a.stargazers_count
        } else {
          return b.forks_count - b.forks_count
        }
      })
    })
  }
}
</script>
