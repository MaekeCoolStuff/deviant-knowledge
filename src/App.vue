<template>
  <div id="app">
    <SnippetLibrary />
  </div>
</template>

<script>
import SnippetLibrary from './components/SnippetLibrary.vue'

export default {
  name: 'app',
  components: {
    SnippetLibrary
  }
}
</script>

<style>
#app {
  height: 100%;
}
</style>
