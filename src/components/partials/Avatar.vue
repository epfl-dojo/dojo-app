<template lang="html">
  <span class="avatar">
    <a :href="dude.html_url"><img class="avatarimg" :src="dude.avatar_url" alt="" :width="size + 'px'" :title="dude.login" /><span v-if="login"> @{{ dude.login }}</span></a>
  </span>
</template>

<script>
export default {
  props: ['dude', 'size', 'login']
}
</script>

<style scoped>
.avatarimg {
  vertical-align: middle
}
</style>
