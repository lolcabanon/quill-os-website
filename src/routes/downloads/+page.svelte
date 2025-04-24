<script>
	import Container from '../Container.svelte';
</script>

<Container>
	<h1>Download Quill OS</h1>

	<p>
		This page contains direct download links for Quill OS. Once you have downloaded the file you
		need (see below), please follow the <a href="/installation">installation steps</a>.
	</p>

	<p>
		To check the model number, look at the bottom or back of your eReader. If your model number is
		not on this page, unfortunately your eReader is not supported by Quill OS at this time.
	</p>

	<p>
		<strong>
			IMPORTANT: Quill OS does NOT provide ANY WARRANTY at all and we are not responsible if you
			brick your device with one of the images below. <a
				href="https://github.com/Kobo-InkBox/inkbox/blob/master/LEGAL.md"
				target="_blank">Details here.</a
			>
		</strong>
	</p>

	<p>
		To see whether Quill OS can be ported or not to your eReader, visit the <a
			href="https://discord.gg/xWUVRgMdsv"
			target="_blank">Discord server</a
		>
		or the <a href="https://github.com/Kobo-InkBox/inkbox" target="_blank">GitHub repository</a>.
	</p>

	<hr />

	<h2>Currently available images</h2>

	<table>
		<tbody>
			<tr>
				<td>Kobo Mini (N705):</td>

				<td>
					<a
						href="http://23.163.0.39/bundles/inkbox/native/n705/inkbox-2.0-n705.xz"
						target="_blank"
					>
						Download Quill OS <strong>2.0</strong> (inkbox-2.0-n705.xz)
					</a>
				</td>

				<td>
					<a
						href="http://pkgs-inkbox.duckdns.org:25560/bundles/inkbox/native/n705/inkbox-2.0-n705.xz"
						target="_blank"
					>
						Mirror
					</a>
				</td>
			</tr>

			<tr>
				<td>Kobo Touch (N905B):</td>

				<td>
					<a
						href="http://23.163.0.39/bundles/inkbox/native/n905b/inkbox-2.0-n905b.xz"
						target="_blank"
					>
						Download Quill OS <strong>2.0</strong> (inkbox-2.0-n905b.xz)
					</a>
				</td>

				<td>
					<a
						href="http://pkgs-inkbox.duckdns.org:25560/bundles/inkbox/native/n905b/inkbox-2.0-n905b.xz"
						target="_blank"
					>
						Mirror
					</a>
				</td>
			</tr>

			<tr>
				<td>Kobo Touch (N905C):</td>

				<td>
					<a
						href="http://23.163.0.39/bundles/inkbox/native/n905c/inkbox-2.0-n905c.xz"
						target="_blank"
					>
						Download Quill OS <strong>2.0</strong> (inkbox-2.0-n905c.xz)
					</a>
				</td>

				<td>
					<a
						href="http://pkgs-inkbox.duckdns.org:25560/bundles/inkbox/native/n905c/inkbox-2.0-n905c.xz"
						target="_blank"
					>
						Mirror
					</a>
				</td>
			</tr>

			<tr>
				<td>Kobo Glo (N613):</td>

				<td>
					<a
						href="http://23.163.0.39/bundles/inkbox/native/n613/inkbox-2.0-n613.xz"
						target="_blank"
					>
						Download Quill OS <strong>2.0</strong> (inkbox-2.0-n613.xz)
					</a>
				</td>

				<td>
					<a
						href="http://pkgs-inkbox.duckdns.org:25560/bundles/inkbox/native/n613/inkbox-2.0-n613.xz"
						target="_blank"
					>
						Mirror
					</a>
				</td>
			</tr>

			<tr>
				<td>Kobo Aura SE (N236):</td>

				<td>
					<a
						href="http://23.163.0.39/bundles/inkbox/native/n236/inkbox-2.0-n236.xz"
						target="_blank"
					>
						Download Quill OS <strong>2.0</strong> (inkbox-2.0-n236.xz)
					</a>
				</td>

				<td>
					<a
						href="http://pkgs-inkbox.duckdns.org:25560/bundles/inkbox/native/n236/inkbox-2.0-n236.xz"
						target="_blank"
					>
						Mirror
					</a>
				</td>
			</tr>

			<tr>
				<td>Kobo Glo HD (N437):</td>

				<td>
					<a
						href="http://23.163.0.39/bundles/inkbox/native/n437/inkbox-2.0-n437.xz"
						target="_blank"
					>
						Download Quill OS <strong>2.0</strong> (inkbox-2.0-n437.xz)
					</a>
				</td>

				<td>
					<a
						href="http://pkgs-inkbox.duckdns.org:25560/bundles/inkbox/native/n705/inkbox-2.0-n437.xz"
						target="_blank"
					>
						Mirror
					</a>
				</td>
			</tr>

			<tr>
				<td>Kobo Nia model A (N306):</td>

				<td>
					<a
						href="http://23.163.0.39/bundles/inkbox/native/n306/inkbox-2.0-n306_a.xz"
						target="_blank"
					>
						Download Quill OS <strong>2.0</strong> (inkbox-2.0-n306_a.xz)
					</a>
				</td>

				<td>
					<a
						href="http://pkgs-inkbox.duckdns.org:25560/bundles/inkbox/native/n306/inkbox-2.0-n306_a.xz"
						target="_blank"
					>
						Mirror
					</a>
				</td>
			</tr>
		</tbody>
	</table>

	<!-- <p>Kobo Libra (N873): Image available on <a href="https://discord.gg/xWUVRgMdsv">request</a> only with guidance.</p>
    <p>Kindle Touch original (KT): Image available on <a href="https://discord.gg/xWUVRgMdsv">request</a> only with guidance.</p> -->

	<h2>sha256 checksums</h2>

	<a href="http://23.163.0.39/bundles/inkbox/native/2.0-checksums.txt" target="_blank"
		>2.0 release</a
	>

	<p class="small">
		<i
			>Huge thanks to <a href="https://github.com/fermino/" target="_blank">@fermino</a> for hosting.</i
		>
	</p>
</Container>

<style lang="scss">
	.small {
		font-size: 0.8rem;
	}

	table {
		width: 100%;

		tr {
			border: 0.25em solid lightgray;
		}

		td {
			padding: 0.5em;
		}
	}
</style>
