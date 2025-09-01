<script>
    import Navbar from '$lib/components/navbar.svelte';
    import Form from '$lib/components/form.svelte';
    import Footer from '$lib/components/footer.svelte';
    import { lang } from '$lib/stores/language';
    import localization from '$lib/localizations/aiEmployee.json';
</script>



    <div id="SITE_CONTAINER">
        <style id="STYLE_OVERRIDES_ID">
            #comp-lh50urgc2 {
                visibility: hidden !important;
            }

            #comp-lh541h5r2 {
                visibility: hidden !important;
            }

            body.is-touch .header-nav-list > ul {
                background: #fff var(--wpr-bg-5e434ccf-8ae8-44a5-b5cf-42b6e25b281b) no-repeat 50% 100% / 100% auto!important;
            }
        </style>
        <div id="main_MF" class="wix-global-css">
            <div id="BACKGROUND_GROUP" class="BACKGROUND_GROUP">
                <div id="BACKGROUND_GROUP_TRANSITION_GROUP">
                    <div id="pageBackground_c1dmp" data-media-height-override-type="" data-media-position-override="false" class="pageBackground_c1dmp BmZ5pC">
                        <div id="bgLayers_pageBackground_c1dmp" data-hook="bgLayers" class="MW5IWV">
                            <div data-testid="colorUnderlay" class="LWbAav Kv1aVt"></div>
                            <div id="bgMedia_pageBackground_c1dmp" class="VgO9Yg"></div>
                            <div data-testid="bgOverlay" class="m4khSP"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="site-root" class="site-root">
                <div id="masterPage" class="mesh-layout masterPage css-editing-scope">

<Navbar />
                                                                                                                                        
                                                                        
<main id="PAGES_CONTAINER" class="PAGES_CONTAINER " tabindex="-1" data-main-content="true">
    <div id="SITE_PAGES" data-page-transition="OutIn" class="JshATs SITE_PAGES">
        <div id="SITE_PAGES_TRANSITION_GROUP" class="fcNEqv">                                                                       	
            <section class="lpv3 lpv3-text-page-hero lpv3-text-page-hero--dark">
                <div class="lpv3-container">
                    <div class="lpv3-text-page-hero__inner">
                        <h1>
                            {localization.hero.header[$lang][0]}
                            <br>{localization.hero.header[$lang][1]}
                            <br>{localization.hero.header[$lang][2]}
                            <br>{localization.hero.header[$lang][3]}
                        </h1>
                    </div>
                    <div class="lpv3-text-page-hero__image">
                        <img src="/images/Newo-F4-Yara-mexican-russian-daveocean-1.png" alt="">
                    </div>
                </div>
            </section>
                                                                                 	
            <section class="lpv3 lpv3-text-content-page">
                <div class="lpv3-container">
                    <div class="lpv3-text-content-page__inner">
                        <div>
                            <h2>{localization.about.header1[$lang]}</h2>
                            <h3>{localization.about.header2[$lang]}</h3>
                            <p>{localization.about.text[$lang]}</p>
                            <p><img class="aligncenter wp-image-23102" src={$lang === "en" ? "/images/ai-agents-en.png" : "/images/ai-agents-de.png"} /></p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</main>     

<Form />
<Footer />
                                    </div>
            </div>
        </div>
    </div>
			