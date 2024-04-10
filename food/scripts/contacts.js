document.addEventListener("DOMContentLoaded", function () {
    const contactsContainer = document.getElementById("contacts");

    // Function to generate contact cards
    function generateContactCard(contact) {
        return `
            <div class="contact-card">
                <img src="${contact.Image}" alt="${contact.Name}">
                <div class="contact-details">
                    <h2>${contact.Name}</h2>
                    <p><strong>Food Style:</strong> ${contact.FoodStyle}</p>
                    <p><strong>Number:</strong> ${contact.Number}</p>
                    <p><strong>Languages:</strong> ${contact.Languages}</p>
                    <p><strong>Address:</strong> ${contact.Address}</p>
                </div>
            </div>
        `;
    }

    // Function to display contacts
    function displayContacts(contacts) {
        contactsContainer.innerHTML = "";
        contacts.forEach(contact => {
            contactsContainer.innerHTML += generateContactCard(contact);
        });
    }

    // Fetch the contacts data from the JSON file
    fetch('information/contact.json')
        .then(response => response.json())
        .then(data => {
            const contacts = data.contacts;
            displayContacts(contacts);
        })
        .catch(error => {
            console.error('Error fetching contacts:', error);
        });
});


function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle("dark-mode");
}

function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle("dark-mode");
}