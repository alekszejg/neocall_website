<script>
    import Navbar from '$lib/components/navbar.svelte';
    import Form from '$lib/components/form.svelte';
    import Footer from '$lib/components/footer.svelte';
    import { lang } from '$lib/stores/language';
    import localization from '$lib/localizations/seo.json';
    lang.set("de")
</script>

<svelte:head>
    <title>{localization.industries.hvac.title[$lang]}</title>
    <meta name="description" content={localization.industries.hvac.description[$lang]}>
    <link rel="canonical" href="https://neocall.ai/de/hvac-plumbing/">
    <link rel="alternate" href="https://neocall.ai/en/hvac-plumbing/" hreflang="en">
    <link rel="alternate" href="https://neocall.ai/de/hvac-plumbing/" hreflang="de">
</svelte:head>

<Navbar />
<Form />
<Footer />