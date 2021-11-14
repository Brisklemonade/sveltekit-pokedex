<script lang="ts">
	import PokeballSvg from '../components/utility/PokeballSVG.svelte';
	import Atropos from 'atropos/svelte';
	import { onMount } from 'svelte';
	import CategoryCard from '../components/CategoryCard.svelte';
	import GridCard from '../components/GridCard.svelte';
	import { slide, fade } from 'svelte/transition';
	import { cubicIn, cubicOut } from 'svelte/easing';

	// variables
	let noScroll;
	let visible: boolean = false;
	let src: string =
		'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png';

	// logic
	onMount(() => {
		visible = true;
	});

	// unique functions

	function typewriter(node, { speed = 1.2 }) {
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
	}
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

{#if !visible}
	<div on:scroll={noScroll}>
		<div class="grid place-content-center text-3xl animate-pulse mt-40 sm:mt-60">
			<PokeballSvg className={'animate-spin'} fill={'black'} size={120} />
		</div>
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
			<Atropos
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
					class="imgTwo w-60 h-60 sm:w-80 sm:h-80"
					src="/masterball.png"
					alt="masterball icon"
					data-atropos-offset="10"
				/>
			</Atropos>
		</div>
		<div class="h-96 overflow-y-scroll px-2">
			<GridCard>
				<CategoryCard link={'pokemoncategory'} title={'Pokedex'}>
					<img class="no-select w-5/12" src="/pokemonemblem.png" alt="Pokemon Emblem Icon" />
				</CategoryCard>
				<CategoryCard link={'gamecategory'} title={'Games'}>
					<img class="no-select w-3/12" src="/SwordShield.png" alt="Pokemon Sword Shield Icon" />
				</CategoryCard>
				<CategoryCard link={'/'} title={`who's that pokemon (coming soon)`}>
					<img class="pixel filter brightness-0 no-select w-5/12" {src} alt="Pokemon" />
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
	.pixel {
		image-rendering: pixelated;
	}
	.imgTwo {
		position: absolute;
		top: 8%;
		left: 8%;
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

	@media (max-width: 640px) {
		.imgTwo {
			position: absolute;
			top: 2%;
			left: 3%;
		}
	}
</style>
