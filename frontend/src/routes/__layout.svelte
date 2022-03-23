
<script lang="ts">
import "../app.css"
import Header from "../components/Header.svelte";
</script>

<Header></Header>
<main>

<slot></slot>

</main>

<style>
    main{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>