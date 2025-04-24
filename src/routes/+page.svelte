<script>
	import Container from './Container.svelte';
</script>

<svelte:head>
	<title>Quill OS - Homepage</title>
</svelte:head>

<h1>Quill OS</h1>

<p class="wow">
	Quill OS is an open-source, fully-functional standalone OS for Rakuten Kobo's eReaders.
</p>

<Container>
	<h2>Overview</h2>

	<img src="/assets/screenshots/home-2.png" width="600" height="800" alt="Quill OS" />

	<h2>Features</h2>

	<div class="features">
		<p class="features">Here are some of Quill OS' features :</p>

		<ul>
			<li>Fully integrated KoBox X11 subsystem</li>
			<li>ePUB, PDF, picture and plain text display support</li>
			<li>Versatile configuration options for reading</li>
			<li>muPDF rendering engine for ePUBs and PDFs</li>
			<li>Wi-Fi support and web browser</li>
			<li>Encrypted storage with EncFS</li>
			<li>Fast dictionary & local storage search</li>
			<li>Dark mode</li>
			<li>Full factory reset option if needed</li>
			<li>Seamless update process</li>
			<li>VNC viewer app</li>
			<li>Search function</li>
			<li>10 built-in fonts</li>
			<li>Auto-suspend</li>
			<li>Lock screen/passcode</li>
			<li>User-friendly experience</li>
		</ul>
	</div>
</Container>

<style lang="scss">
	.wow {
		font-size: 2rem;
		text-align: center;
		margin: 0;
		padding: 1.5em;

		background-color: white;

		box-shadow: 0px 6px 12px -4px hsl(0, 0%, 80%);
	}

	h2 {
		text-align: center;
	}

	img {
		width: 100%;
		height: auto;
	}

	.features {
		font-size: 1.4rem;

		p {
			font-weight: bold;
		}

		ul {
			list-style-type: ' 📚 ';
		}
	}
</style>
