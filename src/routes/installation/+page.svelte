<script>
	import { base } from '$app/paths';
	import Container from '../Container.svelte';
</script>

<svelte:head>
	<title>Quill OS - Installation</title>
</svelte:head>

<h1>Quill OS installation</h1>

<Container>
	<p>There are 3 steps to install Quill OS on your eReader :</p>

	<ol>
		<li>download</li>
		<li>flash</li>
		<li>setup</li>
	</ol>

	<p>
		To download Quill OS, visit the <a href="{base}/downloads">Downloads</a> page.
	</p>

	<p>
		To flash Quill OS to your eReader, take out the <strong>internal</strong> MicroSD card by taking
		off the back cover (be careful!). It <strong>must</strong> have at least 4 gigabytes of capacity.
		Insert the card into your computer.
	</p>

	<p>
		On Windows, use <a href="https://balena.io/etcher" target="_blank">balenaEtcher</a> to flash the
		Quill OS image file to the MicroSD card.
	</p>

	<p>
		On Linux and MacOS, balenaEtcher is the easiest option for command-line-reluctant users.
		Alternatively, you can also open a terminal and check the device node of the eReader's MicroSD
		card with <code>fdisk -l</code>. Then, write the image to the SD card, like this:
		<code>xzcat inkbox.xz | dd of=/dev/mmcblk0</code>.
	</p>

	<p>
		To boot Quill OS, eject the MicroSD card from your computer and insert it in the Kobo's slot.
		Put the back cover on and power it on. It might take a while to boot, so be patient. Setting
		Quill OS up is easy; just follow the instructions on the screen.
	</p>

	<p>
		Once that is done, it is <strong>strongly recommended</strong> to
		<a href="http://23.163.0.39/bundles/inkbox/native/update/" target="_blank">update</a> to the latest
		version.
	</p>
</Container>

<style>
	ol {
		font-weight: bold;
	}
</style>
