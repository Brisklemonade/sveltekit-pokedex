<script>
	import Icon from 'svelte-awesome';
	import { longArrowLeft } from 'svelte-awesome/icons';
	import ThreeDButton from '../components/utility/ThreeDButton.svelte';
</script>

<svelte:head>
	<title>Games</title>
</svelte:head>

<div class="mt-52 sm:mx-">
	<p class="text-center text-xl sm:text-3xl animate-pulse mb-5">
		Page under development check back later...
	</p>
	<a href="/">
		<ThreeDButton>
			<Icon scale={2} data={longArrowLeft} />
			<p class="font-black text-xl">Home</p>
		</ThreeDButton>
	</a>
</div>
