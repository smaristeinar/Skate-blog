<script>
 let active = false
 let searchActive = false
 import Animatedburger from "../lib/AnimatedBurger.svelte"
 import Spliter from '../lib/Spliter.svelte'
 import Search from "../lib/Search.svelte"
</script>

<nav>
<div class="nav-bar">
<div on:click={()=>{active = !active}}>
<Animatedburger open={active} width="45px" />
</div>
<h1>SkateBlog</h1>
{#if !active}
<button on:click={()=>{searchActive = !searchActive}}>
  <img src="/static/img/{!searchActive ? "search.svg": "cross.svg"}" alt="" srcset="">  
</button> 
{/if}

</div>

{#if searchActive}
  <Search />
{/if}

{#if !active}
  <Spliter /> 
{/if}
<div class="nav-menu" class:nav-menu-toggle={active} >
<ul>
  <li><a on:click={()=>{active = !active}} href="/">Home</a></li>
  <li><a on:click={()=>{active = !active}} href="/">Posts</a></li>
  <li><a on:click={()=>{active = !active}} href="/">Videos</a></li>
</ul>
</div>
</nav>

<style>
nav{
    position: sticky;
    top: 0;
    z-index: 1000;
}


.nav-bar{
    position: inherit;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background-color:white;
    z-index: 999;
}

.nav-menu{
  position: fixed;
  top:0;
  height: 100%;
  width: 100%;
  z-index: 500;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  visibility: hidden;
}

.nav-menu-toggle{
  visibility: visible;
}

.nav-menu > ul{
  font-size: var(--text-5xl);
  text-decoration: none;
  list-style: none;
}

li{
  margin-top: 25px;
}

a:link, a:visited {
  text-decoration: none;
  color: black;
}

</style>