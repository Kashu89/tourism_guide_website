//function openBookingForm(placeName) {
    //document.getElementById('bookingModal').style.display = 'flex';
  //  document.getElementById('place').value = placeName;
//}

//function closeBookingForm() {
  //  document.getElementById('bookingModal').style.display = 'none';
//}

// Show/Hide Card Details based on Payment Method
//document.getElementById('payment').addEventListener('change', function() {
    //let cardDetails = document.getElementById('card-details');
    //if (this.value === 'credit-card' || this.value === 'debit-card') {
    //    cardDetails.style.display = 'block';
    //} else {
   //     cardDetails.style.display = 'none';
    //}
//});//
document.addEventListener("DOMContentLoaded", function () {
    // Tab Switching
    const tabs = document.querySelectorAll(".tab");
    const tabContents = document.querySelectorAll(".tab-content");

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            // Remove active class from all tabs
            tabs.forEach(t => t.classList.remove("active"));
            tabContents.forEach(content => content.classList.remove("active"));

            // Add active class to clicked tab and corresponding content
            tab.classList.add("active");
            document.getElementById(tab.dataset.tab).classList.add("active");
        });
    });

    // Dark Mode Toggle
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    darkModeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        darkModeToggle.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
    });

    // Form Submission Handling
    document.querySelectorAll("form").forEach(form => {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            alert(`Searching for ${form.closest("section").id}...`);
        });
    });
});

