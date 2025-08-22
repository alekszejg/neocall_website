<script>
  import { onMount, tick } from 'svelte';
  let html = '';

  onMount(() => {
    const listeners = [];

    (async () => {
        const res = await fetch('/newo-restaurants/index.html');
        const text = await res.text();
        
        const parser = new DOMParser();
        const doc = parser.parseFromString(text, 'text/html');

        // ✅ Copy stylesheets into document.head
        doc.querySelectorAll('link[rel="stylesheet"], style').forEach(node => {
        document.head.appendChild(node.cloneNode(true));
        });

        // Convert <noscript> fallback images
        doc.querySelectorAll('noscript').forEach(ns => {
            const wrapper = document.createElement('div');
            wrapper.innerHTML = ns.innerHTML;
            ns.replaceWith(...wrapper.childNodes); // Replace <noscript> with its child <img>
        });

        // Set real src for lazy-loaded images
        doc.querySelectorAll('img[data-lazy-src]').forEach(img => {
        const lazySrc = img.getAttribute('data-lazy-src');
        if (lazySrc) img.setAttribute('src', lazySrc);
        });

        // Inject body HTML, wait for DOM update
        html = doc.body.innerHTML;
        await tick(); 

        // === Add accordion click listeners ===
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

        // Inject <script> tags from partner page
        const scriptPromises = Array.from(doc.querySelectorAll('script')).map(script => {
            return new Promise((resolve, reject) => {
                const s = document.createElement('script');
                if (script.src) {
                s.src = script.src;
                s.onload = resolve;
                s.onerror = reject;
                s.defer = script.defer || false;
                s.async = script.async || false;
                } else {
                s.textContent = script.textContent;
                resolve(); // inline script runs immediately
                }
                document.body.appendChild(s);
        });
        });
        await Promise.all(scriptPromises);

        // Poll until LazyLoad is loaded
        const waitForLazyLoad = () => new Promise(resolve => {
        const interval = setInterval(() => {
            if (window.LazyLoad) {
            clearInterval(interval);
            resolve();
            }
        }, 50);
        });
        await waitForLazyLoad();

        // Initialize LazyLoad
        new window.LazyLoad({ 
            elements_selector: ".newo-copy-container img[data-lazy-src]" 
        });
    })();

    // Cleanup function runs when component is destroyed
    return () => {
        listeners.forEach(({ btn, handler }) => {
        btn.removeEventListener('click', handler);
        });
    };
});
</script>

<svelte:head>
  <base href="/newo-restaurants/">
</svelte:head>

<div class="newo-copy-container">
  {@html html}
</div>
