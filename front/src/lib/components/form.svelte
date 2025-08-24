<script>
  let name = "";
  let email = "";
  let website = "";
  let company = "";

  async function submit(e) {
    e.preventDefault();

    const payload = { name, email, website, company };
    console.log("Sending form data:", payload); // tmp test
  }
</script>

<section class="lpv3 finance-contact" id="finance-contact">
    <div class="finance-container">
        <div class="finance-contact__inner">
            <div class="finance-contact__form-wrapper">
                <h2 class="title title--02">Learn more</h2>
                <div class="finance-contact__description">
                     <p>Leave your information below to find the right plan for your business and check for available promos</p>
                </div>
                <div class="finance-contact__form">    
                    <div id="wpcf7-f6939-p1840-o1" lang="en-US" dir="ltr" data-wpcf7-id="6939">
                        <div class="screen-reader-response">
                            <p role="status" aria-live="polite" aria-atomic="true"></p> 
                            <ul></ul>
                        </div>
                        <form method="post" class="wpcf7-form init" aria-label="Contact form" novalidate="novalidate" data-status="init" on:submit={submit}>
                            <div class="finance-contact__form-row">
                                <input size="40" maxlength="400" autocomplete="name" aria-required="true" aria-invalid="false" placeholder="Name" bind:value={name} type="text" name="your-name">
                            </div>
                            <div class="finance-contact__form-row">
                                <input size="40" maxlength="400" autocomplete="email" aria-required="true" aria-invalid="false" placeholder="Email" bind:value={email} type="email" name="your-email">
                            </div>
                            <div class="finance-contact__form-row">
                                <input size="40" maxlength="400" aria-invalid="false" placeholder="Website" bind:value={website} type="text" name="text-616">
                            </div>
                            <div class="finance-contact__form-row finance-contact__form-company-row display-none">
                                <input size="40" maxlength="400" aria-invalid="false" placeholder="Company" bind:value={company} type="text" name="company">
                            </div>
                            <div class="finance-contact__form-row">
                                <input class="wpcf7-form-control wpcf7-submit has-spinner" type="submit" value="Learn more">
                            </div>
                            <div class="wpcf7-response-output" aria-hidden="true"></div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>