const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");
const button = document.getElementById("submit-btn");

form.addEventListener("submit", async function (event) {

    event.preventDefault();

    button.disabled = true;
    button.value = "Sending...";

    const formData = new FormData(form);

    try {

        const response = await fetch(form.action, {
            method: "POST",
            body: formData,
            headers: {
                "Accept": "application/json"
            }
        });

        if (response.ok) {

            status.textContent = "Message sent successfully!";
            status.className = "success";

            form.reset();

        } else {

            status.textContent = "Something went wrong. Please try again.";
            status.className = "error";

        }

    } catch (error) {

        status.textContent = "Unable to send message. Please check your connection.";
        status.className = "error";

    }

    button.disabled = false;
    button.value = "Send Message";

});