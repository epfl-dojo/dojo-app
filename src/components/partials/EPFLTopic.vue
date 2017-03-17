<template>
  <div class="topic">
    <avatar :dude="topic.owner" :size="50" :login="1"/>
    <a :href="topic.html_url" :title="topic.login">{{ topic.full_name }}</a>
    <impact :repo="topic" />
    <br />
    {{ topic.description }}
  </div>
</template>

<script>
import Avatar from './Avatar'
import Impact from './Impact'
export default {
  components: {
    Avatar, Impact
  },
  props: ['topic']
}
</script>
<style>
div.topic {
  border: 1px solid lightgreen;
  border-radius: 4px;
  margin: 20px;
  line-height: 2em;
}
</style>
