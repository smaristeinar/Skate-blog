
<script lang="ts">
import "../app.css"
import Header from "../components/Header.svelte";
import Footer from "../components/Footer.svelte"
</script>

<Header />
<main>

<slot></slot>

</main>
<Footer />

<style>
    main{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>