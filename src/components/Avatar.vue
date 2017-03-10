<template lang="html">
  <div class="avatar">
    <a :href="dude.html_url"><img class="avatarimg" :src="dude.avatar_url" alt="" :width="size + 'px'" :title="dude.login" /></a>
  </div>
</template>

<script>
export default {
  props: ['dude', 'size']
}
</script>

<style scoped>
</style>
