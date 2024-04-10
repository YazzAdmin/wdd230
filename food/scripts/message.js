function displayZoomMessage() {
    var messageParagraph = document.createElement('p');

    // Get the current date
    var currentDate = new Date();
    
    var futureDate = new Date(currentDate);
    futureDate.setDate(futureDate.getDate() + 2);

    // Format the future date
    var formattedDate = futureDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

    // Create the message
    messageParagraph.innerHTML = 'Join us for a Zoom conference on <strong>' + formattedDate + '</strong> at 10:00 AM';

    // Create the close button
    var closeButton = document.createElement('button');
    closeButton.innerHTML = 'X';
    closeButton.classList.add('close-button');
    closeButton.onclick = function() {
        messageDiv.remove(); 
    };

    // Div to contain the message and the close button
    var messageDiv = document.createElement('div');
    messageDiv.appendChild(messageParagraph);
    messageDiv.appendChild(closeButton);
    messageDiv.classList.add('zoom-message');

    // Message div at the beginning of the text column
    var textColumn = document.querySelector('.text-column');
    textColumn.insertBefore(messageDiv, textColumn.firstChild);
}

displayZoomMessage();