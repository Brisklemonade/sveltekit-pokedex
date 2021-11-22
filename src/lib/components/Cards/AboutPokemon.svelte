<script lang="ts">
	export let about;
</script>

<div class="text-center">
	<div class="flex items-center justify-between w-max">
		<slot name="icon" />
		<p class="pl-2 capitalize">{about.property}</p>
	</div>
	<p class="text-center capitalize font-thin">{about.title}</p>
</div>
