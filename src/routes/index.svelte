<script>
	import { pokemon } from '../stores/pokestore';
	import PokemanCard from '../components/pokemanCard.svelte';

	// -------------------------------- for search ------------------------------
	let searchTerm = '';
	let filteredPokemon = [];

	$: {
		if (searchTerm) {
			filteredPokemon = $pokemon.filter((pokeman) =>
				pokeman.name.toLowerCase().includes(searchTerm.toLowerCase())
			);
		} else {
			filteredPokemon = [...$pokemon];
		}
	}
</script>

<svelte:head>
	<title>Svelte Kit Pokedex</title>
</svelte:head>

<h1 class="text-4xl text-center my-8 uppercase">Pokedex</h1>
<input
	class="mobile-focus w-full rounded-lg text-lg p-4 border-2 border-black/25 dark:bg-transparent dark:border-[#4D4D4D] focus:outline-none focus:ring-2 sm:focus:ring-green-400 sm:focus:border-transparent sm:dark:focus:border-transparent"
	type="text"
	placeholder="Search Pokemon"
	bind:value={searchTerm}
/>
<div class="py-4 grid gap-4 md:grid-cols-2 grid-cols-1">
	{#each filteredPokemon as pokeman}
		<PokemanCard {pokeman} />
	{/each}
</div>

<style>
	@media (max-width: 640px) {
		.mobile-focus:focus {
			box-shadow: 0 0 0 2pt rgba(52, 211, 153, 1);
		}
	}
</style>
