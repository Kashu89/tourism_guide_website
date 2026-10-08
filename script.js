function visitPlaces() {
    alert('You have started your tour! Explore the places listed above.');
}

// Form validation for booking services
document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const place = document.getElementById('place').value;
    const date = document.getElementById('date').value;

    if (!date) {
        alert('Please select a date for your booking.');
    } else {
        alert(`You have successfully booked a tour to ${place} on ${date}!`);
    }
});

// Feedback form submission
document.querySelector('#feedback form').addEventListener('submit', function(event) {
    event.preventDefault();
    const feedback = event.target.querySelector('textarea').value;
    
    if (feedback.trim() === "") {
        alert('Please provide your feedback before submitting.');
    } else {
        alert('Thank you for your feedback!');
    }
});