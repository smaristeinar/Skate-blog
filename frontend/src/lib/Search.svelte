<script>
	let inputValue;
	let resaults = [];

	async function search(value) {
		const url = '/api/getsearch-' + value;
		const response = await fetch(url);
		let items = await response.json();
		resaults = await items.data.allPosts;
        console.log(resaults);
	}
</script>

<div class="search">
	<div class="search-box">
		<input bind:value={inputValue} type="text" />
		<button
			on:click={async () => {
				await search(inputValue);
			}}
		>
			<img src="/images/search.svg" alt="" srcset="" />
		</button>
        {#if resaults.length }
		<div class="resaults">
		    <ul>
               {#each resaults as resault}
               <a href="/post/{resault.video ? "video-": "post-"}{resault.id}" on:click={()=>{resaults = []}}>
                   <li>
                       <div class="resault">
                           <img width="200px" height="150px" src="{resault.video ? resault.videoLink.thumbnailUrl : resault.thumbnail.url}" alt="">
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
        {/if}
	</div>
</div>

<style>
	.search {
		display: flex;
		width: 100%;
		padding-bottom: 10px;
		background-color: white;
		align-content: center;
		flex-direction: column;
	}

	.search-box {
		display: flex;
		z-index: 4;
		padding: 30px;
		align-items: center;
		position: relative;
	}

	input {
		height: 30px;
		width: 100%;
	}

	img {
		padding-left: 5px;
	}

	.resaults {
		position: absolute;
		z-index: 200;
		top: 65px;
		width: 100%;
        margin: auto;
        box-sizing: border-box;

		left: 50%;
        background-color: white;
		transform: translate(-50%, 0);
	}

    .resault{
        display: flex;
        padding: 20px;
    }
    
    .text{
        padding: 10px;
    }
    
    .resault > img{
        display: none;
    }

    .text{
        overflow-wrap: break-word;
        max-width: 95%;
    }

    @media (min-width: 768px) {
        .resault > img {
            display: block;
        }
    }

    

</style>
