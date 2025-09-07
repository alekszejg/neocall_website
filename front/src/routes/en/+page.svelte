<script>
    import Homepage from '$lib/components/pages/homepage.svelte'
    import { lang } from '$lib/stores/language';
    import localization from '$lib/localizations/seo.json';
    lang.set("en")
</script>

<svelte:head>
    <title>{localization.homepage.title[$lang]}</title>
    <meta name="description" content={localization.homepage.description[$lang]}>
    <link rel="canonical" href="https://neocall.ai/en/">
    <link rel="alternate" href="https://neocall.ai/en/" hreflang="en">
    <link rel="alternate" href="https://neocall.ai/de/" hreflang="de">
</svelte:head>


<Homepage />



