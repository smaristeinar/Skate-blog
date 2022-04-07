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
import { render as renderer } from 'datocms-structured-text-to-html-string'
export let article;
console.log(article);

const options = {
  renderBlock({ record, adapter: { renderNode } }) {
    return renderNode('', {}, renderNode('img', { src: record.image[0].url }));
  }
};

console.log(renderer(article.data.post.post, options));
</script>


<article>
<div>
 {article.data.post.createdAt} 
</div>
<div class="content">
{@html renderer(article.data.post.post, options)}
</div>
</article>

<style>
.content :global(p){
font-size: var(--text-lg);
font-family: "NotoSans";
}

.content :global(img){
  max-width: 100%;
}

article{
display: flex;
flex-direction: column;
align-items: center;
padding: 1em;
gap: 10px;
}
</style>