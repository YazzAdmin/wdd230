document.addEventListener("DOMContentLoaded", function() {
    // Check if this is the user's first visit
    if (!localStorage.getItem("lastVisit")) {
        displayMessage("Welcome! Let us know if you have any questions.");
    } else {
        // Calculate the time difference between visits
        let lastVisit = new Date(parseInt(localStorage.getItem("lastVisit")));
        let currentDate = new Date();
        let daysDifference = Math.floor((currentDate - lastVisit) / (1000 * 60 * 60 * 24));
        
        // Display appropriate message based on the time difference
        if (daysDifference === 0) {
            displayMessage("Back so soon! Awesome!");
        } else {
            // Adjust message based on number of days
            let message = "You last visited " + daysDifference + " day";
            message += (daysDifference === 1) ? " ago." : "s ago.";
            displayMessage(message);
        }
    }

    // Store the current visit date
    localStorage.setItem("lastVisit", Date.now());
});

function displayMessage(message) {
    // Get the sidebar content element
    let sidebarContent = document.getElementById("sidebar-content");

    // Clear previous content
    sidebarContent.innerHTML = '';

    // Create a paragraph element to display the message
    let paragraph = document.createElement("p");
    paragraph.textContent = message;

    // Append the paragraph to the sidebar content
    sidebarContent.appendChild(paragraph);
}

// Lazy loading images
document.addEventListener("DOMContentLoaded", function() {
    let lazyImages = document.querySelectorAll("#main-content img");

    let lazyLoad = function() {
        lazyImages.forEach(function(img) {
            if (img.offsetTop < window.innerHeight + window.scrollY && !img.getAttribute("src")) {
                img.src = img.dataset.src;
                img.onload = function() {
                    img.removeAttribute("data-src");
                    img.style.opacity = 1;
                };
            }
        });
    };

    lazyLoad();

    document.addEventListener("scroll", lazyLoad);
});