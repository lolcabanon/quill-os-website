<script>
	import '$lib/scss/styles.scss';
	// import 'sanitize.css';

	import Header from './Header.svelte';
	import Navigation from './Navigation.svelte';
	import Footer from './Footer.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<script
		async
		src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8152735988840418"
		crossorigin="anonymous"
	></script>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Bitter:ital,wght@0,500;0,700;1,500;1,700&family=Roboto+Mono:ital,wght@0,400;0,700;1,400;1,700&family=Roboto:ital,wght@0,400;0,700;1,400;1,700&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<Header />

<Navigation />

{@render children?.()}

<Footer />
