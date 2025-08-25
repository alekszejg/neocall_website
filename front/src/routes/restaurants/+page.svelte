<script>
  import { onMount } from 'svelte';
  import Navbar from '$lib/components/navbar.svelte';
  import Form from '$lib/components/form.svelte';
  import Footer from '$lib/components/footer.svelte';
  import { lang } from '$lib/stores/language';
  import localization from './localization.json';

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

<svelte:head>
  <base href="/newo-ai/">
</svelte:head>


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
<p>Get up to $30,000 additional revenue per month.</p>
                </div>
                <div class="lpv3-hero-section__content-form lpv3-api-form hide-mobile">
                    <!-- <div class="lpv3-api-form__input-row">
                        <div class="lpv3-api-form__input-row--border"></div>
                        <gmpx-place-picker type="establishment" placeholder="Find your business on Google Maps" class="input"></gmpx-place-picker>
                    </div>
                    <div class="lpv3-pricing-section__form-row-error"></div> -->
                    <div class="block">
                        <a class="lpv3-btn w-full" href="https://calendly.com/d/cwxs-rnj-t2w/newo-ai-demo-call&utm_source=website_restaurant" target="_blank">Book A Demo</a>
                    </div>
                </div>
            </div>
            <div class="lpv3-hero-section__image">
                                    <img fetchpriority="high" decoding="async" src="images/Group-14.png" alt="">
                                <div class="lpv3-hero-section__content-form lpv3-api-form show-mobile">
                    <!-- <div class="lpv3-api-form__input-row">
                        <div class="lpv3-api-form__input-row--border"></div>
                        <gmpx-place-picker type="establishment" placeholder="Find your business on Google Maps" class="input"></gmpx-place-picker>
                    </div>
                    <div class="lpv3-pricing-section__form-row-error"></div> -->
                    <div class="block">
                        <a class="lpv3-btn w-full" href="https://calendly.com/d/cwxs-rnj-t2w/newo-ai-demo-call&utm_source=website_restaurant" target="_blank">Book A Demo</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>


<section class="lpv3 lpv3-partners-section">
    <div class="lpv3-container">
                    <div class="lpv3-partners-section__title">#1 Leading AI Agents from the creators of AI solutions trusted by 70,000 businesses.</div>
                            <div class="lpv3-partners-section__slider lp2-brands__slider">
                <div class="swiper-wrapper">
                                            <div class="swiper-slide">
                            <img decoding="async" src="images/6ae255c2-da3e-42be-8f1c-d23fd1c24180.png" alt="">
                        </div>
                                            <div class="swiper-slide">
                            <img decoding="async" src="images/9bf68d10-eb41-41ba-b798-14bddfb1d28b.png" alt="">
                        </div>
                                            <div class="swiper-slide">
                            <img decoding="async" src="images/c350cf01-a786-45e3-a3fb-a0a4d20e8344.png" alt="">
                        </div>
                                            <div class="swiper-slide">
                            <img decoding="async" src="images/992aa0fb-a77a-4840-93d3-bbfeb44a3007.png" alt="">
                        </div>
                                            <div class="swiper-slide">
                            <img decoding="async" src="images/248ae93b-5d2e-4488-80dd-3e4cb122d491.png" alt="">
                        </div>
                                            <div class="swiper-slide">
                            <img decoding="async" src="images/949f3db4-f64e-45fe-bdbd-db1325bcb78b.png" alt="">
                        </div>
                                            <div class="swiper-slide">
                            <img decoding="async" src="images/89d1fa85-3bb1-4a75-b895-dfd24befbefc.png" alt="">
                        </div>
                                            <div class="swiper-slide">
                            <img decoding="async" src="images/07e19fce-512b-477b-aef1-fd4f3a7d24c4.png" alt="">
                        </div>
                                            <div class="swiper-slide">
                            <img decoding="async" src="images/s-blob-v1-IMAGE-_W72YM7bNck.png" alt="">
                        </div>
                                            <div class="swiper-slide">
                            <img decoding="async" src="images/s-blob-v1-IMAGE-ASqks44tQk8.png" alt="">
                        </div>
                                            <div class="swiper-slide">
                            <img decoding="async" src="images/s-blob-v1-IMAGE-cx8DGWSUJEw.png" alt="">
                        </div>
                                            <div class="swiper-slide">
                            <img decoding="async" src="images/s-blob-v1-IMAGE-dXHRx6GTufk.png" alt="">
                        </div>
                                            <div class="swiper-slide">
                            <img decoding="async" src="images/s-blob-v1-IMAGE-dZvALp35WA4.png" alt="">
                        </div>
                                            <div class="swiper-slide">
                            <img decoding="async" src="images/s-blob-v1-IMAGE-gxHmx9rrrxU.png" alt="">
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
            <iframe loading="lazy" width="690" height="388" src="about:blank" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen="" data-rocket-lazyload="fitvidscompatible" data-lazy-src="https://www.youtube.com/embed/Jar2rQRtM58?si=RkTlAozl5wAnHCAu"></iframe><noscript><iframe width="690" height="388" src="https://www.youtube.com/embed/Jar2rQRtM58?si=RkTlAozl5wAnHCAu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></noscript>            <div style="text-align:center; margin-top:8px;">View AI in Action</div>
        </div>
    </div>
</section>


    <section class="lpv3 lpv3-text-section">
        <div class="lpv3-container">
            <div class="lpv3-text-section__inner">
                <h2>Did you know…</h2>
<p>that 40-80% of phone calls go <strong>unanswered</strong> during rush hours and non-working hours? This means you could be <strong>missing out</strong> on 60-120 bookings every month.</p>
<p>The Newo.ai AI Restaurant Host answers all your calls 24/7, ensuring you never miss a revenue opportunity—helping you earn more, effortlessly.</p>
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
                    <h2>These AI employees can be hired instead of being integrated. This means you dont need to change your processes or retrain your staff—your new AI employee will start working 24/7 from day one, generating up to $30,000 in additional revenue per month per location that you were previously missing out on.</h2>
<p>David Yang, Co-founder, Newo.ai</p>
                </div>
                    </div>
    </div>
</section>


<section class="lpv3 lpv3-what-can-do">
    <div class="lpv3-container">
                            <div class="lpv3-what-can-do__grid">
                                                                        <div class="lpv3-info-card lpv3-info-card--title" style="background:#ffffff;">
                                                <div class="lpv3-info-card__content ">
                            <h2>What Can Your AI Host Do?</h2>
                        </div>
                    </div>
                                                                            <div class="lpv3-info-card lpv3-info-card--number" style="background:#fffbf5;">
                                                    <span class="lpv3-info-card__number" style="color: #fff0d3">1</span>
                                                <div class="lpv3-info-card__content ">
                            <h4>Reservations</h4>
<ul>
<li>Make new reservations in OpenTable, SevenRooms, Resy, Tock, etc Google Maps</li>
<li>Modify existing bookings</li>
<li>Handle cancellations</li>
<li>Manage large group bookings</li>
</ul>
                        </div>
                    </div>
                                                                            <div class="lpv3-info-card lpv3-info-card--number" style="background:#fff0d3;">
                                                    <span class="lpv3-info-card__number" style="color: #ffd480">2</span>
                                                <div class="lpv3-info-card__content ">
                            <h4>Order Management</h4>
<ul>
<li>Take delivery orders</li>
<li>Process pickup orders</li>
<li>Handle catering requests</li>
<li>Coordinate private dining</li>
</ul>
                        </div>
                    </div>
                                                                            <div class="lpv3-info-card lpv3-info-card--number" style="background:#ffd480;">
                                                    <span class="lpv3-info-card__number" style="color: #ffa800">3</span>
                                                <div class="lpv3-info-card__content ">
                            <h4>Outbound Calls</h4>
<ul>
<li>Invite guests to family brunches</li>
<li>Track guest preferences and send personalized invitations to tastings</li>
</ul>
                        </div>
                    </div>
                                                                            <div class="lpv3-info-card lpv3-info-card--number" style="background:#ffa800;">
                                                    <span class="lpv3-info-card__number" style="color: #e99a02">4</span>
                                                <div class="lpv3-info-card__content ">
                            <h4>Customer Service</h4>
<ul>
<li>Relay messages to management</li>
<li>Provide live music and event schedules</li>
<li>Answer common questions, including:
<ul>
<li>Business hours</li>
<li>Parking information</li>
<li>Lost items</li>
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
<li>Call recordings</li>
<li>Phone conversation and chat summaries and transcripts</li>
<li>Weekly report on additional secured revenue (ASR), based on orders placed during off-hours and overflow during peak times</li>
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
                    <a class="lpv3-btn w-full" href="https://calendly.com/d/cwxs-rnj-t2w/newo-ai-demo-call&utm_source=website_restaurant" target="_blank">Book A Demo</a>
                </div>
            </div>
            </div>
</section>



<section class="lpv3 lpv3-how-ai-works">
    <div class="lpv3-container">
                    <h2 class="lpv3-how-ai-works__title">How AI�Host Works</h2>
                            <div class="lpv3-how-ai-works__row">
                                                    <div class="lpv3-how-ai-works__step">
                        <span class="lpv3-how-ai-works__step-number" style="background:#fff0d3">1</span>
                        <div class="lpv3-how-ai-works__step-line" style="background: linear-gradient(90deg, #fff0d3, #ffa800);"></div>
                        <div class="lpv3-how-ai-works__step-content">
                            <h4>Guest Calls</h4>
<p>Your public phone redirects calls to the AI phone we provide. Feel free to redirect calls during non-working hours, overflow calls or all calls.</p>
<p>Online chat, SMS, Instagram, Facebook, WhatsApp, messages  all channels are supported.</p>
                        </div>
                    </div>
                                                        <div class="lpv3-how-ai-works__step">
                        <span class="lpv3-how-ai-works__step-number" style="background:#ffa800">2</span>
                        <div class="lpv3-how-ai-works__step-line" style="background: linear-gradient(90deg, #ffa800, #e99a02);"></div>
                        <div class="lpv3-how-ai-works__step-content">
                            <h4>AI Makes Actual Reservations</h4>
<p>AI checks available slots in OpenTable, SevenRooms, Resy, Tock. Handles Reservations, Pickup, Delivery Orders, manages large group reservations, handles catering requests, relays messages to management</p>
                        </div>
                    </div>
                                                        <div class="lpv3-how-ai-works__step">
                        <span class="lpv3-how-ai-works__step-number" style="background:#e99a02">3</span>
                        <div class="lpv3-how-ai-works__step-line" style="background: linear-gradient(90deg, #e99a02, #a36302);"></div>
                        <div class="lpv3-how-ai-works__step-content">
                            <h4>Booking goes to your Table Booking System</h4>
<p>AI Host sends SMS or email notifications to both the guest and your staff.</p>
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
                    <a class="lpv3-btn w-full" href="https://calendly.com/d/cwxs-rnj-t2w/newo-ai-demo-call&utm_source=website_restaurant" target="_blank">Book A Demo</a>
                </div>
            </div>
            </div>
</section>



<section class="lpv3 lpv3-pricing-section">
    <div class="lpv3-container">
                                                    <div class="lpv3-pricing-section__row">
                    <div class="lpv3-pricing-section__content">
                        <h2>Your Additional Revenue</h2>
<p>With AI Restaurant Hosts from Newo.ai, most restaurants receive 2–6 additional reservations per day. Some come from bookings made during non-working hours, while others result from overflow during peak hours. These bookings contribute to your additional secured revenue (ASR).</p>
                                            </div>
                    <div class="lpv3-pricing-section__prices">
                                                    <h2 class="title title--02">$150K-$350K</h2>
                                                                            <p>additional revenue per location per year</p>
                                            </div>
                </div>
                                            <div class="lpv3-pricing-section__row">
                    <div class="lpv3-pricing-section__content">
                        <h2>Prices starting at</h2>
                                                    <a class="lpv3-btn" href="https://calendly.com/d/cwxs-rnj-t2w/newo-ai-demo-call&utm_source=website_restaurant">
                                Book A Demo                            </a>
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
                <h2>Our new AI host is a game-changer. It handles calls 24/7, allowing my team to focus on in-house guests. Callers get quick help, staff are less stressed, and guest satisfaction has improved. It paid for itself in just one week.</h2>
<p>Bevri Restaurant, Palo Alto, CA</p>
            </div>
            <div class="lpv3-about-person__image">
                                    <img decoding="async" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" alt="" data-lazy-src="https://newo.ai/wp-content/uploads/2024/12/anyanism_realistic_portrait_of_a_smiling_black_woman_restaura_15d99b0e-27a3-4a35-abf7-f35e21a6d460_2.png"><noscript><img decoding="async" src="https://newo.ai/wp-content/uploads/2024/12/anyanism_realistic_portrait_of_a_smiling_black_woman_restaura_15d99b0e-27a3-4a35-abf7-f35e21a6d460_2.png" alt=""></noscript>
                            </div>
        </div>
    </div>
</section>


<section class="lpv3 lpv3-about-person">
    <div class="lpv3-container">
                <div class="lpv3-about-person__inner lpv3-about-person__inner--reverse">
            <div class="lpv3-about-person__content quotes">
                <h2>Our restaurant gets very busy in summer. We are missing about 40-60% of phone calls during regular hours, and up to 80% during rush hours. AI Hostess is a game changer.</h2>
<p>Mexican Restaurant, San Jose, CA</p>
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
                <h2>… It’s really, really, really fascinating. you know, and again, just the full transparency. We did get demos from five other companies and, you know, none of them were even in the ballpark of what you’re showing. So, we are really impressed</h2>
<p>Sushi chain, San Francisco, CA</p>
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
                <h2>We opened about 6 months ago. Servicing big parties and special events along with selling our catering services is vital for us. AI Hostess picks up 100% calls, helps our guests with their event planning and passes to our human employees for a final human touch. It reduced work stress and actually grew our revenue!</h2>
<p>Fusion Restaurant, San Francisco, CA</p>
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
                <h2>Im thrilled to share my experience using newo.ai GenAI-powered digital employee at Menlo Tavern. Its been a true game-changer for our restaurant. Since implementing the newo.ai solution several months ago, weve been able to answer 100% of our incoming phone calls. The real benefit has been freeing up my management team to spend more quality time on the restaurant floor, interacting directly with guests and ensuring an exceptional in-person experience.</h2>
<p>Menlo Tavern, Menlo Park CA</p>
            </div>
            <div class="lpv3-about-person__image">
                                    <img decoding="async" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" alt="" data-lazy-src="https://newo.ai/wp-content/uploads/2024/12/anyanism_realistic_portrait_of_a_smiling_black_man_restaurant_afddf12d-62cd-494e-a9f2-2e20083da025_1.png"><noscript><img decoding="async" src="https://newo.ai/wp-content/uploads/2024/12/anyanism_realistic_portrait_of_a_smiling_black_man_restaurant_afddf12d-62cd-494e-a9f2-2e20083da025_1.png" alt=""></noscript>
                            </div>
        </div>
    </div>
</section>


<section class="lpv3 lpv3-competition-section">
    <div class="lpv3-container">
                    <h2 class="lpv3-competition-section__title">Ahead of competition</h2>
                            <div class="lpv3-competition-section__grid">
                                    <div class="lpv3-info-card" style="background:#fffbf5">
                        <div class="lpv3-info-card__content">
                            <h4>Single-click, Instant Deployment</h4>
<p>Each agent autonomously learns all available information about your business, including products, prices, services, and service area. Using our proprietary Newo Magic Browser and Newo Magic API technologies, Newo.ai agents can handle sales and appointments in most popular Booking systems, POS/CRM/PMS platforms right out of the box, with no need for technical integration.</p>
                        </div>
                    </div>
                                    <div class="lpv3-info-card" style="background:#fff0d3">
                        <div class="lpv3-info-card__content">
                            <h4>No Complexity Limits</h4>
<p>With its advanced API, Newo.ai offers virtually unlimited options for integrations, including:</p>
<ul>
<li>Social media and messaging apps (Instagram, WhatsApp)</li>
<li>Video surveillance</li>
<li>Various types of sensors</li>
<li>POS systems</li>
<li>Other external systems and services</li>
</ul>
                        </div>
                    </div>
                                    <div class="lpv3-info-card" style="background:#ffd480">
                        <div class="lpv3-info-card__content">
                            <h4>Low-Cost Customizations</h4>
<p>Launching a new restaurant soon? Want to send tailored SMS messages with service details or images if a client asks about a specific offering? Unlike most other platforms, Newo.ai:</p>
<ul>
<li>allows real-time adjustments to agent behavior,</li>
<li>requires no programming skills,</li>
<li>provides access to dedicated certified partners for customizations.</li>
</ul>
                        </div>
                    </div>
                                    <div class="lpv3-info-card" style="background:#ffa800">
                        <div class="lpv3-info-card__content">
                            <h4>Human in the Loop Support</h4>
<p>Newo.ai operates a 24/7 Human In the Loop Center, enabling immediate assistance for complex scenarios—especially crucial during the initial weeks after deployment.</p>
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
                    <a class="lpv3-btn w-full" href="https://calendly.com/d/cwxs-rnj-t2w/newo-ai-demo-call&utm_source=website_restaurant" target="_blank">Book A Demo</a>
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
                    <h2>Weve created a platform where you can build an AI employee in just 3 minutes. Right out of the box, its ready to work – and just like a human employee, it keeps learning and improving through every customer interaction and manager instruction. No lengthy development or big upfront investment needed. All customizations are affordable, and theres no limit to how sophisticated your AI employee can become. Its that simple</h2>
<p>David Yang, Co-founder, Newo.ai</p>
                </div>
                    </div>
    </div>
</section>


<section class="lpv3 lpv3-faq-section" id="lpv3-faq-section">
    <div class="lpv3-container">
                    <h2 class="lpv3-faq-section__title">Frequently asked questions</h2>
                            <div class="lpv3-faq-section__list">
                                    <div class="lpv3-faq-accordion">
                        <button type="button" class="lpv3-faq-accordion__button lpv3-faq-accordion__button--trigger">
                            Is the AI Host already connected to my booking system?                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                <path d="M15 7.1875V22.8125" stroke="#2F1B04" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M22.8125 15H7.1875" stroke="#2F1B04" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                        </button>
                        <div class="lpv3-faq-accordion__content">
                            <p>If you have a RESERVE A TABLE button on Google Maps, the answer is yes. Your Newo AI Host is automatically connected to your booking system, regardless of whether you use OpenTable, Yelp, SevenRooms, Resy, Tock, or another system. If you dont yet have a RESERVE A TABLE button on Google Maps, you need to add it to use the Newo AI Host. Adding it to Google Maps usually takes 1-2 days.</p>
                        </div>
                    </div>
                                    <div class="lpv3-faq-accordion">
                        <button type="button" class="lpv3-faq-accordion__button lpv3-faq-accordion__button--trigger">
                            Can the AI Host speak multiple languages?                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                <path d="M15 7.1875V22.8125" stroke="#2F1B04" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M22.8125 15H7.1875" stroke="#2F1B04" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                        </button>
                        <div class="lpv3-faq-accordion__content">
                            <p>Yes. Its pretty awesome.</p>
                        </div>
                    </div>
                                    <div class="lpv3-faq-accordion">
                        <button type="button" class="lpv3-faq-accordion__button lpv3-faq-accordion__button--trigger">
                            Can I keep my current phone number?                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                <path d="M15 7.1875V22.8125" stroke="#2F1B04" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M22.8125 15H7.1875" stroke="#2F1B04" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                        </button>
                        <div class="lpv3-faq-accordion__content">
                            <p>Yes. Simply forward calls from your public phone number to your AI number, which we will provide along with your AI Host.</p>
                        </div>
                    </div>
                                    <div class="lpv3-faq-accordion">
                        <button type="button" class="lpv3-faq-accordion__button lpv3-faq-accordion__button--trigger">
                            Can I use the AI Host only after business hours?                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                <path d="M15 7.1875V22.8125" stroke="#2F1B04" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M22.8125 15H7.1875" stroke="#2F1B04" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                        </button>
                        <div class="lpv3-faq-accordion__content">
                            <p>Absolutely. You can choose to forward calls from your public phone number 24/7, only after business hours, or in overflow mode (e.g., after the second or third ring if your human employee doesn’t pick up).</p>
                        </div>
                    </div>
                                    <div class="lpv3-faq-accordion">
                        <button type="button" class="lpv3-faq-accordion__button lpv3-faq-accordion__button--trigger">
                            Can I add live chat with the AI Host to my website?                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                <path d="M15 7.1875V22.8125" stroke="#2F1B04" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M22.8125 15H7.1875" stroke="#2F1B04" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                        </button>
                        <div class="lpv3-faq-accordion__content">
                            <p>Yes. The Newo.ai platform includes a built-in live chat system at no additional cost. Adding it to your website boosts conversions and increases bookings.</p>
                        </div>
                    </div>
                                    <div class="lpv3-faq-accordion">
                        <button type="button" class="lpv3-faq-accordion__button lpv3-faq-accordion__button--trigger">
                            Can the AI Host communicate with guests via SMS?                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                <path d="M15 7.1875V22.8125" stroke="#2F1B04" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M22.8125 15H7.1875" stroke="#2F1B04" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                        </button>
                        <div class="lpv3-faq-accordion__content">
                            <p>Yes. One of the key features of Newo.ai is its omnichannel capability, allowing communication across multiple channels like phone, SMS, email, live chat, WhatsApp, Instagram, and other messengers. This significantly improves conversion rates and booking numbers.</p>
                        </div>
                    </div>
                                    <div class="lpv3-faq-accordion">
                        <button type="button" class="lpv3-faq-accordion__button lpv3-faq-accordion__button--trigger">
                            Can the AI Host handle multiple calls simultaneously?                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                <path d="M15 7.1875V22.8125" stroke="#2F1B04" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M22.8125 15H7.1875" stroke="#2F1B04" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                        </button>
                        <div class="lpv3-faq-accordion__content">
                            <p>Yes. This helps capture more orders during peak hours.</p>
                        </div>
                    </div>
                                    <div class="lpv3-faq-accordion">
                        <button type="button" class="lpv3-faq-accordion__button lpv3-faq-accordion__button--trigger">
                            Can the AI Host call my guests and invite them to events?                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                <path d="M15 7.1875V22.8125" stroke="#2F1B04" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M22.8125 15H7.1875" stroke="#2F1B04" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                        </button>
                        <div class="lpv3-faq-accordion__content">
                            <p>Yes. Your AI Host works in both inbound and outbound modes. You can upload a list of customer names, phone numbers, and call details to a connected Google Sheet. For example: Hey, Steven, long time no see! I remember you love Pinot Noir—join us with your family on Sunday for brunch. A local winery will be hosting a wine tasting! Then click Go, and your AI Host will start calling guests, engaging them in friendly conversations and personalized invitations. This can help increase restaurant revenue during slower periods.</p>
                        </div>
                    </div>
                                    <div class="lpv3-faq-accordion">
                        <button type="button" class="lpv3-faq-accordion__button lpv3-faq-accordion__button--trigger">
                            Is implementing the AI Host really free?                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                <path d="M15 7.1875V22.8125" stroke="#2F1B04" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M22.8125 15H7.1875" stroke="#2F1B04" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                        </button>
                        <div class="lpv3-faq-accordion__content">
                            <p>Yes, the standard functionality is free. Most of the features described on this page are included in the standard functionality. Custom integrations with CRM systems or unique behavior logic are not part of the standard package.</p>
                        </div>
                    </div>
                                    <div class="lpv3-faq-accordion">
                        <button type="button" class="lpv3-faq-accordion__button lpv3-faq-accordion__button--trigger">
                            How long does it take to implement the AI Host?                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                <path d="M15 7.1875V22.8125" stroke="#2F1B04" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M22.8125 15H7.1875" stroke="#2F1B04" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                        </button>
                        <div class="lpv3-faq-accordion__content">
                            <p>Implementation with standard functionality takes between 2 hours and 2 days, depending on the workload of our certified agent designers.</p>
                        </div>
                    </div>
                                    <div class="lpv3-faq-accordion">
                        <button type="button" class="lpv3-faq-accordion__button lpv3-faq-accordion__button--trigger">
                            Can I implement the AI Host on my own?                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                <path d="M15 7.1875V22.8125" stroke="#2F1B04" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M22.8125 15H7.1875" stroke="#2F1B04" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                        </button>
                        <div class="lpv3-faq-accordion__content">
                            <p>Yes, you can create an agent by linking your Google Maps listing or website through our platform. The agent learns on its own and takes only 3 minutes to set up. However, you may need to tweak some parameters, such as specifying where to forward after-hours emergency calls or which email address to use for catering requests. For a seamless setup, its easier to schedule a free video call with our specialist, who will ensure everything is configured perfectly.</p>
                        </div>
                    </div>
                                    <div class="lpv3-faq-accordion">
                        <button type="button" class="lpv3-faq-accordion__button lpv3-faq-accordion__button--trigger">
                            What should I do if I want to change the AI Host’s behavior?                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                <path d="M15 7.1875V22.8125" stroke="#2F1B04" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M22.8125 15H7.1875" stroke="#2F1B04" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                        </button>
                        <div class="lpv3-faq-accordion__content">
                            <p>You can easily make simple changes, such as updating your menu or adjusting business hours, on your own. However, for more complex modifications (e.g., During the holiday season, dont allow single-person table bookings or delivery orders. Takeout orders should only be accepted until 3 PM), we recommend delegating this to our certified agent designers. Some changes can be made for free, while others may require a few hours of professional services. The cost for these services starts at $65/hour, depending on the complexity.</p>
                        </div>
                    </div>
                                    <div class="lpv3-faq-accordion">
                        <button type="button" class="lpv3-faq-accordion__button lpv3-faq-accordion__button--trigger">
                            Can I listen to the AI Host’s calls with guests?                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                <path d="M15 7.1875V22.8125" stroke="#2F1B04" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M22.8125 15H7.1875" stroke="#2F1B04" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                        </button>
                        <div class="lpv3-faq-accordion__content">
                            <p>Yes. You will have access to a dedicated business portal where you can listen to call recordings, read transcripts, and view summaries.</p>
                        </div>
                    </div>
                                    <div class="lpv3-faq-accordion">
                        <button type="button" class="lpv3-faq-accordion__button lpv3-faq-accordion__button--trigger">
                            How does the AI Host stay updated on menu changes?                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                <path d="M15 7.1875V22.8125" stroke="#2F1B04" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M22.8125 15H7.1875" stroke="#2F1B04" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                        </button>
                        <div class="lpv3-faq-accordion__content">
                            <p>With standard functionality, you manually upload menu updates as often as needed. A simple customization can enable the system to automatically retrieve updated menu information from your website on a schedule or integrate directly with your POS system.</p>
                        </div>
                    </div>
                                    <div class="lpv3-faq-accordion">
                        <button type="button" class="lpv3-faq-accordion__button lpv3-faq-accordion__button--trigger">
                            Can the AI Host handle large group, catering, and private dining requests?                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                <path d="M15 7.1875V22.8125" stroke="#2F1B04" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M22.8125 15H7.1875" stroke="#2F1B04" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                        </button>
                        <div class="lpv3-faq-accordion__content">
                            <p>Yes. The AI Host automatically handles requests for large groups, catering, and private dining as part of its standard functionality. It collects details such as guest count, date, time, and event purpose and emails the information to the restaurant manager.</p>
                        </div>
                    </div>
                                    <div class="lpv3-faq-accordion">
                        <button type="button" class="lpv3-faq-accordion__button lpv3-faq-accordion__button--trigger">
                            Can the AI Host transfer a call to a human manager if the guest requests it?                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                <path d="M15 7.1875V22.8125" stroke="#2F1B04" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M22.8125 15H7.1875" stroke="#2F1B04" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                        </button>
                        <div class="lpv3-faq-accordion__content">
                            <p>Yes. Out of the box, Newo.ai AI Hosts include highly flexible settings for forwarding customer information to staff. For example:</p>
<ul>
<li>During business hours, important inquiries (e.g., a guest wants to book the entire restaurant) can be immediately forwarded to a manager.</li>
<li>For operational requests (e.g., a request for a receipt copy or lost items), the AI Host can forward details via SMS or email.</li>
<li>During after-hours, the AI Host can collect the details of any inquiry and send a summary via email.</li>
<li>These settings require no programming and can be adjusted by you as the user, without needing assistance from our professionals.</li>
</ul>
                        </div>
                    </div>
                                    <div class="lpv3-faq-accordion">
                        <button type="button" class="lpv3-faq-accordion__button lpv3-faq-accordion__button--trigger">
                            Can I try the AI Host and then cancel?                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                <path d="M15 7.1875V22.8125" stroke="#2F1B04" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M22.8125 15H7.1875" stroke="#2F1B04" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                        </button>
                        <div class="lpv3-faq-accordion__content">
                            <p>Yes, we offer monthly plans with no annual contract. You can cancel anytime, and you only pay for the current month.</p>
                        </div>
                    </div>
                                    <div class="lpv3-faq-accordion">
                        <button type="button" class="lpv3-faq-accordion__button lpv3-faq-accordion__button--trigger">
                            How do I get started with the AI Host?                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                <path d="M15 7.1875V22.8125" stroke="#2F1B04" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M22.8125 15H7.1875" stroke="#2F1B04" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                        </button>
                        <div class="lpv3-faq-accordion__content">
                            <p>The easiest way is to call Adrian, our AI Receptionist, at (888) 303-NEWO. Adrian will help you create an AI Host and schedule a meeting with our human expert to complete the setup.</p>
                        </div>
                    </div>
                            </div>
                    </div>
</section>


<section class="lpv3 lpv3-faq-section" id="lpv3-faq-section">
    <div class="lpv3-container">
                    <h2 class="lpv3-faq-section__title">Questions regarding multi-location services, call centers, and franchisees.</h2>
                            <div class="lpv3-faq-section__list">
                                    <div class="lpv3-faq-accordion">
                        <button type="button" class="lpv3-faq-accordion__button lpv3-faq-accordion__button--trigger">
                            I own a restaurant chain. Can I create an AI Agent with a unified number for all locations?                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                <path d="M15 7.1875V22.8125" stroke="#2F1B04" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M22.8125 15H7.1875" stroke="#2F1B04" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                        </button>
                        <div class="lpv3-faq-accordion__content">
                            <p>Yes. AI Agents built on the Newo.ai platform work exceptionally well as call centers. They provide location-specific information (operating hours, address, services offered) while allowing guests to make reservations at the desired location. If no slots are available at one location, Newo.ai AI Agents can recommend another location, increasing overall revenue for your chain.</p>
                        </div>
                    </div>
                                    <div class="lpv3-faq-accordion">
                        <button type="button" class="lpv3-faq-accordion__button lpv3-faq-accordion__button--trigger">
                            Can I automate a centralized call center for my business?                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                <path d="M15 7.1875V22.8125" stroke="#2F1B04" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M22.8125 15H7.1875" stroke="#2F1B04" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                        </button>
                        <div class="lpv3-faq-accordion__content">
                            <p>Yes. Multi-location businesses automated on the Newo.ai platform can use bottom-up, top-down, or hybrid approaches.</p>
<p>Bottom-up: Individual locations phone numbers, websites, and contacts are advertised. However, overflow calls (e.g., when staff at a specific location don’t answer within 2–3 rings) are transferred to a centralized multi-location AI Agent. This agent can answer questions about all locations and make reservations at any of them.</p>
<p>Top-down: A single phone number and website are advertised for the entire chain, and all calls and inquiries are directed to a centralized multi-location AI Agent. This agent can answer questions about all locations and handle bookings for any of them. If a guest requests a call transfer or the delivery of information to a specific location, the multi-location AI Agent can handle it by transferring the call or sending a summary via email to the location’s manager.</p>
                        </div>
                    </div>
                                    <div class="lpv3-faq-accordion">
                        <button type="button" class="lpv3-faq-accordion__button lpv3-faq-accordion__button--trigger">
                            What are the cost and timeline for implementation for a restaurant chain?                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                <path d="M15 7.1875V22.8125" stroke="#2F1B04" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M22.8125 15H7.1875" stroke="#2F1B04" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                        </button>
                        <div class="lpv3-faq-accordion__content">
                            <p>Deployment for a restaurant chain is not part of the standard functionality, but in some cases, it can be implemented at no cost. The implementation timeline for a restaurant chain is typically around 5–15 business days, depending on the availability of business information.</p>
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

