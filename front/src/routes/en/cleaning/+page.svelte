<script>
    import Navbar from '$lib/components/navbar.svelte';
    import Form from '$lib/components/form.svelte';
    import Footer from '$lib/components/footer.svelte';
    import { lang } from '$lib/stores/language';
    import localization from '$lib/localizations/seo.json';
    lang.set("en")
</script>

<svelte:head>
    <title>{localization.industries.cleaning.title[$lang]}</title>
    <meta name="description" content={localization.industries.cleaning.description[$lang]}>
    <link rel="canonical" href="https://neocall.ai/en/cleaning/">
    <link rel="alternate" href="https://neocall.ai/en/cleaning/" hreflang="en">
    <link rel="alternate" href="https://neocall.ai/de/cleaning/" hreflang="de">
</svelte:head>

<Navbar />
<Form />
<Footer />