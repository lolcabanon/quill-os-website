<script>
	import { Bitcoin, Wallet, CreditCard } from 'lucide-svelte';

	import Container from '../Container.svelte';
</script>

<svelte:head>
	<title>Quill OS - Donate</title>
</svelte:head>

<h1>Donate to Quill OS</h1>

<Container>
	<p>
		I am currently the only one actively working on the Quill OS project: donations are very
		welcome.
	</p>

	<p>
		If you want a particular device to get ported but don't have the skills to do it yourself, a
		donation can financially motivate me to buy it and try my best to port it.
	</p>

	<h2>Links</h2>

	<p>
		<CreditCard />
		<a href="https://paypal.me/inkboxos/" target="_blank">PayPal</a>
	</p>

	<p>
		<Wallet />
		<a href="https://fr.liberapay.com/tux-linux/" target="_blank">LiberaPay</a>
	</p>

	<p>
		<Bitcoin />
		<strong>Bitcoin :</strong> 3MmXq5o78b4C7ub5sb7F5WVC86jzc6PzSN
	</p>
</Container>
