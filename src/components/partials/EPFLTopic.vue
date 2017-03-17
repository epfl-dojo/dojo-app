<template>
<div class="topic">    <avatar :dude='topic.owner' :size="50" />
{{ topic.full_name }}: {{ topic.stargazers_count }}</div>
</template>

<script>
import Avatar from './Avatar'

export default {
  components: {Avatar},
  props: ['topic']
}
</script>
<style>
div.topic {
  border: 1px solid lightgreen;
  border-radius: 4px;
  margin: 20px;
}
</style>
