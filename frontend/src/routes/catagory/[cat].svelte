<script context="module">
	export async function load({ fetch, params }) {
		const url = '/api/getThumbnails';
		const response = await fetch(url); 
        let data = response.json().data.allPosts.filter((item) => {
		if (catagory == 'videos') {
			return item.video == true;
		} else {
			return !item.video;
		}});

		return {
			props: {
				article: await data,
				catagory: await params.cat
			}
		};
	}
</script>

<script>
	export let article;
	export let catagory;
    import Spliter from '../../lib/Spliter.svelte';

</script>

<div class="title">
	{#if catagory == 'videos'}
		<h1>Videos</h1>
	{:else}
		<h1>Posts</h1>
	{/if}
</div>
<Spliter />
<div class="resaults">
	<ul>
		{#each article as resault}
			<a href="/post/{resault.video ? "video-": "post-"}{resault.id}">
				<li>
					<div class="resault">
						<img
							width="200px"
							height="150px"
							src={resault.video ? resault.videoLink.thumbnailUrl : resault.thumbnail.url}
							alt=""
						/>
						<div class="text">
							<h1>{resault.title}</h1>
							<p>{resault.shortDescription}</p>
						</div>
					</div>
				</li>
			</a>
		{/each}
	</ul>
</div>

<style>
    .title{
        display: flex;
        justify-content: flex-start;
        width: 95%;
        padding: 10px;
        
    }
    .title > h1 {
     font-size: var(--text-5xl);
    } 

	img {
		padding-left: 5px;
	}

	li {
		list-style: none;
	}
	.resaults {
		width: 100%;
		margin: auto;
        padding: 5px;
    }

	.resault {
		display: flex;
		padding: 5px;
	}

	.text {
		padding: 10px;
	}

	.resault > img {
		display: none;
	}

	.text {
		overflow-wrap: break-word;
		max-width: 95%;
	}

	@media (min-width: 768px) {
		.resault > img {
			display: block;
		}
	}
</style>
