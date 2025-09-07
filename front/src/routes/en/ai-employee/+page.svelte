<script>
    import AIEmployeePage from '$lib/components/pages/aiEmployee.svelte'
    import { lang } from '$lib/stores/language';
    import localization from '$lib/localizations/seo.json';
    lang.set("en")
</script>

<svelte:head>
    <title>{localization.aiEmployee.title[$lang]}</title>
    <meta name="description" content={localization.aiEmployee.description[$lang]}>
    <link rel="canonical" href="https://neocall.ai/en/ai-employee/">
    <link rel="alternate" href="https://neocall.ai/en/ai-employee/" hreflang="en">
    <link rel="alternate" href="https://neocall.ai/de/ai-employee/" hreflang="de">
</svelte:head>

<AIEmployeePage />