<script>
	import Icon from 'svelte-awesome';
	import { slide } from 'svelte/transition';
	import { close, bars } from 'svelte-awesome/icons';
	import PokeballSVG from './utility/PokeballSVG.svelte';
	export let dark;

	const navLinks = [
		{ title: 'Home', link: '/' },
		{ title: 'About', link: '/about' }
	];

	let showNavModal = false;
	const toggleModal = () => {
		showNavModal = !showNavModal;
	};
</script>

<nav
	class="w-full h-16 shadow-md dark:shadow-none dark:border-b border-[#4D4D4D] bg-white dark:bg-[#282C31]"
>
	<div class="flex justify-between items-center mx-4 md:mx-32 pt-3">
		<div>
			<a
				href="/"
				class="hidden sm:block text-green-500 dark:text-green-400 uppercase md:text-xl lg:text-3xl"
				>Svelte Kit Pokedex</a
			>
			<a href="/" class="sm:hidden">
				<PokeballSVG className={'inline-block'} fill={'#10b981'} size={36} />
			</a>
		</div>
		<div class="mx-4 flex items-center space-x-5">
			<a
				class="hidden sm:inline-block text-lg mx-4 hover:text-green-500 dark:hover:text-green-400"
				href="/">Home</a
			>
			<a
				class="hidden sm:inline-block text-lg mx-4 hover:text-green-500 dark:hover:text-green-400"
				href="/about">About</a
			>
			<button
				class="text-white rounded-lg w-20 py-1 border-2 bg-green-500 dark:border-white dark:bg-green-400"
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
{#if showNavModal}
	<div
		transition:slide
		class={showNavModal
			? 'w-full h-32 shadow-md border-t-2 border-gray-100 dark:border-none dark:shadow-2xl bg-white dark:bg-[#282C31]'
			: 'hidden'}
	>
		<div class="text-center space-y-2">
			{#each navLinks as links}
				<a
					on:click={toggleModal}
					class={showNavModal
						? 'block text-3xl transition-colors duration-150 ease-linear hover:text-green-500 dark:hover:text-green-400'
						: 'hidden'}
					href={links.link}>{links.title}</a
				>
			{/each}
			<a
				on:click={toggleModal}
				class={showNavModal ? 'unclickable block text-3xl' : 'hidden'}
				href="/">Coming Soon</a
			>
		</div>
	</div>
{/if}

<style>
	.unclickable {
		pointer-events: none;
		cursor: not-allowed;
	}
</style>
