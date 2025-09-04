<script lang="ts">
  import { lang } from "$lib/stores/language";

  function toggleLang() {
    lang.update(current => (current === "en" ? "de" : "en"));
  }
</script>

<button class="w-[2.5rem] h-[2rem] p-0 ml-2 border-none bg-transparent focus:outline-none" on:click={toggleLang}>
    <img class="w-full h-full object-contain" 
    src={$lang === "de" ? "/icons/flag-england.svg" : "/icons/flag-germany.svg"}
    alt={$lang === "de" ? "Translate to english" : "Translate to german"}
    />
</button>