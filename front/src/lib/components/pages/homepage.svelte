<script>
    import Navbar from '$lib/components/navbar.svelte';
    import Hero from '$lib/components/homeHero.svelte';
    import Form from '$lib/components/form.svelte';
    import Footer from '$lib/components/footer.svelte';
    import { lang } from '$lib/stores/language';
    
    lang.set("en")
</script>



<Navbar />
<Form />
<Footer />