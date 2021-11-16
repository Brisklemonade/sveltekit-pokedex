<script lang="ts">
	import Icon from 'svelte-awesome';
	import { slide } from 'svelte/transition';
	import { close, bars } from 'svelte-awesome/icons';
	import PokeballSVG from './utility/PokeballSVG.svelte';

	// props
	export let dark: string | boolean;

	// variables
	let showNavModal: boolean = false;

	const navLinks = [
		{ title: 'Home', link: '/' },
		{ title: 'About', link: '/about' }
	];

	// functionality
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
				class="hidden sm:block uppercase font-bold tracking-wide text-[#e786d7] dark:text-[#7f7fd5] md:text-xl lg:text-3xl rounded-md  p-1 hover:bg-[#e786d7] hover:text-white dark: dark:hover:bg-[#7f7fd5] dark:hover:text-white transition-all duration-250 ease-linear"
				>Svelte Kit Pokedex</a
			>
			{#if dark}
				<a href="/" class="sm:hidden">
					<PokeballSVG className={'inline-block'} fill={'#7f7fd5'} size={36} />
				</a>
			{:else}
				<a href="/" class="sm:hidden">
					<PokeballSVG className={'inline-block'} fill={'#e786d7'} size={36} />
				</a>
			{/if}
		</div>
		<div class="mx-4 flex items-center space-x-5">
			{#each navLinks as links}
				<a
					class="hidden sm:inline-block text-lg mx-4 hover:text-[#e786d7] dark:hover:text-[#7f7fd5] hover:underline"
					href={links.link}>{links.title}</a
				>
			{/each}
			<button
				class="ani text-white font-bold rounded-md w-20 py-1 "
				on:click|preventDefault={() => {
					dark = !dark;
				}}
				>{dark ? 'DARK' : 'LIGHT'}
			</button>
			<button on:click={toggleModal} class="sm:hidden">
				{#if showNavModal}
					<div class="w-7">
						<Icon class="text-[#e786d7]" scale={2} data={close} />
					</div>
				{:else}
					<div class="w-7">
						<Icon class="text-[#e786d7]" scale={2} data={bars} />
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
						? 'block text-3xl transition-colors duration-150 ease-linear hover:text-[#e786d7] dark:hover:text-[#7f7fd5]'
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
	.ani {
		animation: flow 4s ease-in-out infinite;
		background: linear-gradient(-75deg, #7f7fd5, #e786d7);
		background-size: 200%;
	}
	@keyframes flow {
		0% {
			background-position: 0 50%;
		}
		50% {
			background-position: 90% 75%;
		}
		100% {
			background-position: 0 50%;
		}
	}
</style>
