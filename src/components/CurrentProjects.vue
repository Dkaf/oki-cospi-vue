<template>
  <div class="current-projects">
    <ul v-for="project in projects" :key="project.id">
      <li>{{project.title}}</li>
    </ul>
  </div>
</template>

<script>
import client from './../contentfulClient.js'

export default {
  name: 'CurrentProjects',
  data: function() {
    return {
      projects: []
    }
  },
  created: function() {
    client.getEntries({'content_type':'currentProjects'})
    .then(res => {
      this.projects = res.items
    }).catch(err => console.log(err))
  }
}
</script>

