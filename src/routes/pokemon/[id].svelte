<script context="module">
	export async function load({ page, fetch }) {
		const id = page.params.id;
		// urls
		const pokemonURL = `https://pokeapi.co/api/v2/pokemon/${id}`;
		const pokemonSingleURL = `https://pokeapi.co/api/v2/pokemon-species/${id}`;
		// fetch responses
		const pokemonRES = await fetch(pokemonURL);
		const pokemonSingleRES = await fetch(pokemonSingleURL);
		// props
		const pokeman = await pokemonRES.json();
		const pokemonSingleData = await pokemonSingleRES.json();

		return { props: { pokeman, pokemonSingleData } };
	}
</script>

<script lang="ts">
	// props
	export let pokeman;
	export let pokemonSingleData;

	// imports
	import Icon from 'svelte-awesome';
	import {
		chevronLeft,
		chevronRight,
		arrowCircleOLeft,
		idBadge,
		signal
	} from 'svelte-awesome/icons';
	import { pokemon } from '../../stores/pokestore';
	import type { AboutData, SinglePokemon, StatsData } from '$lib/types/IdTypes';
	import { capitalizeFirstLetter } from '$lib/utils/functions';
	import GridCard from '../../components/GridCard.svelte';
	import AboutPokemon from '$lib/components/Cards/AboutPokemon.svelte';
	import PageTitle from '$lib/components/PageTitle.svelte';
	import PokeballSvg from '../../components/utility/PokeballSVG.svelte';
	import BaseStat from '$lib/components/Cards/BaseStat.svelte';
	import SubTitle from '$lib/components/[id]/SubTitle.svelte';

	// variables
	const height: number = pokeman.height;
	const weight: number = pokeman.weight;
	const stat_abbr: string[] = ['hp', 'atk', 'def', 'satk', 'sdef', 'spd'];
	const moves: Array<string> = pokeman.abilities.map((data, index) => {
		return data.ability.name;
	});
	const statsData = pokeman.stats.map((data, index) => {
		return {
			stat_title: data.stat.name,
			stat_base: data.base_stat
		};
	});
	const stats: StatsData[] = [
		{ title: statsData[0].stat_title, base: statsData[0].stat_base, abbr: stat_abbr[0] },
		{ title: statsData[1].stat_title, base: statsData[1].stat_base, abbr: stat_abbr[1] },
		{ title: statsData[2].stat_title, base: statsData[2].stat_base, abbr: stat_abbr[2] },
		{ title: statsData[3].stat_title, base: statsData[3].stat_base, abbr: stat_abbr[3] },
		{ title: statsData[4].stat_title, base: statsData[4].stat_base, abbr: stat_abbr[4] },
		{ title: statsData[5].stat_title, base: statsData[5].stat_base, abbr: stat_abbr[5] }
	];
	const about: AboutData[] = [
		{ property: `${`${weight}`.padStart(2, '0')} kg`, title: 'weight', icon: idBadge, id: 1 },
		{ property: `${`${height}`.padStart(2, '0')} m`, title: 'height', icon: signal, id: 2 }
	];
	const allTypes = pokeman.types.map((data, index) => {
		return data.type.name;
	});
	const pokemonSingle: SinglePokemon = {
		id: pokemonSingleData.id,
		baseHappiness: pokemonSingleData.base_happiness,
		captureRate: pokemonSingleData.capture_rate
	};
	const pokemanIndex = pokeman.id - 1;
	const type = pokeman.types[0].type.name;
	const typeColorIndex = allTypes[1];
	const pokemanName = pokeman.name;
	const description = pokemonSingleData.flavor_text_entries[5].flavor_text;
	const pokemanColor = $pokemon[pokemanIndex].colors[type];
	const typeColor = $pokemon[pokemanIndex].colors[typeColorIndex];
	let src: string = $pokemon[pokemanIndex].image;

	// logic

	// unique functions
	const goBack = () => {
		window.history.back();
	};
</script>

<svelte:head>
	<title>{capitalizeFirstLetter(pokemanName)} Details</title>
</svelte:head>

<PageTitle title={`Pokemon #${`${pokeman.id}`.padStart(3, '0')}`} />

<GridCard>
	<section class="w-full flex justify-center">
		<!-- content -->
		<div
			style="background-color: {pokemanColor};"
			class="pb-1 max-w-full min-w-[300px] h-auto rounded-xl z-0 relative overflow-hidden"
		>
			<PokeballSvg className={'absolute -right-10 z-[-1]'} fill={'#FFFFFF24'} size={256} />
			<!-- top of card -->
			<div class="flex flex-col justify-between w-full h-60">
				<div class="text-white flex items-center mx-6 pt-6">
					<button class="hover:opacity-60" type="button" on:click={goBack}>
						<Icon data={arrowCircleOLeft} scale={2} />
					</button>
					<span class="ml-4 text-2xl uppercase font-bold tracking-wider">{pokemanName}</span>
				</div>
			</div>
			<!-- end of top of card ^ -->
			<img class="card-image w-56 sm:w-[14.5rem]" {src} alt={`${pokemanName} Image`} />
			<div class="rounded-lg w-[98%] mx-auto bg-gray-50 dark:bg-[#28282B] space-y-4">
				<div class="space-x-4 mx-5 pt-14 flex justify-center">
					{#each allTypes as types, i}
						<p
							style="background-color: {i > 0 ? typeColor : pokemanColor};"
							class="text-white uppercase w-max py-1 px-2 rounded-full font-bold"
						>
							{types}
						</p>
					{/each}
				</div>
				<SubTitle text_color={pokemanColor} title={'About'} />
				<div class=" flex items-center justify-around">
					{#each about as about}
						<AboutPokemon {about}>
							<Icon slot="icon" data={about.icon} />
						</AboutPokemon>
					{/each}
					<div class="text-center h-24">
						<div
							class="scroll-bar h-12 flex flex-col items-center overflow-y-scroll cursor-default"
						>
							{#each moves as move}
								<p class="capitalize">{move}</p>
							{/each}
						</div>
						<p class="text-center capitalize font-thin">moves</p>
					</div>
				</div>
				<p class="text-center sm:tracking-wide px-5">{description}</p>
				<SubTitle text_color={pokemanColor} title={'base stats'} />
				<div class="mx-5 flex flex-col pb-11">
					{#each stats as { title, base, abbr }}
						<BaseStat {title} {base} {abbr} {pokemanColor} />
					{/each}
				</div>
			</div>
		</div>
		<!-- end content -->
	</section>
	<section class="">
		<div
			style="background-color: {pokemanColor};"
			class="max-w-full min-w-[300px] h-full rounded-xl z-0 pb-1"
		>
			<div class="h-60 text-white flex flex-col items-center">
				<h2 class="pt-6 text-center text-3xl uppercase font-bold tracking-widest">Other Stats:</h2>
				<img class="w-40 my-auto" src="/pokemonemblem.png" alt="pokemonemblem icon" />
			</div>
			<div class="text-center h-[34.75rem] w-[98%] mx-auto rounded-lg bg-gray-50 dark:bg-[#28282B]">
				<p class="animate-pulse text-5xl font-bold uppercase pt-[40%]">Coming Soon</p>
			</div>
		</div>
	</section>
</GridCard>

<style>
	.card-image {
		position: absolute;
		top: 8%;
		left: 50%;
		transform: translateX(-50%);
		z-index: 2;
	}
	.scroll-bar::-webkit-scrollbar {
		display: none;
	}
	.scroll-bar {
		-ms-overflow-style: none; /* IE and Edge */
		scrollbar-width: none; /* Firefox */
	}
</style>
