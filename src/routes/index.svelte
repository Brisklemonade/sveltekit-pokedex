<script>
	import Icon from 'svelte-awesome';
	import { circleONotch } from 'svelte-awesome/icons';
	import Atropos from 'atropos/svelte';
	import { onMount } from 'svelte';
	import CategoryCard from '../components/CategoryCard.svelte';
	import GridCard from '../components/GridCard.svelte';
	import { slide } from 'svelte/transition';
	import { cubicIn, cubicOut } from 'svelte/easing';

	let visible = false;

	onMount(() => {
		setTimeout(() => {
			return (visible = true);
		}, 200);
	});

	function typewriter(node, { speed = 1 }) {
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
	<div class="center text-3xl animate-pulse mt-60">
		<Icon data={circleONotch} scale={7} spin />
	</div>
{:else}
	<div
		in:slide={{ duration: 700, easing: cubicIn }}
		out:slide={{ duration: 450, easing: cubicOut }}
	>
		<div
			in:typewriter
			class="text-center text-lg font-extrabold sm:font-normal sm:text-4xl mb-6 sm:mb-8"
		>
			Welcome to the Sveltekit Pokedex!
		</div>

		<div class="flex flex-col items-center mb-2">
			<Atropos shadow={false} shadowScale={0} class="atropos" alwaysActive={false}>
				<img
					class="imgOne w-60 h-60 sm:w-96 sm:h-96"
					src="/masterballback.jpeg"
					alt="masterball icon background"
					data-atropos-offset="-5"
				/>
				<img
					class="imgTwo w-60 h-60 sm:w-96 sm:h-96"
					src="/masterball.png"
					alt="masterball icon"
					data-atropos-offset="5"
				/>
			</Atropos>
		</div>
		<GridCard>
			<CategoryCard link={'pokemoncategory'} title={'Pokedex'}>
				<img class="no-select w-5/12" src="/pokemonemblem.png" alt="something" />
			</CategoryCard>
			<CategoryCard link={'gamecategory'} title={'Games'}>
				<img class="no-select w-3/12" src="/SwordShield.png" alt="something" />
			</CategoryCard>
		</GridCard>
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
	.center {
		display: grid;
		place-content: center;
	}
	.imgTwo {
		position: absolute;
		top: 0;
		left: 0;
	}
</style>
