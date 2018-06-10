<template>
  <div id="app">
    <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <span class="navbar-brand-text">Knowledge</span>
      </div>
      <router-link class="navbar-item" to="/snippets">Snippets</router-link>
      <router-link class="navbar-item" to="/questions">Questions</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>
<script>
import SnippetLibrary from "./components/SnippetLibrary.vue";

export default {
  name: "app",
  components: {
    SnippetLibrary
  }
};
</script>

<style>
.navbar-brand-text {
  line-height: 52px;
  padding: 0 20px;
}

.navbar-item {
  color: white;
}

.navbar-item:hover {
  color: #141414 !important;
}

.router-link-active {
  background-color:#fafafa;
  color: #141414;
}
</style>
