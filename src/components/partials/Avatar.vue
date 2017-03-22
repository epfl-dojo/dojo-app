<template lang="html">
  <span class="avatar">
    <a :href="dude.html_url">
      <img class="avatarimg" :src="dude.avatar_url" alt="" :width="size + 'px'" :title="dude.login" />
    </a>
    <github-follow :dude="dude"></github-follow>
  </span>
</template>

<script>
import GithubFollow from './GithubFollow'
export default {
  props: ['dude', 'size'],
  components: {GithubFollow}
}
</script>

<style scoped>
.avatarimg {
  vertical-align: middle
}
</style>
