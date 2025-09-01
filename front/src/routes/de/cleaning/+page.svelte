<script>
    import Navbar from '$lib/components/navbar.svelte';
    import Form from '$lib/components/form.svelte';
    import Footer from '$lib/components/footer.svelte';
    import { lang } from '$lib/stores/language';
    
    lang.set("de")
</script>



<Navbar />
<Form />
<Footer />