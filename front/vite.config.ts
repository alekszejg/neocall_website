import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
	server: {
		proxy: {
			"/api": "http://localhost:3000"
		}
	},
	plugins: [
		sveltekit(),
		tailwindcss(),
	],
	build: {
		outDir: 'dist'
	}
});
