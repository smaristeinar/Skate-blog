<script>
 let active = false
 let searchActive = false
 import Animatedburger from "../lib/AnimatedBurger.svelte"
 import Spliter from '../lib/Spliter.svelte'
 import Search from "../lib/Search.svelte"

function flipActive(){
  console.log(window.matchMedia("(min-width: 1024px)"));
  if(!window.matchMedia("(min-width: 1024px)").matches){
    active = !active
  }
}


</script>

<nav>
<div class="nav-bar">
<div class="open-nav"on:click={()=>{active = !active}}>
<Animatedburger open={active} width="45px" />
</div>
<img class="site-logo" src="/images/logo2.svg" height="50px" width="150px" alt="skateblog logo">

<div class="nav-menu" class:nav-menu-toggle={active} >
<ul>
  <li><a on:click={()=>{flipActive()}} href="/">Home</a></li>
  <li><a on:click={()=>{flipActive()}} href="/">Posts</a></li>
  <li><a on:click={()=>{flipActive()}} href="/">Videos</a></li>
</ul>
</div>

{#if !active}
<button class="search" on:click={()=>{searchActive = !searchActive}}>
  <img src="/images/{!searchActive ? "search.svg": "cross.svg"}" alt="" srcset="">  
</button> 
{/if}



</div>

{#if searchActive}
  <Search />
{/if}

{#if !active}
  <Spliter /> 
{/if}

</nav>

<style>
nav{
    position: sticky;
    top: 0;
    z-index: 1000;
}

.open-nav{
  position: inherit;
  z-index: 999;
}

.nav-bar{
    position: inherit;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
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

a {
  font-family: "Anton";
}

a:link, a:visited {
  text-decoration: none;
  color: black;
}

.site-logo{
  position: relative;
  z-index: 999;


}

@media (min-width: 1024px) {

.nav-bar{
    display: grid;
  grid-template-columns: 1fr auto 1fr;  
}

.site-logo{
  width: initial;
  justify-self: start;

 
}

.search{
justify-self: end;
}

.nav-menu{
  display: flex;
  visibility: visible;
  background-color: initial;
  position: initial;
  width: auto;
}

.nav-menu > ul{
display: flex;
flex-direction: row;
text-align: center;
gap: 10px;
font-size: 25px;
}

ul > li {

}

.open-nav{
  display: none;
}

}

</style>