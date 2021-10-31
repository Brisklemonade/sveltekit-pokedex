<script>
	import { pokemon } from '../stores/pokestore';
	import PokemanCard from '../components/pokemanCard.svelte';
	import Atropos from 'atropos/svelte';

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

<div class="flex flex-col items-center mb-8">
	<div class="atropos text-center font-thin relative">
		<Atropos alwaysActive={true}>
			<img
				class="imgOne w-60 h-60 sm:w-96 sm:h-96"
				src="/masterballback.png"
				alt=""
				data-atropos-offset="-5"
			/>
			<img
				class="imgTwo w-60 h-60 sm:w-96 sm:h-96"
				src="/masterball.png"
				alt=""
				data-atropos-offset="5"
			/>
		</Atropos>
	</div>
</div>
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
	.imgTwo {
		position: absolute;
		top: 0;
		left: 0;
	}
	.atropos {
		width: max-content;
	}
	.poke-atropos {
		width: 20rem;
		height: 20rem;
	}
	@media (max-width: 640px) {
		.mobile-focus:focus {
			box-shadow: 0 0 0 2pt rgba(52, 211, 153, 1);
		}
		.poke-atropos {
			width: 15rem;
			height: 15rem;
		}
	}
</style>
