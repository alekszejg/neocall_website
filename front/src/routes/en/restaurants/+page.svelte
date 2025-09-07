<script>
    import RestaurantsPage from '$lib/components/pages/restaurants.svelte'
    import { lang } from '$lib/stores/language';
    import localization from '$lib/localizations/seo.json';
    lang.set("en")
</script>

<svelte:head>
    <title>{localization.industries.restaurants.title[$lang]}</title>
    <meta name="description" content={localization.industries.restaurants.description[$lang]}>
    <link rel="canonical" href="https://neocall.ai/en/restaurants/">
    <link rel="alternate" href="https://neocall.ai/en/restaurants/" hreflang="en">
    <link rel="alternate" href="https://neocall.ai/de/restaurants/" hreflang="de">
</svelte:head>

<RestaurantsPage />