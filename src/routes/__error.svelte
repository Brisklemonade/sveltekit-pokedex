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

<script>
	import PokeballSvg from '../components/utility/PokeballSVG.svelte';

	export let error;
	export let status;
	console.error(`There was an error ${status} ${error.message}`);
</script>

<div class="grid place-content-center mt-16 sm:mt-52">
	{#if status >= 500}
		<div class="flex flex-col items-center sm:flex-row sm:items-center sm:space-x-10">
			<div class="text-center sm:flex-col sm:items-baseline sm:mb-10 sm:animate-pulse">
				<h1 class="text-6xl sm:text-8xl">OOPS</h1>
				<h2 class="text-3xl sm:text-4xl">Error {status}</h2>
			</div>
			<PokeballSvg className={'sm:hidden animate-spin'} fill={'#10b981'} size={120} />
			<PokeballSvg className={'hidden sm:block sm:animate-spin'} fill={'#10b981'} size={216} />
		</div>
		<div class="text-center sm:text-left">
			<p class="text-lg font-light sm:text-3xl">Sorry the server made an oopsie</p>
			<p class="text-lg font-light sm:text-3xl">
				Check your connection, then find your way back to the <a
					class="underline text-green-500 dark:text-green-400"
					href="/">Homepage</a
				>.
			</p>
		</div>
	{:else if status > 400}
		<div class="flex flex-col items-center sm:flex-row sm:items-center sm:space-x-10">
			<div class="text-center sm:flex-col sm:items-baseline sm:mb-10 sm:animate-pulse">
				<h1 class="text-6xl sm:text-9xl">Uh Oh</h1>
				<h2 class="text-3xl sm:text-4xl">{status} Page Not Found</h2>
			</div>
			<PokeballSvg className={'sm:hidden animate-spin'} fill={'#10b981'} size={120} />
			<PokeballSvg className={'hidden sm:block sm:animate-spin'} fill={'#10b981'} size={216} />
		</div>
		<div class="text-center sm:text-left">
			<p class="text-lg font-light sm:text-3xl">Sorry but this page sadly doesn't exist</p>
			<p class="text-lg font-light sm:text-3xl">
				You should find your way back to the <a
					class="underline text-green-500 dark:text-green-400"
					href="/">Homepage</a
				>
			</p>
		</div>
	{:else}
		<h1>Error {status}</h1>
	{/if}
</div>
