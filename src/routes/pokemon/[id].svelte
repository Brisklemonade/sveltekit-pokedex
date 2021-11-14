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
	import { arrowLeft, chevronLeft, chevronRight, longArrowLeft } from 'svelte-awesome/icons';
	import { pokemon } from '../../stores/pokestore';
	import PokeballSVG from '../../components/utility/PokeballSVG.svelte';
	import GridCard from '../../components/GridCard.svelte';
	import BtnStandard from '../../components/utility/BtnStandard.svelte';

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
	const goBack = () => {
		window.history.back();
	};

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

<BtnStandard func={goBack}>
	<div class="space-x-3 flex items-center">
		<Icon data={longArrowLeft} scale={2} />
		<span class="font-bold"> Go back </span>
	</div>
</BtnStandard>

<GridCard>
	<div
		class="outline-black flex items-center justify-between text-3xl uppercase text-center sm:text-4xl sm:block"
	>
		<span>{pokeman.name}</span>
		<span>#{`${pokeman.id}`.padStart(3, '0')}</span>
	</div>
	<div class="outline-black w-full flex justify-center">
		<div style="background-color: {pokemanColor};" class="w-full sm:w-11/12 h-[540px]">
			Div content
		</div>
	</div>
</GridCard>

<style></style>
