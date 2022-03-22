<script lang="ts">


</script>


<div class="header">
<h1>SkateBlog</h1>
<nav>
    <ul>
        <li><button class="nav-button">
            <a href="/">Home</a>
        </button></li>
        <li><button class="nav-button">
            <a href="/">Posts</a>
        </button></li>
         <li><button class="nav-button">
            <a href="/">Videos</a>
        </button></li>
        <li><button class="nav-button">
            <a href="/">About</a>
        </button></li>

    </ul>
</nav>
</div>

<style>
.header{
    display: flex;
    flex-direction: column;
    align-items: center;
}

nav{
    display: flex;
    flex-direction: row;
}

.nav-button{
    background-color: inherit;
    border: none;
}

.nav-button > a{
    text-decoration: none;
}

ul{
    list-style: none;
    text-align: center;
    padding: 0;
}

ul > li {
padding:0px;
}

</style>