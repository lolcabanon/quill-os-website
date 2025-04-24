<script>
	import '$lib/scss/styles.scss';
	// import 'sanitize.css';

	import Header from './Header.svelte';
	import Navigation from './Navigation.svelte';
	import Footer from './Footer.svelte';

	let { children } = $props();
</script>

<Header />

<Navigation />

{@render children?.()}

<Footer />
