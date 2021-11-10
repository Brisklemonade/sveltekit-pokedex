<script context="module">
	export async function load({ page, fetch }) {
		const id = page.params.id;
		// urls
		const pokemonURL = `https://pokeapi.co/api/v2/pokemon/${id}`;
		const locationURL = `https://pokeapi.co/api/v2/pokemon/${id}/encounters`;
		// fetch responses
		const pokemonRES = await fetch(pokemonURL);
		const locationRES = await fetch(locationURL);
		// props
		const pokemanLocation = await locationRES.json();
		const pokeman = await pokemonRES.json();

		return { props: { pokeman, pokemanLocation } };
	}
</script>

<script lang="ts">
	import Icon from 'svelte-awesome';
	import { arrowLeft, chevronLeft, chevronRight } from 'svelte-awesome/icons';
	import { pokemon } from '../../stores/pokestore';
	import PokeballSVG from '../../components/utility/PokeballSVG.svelte';

	export let pokeman: any;
	export let pokemanLocation;
	console.log(pokeman);
	console.log(pokemanLocation);

	// variables
	let isDefaultSprite = 'default';
	let isDefault = true;

	// logic
	const pokemanIndex = pokeman.id - 1;
	const type = pokeman.types[0].type.name;

	const pokemanColor = $pokemon[pokemanIndex].colors[type];
	const pokemanName = pokeman.name;

	// unique functions
	const capitalizeFirstLetter = (pokemanName) => {
		return pokemanName.charAt(0).toUpperCase() + pokemanName.slice(1);
	};

	const handleShiny = () => {
		isDefault = !isDefault;
		if (!isDefault) {
			isDefaultSprite = 'shiny';
		} else {
			isDefaultSprite = 'default';
		}
	};
</script>

<svelte:head>
	<title>{capitalizeFirstLetter(pokemanName)} Details</title>
</svelte:head>

<!-- container -->
<div class="grid place-content-center">
	<!-- full card -->
	<div
		style="background-color: {pokemanColor};"
		class="rounded-xl w-11/12 h-[640px] sm:w-[360px] sm:h-[640px]"
	>
		<div class="flex justify-end" />

		<!-- navigation arrows -->

		<!-- pokemon data -->
		<div class="bg-white rounded-lg w-full sm:w-[352px] sm:h-[404px] mx-auto mt-4">
			<div class="mx-5 pt-14">
				<div class="">
					{type}
				</div>
				<div class="">About</div>
				<div class="">Base Stats</div>
			</div>
		</div>
	</div>
</div>

<!-- 
--pokeball svg --
<PokeballSVG className={'absolute top-24'} fill={'#ffffff21'} size={220} />
-- pokemon sprite --
<img
	id="poke-sprite"
	class="bg-transparent"
	src={pokeman.sprites['front_default']}
	alt={`${pokeman.name} image`}
/>

--top row--
<div class="flex items-center justify-between text-white p-6 pb-0">
	<div class="flex items-center">
		<a href="/pokemoncategory">
			<Icon data={arrowLeft} />
		</a>
		<h1 class="ml-4">{pokeman.name}</h1>
	</div>
	<div>#00{pokeman.id}</div>
</div>

-- navigation arrows
<div class="flex justify-between mx-6 mt-36 text-white">
	<Icon data={chevronLeft} />
	<Icon data={chevronRight} />
</div>
-->
<style></style>
