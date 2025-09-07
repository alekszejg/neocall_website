<script>
    import Navbar from '$lib/components/navbar.svelte';
    import Form from '$lib/components/form.svelte';
    import Footer from '$lib/components/footer.svelte';
    import { lang } from '$lib/stores/language';
    import localization from '$lib/localizations/seo.json';
    lang.set("en")
</script>

<svelte:head>
    <title>{localization.industries.dental.title[$lang]}</title>
    <meta name="description" content={localization.industries.dental.description[$lang]}>
    <link rel="canonical" href="https://neocall.ai/en/dental/">
    <link rel="alternate" href="https://neocall.ai/en/dental/" hreflang="en">
    <link rel="alternate" href="https://neocall.ai/de/dental/" hreflang="de">
</svelte:head>



<Navbar />
<Form />
<Footer />