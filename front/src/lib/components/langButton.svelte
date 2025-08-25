<script lang="ts">
  import { lang } from "$lib/stores/language";

  function toggleLang() {
    lang.update(current => (current === "en" ? "de" : "en"));
  }
</script>

<button class="w-[2.5rem] h-[2rem] ml-2" on:click={toggleLang}>
    <img class="h-full" 
    src={$lang === "de" ? "/icons/flag-england.svg" : "/icons/flag-germany.svg"}
    alt={$lang === "de" ? "Translate to english" : "Translate to german"}
    />
</button>