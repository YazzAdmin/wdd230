function displaySuccessMessage() {
    window.location.href = 'confirmation.html';
}

function handleSubmit(event) {
    event.preventDefault();
    displaySuccessMessage();
  
}

var form = document.querySelector('.contact-form');
form.addEventListener('submit', handleSubmit);