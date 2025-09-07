<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import { onMount } from 'svelte';
	import { lang } from '$lib/stores/language';

	onMount(() => {
		document.documentElement.setAttribute("lang", $lang);
	});
	
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<link rel="alternate icon" href="/favicon.ico">
</svelte:head>

{@render children?.()}
