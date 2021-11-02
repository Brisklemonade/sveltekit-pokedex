<script>
</script>

<div
	class="button-custom text-white w-full py-2 flex justify-center items-center space-x-2 rounded-lg bg-green-500 dark:bg-green-400 border-b-4 border-r-0 border-l-0 border-b-green-700/70 dark:border-b-green-600/70 border-t-0 hover:border-b-0 hover:border-t-4"
>
	<slot>Nothing to see here...</slot>
</div>

<style>
	.button-custom {
		transition: border-width 100ms linear;
		border-top-color: transparent;
	}
	.button-custom:hover {
		border-top-color: transparent;
	}
	.button-custom:active {
		transform: scale(0.9);
		transition: transform 200ms ease;
	}
</style>
