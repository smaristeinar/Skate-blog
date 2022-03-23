<script context="module">

 export async function load({fetch, params}) {
    console.log("loading");
    const url = "/api/getmock-" + params.id;
    const response = await fetch(url);
    return {
      props: {
        article: await response.json()
      }
    };
  } 
</script>

<script lang="ts">
export let article;
</script>



<h1>{article.item.title}</h1>
<p>{article.item.content}</p>