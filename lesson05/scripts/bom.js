const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list'); // Fill in the blank to reference the unordered list HTML Element.

button.addEventListener('click', () => { // Create a click event listener for the Add Chapter button using addEventListener and an arrow function.
  if (input.value != '') { // Check to make sure the input is not blank.
    const li = document.createElement('li'); // Create a li element.
    const deleteButton = document.createElement('button'); // Create a delete button.
    li.textContent = input.value; // Populate the li element's textContent with the input value.
    deleteButton.textContent = '❌'; // Populate the button's textContent with a ❌.
    li.append(deleteButton); // Append the li element with the delete button.
    list.append(li); // Append the li element to the unordered list in your HTML.

    deleteButton.addEventListener('click', () => { // Add an event listener to the delete button that removes the li element when clicked.
      list.removeChild(li);
      input.focus(); // Send the focus to the input element.
    });

  }
  else {
    // Provide a message to remind the user to enter a book and chapter.
    alert("Please enter a book and chapter."); // Output a message to the console.
    input.focus(); // Send the focus back to the input element.
  }
});