<script context="module">
 export async function load({fetch}) {
    const url = "/api/getThumbnails";
    const response = await fetch(url);
    return {
      props: {
        article: await response.json()
      }
    };
  } 
</script>

<script lang="ts">
import FeaturePost from "../components/FeaturePost.svelte";
import Posts from "../components/Posts.svelte"; 
export let article:any
</script>

<FeaturePost post={article.data.allPosts[0]}/>
<Posts posts={article}/>


<style>

</style>