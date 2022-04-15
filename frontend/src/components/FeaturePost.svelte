<script lang="ts">
	export let post: any;
</script>

<div class="fetaure-post">
	<a href="/post/{post.id}">
		<img
			src={post.video ? post.videoLink.thumbnailUrl : post.thumbnail.url}
			class="thumbnail"
			alt=""
			height="300px"
			width="350px"
		/>

		<div class="desc">
			<h1>{post.title}</h1>
			<p>{post.shortDescription}</p>
		</div>
	</a>
</div>

<style>
	.fetaure-post {
		display: none;
		visibility: hidden;
	}


	@media (min-width: 1024px) {
	.fetaure-post {
            padding-top: 16px;
			display: flex;
			padding-top: 1em;
			width: 100%;
			visibility: visible;
            justify-content: center
		}

        .desc{
            width: 350px;
        }

		.fetaure-post > a {
			display: flex;
			gap: 10px;
		}
	}
</style>
