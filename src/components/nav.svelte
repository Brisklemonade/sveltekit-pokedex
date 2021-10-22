<script>
	export let dark;
</script>

<nav
	class="w-full h-16 shadow-md dark:shadow-none dark:border-b border-[#4D4D4D] bg-white dark:bg-[#282C31]"
>
	<div class="flex justify-between items-center mx-4 md:mx-32 pt-3">
		<span class="uppercase md:text-xl lg:text-3xl">Svelte Kit Pokedex</span>
		<div class="mx-4">
			<a class="mx-4 text-lg" href="/">Home</a>
			<a class="mx-4 text-lg" href="/about">About</a>
			<button
				class="text-white rounded-lg w-20 py-1 dark:border-2 dark:border-white bg-green-400"
				on:click|preventDefault={() => {
					dark = !dark;
				}}
				>{dark ? 'DARK' : 'LIGHT'}
			</button>
		</div>
	</div>
</nav>
