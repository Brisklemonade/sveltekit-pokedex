<script lang="ts">
	import PokeballSvg from '../components/utility/PokeballSVG.svelte';
	import Atropos from 'atropos/svelte';
	import { onMount, onDestroy } from 'svelte';
	import CategoryCard from '../components/CategoryCard.svelte';
	import GridCard from '../components/GridCard.svelte';
	import { slide } from 'svelte/transition';
	import { cubicIn, cubicOut } from 'svelte/easing';
	import { hint } from '$lib/stores/hint';
	import { darkMode } from '$lib/stores/darkMode';

	// variables
	let dark = $darkMode;
	let visible: boolean = false;
	let src: string = 'https://cdn.traction.one/pokedex/pokemon/1.png';

	$: primary = $darkMode ? '#7f7fd5' : '#e786d7';

	// logic
	onMount(() => {
		visible = true;
	});

	// unique functions
	const removeHint = () => {
		$hint = '';
	};

	const typewriter = (node, { speed = 1.2 }) => {
		const valid = node.childNodes.length === 1 && node.childNodes[0].nodeType === Node.TEXT_NODE;

		if (!valid) {
			throw new Error(`This transition only works on elements with a single text node child`);
		}

		const text = node.textContent;
		const duration = text.length / (speed * 0.01);

		return {
			duration,
			tick: (t) => {
				const i = ~~(text.length * t);
				node.textContent = text.slice(0, i);
			}
		};
	};
</script>

<svelte:head>
	<title>Home | Sveltekit Pokedex</title>
</svelte:head>

{#if !visible}
	<div class="grid place-content-center text-3xl animate-pulse mt-40 sm:mt-60">
		{#if dark === true}
			<PokeballSvg className={'animate-spin'} fill={'white'} size={120} />
		{:else if dark === false}
			<PokeballSvg className={'animate-spin'} fill={'black'} size={120} />
		{/if}
	</div>
{:else}
	<div
		in:slide={{ duration: 700, easing: cubicIn }}
		out:slide={{ duration: 450, easing: cubicOut }}
	>
		<div
			in:typewriter
			class="animate-text text-center text-4xl tracking-tighter font-sans font-bold sm:text-7xl"
		>
			Welcome to the Sveltekit Pokedex!
		</div>
		<div class="flex flex-col items-center mb-2">
			<div
				class="md:absolute animate-pulse uppercase sm:text-xl p-1 rounded-md text-[#e786d7] dark:text-[#7f7fd5]"
			>
				{$hint}
			</div>
			<Atropos
				on:enter={removeHint}
				shadow={false}
				shadowScale={0}
				class="w-64 h-[270px] sm:w-96 sm:h-96"
				alwaysActive={false}
			>
				<img
					class="imgOne mt-3 sm:mt-10 w-60 h-60 sm:w-80 sm:h-80 mx-auto"
					src="/masterballback.jpeg"
					alt="masterball icon background"
					data-atropos-offset="-5"
				/>
				<img
					class="absolute top-[2%] left-[3%] w-60 h-60 sm:w-80 sm:h-80 sm:top-[8%] sm:left-[8%]"
					src="/masterball.png"
					alt="masterball icon"
					data-atropos-offset="10"
				/>
			</Atropos>
		</div>
		<div style="--primary:{primary}" class="md:h-96 md:overflow-y-scroll md:px-2">
			<GridCard>
				<CategoryCard link={'category/pokemon'} title={'Pokedex'}>
					<img
						slot="image"
						class="no-select w-5/12"
						src="/pokemonemblem.png"
						alt="Pokemon Emblem Icon"
					/>
				</CategoryCard>
				<CategoryCard link={'category/game'} title={'Games'}>
					<img
						slot="image"
						class="no-select w-3/12"
						src="/SwordShield.png"
						alt="Pokemon Sword Shield Icon"
					/>
				</CategoryCard>
				<CategoryCard link={'category/whoisthatpokemon'} title={`who's that pokemon (coming soon)`}>
					<img
						slot="image"
						class="filter brightness-0 hover:brightness-100 w-5/12 transition-all duration-150 ease-linear"
						{src}
						alt="Pokemon"
					/>
				</CategoryCard>
			</GridCard>
		</div>
	</div>
{/if}

<style>
	.no-select {
		user-select: none;
		-webkit-user-drag: none;
		-moz-user-select: none;
		-webkit-user-select: none;
		-ms-user-select: none;
	}
	.animate-text {
		animation: flow 8s ease-in-out infinite;
		background: linear-gradient(-60deg, #7f7fd5, #e786d7);
		background-size: 200%;
		background-clip: inherit;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
	@keyframes flow {
		0% {
			background-position: 0 50%;
		}
		50% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0 50%;
		}
	}
	/* width */
	::-webkit-scrollbar {
		width: 10px;
	}

	/* Track */
	::-webkit-scrollbar-track {
		box-shadow: inset 0 0 5px rgb(128, 128, 128);
		border-radius: 10px;
	}

	/* Handle */
	::-webkit-scrollbar-thumb {
		background: var(--primary);
		border-radius: 10px;
	}
</style>
