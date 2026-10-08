document.addEventListener("DOMContentLoaded", () => {
    // 🌟 Tab Switching with Smooth Transition
    const tabs = document.querySelectorAll(".tab");
    const tabContents = document.querySelectorAll(".tab-content");

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            tabs.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");

            tabContents.forEach(content => content.classList.remove("active"));
            document.getElementById(tab.dataset.tab).classList.add("active");

            document.getElementById(tab.dataset.tab).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // 🌙 Dark Mode with Preference Storage
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    if (localStorage.getItem("dark-mode") === "enabled") {
        document.body.classList.add("dark-mode");
    }

    darkModeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        localStorage.setItem("dark-mode", document.body.classList.contains("dark-mode") ? "enabled" : "disabled");
    });

    // 🖼️ Image Gallery Hover Effect
    document.querySelectorAll(".gallery-container img").forEach(img => {
        img.addEventListener("mouseover", () => {
            img.style.transform = "scale(1.1)";
            img.style.transition = "0.3s";
        });
        img.addEventListener("mouseout", () => {
            img.style.transform = "scale(1)";
        });
    });

    // 📅 Prevent Past Date Selection
    document.querySelectorAll("input[type='date']").forEach(dateInput => {
        let today = new Date().toISOString().split("T")[0];
        dateInput.setAttribute("min", today);
    });

    // 🏨 Booking Modal with Close on "Esc"
    const bookingModal = document.getElementById("bookingModal");
    const placeInput = document.getElementById("place");
    const closeBtn = document.querySelector(".close-btn");

    window.openBookingForm = (placeName) => {
        placeInput.value = placeName;
        bookingModal.style.display = "block";
    };

    window.closeBookingForm = () => {
        bookingModal.style.display = "none";
    };

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") closeBookingForm();
    });

    window.onclick = (event) => {
        if (event.target == bookingModal) closeBookingForm();
    };

    // 💳 Show/Hide Card Details on Payment Selection
    const paymentSelect = document.getElementById("payment");
    const cardDetails = document.getElementById("card-details");

    paymentSelect.addEventListener("change", () => {
        cardDetails.style.display = (paymentSelect.value === "credit-card" || paymentSelect.value === "debit-card") ? "block" : "none";
    });

    // 📝 Review Submission with Live Character Count
    const reviewForm = document.querySelector(".add-review form");
    const charCount = document.createElement("p");
    charCount.style.fontSize = "12px";
    charCount.style.color = "gray";
    reviewForm.querySelector("textarea").parentNode.appendChild(charCount);

    reviewForm.querySelector("textarea").addEventListener("input", function () {
        charCount.textContent = `Characters: ${this.value.length}/250`;
    });

    reviewForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const reviewText = reviewForm.querySelector("textarea").value.trim();
        const reviewAuthor = reviewForm.querySelector("input").value.trim();

        if (reviewText.length > 0 && reviewAuthor.length > 0) {
            const reviewSection = document.querySelector(".reviews");
            const newReview = document.createElement("div");
            newReview.classList.add("review");
            newReview.innerHTML = `<p class="review-text">"${reviewText}"</p><p class="review-author">- ${reviewAuthor}</p>`;

            reviewSection.prepend(newReview);
            reviewForm.reset();
            charCount.textContent = "";
        }
    });

    // 🔀 Shuffle Reviews for a Dynamic Feel
    const shuffleReviews = () => {
        const reviewContainer = document.querySelector(".reviews");
        const reviews = Array.from(reviewContainer.children);
        reviews.sort(() => Math.random() - 0.5);
        reviewContainer.innerHTML = "";
        reviews.forEach(review => reviewContainer.appendChild(review));
    };
    shuffleReviews();

    // 🎟️ Booking Confirmation with Loading Effect
    const bookingForm = document.getElementById("bookingForm");
    const confirmationMessage = document.getElementById("confirmationMessage");

    bookingForm.addEventListener("submit", (event) => {
        event.preventDefault();
        confirmationMessage.textContent = "Processing your request...";
        confirmationMessage.style.color = "blue";

        setTimeout(() => {
            confirmationMessage.textContent = "✅ Thank you! Your tour has been booked successfully.";
            confirmationMessage.style.color = "green";
            bookingForm.reset();
        }, 2000);
    });

    // 🌍 Google Map Integration with Custom Pin
    window.initMap = () => {
        new google.maps.Map(document.getElementById("google-map"), {
            center: { lat: 28.6139, lng: 77.2090 },
            zoom: 5
        });
    };

    // ⚡ "Visit All Places" Feature Simulation
    window.visitPlaces = () => {
        alert("🚀 Coming soon: A virtual tour of all destinations!");
    };

    // 🏙️ Interactive Place Details
    window.showDetails = place => {
        alert(`📍 More details on ${place} will be available soon!`);
    };

    // 💰 Payment Simulation
    window.makePayment = () => {
        alert("💳 Redirecting to a secure payment gateway...");
    };
});
