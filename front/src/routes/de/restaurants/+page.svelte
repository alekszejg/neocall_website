<script>
    import RestaurantsPage from '$lib/components/pages/restaurants.svelte'
    import { lang } from '$lib/stores/language';
    
    lang.set("de")
</script>

<RestaurantsPage />