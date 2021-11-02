<script>
	export let link;
	export let title;
</script>

<a
	class="stripe-shadow py-6 rounded-xl sm:rounded-2xl text-center dark:border-2 dark:bg-[#282C31] dark:border-[#4D4D4D] active:bg-green-500 dark:active:bg-green-400 hover:shadow-2xl transition-all duration-200 ease-linear dark:shadow-none dark:hover:scale-90 dark:transition-all dark:duration-150 dark:ease-linear"
	href={`${link}`}
>
	<div class="flex flex-col items-center space-y-5">
		<slot />
		<p class="uppercase font-black">{title}</p>
	</div>
</a>

<style>
	.stripe-shadow {
		box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
	}
</style>
