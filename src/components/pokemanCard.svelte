<script>
	import { fade } from 'svelte/transition';
	export let pokeman;
</script>

<a
	class="stripe-shadow p-6 dark:border-2 dark:bg-[#282C31] dark:border-[#4D4D4D] text-center rounded-md shadow-sm hover:shadow-md flex flex-col items-center"
	href={`/pokemon/${pokeman.id}`}
	in:fade
>
	<img class="h-40 w-40" src={pokeman.image} alt={pokeman.name} />
	<h2 class="uppercase text-2xl">{pokeman.id}. {pokeman.name}</h2>
</a>

<style>
	.stripe-shadow {
		box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
	}
</style>
