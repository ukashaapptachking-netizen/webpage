
function toggleMenu() {
    document.getElementById("nav").classList.toggle("show");
}

// Close menu after clicking a link
document.querySelectorAll("nav a").forEach(function(link) {
    link.addEventListener("click", function() {
        document.getElementById("nav").classList.remove("show");
    });
});

// Booking form
document.getElementById("bookingForm").addEventListener("submit", function(event) {
    event.preventDefault();

    document.getElementById("message").innerText =
        "Thank you! Your beach holiday enquiry has been received in this demo.";

    this.reset();
});
