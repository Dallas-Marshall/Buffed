form = document.getElementById("contact-us-form");

form.addEventListener("submit", () => {
    console.log("Submit Registered");
    // Load all necessary elements of form
    const first_name_input = document.getElementById("first-name-input").value;
    const last_name_input = document.getElementById("last-name-input").value;
    const email_input = document.getElementById("client-email-input").value;
    const home_services_checkbox = document.getElementById("home-check");
    const commercial_services_checkbox = document.getElementById("commercial-check");
    const hotel_services_checkbox = document.getElementById("hotel-check");
    const other_checkbox = document.getElementById("other-check");

    // Check at least one checkbox is ticked
    let is_minimum_checkbox_ticked = false;
    if (commercial_services_checkbox.checked === true) {
        is_minimum_checkbox_ticked = true;
    } else if (home_services_checkbox.checked === true) {
        is_minimum_checkbox_ticked = true;
    } else if (hotel_services_checkbox.checked === true) {
        is_minimum_checkbox_ticked = true;
    } else if (other_checkbox.checked === true) {
        is_minimum_checkbox_ticked = true;
    }

    const services_label = document.getElementById("services-label");
    if (!is_minimum_checkbox_ticked) {  // Display alert and highlight text
        services_label.textContent = "Related Services*";
        services_label.style.color = 'red';
        alert("Please specify a service")
    } else {  // Display confirmation message
        alert("Thanks for reaching out " + first_name_input + " " + last_name_input + ". We will respond to " + email_input + " as soon as possible.")
    }
})
