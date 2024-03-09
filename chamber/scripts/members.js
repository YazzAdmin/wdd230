document.addEventListener("DOMContentLoaded", function() {
    const gridButton = document.querySelector("#grid");
    const listButton = document.querySelector("#list");
    const membersContainer = document.querySelector("#members");

    gridButton.addEventListener("click", () => {
        membersContainer.classList.remove("list");
        membersContainer.classList.add("grid");
    });

    listButton.addEventListener("click", () => {
        membersContainer.classList.remove("grid");
        membersContainer.classList.add("list");
    });

    // Function to fetch and display member data
    function displayMembers() {
        fetch("data/members.json")
            .then(response => response.json())
            .then(data => {
                membersContainer.innerHTML = ""; 

                data.members.forEach(member => {
                    const card = document.createElement("div");
                    card.classList.add("card");

                    const img = document.createElement("img");
                    img.src = member["img url"];
                    img.alt = member.name;

                    const name = document.createElement("h3");
                    name.textContent = member.name;

                    const address = document.createElement("p");
                    address.textContent = member.address;

                    const phone = document.createElement("p");
                    phone.textContent = "Contact: " + member.phone;

                    const website = document.createElement("a");
                    website.href = member.website;
                    website.textContent = member.websiteName; 
                    website.target = "_blank"; 

                    const membership = document.createElement("p");
                    membership.textContent = "Membership Level: " + member.membership_level;

                    const hours = document.createElement("p");
                    hours.textContent = "Hours: " + member.hours;

                    card.appendChild(img);
                    card.appendChild(name);
                    card.appendChild(address);
                    card.appendChild(phone);
                    card.appendChild(website);
                    card.appendChild(membership);
                    card.appendChild(hours);

                    membersContainer.appendChild(card);
                });
            })
           
    }

    displayMembers();
});