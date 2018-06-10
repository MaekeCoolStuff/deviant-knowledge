<template>
    <div id="snippets">
        <SnippetLibrary />
    </div>
</template>
<script>
import SnippetLibrary from "./SnippetLibrary.vue";
export default {
    name: "Dashboard",
    components: {
        SnippetLibrary
    }
}
</script>