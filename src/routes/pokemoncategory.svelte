<script lang="ts">
	import { pokemon } from '../stores/pokestore';
	import PokemanCard from '../components/PokemanCard.svelte';
	import GridCard from '../components/GridCard.svelte';
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
	<title>Pokedex</title>
</svelte:head>

<input
	class="mobile-focus w-full rounded-lg text-lg p-4 border-2 border-black/25 dark:bg-transparent dark:border-[#4D4D4D]  focus:outline-none focus:border-[#e786d7] dark:focus:border-[#7f7fd5] sm:focus:ring-2 sm:focus:ring-[#e786d7] sm:focus:border-transparent sm:dark:focus:ring-[#7f7fd5]"
	type="text"
	placeholder="Search Pokemon"
	bind:value={searchTerm}
/>
<GridCard>
	{#each filteredPokemon as pokeman}
		<PokemanCard {pokeman} />
	{/each}
</GridCard>

<style>
	@media (max-width: 640px) {
		.mobile-focus:focus {
			border: 2px solid#e786d7;
		}
	}
</style>
