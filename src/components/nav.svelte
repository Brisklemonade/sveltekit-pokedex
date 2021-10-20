<script>
	export let dark;
</script>

<nav
	class="flex justify-end items-center w-full h-16 shadow-md dark:shadow-none dark:border-b border-[#4D4D4D] bg-white dark:bg-[#282C31]"
>
	<div class="md:mr-32">
		<a class="mx-4 text-lg" href="/">Home</a>
		<a class="mx-4 text-lg" href="/about">About</a>
		<button
			class="text-white rounded-lg w-20 py-1 dark:border-2 dark:border-white bg-green-400"
			on:click|preventDefault={() => {
				dark = !dark;
			}}
			>{dark ? 'DARK' : 'LIGHT'}
		</button>
	</div>
</nav>
