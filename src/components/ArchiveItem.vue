<template>
  <div class="timeline-item" >
    <div class="timeline-badge">
      <img src="~assets/dojo.png" />
    </div>
    <div class="timeline-title">
      Dojo #{{ event.dojoid }} ({{ event.date }})
    </div>
    <div class="card" v-for="type in event.types">
      <div class="card-title">
        The {{ type.type }} session
      </div>
      <img :src="type.img">
      <div class="card-content">
        <h4>{{ type.kick }}</h4>
        <span v-html="type.log"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: ['event']
}
</script>
<style>
.card  {
  margin: 20px;
}
</style>
