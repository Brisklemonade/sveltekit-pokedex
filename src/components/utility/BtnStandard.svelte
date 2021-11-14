<script lang="ts">
	export let func: any = undefined;
</script>

<button
	on:click={func}
	class="button-custom text-white w-full py-2 flex justify-center items-center rounded-lg bg-[#e786d7] dark:bg-[#7f7fd5]"
>
	<slot>Nothing to see here...</slot>
</button>

<style>
</style>
