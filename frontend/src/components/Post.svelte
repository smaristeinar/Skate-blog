<script lang="ts">
export let post:any;
</script>

<a href="/post/{post.id}">
<div class="post">

<img src="{post.thumbnail.url}" class="thumbnail" alt="">
<div class="post-overlay">
    <h1>{post.title}</h1>
    {#if post.shortDescription}
    <p>{post.shortDescription}</p>
    {/if}
</div>
<h1>{post.title}</h1>
</div>
</a>


<style>
.post{
 position: relative;
 color: black;
}

h1{
    font-size: var(--text-lg);
    text-decoration: none;
}

.thumbnail{
    width: 100%;
}
.post-overlay{
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 250px;
    height: 200px;
    position:  absolute;
    top: 0;
    z-index: 22;
    background-color: rgba(0, 0, 0, 0.589);
    visibility: hidden;
    color: whitesmoke;
}

.post:hover > .post-overlay{
    
}

</style>