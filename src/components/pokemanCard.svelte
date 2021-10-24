<script>
	import { fade } from 'svelte/transition';
	export let pokeman;
</script>

<a
	class="stripe-shadow p-6 dark:border-2 dark:bg-[#282C31] dark:border-[#4D4D4D] text-center rounded-md shadow-sm hover:shadow-md flex flex-col items-center space-y-5"
	href={`/pokemon/${pokeman.id}`}
	in:fade
>
	<div class="circle-shadow  p-2 rounded-full dark:border-2 dark:border-gray-200">
		<img class="h-40 w-40" src={pokeman.image} alt={pokeman.name} />
	</div>
	<div class="text-2xl font-bold py-1 px-6 rounded-full border-2 border-black dark:border-white">
		#{pokeman.id < 10 ? `00${pokeman.id}` : pokeman.id < 100 ? `0${pokeman.id}` : pokeman.id}
	</div>
	<h2 class="uppercase text-2xl">{pokeman.name}</h2>
</a>

<style>
	.stripe-shadow {
		box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
	}
	.circle-shadow {
		box-shadow: inset 0 2px 6px 5px rgba(0, 0, 0, 0.1);
	}
</style>
