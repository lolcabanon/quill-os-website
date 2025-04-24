<script>
	import { base } from '$app/paths';
</script>

<div class="center">
	<a class="logo" href="{base}/">
		<img src="{base}/assets/quillos-web.png" alt="Quill OS logo" width="125" height="125" />
	</a>
</div>

<hr />

<ul>
	<li>
		<a href="{base}/">Home</a>
	</li>

	<li>
		<a href="{base}/downloads">Download</a>
	</li>

	<li>
		<a href="{base}/installation">Installation</a>
	</li>

	<li>
		<a href="https://github.com/Quill-OS" target="_blank">GitHub</a>
	</li>

	<li>
		<a href="https://github.com/Quill-OS/quill/wiki" target="_blank">Wiki</a>
	</li>

	<li>
		<a href="{base}/screenshots">Screenshots</a>
	</li>

	<li>
		<a href="{base}/donate">Donate</a>
	</li>
</ul>

<hr />

<style lang="scss">
	.logo {
		display: inline-block;
		padding: 0.5em;
	}

	hr {
		width: calc(100% - 1em);
	}

	ul {
		display: flex;
		justify-content: center;

		font-family: 'Roboto Mono', monospace;
		font-weight: bold;

		list-style-type: none;
	}

	li {
		a {
			padding: 0 1em;
		}
	}
</style>
