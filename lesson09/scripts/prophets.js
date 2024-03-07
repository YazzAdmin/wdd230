const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProphetData() {
  const response = await fetch(url);
  const data = await response.json();
  // console.table(data.prophets);
  displayProphets(data.prophets);
}

getProphetData();

const displayProphets = (prophets) => {
  prophets.forEach((prophet) => {
    let card = document.createElement('div');
    card.classList.add('card');

    let cardContent = document.createElement('div');
    cardContent.classList.add('card-content');

    let fullName = document.createElement('h2');
    fullName.textContent = `${prophet.name} ${prophet.lastname}`;

    let birthdate = document.createElement('p');
    birthdate.textContent = `Date of Birth: ${prophet.birthdate}`;

    let birthplace = document.createElement('p');
    birthplace.textContent = `Place of Birth: ${prophet.birthplace}`;

    let portrait = document.createElement('img');

    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
    portrait.setAttribute('loading', 'lazy');
    portrait.setAttribute('width', '340');
    portrait.setAttribute('height', '440');

    cardContent.appendChild(fullName);
    cardContent.appendChild(birthdate);
    cardContent.appendChild(birthplace);

    card.appendChild(cardContent);
    card.appendChild(portrait);

    cards.appendChild(card);
  });
};