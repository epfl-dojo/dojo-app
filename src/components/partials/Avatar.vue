<template lang="html">
  <span class="avatar">
    <github-follow :username="dude.login"></github-follow>
    <a :href="dude.html_url"><img class="avatarimg" :src="dude.avatar_url" alt="" :width="size + 'px'" :title="dude.login" /><span v-if="login"> @{{ dude.login }}</span></a>
  </span>
</template>

<script>
import GithubFollow from './GithubFollow'
export default {
  props: ['dude', 'size', 'login'],
  components: {GithubFollow}
}
</script>

<style scoped>
.avatarimg {
  vertical-align: middle
}
</style>
