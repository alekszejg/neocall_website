<script lang="ts">
  import { onMount } from 'svelte';
  import LangButton from '$lib/components/langButton.svelte';
  import { lang } from '$lib/stores/language';
  import localization from '$lib/localizations/navFooterForm.json';
  
  let headerEl: HTMLElement;
  let burgerMenu: HTMLButtonElement;

  onMount(() => {
    const toggleNav = () => headerEl.classList.toggle('show-nav');
    burgerMenu.addEventListener('click', toggleNav);
    return () => {
      burgerMenu.removeEventListener('click', toggleNav);
    };
  });
</script>

<header class="header" bind:this={headerEl}>
    <div class="container-mett">
        <div class="header__inner">
            <a href="/{$lang}" class="header__logo">
                <img src="/images/neocall.ai-standard.svg" alt="Neocall Logo" width="132" height="30">
            </a>
            <nav class="header__nav">
                <div class="header__nav-item">
                    <a class="header__nav-link" href="/{$lang}/ai-employee">{localization.nav["ai-employee"][$lang]}</a>
                </div>
                <div class="header__nav-item mr-auto">
                    <a class="header__nav-link" href="#top">
                        {localization.nav.industries.header[$lang]}
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                            <path d="M10.6735 7.16602L8.50688 9.49935L6.34021 7.16602" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                    </a>
                    <div class="header__nav-sub-item">
                        <div class="header__nav-small-cards" style="width:225px; display: block;">
                            <div class="header__nav-small-card">
                                <div class="header__nav-small-card-title">{localization.nav.industries.header[$lang]}</div>
                                <a href="/{$lang}/restaurants" class="header__nav-small-card-link">{localization.nav.industries.categories.restaurants[$lang]}</a>
                                <a href="/{$lang}/cleaning" class="header__nav-small-card-link">{localization.nav.industries.categories.cleaning[$lang]}</a>
                                <a href="/{$lang}/dental" class="header__nav-small-card-link">{localization.nav.industries.categories.dental[$lang]}</a>
                                <a href="/{$lang}/hvac-plumbing" class="header__nav-small-card-link">{localization.nav.industries.categories.HVAC[$lang]}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <div class="header__right">
                <a href="#finance-contact" class="lpv3-btn lpv3-btn--filled w-[140px]" style="white-space: nowrap;">{localization.nav.startNow[$lang]}</a>
                <LangButton />

                <button class="header__nav-opener" aria-label="Open navigation menu" bind:this={burgerMenu} >
                    <span></span>
                </button>
            </div>
        </div>
    </div>
</header>
