<template>
  <!-- Don't drop "q-app" class -->
  <div id="q-app">
    <q-layout>
      <div slot="header" class="toolbar">
        <button class="hide-on-drawer-visible" @click="$refs.drawer.open()">
          <i>menu</i>
        </button>
        <q-toolbar-title :padding="0">
          EPFL dojo App
        </q-toolbar-title>
      </div>
      <!-- Left side Drawer -->
      <q-drawer ref="drawer">
        <div class="list platform-delimiter">
          <div class="list-header">
      <!-- mettre ici le nom du menu -->
          </div>
          <q-drawer-link icon="home" to="/">Home</q-drawer-link>
          <q-drawer-link icon="mail" to="/log">Log</q-drawer-link>
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

<style></style>
