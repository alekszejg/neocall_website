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
                <svg xmlns="http://www.w3.org/2000/svg" width="132" height="30" viewBox="0 0 132 30" fill="none">
                    <mask id="mask0_497_451" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="1" width="131" height="28">
                        <path d="M130.803 1.91211H0V28.0883H130.803V1.91211Z" fill="white"></path>
                    </mask>
                    <g mask="url(#mask0_497_451)">
                        <path d="M41.7468 15.0142V24.1256H37.4668V8.36537H41.5458V11.146H41.7267C42.0683 10.2294 42.6409 9.50429 43.4447 8.97074C44.2484 8.43035 45.2229 8.16016 46.3683 8.16016C47.44 8.16016 48.3743 8.39957 49.1714 8.87839C49.9684 9.35722 50.5879 10.0413 51.0301 10.9305C51.4721 11.8129 51.6932 12.8663 51.6932 14.0907V24.1256H47.4132V14.8705C47.4199 13.9061 47.1788 13.1536 46.6898 12.6132C46.2008 12.066 45.5277 11.7924 44.6704 11.7924C44.0944 11.7924 43.5854 11.9189 43.1432 12.1721C42.7079 12.4251 42.3663 12.7946 42.1184 13.2802C41.8773 13.759 41.7534 14.3371 41.7468 15.0142Z" fill="#010007"></path>
                        <path d="M60.0072 24.4335C58.4199 24.4335 57.0535 24.1051 55.908 23.4484C54.7694 22.7848 53.892 21.8477 53.2759 20.637C52.6597 19.4194 52.3516 17.9796 52.3516 16.3173C52.3516 14.6961 52.6597 13.2734 53.2759 12.0489C53.892 10.8245 54.7594 9.87025 55.878 9.18621C57.0032 8.50218 58.3227 8.16016 59.8364 8.16016C60.8545 8.16016 61.8023 8.32775 62.6796 8.66292C63.5638 8.99126 64.3341 9.48719 64.9904 10.1507C65.6535 10.8142 66.1693 11.6488 66.5377 12.6542C66.906 13.653 67.0903 14.8227 67.0903 16.1633V17.3639H54.0595V14.6551H63.0615C63.0615 14.0258 62.9275 13.4683 62.6596 12.9826C62.3916 12.4969 62.0199 12.1173 61.5444 11.8437C61.0756 11.5632 60.5296 11.423 59.9068 11.423C59.2571 11.423 58.681 11.5769 58.1787 11.8847C57.6831 12.1857 57.2945 12.5927 57.0133 13.1057C56.7319 13.6119 56.5879 14.1763 56.5813 14.7987V17.3742C56.5813 18.154 56.7219 18.8277 57.0032 19.3955C57.2912 19.9632 57.6965 20.401 58.2188 20.7089C58.7413 21.0166 59.3609 21.1706 60.0775 21.1706C60.5531 21.1706 60.9885 21.1021 61.3837 20.9654C61.7789 20.8285 62.117 20.6233 62.3984 20.3497C62.6796 20.0761 62.894 19.7409 63.0413 19.3442L66.9999 19.611C66.7989 20.5823 66.387 21.4305 65.764 22.1555C65.1479 22.8738 64.3508 23.4347 63.3729 23.8383C62.4017 24.2351 61.2798 24.4335 60.0072 24.4335Z" fill="#010007"></path>
                        <path d="M70.6684 24.1255L66.4688 8.36523H70.799L73.1901 18.9541H73.3308L75.8224 8.36523H80.0722L82.6041 18.8925H82.7347L85.0856 8.36523H89.4057L85.2162 24.1255H80.685L78.0328 14.2137H77.8418L75.1894 24.1255H70.6684Z" fill="#010007"></path>
                        <path d="M96.1504 24.4335C94.5897 24.4335 93.2402 24.0948 92.1015 23.4176C90.9696 22.7336 90.0955 21.7828 89.4792 20.5652C88.863 19.3407 88.5549 17.9214 88.5549 16.307C88.5549 14.679 88.863 13.2562 89.4792 12.0387C90.0955 10.8142 90.9696 9.86341 92.1015 9.18621C93.2402 8.50218 94.5897 8.16016 96.1504 8.16016C97.711 8.16016 99.0573 8.50218 100.189 9.18621C101.328 9.86341 102.205 10.8142 102.821 12.0387C103.438 13.2562 103.746 14.679 103.746 16.307C103.746 17.9214 103.438 19.3407 102.821 20.5652C102.205 21.7828 101.328 22.7336 100.189 23.4176C99.0573 24.0948 97.711 24.4335 96.1504 24.4335ZM96.1705 21.0475C96.8804 21.0475 97.4732 20.8423 97.9487 20.4318C98.4243 20.0145 98.7827 19.4468 99.0238 18.7285C99.2716 18.0103 99.3955 17.1928 99.3955 16.2763C99.3955 15.3596 99.2716 14.5422 99.0238 13.8239C98.7827 13.1057 98.4243 12.5379 97.9487 12.1208C97.4732 11.7035 96.8804 11.4948 96.1705 11.4948C95.4538 11.4948 94.851 11.7035 94.3621 12.1208C93.8798 12.5379 93.5148 13.1057 93.2669 13.8239C93.0258 14.5422 92.9052 15.3596 92.9052 16.2763C92.9052 17.1928 93.0258 18.0103 93.2669 18.7285C93.5148 19.4468 93.8798 20.0145 94.3621 20.4318C94.851 20.8423 95.4538 21.0475 96.1705 21.0475Z" fill="#010007"></path>
                        <path d="M107.074 24.3929C106.41 24.3929 105.841 24.1533 105.366 23.6745C104.897 23.1889 104.662 22.6075 104.662 21.9302C104.662 21.2599 104.897 20.6853 105.366 20.2065C105.841 19.7277 106.41 19.4883 107.074 19.4883C107.717 19.4883 108.279 19.7277 108.762 20.2065C109.244 20.6853 109.485 21.2599 109.485 21.9302C109.485 22.3817 109.371 22.7956 109.143 23.1718C108.922 23.5412 108.631 23.8387 108.269 24.0645C107.907 24.2834 107.509 24.3929 107.074 24.3929Z" fill="#010007"></path>
                        <path d="M116.112 24.4232C115.127 24.4232 114.25 24.2487 113.48 23.8999C112.709 23.5442 112.1 23.0209 111.651 22.33C111.208 21.6323 110.988 20.7636 110.988 19.7238C110.988 18.8483 111.145 18.1129 111.46 17.5178C111.774 16.9227 112.204 16.4439 112.746 16.0813C113.289 15.7188 113.905 15.4452 114.594 15.2604C115.291 15.0758 116.022 14.9458 116.785 14.8705C117.682 14.7748 118.406 14.6859 118.955 14.6037C119.504 14.5148 119.903 14.3849 120.151 14.2138C120.399 14.0429 120.522 13.7898 120.522 13.4546V13.393C120.522 12.7432 120.321 12.2404 119.92 11.8847C119.525 11.529 118.962 11.3512 118.232 11.3512C117.462 11.3512 116.848 11.5256 116.393 11.8744C115.938 12.2165 115.636 12.6474 115.489 13.1674L111.531 12.839C111.731 11.8814 112.127 11.0536 112.716 10.3559C113.306 9.65135 114.065 9.11097 114.996 8.73474C115.935 8.35169 117.019 8.16016 118.252 8.16016C119.109 8.16016 119.929 8.26276 120.713 8.46797C121.504 8.67319 122.204 8.99126 122.813 9.42221C123.429 9.85315 123.915 10.4072 124.27 11.0844C124.624 11.7548 124.802 12.5585 124.802 13.4956V24.1256H120.743V21.9401H120.623C120.375 22.4326 120.043 22.8669 119.628 23.2432C119.213 23.6126 118.714 23.9033 118.131 24.1153C117.549 24.3205 116.875 24.4232 116.112 24.4232ZM117.337 21.4065C117.967 21.4065 118.523 21.28 119.005 21.0269C119.487 20.767 119.866 20.4182 120.14 19.9803C120.415 19.5425 120.552 19.0466 120.552 18.4926V16.82C120.418 16.909 120.234 16.9911 119.999 17.0664C119.772 17.1347 119.514 17.1998 119.226 17.2613C118.938 17.3161 118.65 17.3673 118.363 17.4152C118.074 17.4563 117.813 17.4938 117.579 17.5281C117.076 17.6033 116.637 17.7231 116.262 17.8872C115.887 18.0514 115.596 18.2736 115.388 18.5541C115.181 18.8277 115.077 19.1697 115.077 19.5802C115.077 20.1753 115.288 20.6302 115.71 20.9448C116.139 21.2526 116.681 21.4065 117.337 21.4065Z" fill="#010007"></path>
                        <path d="M126.343 24.1263V8.36601H130.622V24.1263H126.343ZM128.493 6.33442C127.856 6.33442 127.31 6.11894 126.855 5.688C126.406 5.25021 126.182 4.72692 126.182 4.11813C126.182 3.51618 126.406 2.99973 126.855 2.56879C127.31 2.131 127.856 1.91211 128.493 1.91211C129.128 1.91211 129.672 2.131 130.119 2.56879C130.576 2.99973 130.804 3.51618 130.804 4.11813C130.804 4.72692 130.576 5.25021 130.119 5.688C129.672 6.11894 129.128 6.33442 128.493 6.33442Z" fill="#010007"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M18.6522 1.91211C23.3984 4.00538 26.7202 8.82857 26.7202 14.4441C26.7202 21.9796 20.7386 28.0884 13.3601 28.0884C5.98151 28.0884 0 21.9796 0 14.4441C0 9.02644 3.09175 4.34628 7.57163 2.14347C7.25071 2.90055 7.07298 3.73517 7.07298 4.61218C7.07298 8.04749 9.79985 10.8324 13.1637 10.8324C16.5274 10.8324 19.2542 8.04749 19.2542 4.61218C19.2542 3.67914 19.0531 2.79407 18.6927 1.99975L18.6522 1.91211Z" fill="#010007"></path>
                    </g>
                </svg>
            </a>
            <nav class="header__nav">
                <div class="header__nav-item">
                    <a class="header__nav-link" href="https://newo.ai/ai-employee/">AI EMPLOYEE</a>
                </div>
                <div class="header__nav-item">
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
                <div class="header__nav-item">
                    <a class="header__nav-link" href="https://newo.ai/pricing/">Pricing</a>
                </div>
                <div class="header__nav-item">
                    <a class="header__nav-link" href="#">Partners
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                            <path d="M10.6735 7.16602L8.50688 9.49935L6.34021 7.16602" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                    </a>
                    <div class="header__nav-sub-item">
                        <div class="header__nav-small-cards" style="width:200px; display: block;">
                            <div class="header__nav-small-card">
                                <div class="header__nav-small-card-title">PARTNERS</div>
                                    <a href="https://newo.ai/partners/" class="header__nav-small-card-link">Become a partner</a>
                                    <a href="https://partners.newo.ai/partners" class="header__nav-small-card-link">Partners Listing</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="header__nav-item">
                    <a class="header__nav-link" href="#">Resources 
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                            <path d="M10.6735 7.16602L8.50688 9.49935L6.34021 7.16602" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                    </a>
                    <div class="header__nav-sub-item">
                        <div class="header__nav-small-cards">
                            <div class="header__nav-small-card">
                                <div class="header__nav-small-card-title">DEVELOPERS</div>
                                <a href="https://newo.ai/creator/" class="header__nav-small-card-link">Agent Creator</a>
                                <a href="https://newo.ai/hey-developer-create-ai-automations-10x-faster-and-smarter/" class="header__nav-small-card-link">NEWO BUILDER</a>
                                <a href="https://docs.newo.ai/" class="header__nav-small-card-link">API & DOCUMENTATION</a>
                                <a href="https://academy.newo.ai/" class="header__nav-small-card-link" target="_blank">ACADEMY</a>
                                <a href="https://www.youtube.com/@newoai" class="header__nav-small-card-link">VIDEO TUTORIALS</a>
                                <a href="https://partners.newo.ai/partners" class="header__nav-small-card-link">COMMUNITY HELP</a>
                                <a href="https://newo.ai/how-to-choose-the-right-ai-automation-platform/" class="header__nav-small-card-link">How to choose AI automation</a>
                            </div>
                            <div class="header__nav-small-card">
                                <div class="header__nav-small-card-title">COMPANY</div>
                                <a href="https://newo.ai/about/" class="header__nav-small-card-link">ABOUT</a>
                                <a href="https://newo.ai/newo-ai-competitive-advantage/" class="header__nav-small-card-link">Competitive Advantage</a>
                                <a href="#footer" class="header__nav-small-card-link">CONTACT</a>
                                <a href="https://newo.ai/blog/" class="header__nav-small-card-link">BLOG</a>
                                <a href="https://newo.ai/insights/" class="header__nav-small-card-link">INSIGHTS</a>
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
                <a href="https://calendly.com/d/cwxs-rnj-t2w/newo-ai-demo-call&utm_source=website_restaurant" class="lpv3-btn lpv3-btn--filled" style="white-space: nowrap;">Book a Demo</a>
                
                <LangButton />

                <button class="header__nav-opener" bind:this={navOpenerEl}>
                    <span></span>
                </button>
            </div>
        </div>
    </div>
</header>
