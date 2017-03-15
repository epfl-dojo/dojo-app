<template>
  <!-- root node required -->
  <div>
    <!-- your content -->
    <div class="layout-padding">
      <!-- if you want automatic padding -->
      <h3>Home</h3>
      <p>
        This is "our" EPFL dojo app. You can have a look to our
        futur <a v-link="{path:'/events'}">events</a> and what we've spent our
        time to in the <a v-link="{path:'/archives'}">archives</a> section.
        <br />
        Next dojo subject have to be proposed on our <a href="https://trello.com/b/JRz6oOC3">Trello Board</a>
        and they will be pourred in a Telegram vote.
      </p>
      <p>
        Additionally, the <a v-link="{path:'/links'}">links</a> page gather some of
        our useful links.<br />
        Details about this app and EPFL dojo in general stand on the <a v-link="{path:'/about'}">about</a> page.
      </p>
      Last but not least, the <a v-link="{path:'/ideas'}">ideas</a> page should
      list ideas and propositions from app's users. [WIP]<br />
      <br />
      <br />
      For now, we get this logo:<br />
      <img src="~assets/dojo.png" class="responsive" width="20%"/><br />
      Just feel free to contribute on <a href="https://github.com/epfl-dojo/dojo-design">dojo-design</a> repo.
    </div>
  </div>
</template>

<script>
export default {}
</script>
