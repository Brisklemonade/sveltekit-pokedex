<script lang="ts">
	import Icon from 'svelte-awesome';
	import { longArrowLeft } from 'svelte-awesome/icons';
	import BtnStandard from '../components/utility/BtnStandard.svelte';
	import { fade } from 'svelte/transition';
	import { cubicIn, cubicOut } from 'svelte/easing';
</script>

<svelte:head>
	<title>Games</title>
</svelte:head>

<div in:fade={{ duration: 450, easing: cubicIn }} out:fade={{ duration: 200, easing: cubicOut }}>
	<div class="mt-52 sm:mx-">
		<p class="text-center text-xl sm:text-3xl animate-pulse mb-5">
			Page under development check back later...
		</p>
		<a href="/">
			<BtnStandard>
				<div class="space-x-3 flex items-center">
					<Icon data={longArrowLeft} scale={2} />
					<span class="text-xl font-bold">Home</span>
				</div>
			</BtnStandard>
		</a>
	</div>
</div>
