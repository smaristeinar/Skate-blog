<script lang="ts">
export let posts: any
import Post from "./Post.svelte"
</script>

{#each posts.mockdata  as post }
   <Post post={post} /> 
{/each}

<style>

</style>