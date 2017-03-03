<template>
  <!-- Don't drop "q-app" class -->
  <div id="q-app">
    <q-layout>
      <div slot="header" class="toolbar" style="background: #90e142">
        <button class="hide-on-drawer-visible" @click="$refs.drawer.open()">
          <i>menu</i>
        </button>
        <q-toolbar-title :padding="0">
          EPFL-dojo
        </q-toolbar-title>
      </div>
      <!-- Left side Drawer -->
      <q-drawer ref="drawer">
        <div class="list platform-delimiter">
          <q-drawer-link icon="home" to="/">Home</q-drawer-link>
          <q-drawer-link icon="change_history" to="/events">Events</q-drawer-link>
          <q-drawer-link icon="line_weight" to="/archives">Timeline</q-drawer-link>
          <q-drawer-link icon="link" to="/links">Links</q-drawer-link>
          <q-drawer-link icon="people" to="/about">About</q-drawer-link>
        </div>
        <div class="version">
          v0.0.1 / v{{$q.version}}
        </div>
      </q-drawer>

      <router-view></router-view>

    </q-layout>
  </div>
</template>

<script>
  /*
 * Root component
 */
  export default {}

</script>

<style>
.version {
  display:flex;
  align-items:center;
  justify-content:center;
  font-size: small;
}

</style>
