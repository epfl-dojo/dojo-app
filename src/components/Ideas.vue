<template>
<div>
  <div class="layout-padding">
    <h4>Ideas</h4>
    <b>[WIP]</b> This page should retreive data from the list "ideas" from <a href="https://github.com/epfl-dojo/dojo-app/projects/1">dojo-app project</a>.
    <br />
    <br />
    <div v-for='card in cards'>
      <avatar :dude='card.creator' :size="50" />
      <div>
        {{card.note}}
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Avatar from './partials/Avatar'
export default {
  components: {Avatar},
  data () {
    return {
      cards: [
        {
          'url': 'https://api.github.com/projects/columns/cards/2024319',
          'column_url': 'https://api.github.com/projects/columns/766906',
          'id': 2024319,
          'note': 'zuzu idea',
          'creator': {
            'login': 'zuzu59',
            'id': 15345233,
            'avatar_url': 'https://avatars2.githubusercontent.com/u/15345233?v=3',
            'gravatar_id': '',
            'url': 'https://api.github.com/users/zuzu59',
            'html_url': 'https://github.com/zuzu59',
            'followers_url': 'https://api.github.com/users/zuzu59/followers',
            'following_url': 'https://api.github.com/users/zuzu59/following{/other_user}',
            'gists_url': 'https://api.github.com/users/zuzu59/gists{/gist_id}',
            'starred_url': 'https://api.github.com/users/zuzu59/starred{/owner}{/repo}',
            'subscriptions_url': 'https://api.github.com/users/zuzu59/subscriptions',
            'organizations_url': 'https://api.github.com/users/zuzu59/orgs',
            'repos_url': 'https://api.github.com/users/zuzu59/repos',
            'events_url': 'https://api.github.com/users/zuzu59/events{/privacy}',
            'received_events_url': 'https://api.github.com/users/zuzu59/received_events',
            'type': 'User',
            'site_admin': false
          },
          'created_at': '2017-03-10T10:31:10Z',
          'updated_at': '2017-03-10T10:31:10Z'
        },
        {
          'url': 'https://api.github.com/projects/columns/cards/2023818',
          'column_url': 'https://api.github.com/projects/columns/766906',
          'id': 2023818,
          'note': '- recup ideas',
          'creator': {
            'login': 'ponsfrilus',
            'id': 176002,
            'avatar_url': 'https://avatars0.githubusercontent.com/u/176002?v=3',
            'gravatar_id': '',
            'url': 'https://api.github.com/users/ponsfrilus',
            'html_url': 'https://github.com/ponsfrilus',
            'followers_url': 'https://api.github.com/users/ponsfrilus/followers',
            'following_url': 'https://api.github.com/users/ponsfrilus/following{/other_user}',
            'gists_url': 'https://api.github.com/users/ponsfrilus/gists{/gist_id}',
            'starred_url': 'https://api.github.com/users/ponsfrilus/starred{/owner}{/repo}',
            'subscriptions_url': 'https://api.github.com/users/ponsfrilus/subscriptions',
            'organizations_url': 'https://api.github.com/users/ponsfrilus/orgs',
            'repos_url': 'https://api.github.com/users/ponsfrilus/repos',
            'events_url': 'https://api.github.com/users/ponsfrilus/events{/privacy}',
            'received_events_url': 'https://api.github.com/users/ponsfrilus/received_events',
            'type': 'User',
            'site_admin': false
          },
          'created_at': '2017-03-10T10:08:46Z',
          'updated_at': '2017-03-10T10:08:46Z'
        }
      ]
    }
  },
  created () {
    this.$http.get('https://api.github.com/repos/epfl-dojo/dojo-app/projects')
    .then((response) => {
      let events = this.$hjson.parse(response.data).events
      this.events = events.sort(function (a, b) {
        return b.dojoid - a.dojoid
      })
    })
  }
}
</script>
