// Enquiry form validation and response
document.addEventListener("DOMContentLoaded", () => {
    
    const enquiryForm = document.getElementById("enquiryForm");
    if (enquiryForm) {
        enquiryForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const phone = document.getElementById("phone").value.trim();
            const role = document.getElementById("role").value;
            const msg  = document.getElementById("msg").value.trim();

            let response = document.getElementById("response");

            if (name.length < 3) {
                response.textContent = "Name must be at least 3 characters.";
                return;
            }
            if (!email.includes("@")) {
                response.textContent = "Enter a valid email address.";
                return;
            }
            if (!/^\+?[0-9]{10,14}$/.test(phone)) {
                response.textContent = "Phone number format invalid.";
                return;
            }
            if (msg.length < 10) {
                response.textContent = " Message must contain at least 10 characters.";
                return;
            }

            // message successfull
            if (role === "volunteer") {
                response.textContent = "Thank you! Our volunteer team will contact you soon.";
            } else {
                response.textContent = " Sponsorship information has been sent to your email!";
            }
        });
    }

    // Contact form AJAX
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();

            alert("Your message has been sent! (Demo mode — AJAX submission can be added.)");
        });
    }

});
