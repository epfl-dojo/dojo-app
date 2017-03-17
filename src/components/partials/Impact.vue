<template>
  <span class="repo">
     {{ repo.stargazers_count }}★ {{ repo.forks_count }}⑂
  </span>
</template>

<script>
export default {
  components: {
  },
  props: ['repo']
}
</script>
