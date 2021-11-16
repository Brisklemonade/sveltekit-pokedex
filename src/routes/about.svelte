<script lang="ts">
	import Atropos from 'atropos/svelte';
	import { fade } from 'svelte/transition';
	import { cubicIn, cubicOut } from 'svelte/easing';
	import PageTitle from '$lib/components/PageTitle.svelte';
</script>

<svelte:head>
	<title>About the Svelte Kit Pokedex</title>
</svelte:head>

<div in:fade={{ duration: 700, easing: cubicIn }} out:fade={{ duration: 300, easing: cubicOut }}>
	<div class="flex flex-col items-center">
		<PageTitle title={'About'} />
		<div class="atropos my-4">
			<Atropos shadowScale={0} shadow={false} rotateTouch={(true, 'scroll-y')}>
				<img
					class="poke-atropos"
					src="/masterball.png"
					alt="PokeBall Icon"
					data-atropos-offset="5"
				/>
			</Atropos>
		</div>
	</div>
	<div class="text-center text-lg w-3/5 mx-auto space-y-8 mt-10">
		<p class="">
			This project is being developed to catalogue and provide information regarding the various
			species of Pokémon featured in the Pokémon franchise
		</p>
		<p>
			This project is also being made to show the power of the <a
				class="text-[#FF3E00] dark:text-yellow-500"
				sveltekit:prefetch
				href="https://svelte.dev/"
				target="_blank"
				rel="noreferrer">Svelte</a
			> framework
		</p>
	</div>
</div>

<style>
	.atropos {
		width: max-content;
	}
	.poke-atropos {
		width: 20rem;
		height: 20rem;
	}
</style>
