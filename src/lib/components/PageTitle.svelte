<script lang="ts">
	export let title: string = 'Page Title';
</script>

<div class="flex justify-center items-center space-x-4 mb-4">
	<h1 class="animate-text text-center uppercase text-4xl sm:text-7xl font-sans font-bold">
		{title}
	</h1>
	<slot />
</div>

<style>
	.animate-text {
		animation: flow 8s ease-in-out infinite;
		background: linear-gradient(-60deg, #7f7fd5, #e786d7);
		background-size: 200%;
		background-clip: inherit;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
	@keyframes flow {
		0% {
			background-position: 0 50%;
		}
		50% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0 50%;
		}
	}
</style>
