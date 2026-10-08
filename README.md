# 🌍 Tourism Guide System

A responsive, front-end tourism website where visitors can explore destinations, browse holiday packages, and book tours, stays, flights, buses and cabs, all from a single landing page.

Built with **HTML, CSS and JavaScript**, plus the **Google Maps API** for location features.

---

## ✨ Features

- **Home / Hero section**: video banner with a "Discover Now" call to action
- **Popular Destinations**: Beaches, Forests, Temples, City Tours, Hotels, Hill Stations, Special Tours, Historical Places and Mountains
- **Special Offers**: tour cards with prices and a "Proceed to Pay" flow
- **International Holiday Packages**: Bhutan, Thailand, Dubai, Malaysia, Maldives, Indonesia, Nepal and Singapore, each with a "View Details" popup (description, features, rating, price)
- **Travel Booking (TravelGo)**: tabbed interface for **Flights**, **Buses** and **Cabs**
- **Tour Booking Form**: name, email, date, package (Adventure, Cultural, Wildlife Safari, Honeymoon) and number of guests
- **Plan Your Stay**: accommodation cards (resort, luxury hotel, home stays) with a booking modal including check-in/out dates and payment method (credit card, debit card, PayPal)
- **Gallery**: image grid of beaches, mountains, forests, cities, deserts and temples
- **Map & Location**: embedded Google Map and Google Maps JavaScript API integration
- **Customer Reviews**: testimonials plus an "Add Your Review" form
- **Contact Us** and **Feedback** forms
- **Login / Register** page link

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| Markup | HTML5 |
| Styling | CSS3 (`css3.css`) |
| Logic | Vanilla JavaScript (`scripts.js`) |
| Maps | Google Maps JavaScript API & Embed API |

---

## 📁 Project Structure

```
tourism-guide-system/
├── html1.html            # Main landing page (this file)
├── css3.css              # Stylesheet
├── scripts.js            # Modal, tab, form and map logic
├── logoo.png             # Site favicon / logo
├── beach1.jpg            # Gallery images
├── city1.jpg
├── login.html            # Login / Register
├── discovernow.html      # Discover page
├── beach.html            # Destination pages
├── forest.html
├── TEMPLE.HTML
├── CITY.HTML
├── HOTEL.HTML
├── HILLSTATION.HTML
├── SPECIAL TOURS.HTML
├── HISTORICAL.HTML
├── MOUNTAIN.HTML
├── PRocedtopayment.html  # Payment page
├── flight.html           # Flight / bus search results
├── cabbok.html           # Cab booking
└── BOOKNOW.HTML          # Accommodation booking
```

> Adjust this tree to match your actual repository. These are the files the landing page links to.

---

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Edge, Safari)
- A [Google Maps API key](https://developers.google.com/maps/documentation/javascript/get-api-key) (only needed for the interactive map)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/<your-username>/tourism-guide-system.git
   cd tourism-guide-system
   ```

2. **Add your Google Maps API key**

   In `html1.html`, replace `YOUR_API_KEY` with your key:
   ```html
   <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap" defer></script>
   ```

3. **Run the project**

   Open `html1.html` directly in your browser, or serve it locally:
   ```bash
   # Python 3
   python -m http.server 8000
   ```
   Then visit `http://localhost:8000/html1.html`.

> ⚠️ **Never commit a real API key to a public repository.** Restrict your key by HTTP referrer in the Google Cloud Console.

---

## 🧭 Page Sections

| Section | Anchor | Description |
|---------|--------|-------------|
| Home | `#home` | Video banner and call to action |
| Places | `#places` | Destination categories |
| Booking | `#booking` | Tour booking form |
| Packages | `#packages` | International holiday packages |
| Gallery | `#gallery` | Photo gallery |
| Map | `#map` | Location details and map |
| Contact | `#contact` | Contact form |

---

## 🔮 Roadmap / Known Issues

This is currently a **front-end prototype**. Planned improvements:

- [ ] Connect forms (booking, contact, feedback, reviews) to a backend and database
- [ ] Implement real authentication for Login / Register
- [ ] Integrate a secure payment gateway (the card fields are UI only, so never collect real card data without one)
- [ ] Fix duplicate element IDs (`packageModal`, `packageTitle`, `bookingForm`, etc.) by using a single reusable modal populated by `viewDetails()`
- [ ] Pass each package's own data into `viewDetails()` (all cards currently use the same "Beach Getaway" placeholder)
- [ ] Replace the YouTube link in the `<video>` tag with a direct `.mp4` file or an embedded player
- [ ] Move remote images into a local `/images` folder for reliability
- [ ] Clean up HTML structure (stray closing tags and nested `<section>` elements)
- [ ] Add accessibility improvements (labels, alt text, keyboard navigation)

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m "Add your feature"`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Pull Request

---

## 📄 License

This project is licensed under the [MIT License](LICENSE). Add a `LICENSE` file to your repository if you choose this license.

---

<p align="center">Made with ❤️ for travellers everywhere · 2025 Tourism Guide</p>
