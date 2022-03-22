<script context="module">
 export async function load({fetch}) {
    console.log("loading");
    const url = "api/getmockdata";
    const response = await fetch(url);
    console.log(response);
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
console.log(article);

</script>

<Posts posts={article}/>

<style>
    h1{
        color:blue;
    }
</style>