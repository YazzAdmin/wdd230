const baseURL = "https://yazzadmin.github.io/wdd230/";

const linksURL = "https://yazzadmin.github.io/wdd230/data/links.json";

const weeks = [
    "Week01:", "Week02:", "Week03:", "Week04:", "Week05:",
    "Week06:", "Week07:", "Week08:", "Week09:", "Week10:" 
];

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data);
}

function displayLinks(data) {
    const learningActivities = document.querySelector('.card');
    
    data.lessons.forEach((lesson, index) => {
        const weekIndex = parseInt(lesson.lesson) - 1; 
        const week = weeks[weekIndex]; 

        const links = lesson.links.map(link => {
            return `<li>${week}<a href="${baseURL}${link.url}">${link.title}</a></li>`;
        }).join('');

        learningActivities.innerHTML += `<ul>${links}</ul>`;
    });
}

getLinks();