<script lang="ts">
  import { onMount } from 'svelte';
  import LangButton from '$lib/components/langButton.svelte';
  
  let headerEl: HTMLElement;
  let navOpenerEl: HTMLButtonElement;

  onMount(() => {
    const navOpener = document.querySelector<HTMLButtonElement>('.header__nav-opener');
    const header = document.querySelector<HTMLElement>('header.header');
    
    const toggleNav = () => headerEl.classList.toggle('show-nav');
    navOpenerEl.addEventListener('click', toggleNav);

    return () => {
      navOpenerEl.removeEventListener('click', toggleNav);
    };
  });
</script>

<header class="header" bind:this={headerEl}>
    <div class="container-mett">
        <div class="header__inner">
            <a href="/" class="header__logo">
                <img src="images/neocall.ai-standard.svg" alt="My Logo" width="132" height="30">
            </a>
            <nav class="header__nav">
                <div class="header__nav-item mr-auto">
                    <a class="header__nav-link" href="#">Industries
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                            <path d="M10.6735 7.16602L8.50688 9.49935L6.34021 7.16602" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                    </a>
                    <div class="header__nav-sub-item">
                        <div class="header__nav-small-cards" style="width:225px; display: block;">
                            <div class="header__nav-small-card">
                                <div class="header__nav-small-card-title">INDUSTRIES</div>
                                <a href="https://newo.ai/restaurant/" class="header__nav-small-card-link">Restaurants</a>
                                <a href="https://newo.ai/cleaning-ai-receptionist/" class="header__nav-small-card-link">Cleaning Services</a>
                                <a href="https://agent.newo.ai/creator" class="header__nav-small-card-link" target="_blank">Home Service Companies</a>
                                <a href="https://newo.ai/dental-ai-receptionist/" class="header__nav-small-card-link">Dental & Orthodontics</a>
                                <a href="https://agent.newo.ai/creator" class="header__nav-small-card-link" target="_blank">Fitness & Wellness</a>
                                <a href="https://agent.newo.ai/creator" class="header__nav-small-card-link" target="_blank">Hospitality</a>
                                <a href="https://newo.ai/hvac-plumbing-ai-receptionist/" class="header__nav-small-card-link">HVAC/Plumbing</a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <div class="header__right">
                <a class="header__log-in" href="tel:+18886396939">
                    <span>Call 24/7: +1 (888) 639-6939</span>
                    <span>free consultations</span>
                </a>
                <a href="#finance-contact" class="lpv3-btn lpv3-btn--filled" style="white-space: nowrap;">Book a Demo</a>
                
                <LangButton />

                <button class="header__nav-opener" bind:this={navOpenerEl}>
                    <span></span>
                </button>
            </div>
        </div>
    </div>
</header>
