import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

function load (component) {
  return () => System.import(`components/${component}.vue`)
}

export default new VueRouter({
  /*
   * NOTE! VueRouter "history" mode DOESN'T works for Cordova builds,
   * it is only to be used only for websites.
   *
   * If you decide to go with "history" mode, please also open /config/index.js
   * and set "build.publicPath" to something other than an empty string.
   * Example: '/' instead of current ''
   *
   * If switching back to default "hash" mode, don't forget to set the
   * build publicPath back to '' so Cordova builds work again.
   */

  routes: [
    { path: '/', component: load('Index') }, // Default
    // Archives / Log / Timeline
    { path: '/log', component: load('Archives') },
    { path: '/archives', component: load('Archives') },
    { path: '/timeline', component: load('Archives') },
    // News / Events
    { path: '/news', component: load('Events') },
    { path: '/events', component: load('Events') },
    // Links
    { path: '/links', component: load('Links') },
    // Ideas
    { path: '/ideas', component: load('Ideas') },
    // About
    { path: '/about', component: load('About') },
    // 404
    { path: '*', component: load('Error404') } // Not found
  ]
})
