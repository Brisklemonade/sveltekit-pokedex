<script context="module">
	export async function load({ page }) {
		const id = page.params.id;
		// urls
		const pokemonURL = `https://pokeapi.co/api/v2/pokemon/${id}`;
		const locationURL = `https://pokeapi.co/api/v2/pokemon/${id}/encounters`;
		// fetch responses
		const pokemonRES = await fetch(pokemonURL);
		const locationRES = await fetch(locationURL);
		// props
		const pokemanLocation = await locationRES.json();
		const pokeman = await pokemonRES.json();
		return { props: { pokeman, pokemanLocation } };
	}
</script>

<script>
	export let pokeman;
	export let pokemanLocation;

	const type = pokeman.types[0].type.name;
	const pokemanName = pokeman.name;
	const capitalizeFirstLetter = (pokemanName) => {
		return pokemanName.charAt(0).toUpperCase() + pokemanName.slice(1);
	};

	let scrollElement;
	const horizontalScroll = (e) => {
		scrollElement.scrollLeft += e.deltaY;
	};
</script>

<svelte:head>
	<title>{capitalizeFirstLetter(pokemanName)} Details</title>
</svelte:head>

<div class="flex flex-col items-center">
	<!-- title -->
	<h1 class="text-4xl text-center my-8 uppercase">{pokeman.name}</h1>
	<!-- content -->
	<div
		class="stripe-shadow flex flex-col lg:flex-row w-11/12 lg:w-full rounded-3xl border dark:border-white"
	>
		<!-- image div -->
		<div class="rounded-tl-3xl lg:border-r-2 lg:border-gray-300">
			<img
				class="w-52 h-52 lg:m-0 lg:w-80 lg:h-80 mx-auto lg:rounded-tl-3xl lg:rounded-bl-3xl"
				src={pokeman.sprites['front_default']}
				alt={pokeman.name}
			/>
		</div>
		<!-- main content div -->
		<div class="flex flex-col sm:mx-auto">
			<h3 class="mx-auto text-lg sm:text-2xl my-4 lg:my-2 uppercase">
				Locations {pokeman.name} can be found
			</h3>
			<div
				bind:this={scrollElement}
				on:mousewheel|preventDefault={(e) => horizontalScroll(e)}
				class="location-list flex flex-col flex-nowrap text-center mb-6 sm:flex-row space-y-3 sm:space-y-0 sm:space-x-10 sm:items-center max-w-lg overflow-x-scroll"
			>
				{#each pokemanLocation as location}
					<span class="">{location['location_area'].name}</span>
				{/each}
			</div>
			<p class="mx-auto">
				Type: <strong>{type}</strong> | Height: <strong>{pokeman.height}</strong> | Weight:
				<strong>{pokeman.weight}</strong>
			</p>
		</div>
	</div>
</div>

<style>
	.stripe-shadow {
		box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
	}
	.location-list::-webkit-scrollbar {
		display: none;
	}
	.location-list {
		-ms-overflow-style: none;
		scrollbar-width: none;
	}
</style>
