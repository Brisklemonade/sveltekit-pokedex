<script lang="ts">
	import { Fractils } from 'fractils';
	import Navbar from '../components/Navbar.svelte';
	import 'atropos/css/min';
	let dark: string | boolean;
</script>

<div class:dark>
	<div class="min-h-screen bg-white dark:bg-[#282C31] dark:text-white">
		<Fractils />
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
