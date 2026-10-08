/*document.addEventListener("DOMContentLoaded", () => {
    const authContainer = document.querySelector(".auth-container");
    const loginForm = document.querySelector("#login-form");
    const registerForm = document.querySelector("#register-form");
    const toggleLinks = document.querySelectorAll(".toggle-auth");
    const forgotPasswordLink = document.querySelector("#forgot-password");
    const forgotPasswordForm = document.querySelector("#forgot-password-form");
    const apiUrl = "http://localhost:5000/api/auth"; // Adjust backend URL if needed

    // Slide in effect on page load
    setTimeout(() => {
        authContainer.classList.add("slide-in");
    }, 500);

    // Fade-in effect for forms
    loginForm.classList.add("fade-in");
    registerForm.classList.add("fade-in");
    forgotPasswordForm.classList.add("fade-in");

    // Toggle between login and register with smooth transition
    toggleLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            loginForm.classList.toggle("hidden");
            registerForm.classList.toggle("hidden");
            loginForm.classList.toggle("fade-in");
            registerForm.classList.toggle("fade-in");
        });
    });

    // Handle login with button animation
    loginForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        const submitButton = loginForm.querySelector("button[type='submit']");
        submitButton.classList.add("loading");

        const email = document.querySelector("#login-email").value;
        const password = document.querySelector("#login-password").value;

        try {
            const response = await fetch(`${apiUrl}/login`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password })
            });
            const data = await response.json();
            if (data.token) {
                localStorage.setItem("token", data.token);
                alert("Login successful!");
                window.location.href = "dashboard.html"; // Redirect after login
            } else {
                alert(data.message);
            }
        } catch (error) {
            console.error("Login error:", error);
        }
        submitButton.classList.remove("loading");
    });

    // Handle registration with smooth transitions
    registerForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        const submitButton = registerForm.querySelector("button[type='submit']");
        submitButton.classList.add("loading");

        const name = document.querySelector("#register-name").value;
        const email = document.querySelector("#register-email").value;
        const password = document.querySelector("#register-password").value;

        try {
            const response = await fetch(`${apiUrl}/register`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, password })
            });
            const data = await response.json();
            if (data.success) {
                alert("Registration successful! Please check your email to verify your account.");
                loginForm.classList.remove("hidden");
                registerForm.classList.add("hidden");
            } else {
                alert(data.message);
            }
        } catch (error) {
            console.error("Registration error:", error);
        }
        submitButton.classList.remove("loading");
    });

    // Handle password reset request with smooth fade effect
    forgotPasswordLink?.addEventListener("click", (e) => {
        e.preventDefault();
        loginForm.classList.add("hidden");
        forgotPasswordForm.classList.remove("hidden");
        forgotPasswordForm.classList.add("fade-in");
    });

    forgotPasswordForm?.addEventListener("submit", async (e) => {
        e.preventDefault();
        const email = document.querySelector("#forgot-email").value;
        const submitButton = forgotPasswordForm.querySelector("button[type='submit']");
        submitButton.classList.add("loading");

        try {
            const response = await fetch(`${apiUrl}/forgot-password`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email })
            });
            const data = await response.json();
            if (data.success) {
                alert("Password reset link sent to your email.");
                forgotPasswordForm.classList.add("hidden");
                loginForm.classList.remove("hidden");
            } else {
                alert(data.message);
            }
        } catch (error) {
            console.error("Password reset error:", error);
        }
        submitButton.classList.remove("loading");
    });

    // Logout function with fade-out effect
    document.querySelector("#logout")?.addEventListener("click", () => {
        localStorage.removeItem("token");
        document.body.classList.add("fade-out");
        setTimeout(() => {
            alert("Logged out successfully!");
            window.location.href = "index.html";
        }, 500);
    });

    // New feature: Real-time Weather Integration
    async function fetchWeather() {
        try {
            const response = await fetch("https://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=auto:ip");
            const data = await response.json();
            document.querySelector("#weather-info").innerHTML = `🌤️ ${data.location.name}: ${data.current.temp_c}°C, ${data.current.condition.text}`;
        } catch (error) {
            console.error("Weather API error:", error);
        }
    }
    fetchWeather();

    // New feature: Live Chat Support
    document.querySelector("#chat-toggle").addEventListener("click", () => {
        document.querySelector("#chat-box").classList.toggle("visible");
    });

    // Tab Switching
    const tabs = document.querySelectorAll(".tab");
    const tabContents = document.querySelectorAll(".tab-content");

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            tabs.forEach(t => t.classList.remove("active"));
            tabContents.forEach(content => content.classList.remove("active"));
            tab.classList.add("active");
            document.getElementById(tab.dataset.tab).classList.add("active");
        });
    });
});
function viewDetails(title, image, description, features, rating, price) {
    document.getElementById('packageTitle').innerText = title;
    document.getElementById('packageImage').src = image;
    document.getElementById('packageDescription').innerText = description;
    document.getElementById('packageRating').innerText = Rating: ${rating} / 5;
    document.getElementById('packagePrice').innerText = Price: $${price};
    
    let featuresList = document.getElementById('packageFeatures');
    featuresList.innerHTML = '';
    features.forEach(feature => {
        let li = document.createElement('li');
        li.innerText = feature;
        featuresList.appendChild(li);
    });

    document.getElementById('packageModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('packageModal').style.display = 'none';
}

function makePayment() {
    alert("Redirecting to Payment Gateway...");
}
//yaha pr booking flight ki js h
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
            alert(Searching for ${form.closest("section").id}...);
        });
    });
}); */
function viewDetails(title, image, description, features, rating, price) {
    document.getElementById('packageTitle').innerText = title;
    document.getElementById('packageImage').src = image;
    document.getElementById('packageDescription').innerText = description;
    document.getElementById('packageRating').innerText = `Rating: ${rating} / 5`;
    document.getElementById('packagePrice').innerText = `Price: $${price}`;
    
    let featuresList = document.getElementById('packageFeatures');
    featuresList.innerHTML = '';
    features.forEach(feature => {
        let li = document.createElement('li');
        li.innerText = feature;
        featuresList.appendChild(li);
    });

    document.getElementById('packageModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('packageModal').style.display = 'none';
}

function makePayment() {
    alert("Redirecting to Payment Gateway...");
}

// yaha pr booking flight ki js h
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


