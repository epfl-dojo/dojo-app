<template>
<div>
  <div class="layout-padding">
    <h4>EPFL-ish code</h4>
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
      this.topics = response.data.items.sort(function (a, b) {
        return b.stargazers_count - a.stargazers_count
      })
    })
  }
}
</script>
