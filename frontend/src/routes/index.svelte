<script context="module">
 export async function load({fetch}) {
    console.log("loading");
    const url = "/api/getmockdata";
    const response = await fetch(url);

    return {
      props: {
        article: await response.json()
      }
    };
  } 
</script>

<script lang="ts">

import Posts from "../components/Posts.svelte"; 
export let article:Response

</script>

<Posts posts={article}/>

