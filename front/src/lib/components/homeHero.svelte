<script lang="ts">
  import { lang } from '$lib/stores/language';
  import localization from '$lib/localizations/homepage.json';
</script>

<div id="hpHeroContainer" class="flex flex-col items-center">
    <p id="hpHeader1" class="w-[250px] text-center border-2 homepageP">{localization.hero.header1[$lang]}</p>
    <h1 id="hpHeader2" class="w-3/4 text-center leading-normal">{localization.hero.header2[$lang]}</h1>
    <p class="w-3/4 text-center homepageP">{localization.hero.text[$lang]}</p>
    <div id="hpLinkDiv" class="w-[250px] text-center border-2">
        <a href="#finance-contact" class="block no-underline">{localization.hero.testNow[$lang]}</a>
    </div>
</div>