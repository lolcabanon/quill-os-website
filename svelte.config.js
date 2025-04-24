import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-static';
import { sveltePreprocess } from 'svelte-preprocess';

const config = {
	kit: { adapter: adapter() },
	preprocess: [
		sveltePreprocess({
			scss: true
		}),
		mdsvex()
	],
	extensions: ['.svelte', '.svx']
};

export default config;
