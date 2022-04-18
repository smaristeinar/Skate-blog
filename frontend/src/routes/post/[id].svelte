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

import Spliter from '../../lib/Spliter.svelte';



const formatDate = (date) => {
  let d = new Date(date);
  let month = (d.getMonth() + 1).toString();
  let day = d.getDate().toString();
  let year = d.getFullYear();
  if (month.length < 2) {
    month = '0' + month;
  }
  if (day.length < 2) {
    day = '0' + day;
  }
  return [year, month, day].join('-');
}

const options = {
  renderBlock({ record, adapter: { renderNode } }) {
    return renderNode('', {}, renderNode('img', { src: record.image[0].url }));
  }
};

</script>


<article>
  {#if article.data.post.video}
  <div class="video-wrapper">
  <iframe class="video" src="https://www.youtube.com/embed/{article.data.post.videoLink.providerUid}"  height="400" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>
  {/if}

<div class="title">
<h1>{article.data.post.title}</h1>
 <p>{formatDate(article.data.post.createdAt)} | SkateBlog </p>
</div>

<Spliter />

<div class="content">
{@html renderer(article.data.post.post, options)}
</div>

<Spliter />
<div class="tags-wrapper">
<div class="tags">
<p>Tags:</p>
 {#each article.data.post.tags as tag}
  <p class="tag">#{tag}</p> 
 {/each}
</div>
</div>
</article>

<style>
.content :global(p){
font-size: var(--text-lg);
font-family: "NotoSans";
margin-block-start: 1em;
margin-block-end: 1em;

}

.content :global(img){
  max-width: 100%;
  padding-top: 5px;
}



.video-wrapper iframe {
  aspect-ratio: 16 / 9;
  width: 100%;

}

.title{
padding-bottom: 10px;
align-self: start;


}

.title > h1{
  font-size: var(--text-4xl);
  padding-bottom: 5px;
  word-wrap: break-word;
  max-width: 200px;
}

article{
display: flex;
flex-direction: column;
align-items: center;
padding: 1em;
gap: 10px;
box-sizing: border-box;

}

.tags-wrapper{
  display: flex;
  flex-wrap:wrap-reverse;
align-self: start;

}

.tags{
  display: flex;
  align-items: center;
  flex-wrap: wrap;

}

.tag{
display: block;
text-align: center;
padding: 2px 10px 2px 10px;
margin-left: 10px;
margin-top: 2px;
background-color: rgb(160, 156, 156);
border-radius: 5px;
}


@media (min-width: 500px) {

  .title > h1{
    max-width: 700px;
  }

}
</style>