<script>
  import { onMount } from 'svelte';
  import Navbar from '$lib/components/navbar.svelte';
  import Form from '$lib/components/form.svelte';
  import Footer from '$lib/components/footer.svelte';
  import { lang } from '$lib/stores/language';
  import localization from '$lib/localizations/restaurants.json';

  onMount(() => {
    // ✅ Copy stylesheets into document.head
    document.querySelectorAll('link[rel="stylesheet"], style').forEach(node => {
    document.head.appendChild(node.cloneNode(true));
    });

    // Convert <noscript> fallback images
    document.querySelectorAll('noscript').forEach(ns => {
        const wrapper = document.createElement('div');
        wrapper.innerHTML = ns.innerHTML;
        ns.replaceWith(...wrapper.childNodes); // Replace <noscript> with its child <img>
    });

    // Set real src for lazy-loaded images
    document.querySelectorAll('img[data-lazy-src]').forEach(img => {
    const lazySrc = img.getAttribute('data-lazy-src');
    if (lazySrc) img.setAttribute('src', lazySrc);
    });

    // === Add accordion click listeners ===
    const listeners = [];
    document.querySelectorAll('.lpv3-faq-accordion__button').forEach(btn => {
        const handler = () => {
            const accordion = btn.closest('.lpv3-faq-accordion');
            const content = accordion.querySelector('.lpv3-faq-accordion__content');

            accordion.classList.toggle('active');

            if (accordion.classList.contains('active')) {
            content.style.marginTop = '10px';
            content.style.maxHeight = content.scrollHeight + 'px';
            } else {
            content.style.marginTop = '0px';
            content.style.maxHeight = null;
            }
        }
        btn.addEventListener('click', handler);
        listeners.push({ btn, handler });
    });
   
    // Cleanup function runs when component is destroyed
    return () => {
        listeners.forEach(({ btn, handler }) => {
        btn.removeEventListener('click', handler);
        });
    };
});
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
                background: #fff var(--wpr-bg-53c302bd-51b8-472d-a8f6-81809c7733ab) no-repeat 50% 100% / 100% auto!important;
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
                                
                                                                	
<section class="lpv3 lpv3-hero-section" style="background: #fffbf5">
    <div class="lpv3-container">
        <div class="lpv3-hero-section__inner">
            <div class="lpv3-hero-section__content">
                <div class="lpv3-hero-section__content-text">
                    <h1>{localization.hero.header[$lang]}</h1>
                    <p>{localization.hero.text[$lang]}</p>
                </div>
                <div class="lpv3-hero-section__content-form lpv3-api-form hide-mobile">
                    <!-- <div class="lpv3-api-form__input-row">
                        <div class="lpv3-api-form__input-row--border"></div>
                        <gmpx-place-picker type="establishment" placeholder="Find your business on Google Maps" class="input"></gmpx-place-picker>
                    </div>
                    <div class="lpv3-pricing-section__form-row-error"></div> -->
                    <div class="block">
                        <a class="lpv3-btn w-full" href="#finance-contact">{localization.reusableUI.bookDemoBtn[$lang]}</a>
                    </div>
                </div>
            </div>
            <div class="lpv3-hero-section__image">
                                    <img fetchpriority="high" decoding="async" src="/images/Group-14.png" alt="">
                                <div class="lpv3-hero-section__content-form lpv3-api-form show-mobile">
                    <!-- <div class="lpv3-api-form__input-row">
                        <div class="lpv3-api-form__input-row--border"></div>
                        <gmpx-place-picker type="establishment" placeholder="Find your business on Google Maps" class="input"></gmpx-place-picker>
                    </div>
                    <div class="lpv3-pricing-section__form-row-error"></div> -->
                    <div class="block">
                        <a class="lpv3-btn w-full" href="#finance-contact">{localization.reusableUI.bookDemoBtn[$lang]}</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>


<section class="lpv3 lpv3-partners-section">
    <div class="lpv3-container">
                    <div class="lpv3-partners-section__title">{localization.hero.partnerships[$lang]}</div>
                            <div class="lpv3-partners-section__slider lp2-brands__slider">
                <div class="swiper-wrapper">
                                            <div class="swiper-slide">
                            <img decoding="async" src="/images/6ae255c2-da3e-42be-8f1c-d23fd1c24180.png" alt="">
                        </div>
                                            <div class="swiper-slide">
                            <img decoding="async" src="/images/9bf68d10-eb41-41ba-b798-14bddfb1d28b.png" alt="">
                        </div>
                                            <div class="swiper-slide">
                            <img decoding="async" src="/images/c350cf01-a786-45e3-a3fb-a0a4d20e8344.png" alt="">
                        </div>
                                            <div class="swiper-slide">
                            <img decoding="async" src="/images/992aa0fb-a77a-4840-93d3-bbfeb44a3007.png" alt="">
                        </div>
                                            <div class="swiper-slide">
                            <img decoding="async" src="/images/248ae93b-5d2e-4488-80dd-3e4cb122d491.png" alt="">
                        </div>
                                            <div class="swiper-slide">
                            <img decoding="async" src="/images/949f3db4-f64e-45fe-bdbd-db1325bcb78b.png" alt="">
                        </div>
                                            <div class="swiper-slide">
                            <img decoding="async" src="/images/89d1fa85-3bb1-4a75-b895-dfd24befbefc.png" alt="">
                        </div>
                                            <div class="swiper-slide">
                            <img decoding="async" src="/images/07e19fce-512b-477b-aef1-fd4f3a7d24c4.png" alt="">
                        </div>
                                            <div class="swiper-slide">
                            <img decoding="async" src="/images/s-blob-v1-IMAGE-_W72YM7bNck.png" alt="">
                        </div>
                                            <div class="swiper-slide">
                            <img decoding="async" src="/images/s-blob-v1-IMAGE-ASqks44tQk8.png" alt="">
                        </div>
                                            <div class="swiper-slide">
                            <img decoding="async" src="/images/s-blob-v1-IMAGE-cx8DGWSUJEw.png" alt="">
                        </div>
                                            <div class="swiper-slide">
                            <img decoding="async" src="/images/s-blob-v1-IMAGE-dXHRx6GTufk.png" alt="">
                        </div>
                                            <div class="swiper-slide">
                            <img decoding="async" src="/images/s-blob-v1-IMAGE-dZvALp35WA4.png" alt="">
                        </div>
                                            <div class="swiper-slide">
                            <img decoding="async" src="/images/s-blob-v1-IMAGE-gxHmx9rrrxU.png" alt="">
                        </div>
                                            <div class="swiper-slide">
                            <img decoding="async" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" alt="" data-lazy-src="https://newo.ai/wp-content/uploads/2024/12/s-blob-v1-IMAGE-jM5fnI_NOfk.png"><noscript><img decoding="async" src="https://newo.ai/wp-content/uploads/2024/12/s-blob-v1-IMAGE-jM5fnI_NOfk.png" alt=""></noscript>
                        </div>
                                            <div class="swiper-slide">
                            <img decoding="async" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" alt="" data-lazy-src="https://newo.ai/wp-content/uploads/2024/12/s-blob-v1-IMAGE-mK6A74eeCV0.png"><noscript><img decoding="async" src="https://newo.ai/wp-content/uploads/2024/12/s-blob-v1-IMAGE-mK6A74eeCV0.png" alt=""></noscript>
                        </div>
                                            <div class="swiper-slide">
                            <img decoding="async" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" alt="" data-lazy-src="https://newo.ai/wp-content/uploads/2024/12/s-blob-v1-IMAGE-Oa1ndDbMhwU.png"><noscript><img decoding="async" src="https://newo.ai/wp-content/uploads/2024/12/s-blob-v1-IMAGE-Oa1ndDbMhwU.png" alt=""></noscript>
                        </div>
                                            <div class="swiper-slide">
                            <img decoding="async" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" alt="" data-lazy-src="https://newo.ai/wp-content/uploads/2024/12/s-blob-v1-IMAGE-Q4lct1Qv3qA.png"><noscript><img decoding="async" src="https://newo.ai/wp-content/uploads/2024/12/s-blob-v1-IMAGE-Q4lct1Qv3qA.png" alt=""></noscript>
                        </div>
                                            <div class="swiper-slide">
                            <img decoding="async" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" alt="" data-lazy-src="https://newo.ai/wp-content/uploads/2024/12/s-blob-v1-IMAGE-syPdYB-kKh4.png"><noscript><img decoding="async" src="https://newo.ai/wp-content/uploads/2024/12/s-blob-v1-IMAGE-syPdYB-kKh4.png" alt=""></noscript>
                        </div>
                                            <div class="swiper-slide">
                            <img decoding="async" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" alt="" data-lazy-src="https://newo.ai/wp-content/uploads/2024/12/s-blob-v1-IMAGE-V0J4c5pDLVM.png"><noscript><img decoding="async" src="https://newo.ai/wp-content/uploads/2024/12/s-blob-v1-IMAGE-V0J4c5pDLVM.png" alt=""></noscript>
                        </div>
                                            <div class="swiper-slide">
                            <img decoding="async" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" alt="" data-lazy-src="https://newo.ai/wp-content/uploads/2024/12/s-blob-v1-IMAGE-vMEf1Wm36oo-1.png"><noscript><img decoding="async" src="https://newo.ai/wp-content/uploads/2024/12/s-blob-v1-IMAGE-vMEf1Wm36oo-1.png" alt=""></noscript>
                        </div>
                                            <div class="swiper-slide">
                            <img decoding="async" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" alt="" data-lazy-src="https://newo.ai/wp-content/uploads/2024/12/s-blob-v1-IMAGE-XB6ooYBjuF8.png"><noscript><img decoding="async" src="https://newo.ai/wp-content/uploads/2024/12/s-blob-v1-IMAGE-XB6ooYBjuF8.png" alt=""></noscript>
                        </div>
                                            <div class="swiper-slide">
                            <img decoding="async" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" alt="" data-lazy-src="https://newo.ai/wp-content/uploads/2024/12/s-blob-v1-IMAGE-yoX6tjbhtPw.png"><noscript><img decoding="async" src="https://newo.ai/wp-content/uploads/2024/12/s-blob-v1-IMAGE-yoX6tjbhtPw.png" alt=""></noscript>
                        </div>
                                            <div class="swiper-slide">
                            <img decoding="async" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" alt="" data-lazy-src="https://newo.ai/wp-content/uploads/2024/08/aircody-e1723594202456.jpeg"><noscript><img decoding="async" src="https://newo.ai/wp-content/uploads/2024/08/aircody-e1723594202456.jpeg" alt=""></noscript>
                        </div>
                                            <div class="swiper-slide">
                            <img decoding="async" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" alt="" data-lazy-src="https://newo.ai/wp-content/uploads/2024/11/logo_emplorium.png"><noscript><img decoding="async" src="https://newo.ai/wp-content/uploads/2024/11/logo_emplorium.png" alt=""></noscript>
                        </div>
                                            <div class="swiper-slide">
                            <img decoding="async" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" alt="" data-lazy-src="https://newo.ai/wp-content/uploads/2024/11/FullLogo_Transparent_NoBuffer-1.png"><noscript><img decoding="async" src="https://newo.ai/wp-content/uploads/2024/11/FullLogo_Transparent_NoBuffer-1.png" alt=""></noscript>
                        </div>
                                            <div class="swiper-slide">
                            <img decoding="async" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" alt="" data-lazy-src="https://newo.ai/wp-content/uploads/2024/11/Logo-SC.png"><noscript><img decoding="async" src="https://newo.ai/wp-content/uploads/2024/11/Logo-SC.png" alt=""></noscript>
                        </div>
                                            <div class="swiper-slide">
                            <img decoding="async" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" alt="" data-lazy-src="https://newo.ai/wp-content/uploads/2024/11/rd.png"><noscript><img decoding="async" src="https://newo.ai/wp-content/uploads/2024/11/rd.png" alt=""></noscript>
                        </div>
                                            <div class="swiper-slide">
                            <img decoding="async" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" alt="" data-lazy-src="https://newo.ai/wp-content/uploads/2025/01/AI-Hosts-Logo.fw_-1.png"><noscript><img decoding="async" src="https://newo.ai/wp-content/uploads/2025/01/AI-Hosts-Logo.fw_-1.png" alt=""></noscript>
                        </div>
                                            <div class="swiper-slide">
                            <img decoding="async" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" alt="" data-lazy-src="https://newo.ai/wp-content/uploads/2025/03/CRA-Logo-1.jpg"><noscript><img decoding="async" src="https://newo.ai/wp-content/uploads/2025/03/CRA-Logo-1.jpg" alt=""></noscript>
                        </div>
                                    </div>
            </div>
            </div>
</section>


<section class="lpv3 lpv3-video-section">
    <div class="lpv3-container">
        <div class="lpv3-video-section__inner">
            <iframe loading="lazy" width="690" height="388" src="about:blank" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen="" data-rocket-lazyload="fitvidscompatible" data-lazy-src="https://www.youtube.com/embed/Jar2rQRtM58?si=RkTlAozl5wAnHCAu"></iframe><noscript><iframe width="690" height="388" src="https://www.youtube.com/embed/Jar2rQRtM58?si=RkTlAozl5wAnHCAu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></noscript>            
        </div>
    </div>
</section>


<section class="lpv3 lpv3-text-section">
    <div class="lpv3-container">
        <div class="lpv3-text-section__inner">
            <h2>{localization.facts.header[$lang]}</h2>
            <p>{localization.facts.text[0][$lang]}</p>
            <p>{localization.facts.text[1][$lang]}</p>
        </div>
    </div>
</section>



<section class="lpv3 lpv3-video-preview-section">
    <div class="lpv3-container">
        <div class="lpv3-video-preview-section__inner">
            <div class="lpv3-video-preview-section__video">
                <img decoding="async" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" alt="" data-lazy-src="https://newo.ai/wp-content/uploads/2024/12/Rectangle-354-1.jpg"><noscript><img decoding="async" src="https://newo.ai/wp-content/uploads/2024/12/Rectangle-354-1.jpg" alt=""></noscript>
            </div>
            <div class="lpv3-video-preview-section__content quotes">
                <h2>{localization.facts.explanation[$lang]}</h2>
                <p>{localization.facts.source[$lang]}</p>
            </div>
        </div>
    </div>
</section>


<section class="lpv3 lpv3-what-can-do">
    <div class="lpv3-container">
        <div class="lpv3-what-can-do__grid">
            <div class="lpv3-info-card lpv3-info-card--title" style="background:#ffffff;">
                <div class="lpv3-info-card__content ">
                    <h2>{localization.featureInfo1.header[$lang]}</h2>
                </div>
            </div>
            <div class="lpv3-info-card lpv3-info-card--number" style="background:#fffbf5;">
                <span class="lpv3-info-card__number" style="color: #fff0d3">1</span>
                <div class="lpv3-info-card__content ">
                    <h4>{localization.featureInfo1.categories[0].header[$lang]}</h4>
                    <ul>
                        <li class="list-disc">{localization.featureInfo1.categories[0].features[0][$lang]}</li>
                        <li class="list-disc">{localization.featureInfo1.categories[0].features[1][$lang]}</li>
                        <li class="list-disc">{localization.featureInfo1.categories[0].features[2][$lang]}</li>
                        <li class="list-disc">{localization.featureInfo1.categories[0].features[3][$lang]}</li>
                    </ul>
                </div>
            </div>
            <div class="lpv3-info-card lpv3-info-card--number" style="background:#fff0d3;">
                <span class="lpv3-info-card__number" style="color: #ffd480">2</span>
                <div class="lpv3-info-card__content ">
                    <h4>{localization.featureInfo1.categories[1].header[$lang]}</h4>
                    <ul>
                        <li class="list-disc">{localization.featureInfo1.categories[1].features[0][$lang]}</li>
                        <li class="list-disc">{localization.featureInfo1.categories[1].features[1][$lang]}</li>
                        <li class="list-disc">{localization.featureInfo1.categories[1].features[2][$lang]}</li>
                        <li class="list-disc">{localization.featureInfo1.categories[1].features[3][$lang]}</li>
                    </ul>
                </div>
            </div>
            <div class="lpv3-info-card lpv3-info-card--number" style="background:#ffd480;">
                <span class="lpv3-info-card__number" style="color: #ffa800">3</span>
                <div class="lpv3-info-card__content ">
                    <h4>{localization.featureInfo1.categories[2].header[$lang]}</h4>
                    <ul>
                        <li class="list-disc">{localization.featureInfo1.categories[2].features[0][$lang]}</li>
                        <li class="list-disc">{localization.featureInfo1.categories[2].features[1][$lang]}</li>
                    </ul>
                </div>
            </div>
            <div class="lpv3-info-card lpv3-info-card--number" style="background:#ffa800;">
                <span class="lpv3-info-card__number" style="color: #e99a02">4</span>
                <div class="lpv3-info-card__content ">
                    <h4>{localization.featureInfo1.categories[3].header[$lang]}</h4>
                    <ul>
                        <li class="list-disc">{localization.featureInfo1.categories[3].features[0][$lang]}</li>
                        <li class="list-disc">{localization.featureInfo1.categories[3].features[1][$lang]}</li>
                        <li class="list-disc">{localization.featureInfo1.categories[3].features[2].feature[$lang]}
                            <ul>
                                <li class="list-disc">{localization.featureInfo1.categories[3].features[2].examples[0][$lang]}</li>
                                <li class="list-disc">{localization.featureInfo1.categories[3].features[2].examples[1][$lang]}</li>
                                <li class="list-disc">{localization.featureInfo1.categories[3].features[2].examples[2][$lang]}</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="lpv3-info-card lpv3-info-card--number" style="background:#e99a02;">
                <span class="lpv3-info-card__number" style="color: #a36302">5</span>
                <div class="lpv3-info-card__content ">
                    <h4>Reporting</h4>
                    <ul>
                        <li class="list-disc">Call recordings</li>
                        <li class="list-disc">Phone conversation and chat summaries and transcripts</li>
                        <li class="list-disc">Weekly report on additional secured revenue (ASR), based on orders placed during off-hours and overflow during peak times</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="lpv3-api-form">
            <div class="lpv3-api-form__input-row">
                <div class="lpv3-api-form__input-row--border"></div>
                <gmpx-place-picker type="establishment" placeholder="Find your business on Google Maps" class="input"></gmpx-place-picker>
            </div>
            <div class="lpv3-pricing-section__form-row-error"></div>
            <div class="block px-[10%]">
                <a class="lpv3-btn w-full" href="#finance-contact">Book A Demo</a>
            </div>
        </div>
</section>



<section class="lpv3 lpv3-how-ai-works">
    <div class="lpv3-container">
        <h2 class="lpv3-how-ai-works__title">{localization.howItWorks.header[$lang]}</h2>
        <div class="lpv3-how-ai-works__row">
            <div class="lpv3-how-ai-works__step">
                <span class="lpv3-how-ai-works__step-number" style="background:#fff0d3">1</span>
                <div class="lpv3-how-ai-works__step-line" style="background: linear-gradient(90deg, #fff0d3, #ffa800);"></div>
                <div class="lpv3-how-ai-works__step-content">
                    <h4>{localization.howItWorks.steps[0].header[$lang]}</h4>
                    <p>{localization.howItWorks.steps[0].text[0][$lang]}</p>
                    <p>{localization.howItWorks.steps[0].text[1][$lang]}</p>
                </div>
            </div>
            <div class="lpv3-how-ai-works__step">
                <span class="lpv3-how-ai-works__step-number" style="background:#ffa800">2</span>
                <div class="lpv3-how-ai-works__step-line" style="background: linear-gradient(90deg, #ffa800, #e99a02);"></div>
                <div class="lpv3-how-ai-works__step-content">
                    <h4>{localization.howItWorks.steps[1].header[$lang]}</h4>
                    <p>{localization.howItWorks.steps[1].text[$lang]}</p>
                </div>
            </div>
            <div class="lpv3-how-ai-works__step">
                <span class="lpv3-how-ai-works__step-number" style="background:#e99a02">3</span>
                <div class="lpv3-how-ai-works__step-line" style="background: linear-gradient(90deg, #e99a02, #a36302);"></div>
                <div class="lpv3-how-ai-works__step-content">
                    <h4>{localization.howItWorks.steps[2].header[$lang]}</h4>
                    <p>{localization.howItWorks.steps[2].text[$lang]}</p>
                </div>
            </div>
        </div>
        <div class="lpv3-api-form">
            <div class="lpv3-api-form__input-row">
                <div class="lpv3-api-form__input-row--border"></div>
                <gmpx-place-picker type="establishment" placeholder="Find your business on Google Maps" class="input"></gmpx-place-picker>
            </div>
            <div class="lpv3-pricing-section__form-row-error"></div>
            <div class="block px-[10%]">
                <a class="lpv3-btn w-full" href="#finance-contact">{localization.reusableUI.bookDemoBtn[$lang]}</a>
            </div>
        </div>
    </div>
</section>



<section class="lpv3 lpv3-pricing-section">
    <div class="lpv3-container">
        <div class="lpv3-pricing-section__row">
            <div class="lpv3-pricing-section__content">
                <h2>{localization.revenue.header[$lang]}</h2>
                <p>{localization.revenue.text[$lang]}</p>
            </div>
            <div class="lpv3-pricing-section__prices">
                <h2 class="title title--02">$150K-$350K</h2>
                <p>{localization.revenue.misc.explanation[$lang]}</p>
            </div>
        </div>
        <div class="lpv3-pricing-section__row">
            <div class="lpv3-pricing-section__content">
                <h2>{localization.revenue.misc.pricesHeader[$lang]}</h2>
                <a class="lpv3-btn" href="#finance-contact">{localization.reusableUI.bookDemoBtn[$lang]}</a>
            </div>
            <div class="lpv3-pricing-section__prices">
                <h2 class="title title--02">$99/mo</h2>
            </div>
        </div>
    </div>
</section>

<section class="lpv3 lpv3-about-person">
    <div class="lpv3-container">
        <div class="lpv3-about-person__inner ">
            <div class="lpv3-about-person__content quotes">
                <h2>{localization.reviews[0].text[$lang]}</h2>
                <p>{localization.reviews[0].author[$lang]}</p>
            </div>
            <div class="lpv3-about-person__image">
                <img decoding="async" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" alt="" data-lazy-src="https://newo.ai/wp-content/uploads/2024/12/anyanism_realistic_portrait_of_a_smiling_black_woman_restaura_15d99b0e-27a3-4a35-abf7-f35e21a6d460_2.png"><noscript><img decoding="async" src="https://newo.ai/wp-content/uploads/2024/12/anyanism_realistic_portrait_of_a_smiling_black_woman_restaura_15d99b0e-27a3-4a35-abf7-f35e21a6d460_2.png" alt="">
            </div>
        </div>
    </div>
</section>


<section class="lpv3 lpv3-about-person">
    <div class="lpv3-container">
        <div class="lpv3-about-person__inner lpv3-about-person__inner--reverse">
            <div class="lpv3-about-person__content quotes">
                <h2>{localization.reviews[1].text[$lang]}</h2>
                <p>{localization.reviews[1].author[$lang]}</p>
            </div>
            <div class="lpv3-about-person__image">
                <img decoding="async" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" alt="" data-lazy-src="https://newo.ai/wp-content/uploads/2024/12/anyanism_realistic_portrait_of_a_smiling_woman_restaurant_man_6944f8ba-69fe-4ee2-afe5-5b5f656b1bef_1.png"><noscript><img decoding="async" src="https://newo.ai/wp-content/uploads/2024/12/anyanism_realistic_portrait_of_a_smiling_woman_restaurant_man_6944f8ba-69fe-4ee2-afe5-5b5f656b1bef_1.png" alt=""></noscript>
            </div>
        </div>
    </div>
</section>


<section class="lpv3 lpv3-about-person">
    <div class="lpv3-container">
        <div class="lpv3-about-person__inner ">
            <div class="lpv3-about-person__content quotes">
                <h2>{localization.reviews[2].text[$lang]}</h2>
                <p>{localization.reviews[2].author[$lang]}</p>
            </div>
            <div class="lpv3-about-person__image">
                <img decoding="async" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" alt="" data-lazy-src="https://newo.ai/wp-content/uploads/2024/12/anyanism_realistic_portrait_of_a_smiling_asian_woman_restaura_bbd1bd27-c842-4c50-9939-82748eecb159_1.png"><noscript><img decoding="async" src="https://newo.ai/wp-content/uploads/2024/12/anyanism_realistic_portrait_of_a_smiling_asian_woman_restaura_bbd1bd27-c842-4c50-9939-82748eecb159_1.png" alt=""></noscript>
            </div>
        </div>
    </div>
</section>


<section class="lpv3 lpv3-about-person">
    <div class="lpv3-container">
        <div class="lpv3-about-person__inner lpv3-about-person__inner--reverse">
            <div class="lpv3-about-person__content quotes">
                <h2>{localization.reviews[3].text[$lang]}</h2>
                <p>{localization.reviews[3].author[$lang]}</p>
            </div>
            <div class="lpv3-about-person__image">
                <img decoding="async" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" alt="" data-lazy-src="https://newo.ai/wp-content/uploads/2024/12/anyanism_realistic_portrait_of_a_smiling_man_restaurant_manag_082daff0-2bb0-446f-904e-b3f168ce53e8_2.png"><noscript><img decoding="async" src="https://newo.ai/wp-content/uploads/2024/12/anyanism_realistic_portrait_of_a_smiling_man_restaurant_manag_082daff0-2bb0-446f-904e-b3f168ce53e8_2.png" alt=""></noscript>
            </div>
        </div>
    </div>
</section>


<section class="lpv3 lpv3-about-person">
    <div class="lpv3-container">
        <div class="lpv3-about-person__inner ">
            <div class="lpv3-about-person__content quotes">
                <h2>{localization.reviews[4].text[$lang]}</h2>
                <p>{localization.reviews[4].author[$lang]}</p>
            </div>
            <div class="lpv3-about-person__image">
                <img decoding="async" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" alt="" data-lazy-src="https://newo.ai/wp-content/uploads/2024/12/anyanism_realistic_portrait_of_a_smiling_black_man_restaurant_afddf12d-62cd-494e-a9f2-2e20083da025_1.png"><noscript><img decoding="async" src="https://newo.ai/wp-content/uploads/2024/12/anyanism_realistic_portrait_of_a_smiling_black_man_restaurant_afddf12d-62cd-494e-a9f2-2e20083da025_1.png" alt=""></noscript>
            </div>
        </div>
    </div>
</section>


<section class="lpv3 lpv3-competition-section">
    <div class="lpv3-container">
        <h2 class="lpv3-competition-section__title">{localization.featureInfo2.header[$lang]}</h2>
        <div class="lpv3-competition-section__grid">
            <div class="lpv3-info-card" style="background:#fffbf5">
                <div class="lpv3-info-card__content">
                    <h4>{localization.featureInfo2.categories[0].header[$lang]}</h4>
                    <p>{localization.featureInfo2.categories[0].text[$lang]}</p>
                </div>
            </div>
            <div class="lpv3-info-card" style="background:#fff0d3">
                <div class="lpv3-info-card__content">
                    <h4>{localization.featureInfo2.categories[1].header[$lang]}</h4>
                    <p>{localization.featureInfo2.categories[1].text[$lang]}</p>
                    <ul>
                        <li class="list-disc">{localization.featureInfo2.categories[1].examples[0][$lang]}</li>
                        <li class="list-disc">{localization.featureInfo2.categories[1].examples[1][$lang]}</li>
                        <li class="list-disc">{localization.featureInfo2.categories[1].examples[2][$lang]}</li>
                        <li class="list-disc">{localization.featureInfo2.categories[1].examples[3][$lang]}</li>
                        <li class="list-disc">{localization.featureInfo2.categories[1].examples[4][$lang]}</li>
                    </ul>
                </div>
            </div>
            <div class="lpv3-info-card" style="background:#ffd480">
                <div class="lpv3-info-card__content">
                    <h4>{localization.featureInfo2.categories[2].header[$lang]}</h4>
                    <p>{localization.featureInfo2.categories[2].text[$lang]}</p>
                    <ul>
                        <li class="list-disc">{localization.featureInfo2.categories[2].examples[0][$lang]}</li>
                        <li class="list-disc">{localization.featureInfo2.categories[2].examples[1][$lang]}</li>
                        <li class="list-disc">{localization.featureInfo2.categories[2].examples[2][$lang]}</li>
                    </ul>
                </div>
            </div>
            <div class="lpv3-info-card" style="background:#ffa800">
                <div class="lpv3-info-card__content">
                    <h4>{localization.featureInfo2.categories[3].header[$lang]}</h4>
                    <p>{localization.featureInfo2.categories[3].text[$lang]}</p>
                </div>
            </div>
        </div>
        <div class="lpv3-api-form">
            <div class="lpv3-api-form__input-row">
                <div class="lpv3-api-form__input-row--border"></div>
                <gmpx-place-picker type="establishment" placeholder="Find your business on Google Maps" class="input"></gmpx-place-picker>
            </div>
            <div class="lpv3-pricing-section__form-row-error"></div>
            <div class="block px-[10%]">
                <a class="lpv3-btn w-full" href="#finance-contact">{localization.reusableUI.bookDemoBtn[$lang]}</a>
            </div>
        </div>
    </div>
</section>


<section class="lpv3 lpv3-video-preview-section">
    <div class="lpv3-container">
        <div class="lpv3-video-preview-section__inner">
            <div class="lpv3-video-preview-section__video">
                 <img decoding="async" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" alt="" data-lazy-src="https://newo.ai/wp-content/uploads/2024/12/Rectangle-354-1.jpg"><noscript><img decoding="async" src="https://newo.ai/wp-content/uploads/2024/12/Rectangle-354-1.jpg" alt=""></noscript>
            </div>
            <div class="lpv3-video-preview-section__content quotes">
                <h2>{localization.featureInfo2.explanation[$lang]}</h2>
                <p>{localization.featureInfo2.source[$lang]}</p>
            </div>
        </div>
    </div>
</section>


<section class="lpv3 lpv3-faq-section" id="lpv3-faq-section">
    <div class="lpv3-container">
        <h2 class="lpv3-faq-section__title">{localization.FAQ.header[$lang]}</h2>
        <div class="lpv3-faq-section__list">
            <div class="lpv3-faq-accordion">
                <button type="button" class="lpv3-faq-accordion__button lpv3-faq-accordion__button--trigger">
                    {localization.FAQ["Q&A"][0].q[$lang]}
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                        <path d="M15 7.1875V22.8125" stroke="#2F1B04" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M22.8125 15H7.1875" stroke="#2F1B04" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                </button>
                <div class="lpv3-faq-accordion__content">
                    <p>{localization.FAQ["Q&A"][0].a[$lang]}</p>
                </div>
            </div>
            <div class="lpv3-faq-accordion">
                <button type="button" class="lpv3-faq-accordion__button lpv3-faq-accordion__button--trigger">
                    {localization.FAQ["Q&A"][1].q[$lang]}
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                        <path d="M15 7.1875V22.8125" stroke="#2F1B04" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M22.8125 15H7.1875" stroke="#2F1B04" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                </button>
                <div class="lpv3-faq-accordion__content">
                    <p>{localization.FAQ["Q&A"][1].a[$lang]}</p>
                </div>
            </div>
            <div class="lpv3-faq-accordion">
                <button type="button" class="lpv3-faq-accordion__button lpv3-faq-accordion__button--trigger">
                    {localization.FAQ["Q&A"][2].q[$lang]}
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                        <path d="M15 7.1875V22.8125" stroke="#2F1B04" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M22.8125 15H7.1875" stroke="#2F1B04" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                </button>
                <div class="lpv3-faq-accordion__content">
                    <p>{localization.FAQ["Q&A"][2].a[$lang]}</p>
                </div>
            </div>
            <div class="lpv3-faq-accordion">
                <button type="button" class="lpv3-faq-accordion__button lpv3-faq-accordion__button--trigger">
                    {localization.FAQ["Q&A"][3].q[$lang]}
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                        <path d="M15 7.1875V22.8125" stroke="#2F1B04" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M22.8125 15H7.1875" stroke="#2F1B04" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                </button>
                <div class="lpv3-faq-accordion__content">
                    <p>{localization.FAQ["Q&A"][3].a[$lang]}</p>
                </div>
            </div>
            <div class="lpv3-faq-accordion">
                <button type="button" class="lpv3-faq-accordion__button lpv3-faq-accordion__button--trigger">
                    {localization.FAQ["Q&A"][4].q[$lang]}
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                        <path d="M15 7.1875V22.8125" stroke="#2F1B04" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M22.8125 15H7.1875" stroke="#2F1B04" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                </button>
                <div class="lpv3-faq-accordion__content">
                    <p>{localization.FAQ["Q&A"][4].a[$lang]}</p>
                </div>
            </div>
            <div class="lpv3-faq-accordion">
                <button type="button" class="lpv3-faq-accordion__button lpv3-faq-accordion__button--trigger">
                    {localization.FAQ["Q&A"][5].q[$lang]}
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                        <path d="M15 7.1875V22.8125" stroke="#2F1B04" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M22.8125 15H7.1875" stroke="#2F1B04" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                </button>
                <div class="lpv3-faq-accordion__content">
                    <p>{localization.FAQ["Q&A"][5].a[$lang]}</p>
                </div>
            </div>
            <div class="lpv3-faq-accordion">
                <button type="button" class="lpv3-faq-accordion__button lpv3-faq-accordion__button--trigger">
                    {localization.FAQ["Q&A"][6].q[$lang]}
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                        <path d="M15 7.1875V22.8125" stroke="#2F1B04" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M22.8125 15H7.1875" stroke="#2F1B04" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                </button>
                <div class="lpv3-faq-accordion__content">
                    <p>{localization.FAQ["Q&A"][6].a[$lang]}</p>
                </div>
            </div>
            <div class="lpv3-faq-accordion">
                <button type="button" class="lpv3-faq-accordion__button lpv3-faq-accordion__button--trigger">
                    {localization.FAQ["Q&A"][7].q[$lang]}
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                        <path d="M15 7.1875V22.8125" stroke="#2F1B04" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M22.8125 15H7.1875" stroke="#2F1B04" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                </button>
                <div class="lpv3-faq-accordion__content">
                    <p>{localization.FAQ["Q&A"][7].a[$lang]}</p>
                </div>
            </div>
            <div class="lpv3-faq-accordion">
                <button type="button" class="lpv3-faq-accordion__button lpv3-faq-accordion__button--trigger">
                    {localization.FAQ["Q&A"][8].q[$lang]}
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                        <path d="M15 7.1875V22.8125" stroke="#2F1B04" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M22.8125 15H7.1875" stroke="#2F1B04" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                </button>
                <div class="lpv3-faq-accordion__content">
                    <p>{localization.FAQ["Q&A"][8].a[$lang]}</p>
                </div>
            </div>
            <div class="lpv3-faq-accordion">
                <button type="button" class="lpv3-faq-accordion__button lpv3-faq-accordion__button--trigger">
                    {localization.FAQ["Q&A"][9].q[$lang]}
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                        <path d="M15 7.1875V22.8125" stroke="#2F1B04" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M22.8125 15H7.1875" stroke="#2F1B04" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                </button>
                <div class="lpv3-faq-accordion__content">
                    <p>{localization.FAQ["Q&A"][9].a[$lang]}</p>
                </div>
            </div>
            <div class="lpv3-faq-accordion">
                <button type="button" class="lpv3-faq-accordion__button lpv3-faq-accordion__button--trigger">
                    {localization.FAQ["Q&A"][10].q[$lang]}
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                        <path d="M15 7.1875V22.8125" stroke="#2F1B04" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M22.8125 15H7.1875" stroke="#2F1B04" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                </button>
                <div class="lpv3-faq-accordion__content">
                    <p>{localization.FAQ["Q&A"][10].a[$lang]}</p>
                </div>
            </div>
            <div class="lpv3-faq-accordion">
                <button type="button" class="lpv3-faq-accordion__button lpv3-faq-accordion__button--trigger">
                    {localization.FAQ["Q&A"][11].q[$lang]}
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                        <path d="M15 7.1875V22.8125" stroke="#2F1B04" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M22.8125 15H7.1875" stroke="#2F1B04" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                </button>
                <div class="lpv3-faq-accordion__content">
                    <p>{localization.FAQ["Q&A"][11].a[$lang]}</p>
                </div>
            </div>
            <div class="lpv3-faq-accordion">
                <button type="button" class="lpv3-faq-accordion__button lpv3-faq-accordion__button--trigger">
                    {localization.FAQ["Q&A"][12].q[$lang]}
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                        <path d="M15 7.1875V22.8125" stroke="#2F1B04" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M22.8125 15H7.1875" stroke="#2F1B04" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                </button>
                <div class="lpv3-faq-accordion__content">
                    <p>{localization.FAQ["Q&A"][12].a[$lang]}</p>
                </div>
            </div>
            <div class="lpv3-faq-accordion">
                <button type="button" class="lpv3-faq-accordion__button lpv3-faq-accordion__button--trigger">
                    {localization.FAQ["Q&A"][13].q[$lang]}
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                        <path d="M15 7.1875V22.8125" stroke="#2F1B04" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M22.8125 15H7.1875" stroke="#2F1B04" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                </button>
                <div class="lpv3-faq-accordion__content">
                    <p>{localization.FAQ["Q&A"][13].a[$lang]}</p>
                </div>
            </div>
            <div class="lpv3-faq-accordion">
                <button type="button" class="lpv3-faq-accordion__button lpv3-faq-accordion__button--trigger">
                    {localization.FAQ["Q&A"][14].q[$lang]}
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                        <path d="M15 7.1875V22.8125" stroke="#2F1B04" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M22.8125 15H7.1875" stroke="#2F1B04" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                </button>
                <div class="lpv3-faq-accordion__content">
                    <p>{localization.FAQ["Q&A"][14].a[$lang]}</p>
                </div>
            </div>
            <div class="lpv3-faq-accordion max-h-[2000px]">
                <button type="button" class="lpv3-faq-accordion__button lpv3-faq-accordion__button--trigger">
                    {localization.FAQ["Q&A"][15].q[$lang]}
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                        <path d="M15 7.1875V22.8125" stroke="#2F1B04" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M22.8125 15H7.1875" stroke="#2F1B04" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                </button>
                <div class="lpv3-faq-accordion__content">
                    <p>{localization.FAQ["Q&A"][15].a[$lang]}</p>
                    <ul class="list-disc pl-10">
                        <li>{localization.FAQ["Q&A"][15].examples[$lang][0]}</li>
                        <li>{localization.FAQ["Q&A"][15].examples[$lang][1]}</li>
                        <li>{localization.FAQ["Q&A"][15].examples[$lang][2]}</li>
                        <li>{localization.FAQ["Q&A"][15].examples[$lang][3]}</li>
                    </ul>
                </div>
            </div>
            <div class="lpv3-faq-accordion">
                <button type="button" class="lpv3-faq-accordion__button lpv3-faq-accordion__button--trigger">
                    {localization.FAQ["Q&A"][16].q[$lang]}
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                        <path d="M15 7.1875V22.8125" stroke="#2F1B04" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M22.8125 15H7.1875" stroke="#2F1B04" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                </button>
                <div class="lpv3-faq-accordion__content">
                    <p>{localization.FAQ["Q&A"][16].a[$lang]}</p>
                </div>
            </div>
            <div class="lpv3-faq-accordion">
                <button type="button" class="lpv3-faq-accordion__button lpv3-faq-accordion__button--trigger">
                    {localization.FAQ["Q&A"][17].q[$lang]}
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                        <path d="M15 7.1875V22.8125" stroke="#2F1B04" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M22.8125 15H7.1875" stroke="#2F1B04" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                </button>
                <div class="lpv3-faq-accordion__content">
                    <p>{localization.FAQ["Q&A"][17].a[$lang]}</p>
                </div>
            </div>
        </div>
    </div>
</section>


<section class="lpv3 lpv3-faq-section" id="lpv3-faq-section">
    <div class="lpv3-container">
        <h2 class="lpv3-faq-section__title">{localization.miscFAQ.header[$lang]}</h2>
        <div class="lpv3-faq-section__list">
            <div class="lpv3-faq-accordion">
                <button type="button" class="lpv3-faq-accordion__button lpv3-faq-accordion__button--trigger">
                    {localization.miscFAQ["Q&A"][0].q[$lang]}                            
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                        <path d="M15 7.1875V22.8125" stroke="#2F1B04" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M22.8125 15H7.1875" stroke="#2F1B04" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                </button>
                <div class="lpv3-faq-accordion__content">
                    <p>{localization.miscFAQ["Q&A"][0].a[$lang]}</p>
                </div>
            </div>
            <div class="lpv3-faq-accordion">
                <button type="button" class="lpv3-faq-accordion__button lpv3-faq-accordion__button--trigger">
                    {localization.miscFAQ["Q&A"][1].q[$lang]}   
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                        <path d="M15 7.1875V22.8125" stroke="#2F1B04" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M22.8125 15H7.1875" stroke="#2F1B04" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                </button>
                <div class="lpv3-faq-accordion__content">
                    <p>{localization.miscFAQ["Q&A"][1].a[$lang][0]}</p>
                    <p>{localization.miscFAQ["Q&A"][1].a[$lang][1]}</p>
                    <p>{localization.miscFAQ["Q&A"][1].a[$lang][2]}</p>
                </div>
            </div>
            <div class="lpv3-faq-accordion">
                <button type="button" class="lpv3-faq-accordion__button lpv3-faq-accordion__button--trigger">
                    {localization.miscFAQ["Q&A"][2].q[$lang]}
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                        <path d="M15 7.1875V22.8125" stroke="#2F1B04" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M22.8125 15H7.1875" stroke="#2F1B04" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                </button>
                <div class="lpv3-faq-accordion__content">
                    <p>{localization.miscFAQ["Q&A"][2].a[$lang]}</p>
                </div>
            </div>
        </div>
        <Form />
    </div>
</section>


<div class="lpv3-adrian-form-popups--trigger lpv3 lpv3-modal-window" data-modal-name="" data-action="call">
    <div class="lpv3-modal-window__background lpv3-modal-window__close--trigger"></div>
    <div class="lpv3-modal-window__container">
        <button type="button" class="lpv3-modal-window__close lpv3-modal-window__close--trigger lpv3-btn--reset">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M17.625 19.4375L0 1.8125L1.82813 0L19.4531 17.625L17.625 19.4375ZM1.82813 19.4375L0 17.625L17.625 0L19.4531 1.8125L1.82813 19.4375Z" fill="black"></path>
            </svg>
        </button>
        <div class="book-modal-step-1 book-modal-step-3">
            <div class="book-modal-step-1__image">
                <img decoding="async" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" alt="" data-lazy-src="https://newo.ai/wp-content/uploads/2025/01/Group-16.jpg"><noscript><img decoding="async" src="https://newo.ai/wp-content/uploads/2025/01/Group-16.jpg" alt=""></noscript>
            </div>
            <div class="book-modal-step-1__content">
                <h2>I’m Adrian, a Newo AI�Consultant.</h2>
                <p><strong>Want to test me?</strong></p>
                <p>Enter your phone number below and choose how you want to be contacted</p>
                <div class="book-modal-step-1__forms">
                    <div class="book-modal-step-1__form book-modal-step-1__form--trigger phone-mask--trigger" data-action="call" data-message="The user wants to speak with you and see you in action. Please call him on this number xxx and say: Hi! I’m Adrian, the AI consultant from Newo. Were you planning to test me out? I’m ready! I can tell you all about Newo AI agents, create an AI agent for your business in just 3 minutes, or book a demo with my human colleagues… Where would you like to start? ">
                        <input id="book-modal-step-1__phone-99" class="lpv3-input book-modal-step-1__form-phone--trigger" type="tel" placeholder="222 333 4444">
                        <button type="button" class="lpv3-btn lpv3-btn--filled" data-utms={JSON.stringify({ utm1: 'test-me', utm2: 'restaurant' })}>Get AI call</button>
                        <div class="book-modal-step-1__form-error"></div>
                        <p style="font-size:10px;text-align:center;">I agree to be contacted by a Newo AI Agent</p>
                    </div>
                    <div class="book-modal-step-1__form book-modal-step-1__form--trigger book-modal-step-1__form--hide" data-action="text" data-message="The user wants to chat with you and see you in action. Please send them an SMS to this number with the greeting: Hi! I’m Adrian, the AI consultant from Newo. I can tell you all about Newo AI agents, create an AI agent for your business in just 3 minutes, or book a demo with my human colleagues… Where would you like to start? ">
                        <input id="book-modal-step-1__phone-5" class="lpv3-input book-modal-step-1__form-phone--trigger phone-mask--trigger" type="tel" placeholder="222 333 4444">
                        <button type="button" class="lpv3-btn lpv3-btn--filled" data-utms={JSON.stringify({ utm1: 'test-me', utm2: 'restaurant' })}>Text Me</button>
                        <div class="book-modal-step-1__form-error"></div>
                        <p style="font-size:10px;text-align:center;">I agree to be contacted by a Newo AI Agent</p>
                    </div>
                </div>
                <button type="button" class="lpv3-btn--reset book-modal-step-1__form-toggle book-modal-step-1__form-toggle--trigger" data-button-toggle-text="I prefer to communicate over the phone">I prefer to communicate via SMS</button>
            </div>
        </div>
    </div>
</div>

<div class="lpv3 lpv3-modal-window" data-modal-name="book-modal-step-4">
    <div class="lpv3-modal-window__background lpv3-modal-window__close--trigger"></div>
    <div class="lpv3-modal-window__container">
        <button type="button" class="lpv3-modal-window__close lpv3-modal-window__close--trigger lpv3-btn--reset">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M17.625 19.4375L0 1.8125L1.82813 0L19.4531 17.625L17.625 19.4375ZM1.82813 19.4375L0 17.625L17.625 0L19.4531 1.8125L1.82813 19.4375Z" fill="black"></path>
            </svg>
        </button>
        <div class="lpv3-modal-window__content">
            <div class="book-modal-step-2">
                <h2>Check your text messages.</h2>
                <p>The AI employee messaged you—please respond</p>
                <div class="book-modal-step-2__buttons">
                    <button type="button" class="lpv3-btn lpv3-btn--filled lpv3-modal-window__close--trigger">OK</button>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="lpv3 lpv3-modal-window" data-modal-name="book-modal-step-5">
    <div class="lpv3-modal-window__background lpv3-modal-window__close--trigger"></div>
    <div class="lpv3-modal-window__container">
        <button type="button" class="lpv3-modal-window__close lpv3-modal-window__close--trigger lpv3-btn--reset">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M17.625 19.4375L0 1.8125L1.82813 0L19.4531 17.625L17.625 19.4375ZM1.82813 19.4375L0 17.625L17.625 0L19.4531 1.8125L1.82813 19.4375Z" fill="black"></path>
            </svg>
        </button>
        <div class="lpv3-modal-window__content">
            <div class="book-modal-step-2">
                <h2>Check your phone</h2>
                <p>Our AI employee is calling you—please talk to him</p>
                <div class="book-modal-step-2__buttons">
                    <button type="button" class="lpv3-btn lpv3-btn--filled lpv3-modal-window__close--trigger">OK</button>
                </div>
            </div>
        </div>
    </div>
</div>                            </div>
                        </div>
                    </main>
                    <div id="soapAfterPagesContainer" class="page-without-sosp page-without-sosp">
                        <div data-mesh-id="soapAfterPagesContainerinlineContent" data-testid="inline-content" class="">
                            <div data-mesh-id="soapAfterPagesContainerinlineContent-gridContainer" data-testid="mesh-container-content">
                                <div id="CONTROLLER_COMP_CUSTOM_ID" style="display:none"></div>
                            </div>
                        </div>
                    </div>
                    <script type="rocketlazyloadscript" data-rocket-src="https://www.youtube.com/iframe_api" data-rocket-defer="" defer=""></script>
                    <Footer />     
                    </div>
            </div>
        </div>
    </div>	

