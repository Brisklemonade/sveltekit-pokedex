<script lang="ts">
	import { pokemon } from '../../stores/pokestore';
	import PokemanCard from '../../components/PokemanCard.svelte';
	import GridCard from '../../components/GridCard.svelte';
	import PageTitle from '$lib/components/PageTitle.svelte';

	// variables
	let searchTerm: string = '';
	let src: string = '/pokemonemblem.png';
	let filteredPokemon = [];

	// logic
	$: {
		if (searchTerm) {
			filteredPokemon = $pokemon.filter((pokeman) =>
				pokeman.name.toLowerCase().includes(searchTerm.toLowerCase())
			);
		} else {
			filteredPokemon = [...$pokemon];
		}
	}
	// unique functions
</script>

<svelte:head>
	<title>Pokedex</title>
</svelte:head>

<PageTitle title={'Pokedex'}>
	<img class="w-2/12 sm:w-1/12" {src} alt={`${src} Icon`} />
</PageTitle>
<input
	class="mobile-focus w-full rounded-lg text-lg p-4 border-2 border-black/25 dark:bg-transparent dark:border-[#4D4D4D]  focus:outline-none focus:border-[#e786d7] sm:focus:ring-2 sm:focus:ring-[#e786d7] sm:focus:border-transparent sm:dark:focus:ring-[#7f7fd5] dark:focus:border-[#7f7fd5]"
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
	}
</style>
