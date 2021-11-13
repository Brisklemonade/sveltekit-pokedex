<script lang="ts">
	export let link;
	export let title;
</script>

<a
	class="stripe-shadow py-6 rounded-xl sm:rounded-2xl text-center dark:border-2 dark:bg-[#282C31] dark:border-[#4D4D4D] active:bg-green-500 dark:active:bg-green-400 dark:shadow-none dark:hover:border-transparent hover:scale-95 transition-transform duration-150 ease-linear"
	href={`${link}`}
>
	<div class="flex flex-col items-center space-y-5">
		<slot />
		<p class="uppercase font-black">{title}</p>
	</div>
</a>

<style>
	a {
		user-select: none;
		-webkit-user-drag: none;
		-moz-user-select: none;
		-webkit-user-select: none;
		-ms-user-select: none;
	}
	.stripe-shadow {
		box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
	}
	.stripe-shadow:hover {
		box-shadow: rgba(16, 185, 129, 1) 0px 0px 1px 8px inset;
	}
</style>
