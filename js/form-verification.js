form = document.getElementById("contact-us-form");

form.addEventListener("submit", () => {
    console.log("Submit Registered");
    // Load all necessary elements of form
    const first_name_input = document.getElementById("first-name-input").value;
    const last_name_input = document.getElementById("last-name-input").value;
    const email_input = document.getElementById("client-email-input").value;
    const meal_planning_checkbox = document.getElementById("meal-planning-check");
    const personal_training_checkbox = document.getElementById("personal-training-check");
    const weight_loss_checkbox = document.getElementById("weight-loss-check");
    const other_checkbox = document.getElementById("other-check-check");

    // Check at least one checkbox is ticked
    let is_minimum_checkbox_ticked = false;
    if (meal_planning_checkbox.checked === true) {
        is_minimum_checkbox_ticked = true;
    } else if (personal_training_checkbox.checked === true) {
        is_minimum_checkbox_ticked = true;
    } else if (weight_loss_checkbox.checked === true) {
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
