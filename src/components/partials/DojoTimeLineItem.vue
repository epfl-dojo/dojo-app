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
        <h5>{{ type.kick }}</h5>
        <span v-if="type.desc" v-html="type.desc"></span><br v-if="type.desc"/>
        <div class="logsnotes" v-if="type.log" v-html="$marked(type.log)"></div>
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
@media only screen and (min-width: 601px) {
  .timeline-item {
    width: calc(50% - 1rem);
  }
}
.timeline-item:nth-child(2n+1):not(.on-right) .timeline-badge, .timeline-item.on-left .timeline-badge {
    right: -2.5rem;
}
.timeline-item:nth-child(2n):not(.on-left) .timeline-badge, .timeline-item.on-right .timeline-badge {
    left: -2.5rem;
}
.timeline-item {
    position: relative;
    padding: 0 1rem 1rem 1rem;
}
.logsnotes {
    white-space: pre-wrap;       /* Since CSS 2.1 */
    white-space: -moz-pre-wrap;  /* Mozilla, since 1999 */
    white-space: -pre-wrap;      /* Opera 4-6 */
    white-space: -o-pre-wrap;    /* Opera 7 */
    word-wrap: break-word;       /* Internet Explorer 5.5+ */
    font-size: small;
}
</style>
