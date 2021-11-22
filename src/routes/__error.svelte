<script context="module">
	export function load({ error, status }) {
		return {
			props: {
				error,
				status
			}
		};
	}
</script>

<script lang="ts">
	import PageTitle from '$lib/components/PageTitle.svelte';
	import PokeballSvg from '../components/utility/PokeballSVG.svelte';

	export let error;
	export let status: number;
	console.error(`There was an error ${status} ${error.message}`);
</script>

<svelte:head>
	{#if status >= 500}
		<title>Internal Server Error</title>
	{:else}
		<title>Page Not Found</title>
	{/if}
</svelte:head>

<PageTitle title={'There has been a mistake'} />
<div
	class="grid place-content-center mx-auto p-5 shadow-lg rounded-md border-2 border-[#e786d7] dark:border-[#7f7fd5] sm:mt-28 sm:max-w-2xl sm:min-h-[50%]"
>
	{#if status >= 500}
		<div class="flex flex-col items-center sm:flex-row sm:items-center sm:space-x-10 sm:mx-auto">
			<div class="text-center sm:flex-col sm:items-baseline sm:mb-10 sm:animate-pulse">
				<h1 class="text-6xl font-medium sm:text-8xl">OOPS</h1>
				<h2 class="text-3xl font-bold sm:text-4xl">Error {status}</h2>
			</div>
			<PokeballSvg className={'sm:hidden animate-spin'} fill={'#e786d7'} size={120} />
			<PokeballSvg className={'hidden sm:block sm:animate-spin'} fill={'#e786d7'} size={216} />
		</div>
		<div class="mt-4 text-center sm:mt-8 sm:text-left sm:space-y-4">
			<p class="text-lg font-light sm:text-3xl">Sorry the server made an oopsie</p>
			<p class="text-lg font-light sm:text-3xl">Try refreshing the page</p>
			<p class="text-lg font-light sm:text-3xl">
				Or check your connection, then find your way back to the <a
					class="underline text-[#e786d7] dark:text-[#7f7fd5]"
					href="/">Homepage</a
				>
			</p>
		</div>
	{:else if status > 400}
		<div class="flex flex-col items-center sm:flex-row sm:items-center sm:space-x-10">
			<div class="text-center sm:flex-col sm:items-baseline sm:mb-10 sm:animate-pulse">
				<h1 class="text-6xl sm:text-9xl">Uh Oh</h1>
				<h2 class="text-3xl sm:text-4xl">{status} Page Not Found</h2>
			</div>
			<PokeballSvg className={'sm:hidden animate-spin'} fill={'#e786d7'} size={120} />
			<PokeballSvg className={'hidden sm:block sm:animate-spin'} fill={'#e786d7'} size={216} />
		</div>
		<div class="text-center sm:text-left">
			<p class="text-lg font-light sm:text-3xl">Sorry but this page sadly doesn't exist</p>
			<p class="text-lg font-light sm:text-3xl">
				You should find your way back to the <a
					class="underline text-[#e786d7] dark:text-[#7f7fd5]"
					href="/">Homepage</a
				>
			</p>
		</div>
	{:else}
		<h1>Error {status}</h1>
	{/if}
</div>

<style>
</style>
