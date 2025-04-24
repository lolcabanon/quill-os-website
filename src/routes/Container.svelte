<script>
	let { children } = $props();
</script>

<div class="container">
	{@render children?.()}
</div>

<style>
	.container {
		margin-inline: auto;
		max-width: max(80ch, 700px);
	}
</style>
