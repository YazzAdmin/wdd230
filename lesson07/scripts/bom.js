const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list'); // Fill in the blank to reference the unordered list HTML Element.

//This starts the array of typed book of mormon chapters.
let chaptersArray = getChapterList() || [];

//Generates the list with chapters stored in the local storage.
chaptersArray.forEach(chapter => {
  displayList(chapter);
});
//Event listener for the button to add a new chapter.
button.addEventListener('click', () => { 
  //review input is not empty
  if (input.value != '') { 
    displayList(input.value); // display the newly added chapter.
    chaptersArray.push(input.value);  // adds the chapter to the array
    setChapterList(); // update the localStorage with the updated array
    input.value = ''; // clear the input
    input.focus(); // set the focus back to the input field.
  }
});
// Function to display a chapter in the list
function displayList(item) {
  // Create a new list item
  let li = document.createElement('li');
  // Create a delete button for the list item
  let deleteButton = document.createElement('button');
  // Set the text content of the list item to the chapter
  li.textContent = item;
  // Set the text content of the delete button to a delete icon
  deleteButton.textContent = '❌';
  // Add a CSS class to the delete button for styling
  deleteButton.classList.add('delete');
  // Append the delete button to the list item
  li.append(deleteButton);
  // Append the list item to the unordered list
  list.append(li);
  // Add an event listener to the delete button to remove the chapter
  deleteButton.addEventListener('click', function () {
    // Remove the list item from the DOM
    list.removeChild(li);
    // Remove the chapter from the array and update localStorage
    deleteChapter(li.textContent);
    // Set focus back to the input field
    input.focus();
  });
}

// Function to update localStorage with the array of chapters
function setChapterList() {
  // Stringify the array and store it in localStorage with a specific key
  localStorage.setItem('myTypedBOMList', JSON.stringify(chaptersArray));
}

// Function to retrieve the array of chapters from localStorage
function getChapterList() {
  // Parse the JSON string stored in localStorage and return the array
  return JSON.parse(localStorage.getItem('myTypedBOMList')) || [];
}

// Function to delete a chapter from the array and update localStorage
function deleteChapter(chapter) {
  // Remove the last character (delete icon) from the chapter name
  chapter = chapter.slice(0, chapter.length - 1);
  // Filter out the deleted chapter from the array
  chaptersArray = chaptersArray.filter(item => item !== chapter);
  // Update localStorage with the modified array
  setChapterList();
}
