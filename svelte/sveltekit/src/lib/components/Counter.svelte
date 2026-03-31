<script>
	let Counter = null;
	
	// Import the component dynamically (client-side only)
	import { onMount } from 'svelte';
	
	onMount(async () => {
		const module = await import('$lib/components/Counter.svelte');
		Counter = module.default;
	});
</script>

<div class="demo">
	<h2>Reusable Component</h2>
	{#if Counter}
		<svelte:component this={Counter} />
	{/if}
</div>

<style>
	.demo {
		margin-top: 2rem;
	}
</style>
