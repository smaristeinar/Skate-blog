<script lang="ts">
export let posts: any
import Post from "./Post.svelte"
</script>
<section>
{#each posts.data.allPosts  as post }
   <Post post={post} /> 
{/each}
</section>

<style>
section{
   display: flex;
   flex-direction: column;
   gap: 10px;
   padding: 1em;
}

@media (min-width: 768px) {

section{
   display: grid;
   grid-template-columns: 1fr 1fr;
}

section:first-child{
display: none;
visibility: collapse;
}


}

</style>