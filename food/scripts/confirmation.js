function displaySuccessMessage() {
    var successMessage = document.createElement('div');
    
    
    var form = document.querySelector('.subscription-form');
    form.insertAdjacentElement('afterend', successMessage);

    setTimeout(function() {
        window.location.href = 'congrats.html'; 
    }, 100);
}

function handleSubmit(event) {
    event.preventDefault();
    displaySuccessMessage();
    var formData = new FormData(event.target);
    for (var pair of formData.entries()) {
        console.log(pair[0] + ': ' + pair[1]);
    }
}

var form = document.getElementById('subscribe-form');
form.addEventListener('submit', handleSubmit);