<script lang="ts">
  import { lang } from '$lib/stores/language';
  import localization from '$lib/localizations/navFooterForm.json';
  
  let name = "";
  let email = "";
  let comment = "";
  let company = "";

  $: nameErr = name.length > 50 ? localization.contactForm.errors.name[$lang] : "";
  $: emailErr = email.length > 100 ? localization.contactForm.errors.email[$lang] : "";
  $: commentErr = comment.length > 500 ? localization.contactForm.errors.comment[$lang] : "";

  $: formValid = !nameErr && !emailErr && !commentErr && name && email && comment;

  let loading = false;
  let sent = false;
  let internalErr = false;

  async function submit(e: SubmitEvent) {
    e.preventDefault();
    if (!formValid) {
      return; 
    }
    
    internalErr = false;
    loading = true;
    
    const payload = { name, email, comment, company };
    const res = await fetch("/api/submit-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
    });

    loading = false;
    if (res.ok) {
        sent = true;
        await new Promise(r => setTimeout(r, 1000)); 
        sent = false;
        name = "";
        email = "";
        comment = "";
        company = "";
    } else {
        internalErr = true;
    }
    }


</script>

<section class="lpv3 finance-contact" id="finance-contact">
    <div class="finance-container">
        <div class="finance-contact__inner">
            <div class="finance-contact__form-wrapper">
                <h2 class="title title--02">{localization.contactForm.learnMore[$lang]}</h2>
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
                                <input size="40" autocomplete="name" placeholder={localization.contactForm.inputs.name[$lang]} bind:value={name} type="text" required>
                                {#if nameErr}
                                    <p class="formError">{nameErr}</p>
                                {/if}
                            </div>
                            <div class="finance-contact__form-row">
                                <input size="40" autocomplete="email" placeholder={localization.contactForm.inputs.email[$lang]} bind:value={email} type="email" required>
                                {#if emailErr}
                                    <p class="formError">{emailErr}</p>
                                {/if}
                            </div>
                            <div class="finance-contact__form-row">
                                <textarea class="w-full" rows="6" placeholder={localization.contactForm.inputs.comment[$lang]} bind:value={comment} required></textarea>
                                {#if commentErr}
                                    <p class="formError">{commentErr}</p>
                                {/if}
                            </div>
                            <div class="finance-contact__form-row finance-contact__form-company-row display-none">
                                <input size="40" placeholder="Company" bind:value={company} type="text" name="company">
                            </div>
                            <div class="finance-contact__form-row">
                                <input 
                                    class="wpcf7-form-control wpcf7-submit has-spinner" 
                                    type="submit" 
                                    value={
                                        (!loading && !sent && localization.contactForm.btnText.learnMore[$lang]) || 
                                        (loading && !sent && localization.contactForm.btnText.sending[$lang]) || 
                                        (sent && localization.contactForm.btnText.sent[$lang])
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