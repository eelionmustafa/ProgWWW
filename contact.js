document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form");
    const emailInput = document.getElementById("email");
    const submitButton = document.getElementById("submit");
    const joinButton = document.getElementById("join");
    const successMessage = document.querySelector(".success_message");
    const errorMessage = document.querySelector(".error_message");
    const contactButton = document.getElementById("right-links");
    const faqAccordions = document.querySelectorAll(".faq_accordion");

    // Hide messages on load
    if (successMessage) successMessage.style.display = "none";
    if (errorMessage) errorMessage.style.display = "none";

    // Form submission handler
    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();

            if (successMessage) successMessage.style.display = "none";
            if (errorMessage) errorMessage.style.display = "none";

            if (joinButton) joinButton.value = joinButton.getAttribute("data-wait") || "Please wait...";

            const email = emailInput?.value.trim();
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!email || !emailPattern.test(email)) {
                if (errorMessage) errorMessage.style.display = "block";
                if (successMessage) successMessage.style.display = "none";
                if (joinButton) joinButton.value = "Join our family";
                return;
            }
            setTimeout(() => {
                if (successMessage) successMessage.style.display = "block";
                if (form) form.style.display = "none";
                if (emailInput) emailInput.value = "";
                if (joinButton) joinButton.value = "Join our family";
            }, 1000);
        });
    }

    if (contactButton) {
        contactButton.addEventListener("click", () => {
            window.location.href = "contact.html";
        });
    }

    if (emailInput && submitButton) {
        emailInput.addEventListener("input", () => {
            submitButton.hidden = !emailInput.checkValidity();
        });
    }



    const openButton = document.querySelector('.open-btn');
    const closeButton = document.querySelector('.close-btn');
    const inputWindow = document.querySelector('.input-window');
    const submitBtn = document.getElementById('submit');

    if (submitBtn) {
        submitBtn.addEventListener('click', () => {
            // Additional functionality can be added here
        });
    }

    openButton.addEventListener('click', () => {
        inputWindow.classList.add('open');
    });

    closeButton.addEventListener('click', () => {
        inputWindow.classList.remove('open');
    });

    document.getElementById("contactForm").addEventListener("submit", function(event) {
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name && email && message) {
            alert("Message sent successfully!");
        } else {
            alert("Please fill in all required fields.");
        }
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const faqItems = document.querySelectorAll("#section_faq ul li");

    faqItems.forEach((item) => {
        const question = item.querySelector(".question");
        const answer = item.querySelector(".answer");
        const icon = item.querySelector(".icon ion-icon");

        // Initially hide all answers and set icon to "add"
        answer.style.display = "none";
        icon.setAttribute("name", "add");

        // Add click event to toggle visibility
        question.addEventListener("click", () => {
            const isVisible = answer.style.display === "block";

            // Collapse all answers
            faqItems.forEach((otherItem) => {
                const otherAnswer = otherItem.querySelector(".answer");
                const otherIcon = otherItem.querySelector(".icon ion-icon");
                if (otherAnswer) otherAnswer.style.display = "none";
                if (otherIcon) otherIcon.setAttribute("name", "add");
            });

            // Toggle the clicked question's answer
            if (!isVisible) {
                answer.style.display = "block";
                icon.setAttribute("name", "remove");
            } else {
                answer.style.display = "none";
                icon.setAttribute("name", "add");
            }
        });
    });
});