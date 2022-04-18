<script lang="ts">
export let post:any;
</script>

<a href="/post/{post.video ? "video": "post"}-{post.id}">
<div class="post">

<img src="{post.video ? post.videoLink.thumbnailUrl : post.thumbnail.url}" class="thumbnail" alt="">
<div class="post-overlay">
    <h1>{post.title}</h1>
    <p>{post?.shortDescription}</p>
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
    overflow: hidden;
}

.thumbnail{
    width: 100%;
}
.post-overlay{
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 300px;
    height: 169px;
    overflow: hidden;
    position:  absolute;
    top: 0;
    z-index: 22;
    background-color: rgba(0, 0, 0, 0.589);
    visibility: hidden;
    color: whitesmoke;
    text-align: center;
}



@media (min-width: 768px) {
    .thumbnail{
        width: 300px;
        height: 169px;
    }

    .post:hover > .post-overlay{
    visibility: visible;
    }

    h1{
        width: 300px;
    }

}

</style>