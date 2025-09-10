<script lang="ts">
  import { onMount } from 'svelte';
  import { lang } from '$lib/stores/language';
  import localization from '$lib/localizations/navFooterForm.json';
  import localizationGlobal from '$lib/localizations/global.json';
  
  let formData = { name: "", email: "", comment: "", company: "" };
  let formState = { submitted: false, loading: false, sent: false};
  let internalErr = false;
  
  // reset everything to defaults for each onMount
  onMount(() => {
    formData = { name: "", email: "", comment: "", company: "" };
    formState = { submitted: false, loading: false, sent: false };
    internalErr = false;
  })

  $: nameRequiredErr = formState.submitted && !formData.name;
  $: nameLengthErr = formData.name.length > 50;

  let emailFocused = false; // !emailFocused hides emailFormatErr while user types
  $: emailRequiredErr = formState.submitted && !formData.email; // !emailRequiredErr below hides emailFormatErr for empty emails
  $: emailFormatErr = formState.submitted && !emailFocused && !emailRequiredErr && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
  $: emailLengthErr = formData.email.length > 100;
  let emailDomainErr = false;

  $: commentLengthErr = formData.comment.length > 500;
  
  $: formValid = (
    (!nameRequiredErr && !nameLengthErr) && 
    (!emailRequiredErr && !emailFormatErr && !emailLengthErr) && !commentLengthErr);
  
  async function submit(e: SubmitEvent) {
    e.preventDefault();
    formState.submitted = true;

    if (!formValid) {
        return; 
    }
    
    formState.loading = true;
    const res = await fetch("/api/submit-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
    });

    const data = await res.json();
    formState.loading = false;

    if (res.ok) {
        formState.sent = true;
        await new Promise(r => setTimeout(r, 1500)); 
        formState.sent = false;
        formState.submitted = false;
        formData = { name: "", email: "", comment: "", company: "" };
    } else if (res.status === 400 && data.error === "EMAIL_DOMAIN_NOT_FOUND") {
        emailDomainErr = true;
    } else {
        internalErr = true;
    }
    }
</script>

<section class="lpv3 finance-contact" id="finance-contact">
    <div class="finance-container">
        <div class="finance-contact__inner">
            <div class="finance-contact__form-wrapper">
                <h2 class="title title--02 text-nowrap">{localization.contactForm.learnMore[$lang]}</h2>
                <div class="finance-contact__description">
                     <p>{localization.contactForm.description[$lang]}</p>
                </div>
                <div class="finance-contact__form">    
                    <div id="wpcf7-f6939-p1840-o1" lang="en-US" dir="ltr" data-wpcf7-id="6939">
                        <div class="screen-reader-response">
                            <p role="status" aria-live="polite" aria-atomic="true"></p> 
                            <ul></ul>
                        </div>
                        <form method="post" class="wpcf7-form init" aria-label="Contact form" on:submit={submit}>
                            <div class="finance-contact__form-row">
                                <input 
                                    size="40" 
                                    autocomplete="name" 
                                    placeholder={localization.contactForm.inputs.name[$lang]} 
                                    class:red-border={nameRequiredErr} 
                                    bind:value={formData.name} 
                                    type="text" 
                                />
                                {#if nameRequiredErr}
                                    <p class="formError">{localization.contactForm.errors.name.required[$lang]}</p>
                                {/if}
                                {#if nameLengthErr}
                                    <p class="formError">{localization.contactForm.errors.name.length[$lang]}</p>
                                {/if}
                            </div>
                            <div class="finance-contact__form-row">
                                <input 
                                    size="40" 
                                    autocomplete="email" 
                                    placeholder={localization.contactForm.inputs.email[$lang]} 
                                    class:red-border={emailRequiredErr} 
                                    bind:value={formData.email}
                                    on:focus={() => {
                                        emailFocused = true;
                                        emailDomainErr = false;
                                    }}
                                    on:blur={() => emailFocused = false} 
                                    type="email" 
                                />
                                {#if emailRequiredErr}
                                    <p class="formError">{localization.contactForm.errors.email.required[$lang]}</p>
                                {/if}
                                {#if emailFormatErr}
                                    <p class="formError">{localization.contactForm.errors.email.format[$lang]}</p>
                                {/if}
                                {#if emailLengthErr}
                                    <p class="formError">{localization.contactForm.errors.email.length[$lang]}</p>
                                {/if}
                                {#if emailDomainErr}
                                    <p class="formError">{localization.contactForm.errors.email.domain[$lang]}</p>
                                {/if}
                            </div>
                            <div class="finance-contact__form-row">
                                <textarea class="w-full" rows="6" placeholder={localization.contactForm.inputs.comment[$lang]} bind:value={formData.comment}></textarea>
                                {#if commentLengthErr}
                                    <p class="formError">{localization.contactForm.errors.comment.length[$lang]}</p>
                                {/if}
                            </div>
                            <div class="finance-contact__form-row finance-contact__form-company-row display-none">
                                <input size="40" placeholder="Company" bind:value={formData.company} type="text" name="company">
                            </div>
                            <div class="finance-contact__form-row">
                                <input 
                                    class="wpcf7-form-control wpcf7-submit has-spinner" 
                                    type="submit" 
                                    value={
                                        (!formState.loading && !formState.sent && localizationGlobal.testNow[$lang]) ||
                                        (formState.loading && !formState.sent && localization.contactForm.btnText.sending[$lang]) ||
                                        (formState.sent && localization.contactForm.btnText.sent[$lang])
                                    }>
                                {#if internalErr}
                                    <p class="formError">{localization.contactForm.errors.internalErr[$lang]}</p>
                                {/if}
                            </div>
                            <div class="wpcf7-response-output" aria-hidden="true"></div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>