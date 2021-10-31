<script>
	import Icon from 'svelte-awesome';
	import { close, bars } from 'svelte-awesome/icons';
	export let dark;

	let showNavModal = false;
	const toggleModal = () => {
		showNavModal = !showNavModal;
	};
</script>

<nav
	class="w-full h-16 shadow-md dark:shadow-none dark:border-b border-[#4D4D4D] bg-white dark:bg-[#282C31]"
>
	<div class="flex justify-between items-center mx-4 md:mx-32 pt-3">
		<a href="/" class="text-green-500 dark:text-green-400 uppercase md:text-xl lg:text-3xl"
			>Svelte Kit Pokedex</a
		>
		<div class="mx-4 flex items-center space-x-5">
			<a class="hidden sm:inline-block text-lg mx-4" href="/">Home</a>
			<a class="hidden sm:inline-block text-lg mx-4" href="/about">About</a>
			<button
				class="text-white rounded-lg w-20 py-1 border-2 dark:border-white bg-green-400"
				on:click|preventDefault={() => {
					dark = !dark;
				}}
				>{dark ? 'DARK' : 'LIGHT'}
			</button>
			<button on:click={toggleModal} class="sm:hidden">
				{#if showNavModal}
					<div class="w-7">
						<Icon scale="2" data={close} />
					</div>
				{:else}
					<div class="w-7">
						<Icon scale="2" data={bars} />
					</div>
				{/if}
			</button>
		</div>
	</div>
</nav>
<div
	class={showNavModal
		? 'w-full h-32 shadow-md border-t-2 border-gray-100 dark:border-none dark:shadow-2xl bg-white dark:bg-[#282C31]'
		: 'hidden'}
>
	<div class="text-center">
		<a on:click={toggleModal} class={showNavModal ? 'block text-3xl' : 'hidden'} href="/">Home</a>
		<a on:click={toggleModal} class={showNavModal ? 'block text-3xl' : 'hidden'} href="/about"
			>About
		</a>
	</div>
</div>

<style>
</style>
