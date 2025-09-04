<script lang="ts">
  import { lang } from '$lib/stores/language';
  import localization from '$lib/localizations/navFooterForm.json';
  
  let name = "";
  let email = "";
  let comment = "";
  let company = "";

  async function submit(e: SubmitEvent) {
    e.preventDefault();

    const payload = { name, email, comment, company };
    const res = await fetch("/api/submit-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
    });

    const data = await res.json();
    console.log("Response:", data);
    }
</script>

<section class="lpv3 finance-contact" id="finance-contact">
    <div class="finance-container">
        <div class="finance-contact__inner">
            <div class="finance-contact__form-wrapper">
                <h2 class="title title--02">{localization.contactForm.learnMore.regular[$lang]}</h2>
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
                                <input size="40" maxlength="400" autocomplete="name" aria-required="true" aria-invalid="false" placeholder={localization.contactForm.inputs.name[$lang]} bind:value={name} type="text" name="your-name">
                            </div>
                            <div class="finance-contact__form-row">
                                <input size="40" maxlength="400" autocomplete="email" aria-required="true" aria-invalid="false" placeholder={localization.contactForm.inputs.email[$lang]} bind:value={email} type="email" name="your-email">
                            </div>
                            <div class="finance-contact__form-row">
                                <input size="40" maxlength="400" aria-invalid="false" placeholder={localization.contactForm.inputs.comment[$lang]} bind:value={comment} type="text" name="text-616">
                            </div>
                            <div class="finance-contact__form-row finance-contact__form-company-row display-none">
                                <input size="40" maxlength="400" aria-invalid="false" placeholder="Company" bind:value={company} type="text" name="company">
                            </div>
                            <div class="finance-contact__form-row">
                                <input class="wpcf7-form-control wpcf7-submit has-spinner" type="submit" value={localization.contactForm.learnMore.caps[$lang]}>
                            </div>
                            <div class="wpcf7-response-output" aria-hidden="true"></div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>