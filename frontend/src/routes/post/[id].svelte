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
console.log(formatDate('Febuary 1, 2021'));


const options = {
  renderBlock({ record, adapter: { renderNode } }) {
    return renderNode('', {}, renderNode('img', { src: record.image[0].url }));
  }
};


console.log(renderer(article.data.post.post, options));
</script>


<article>
<div class="title">
<h1>{article.data.post.title}</h1>
 <p>{formatDate(article.data.post.createdAt)} | SkateBlog </p>
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

.title{
padding-bottom: 10px;
}
.title > h1{
  font-size: var(--text-5xl);
  padding-bottom: 5px;
}

article{
display: flex;
flex-direction: column;
align-items: center;
padding: 1em;
gap: 10px;
}
</style>