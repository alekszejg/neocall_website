<script>
    import { lang } from '$lib/stores/language';
    import localization from './localization.json';
</script>

<footer id="footer" class="footer">
    <div class="lpv3-container">
        <div class="footer__inner">
            <div class="footer__left">
                <a class="footer__logo" href="/">
                    <img src="images/neocall.ai-white.svg" alt="Logo" width="132" height="29" />
                </a>
            </div>
            <div class="footer__right">
                <div class="footer__col">
                    <div class="footer__title">{localization.footer.industries.header[$lang]}</div>
                    <ul class="footer__menu">
                        <li>
                            <a class="footer__menu-link" href="/restaurants">{localization.footer.industries.categories.restaurants[$lang]}</a>
                        </li>
                        <li>
                            <a class="footer__menu-link" href="/">{localization.footer.industries.categories.cleaning[$lang]}</a>
                        </li>
                        <li>
                            <a class="footer__menu-link" href="/">{localization.footer.industries.categories.dental[$lang]}</a>
                        </li>
                        <li>
                            <a class="footer__menu-link" href="/">{localization.footer.industries.categories.HVAC[$lang]}</a>
                        </li>
                    </ul>
                </div>
                <div class="footer__col">
                    <div class="footer__title">{localization.footer.contact.header[$lang]}</div>
                    <ul class="footer__menu">
                        <li><a class="footer__menu-link" href="tel:+498945203680" target="_blank">{localization.footer.contact.phone[$lang]}</a></li>
                        <li><a class="footer__menu-link" href="mailto:info@neocall.ai" target="_blank">{localization.footer.contact.email[$lang]}</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="footer__copyright">
            <ul class="footer__menu">
                <li><div class="footer__menu-link">© 2025 Newo.ai</div></li>
                <li><a class="footer__menu-link" href="https://newo.ai/terms-of-service/">{localization.footer.copyright.terms[$lang]}</a></li>
                <li><a class="footer__menu-link" href="https://newo.ai/privacy-policy/">{localization.footer.copyright.privacy[$lang]}</a></li>
                <li><a class="footer__menu-link" href="https://newo.ai/data-processing-addendum/">{localization.footer.copyright.dataProcessing[$lang]}</a></li>
                <li><a class="footer__menu-link" target="_blank" href="https://app.drata.com/trust/5338e0cd-d144-437c-b5db-3776f121cca4">{localization.footer.copyright.trustCenter[$lang]}</a></li>
            </ul>
            <div class="footer__logos">
                <a target="_blank" href="https://www.calrest.org/">
                    <img width="100" height="100" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20100%20100'%3E%3C/svg%3E" alt="" data-lazy-src="https://newo.ai/wp-content/uploads/2025/05/calrest-logo.svg"><noscript><img width="100" height="100" src="https://newo.ai/wp-content/uploads/2025/05/calrest-logo.svg" alt=""></noscript>
                </a>
                <a target="_blank" href="https://app.drata.com/trust/5338e0cd-d144-437c-b5db-3776f121cca4">
                    <img width="100" height="100" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20100%20100'%3E%3C/svg%3E" alt="" data-lazy-src="https://newo.ai/wp-content/uploads/2025/05/Vector.svg"><noscript><img width="100" height="100" src="https://newo.ai/wp-content/uploads/2025/05/Vector.svg" alt=""></noscript>
                </a>
                <a target="_blank" href="https://app.drata.com/trust/5338e0cd-d144-437c-b5db-3776f121cca4">
                    <img width="100" height="100" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20100%20100'%3E%3C/svg%3E" alt="" data-lazy-src="https://newo.ai/wp-content/uploads/2025/05/Group-16.png"><noscript><img width="100" height="100" src="https://newo.ai/wp-content/uploads/2025/05/Group-16.png" alt=""></noscript>
                </a>
            </div>
        </div>
    </div>
</footer>