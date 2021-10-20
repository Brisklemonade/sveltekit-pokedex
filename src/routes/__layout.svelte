<script>
	import Navbar from '../components/nav.svelte';

	let dark = true;
</script>

<div class:dark>
	<div class="min-h-screen bg-white dark:bg-[#282C31] dark:text-white">
		<Navbar bind:dark />
		<div class="p-8 max-w-6xl mx-auto">
			<slot />
		</div>
	</div>
</div>

<style>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>
