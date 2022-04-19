<script lang="ts">
	import '../app.css';
	import Header from '../components/Header.svelte';
	import Footer from '../components/Footer.svelte';
</script>

<Header />
<main>
	<slot />
</main>
<Footer />

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
	}


	@media (min-width: 1024px) {
		main {
			margin-left: 15%;
			margin-right: 15%;
		}
	}
</style>
