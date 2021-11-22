<script lang="ts">
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';
	import { capitalizeFirstLetter } from '$lib/utils/functions';

	export let title: string | undefined = undefined;
	export let base: number | undefined = undefined;
	export let abbr: string | undefined = undefined;
	export let pokemanColor: string | undefined = undefined;

	let progressBarColor: string = pokemanColor;

	const progress = tweened(base, {
		duration: 1000,
		easing: cubicOut
	});
</script>

<div class="flex items-center">
	<p style="color:{pokemanColor};" class="uppercase text-right cursor-default w-14 mr-4">
		<strong> <abbr title={capitalizeFirstLetter(title)}>{abbr}</abbr></strong>
	</p>
	<div class="flex items-center w-full space-x-2">
		<p>{`${base}`.padStart(3, '0')}</p>
		<progress style="--pokemon-color:{progressBarColor};" value={$progress} max={200} />
	</div>
</div>

<style>
	abbr {
		text-decoration: none;
	}
	progress {
		width: 100%;
		border-radius: 4px;
		height: 4px;
	}
	progress::-webkit-progress-bar {
		background: linear-gradient(to top, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6))
			var(--pokemon-color);

		border-radius: 4px;
	}
	progress::-webkit-progress-value {
		background-color: var(--pokemon-color);
		border-radius: 4px;
	}
</style>
