<script>
	export let dark;

	const showNavModal = false;
	const toggleModal = () => {
		showNavModal = !showNavModal;
	};
</script>

<nav
	class="w-full h-16 shadow-md dark:shadow-none dark:border-b border-[#4D4D4D] bg-white dark:bg-[#282C31]"
>
	<div class="flex justify-between items-center mx-4 md:mx-32 pt-3">
		<a href="/" class="uppercase md:text-xl lg:text-3xl">Svelte Kit Pokedex</a>
		<div class="mx-4 flex items-center space-x-5">
			<a class="hidden sm:inline-block mx-4 text-lg" href="/">Home</a>
			<a class="hidden sm:inline-block mx-4 text-lg" href="/about">About</a>
			<button
				class="text-white rounded-lg w-20 py-1 dark:border-2 dark:border-white bg-green-400"
				on:click|preventDefault={() => {
					dark = !dark;
				}}
				>{dark ? 'DARK' : 'LIGHT'}
			</button>
			<button on:click={toggleModal} class="text-4xl sm:hidden">=</button>
		</div>
	</div>
</nav>
