const baseURL = "https://yazzadmin.github.io/wdd230/";
const linksURL = "https://yazzadmin.github.io/wdd230/data/links.json";

async function getLinks() {
    try {
      const response = await fetch(linksURL);
      const data = await response.json();
      displayLinks(data.lessons); // Pass only the lessons array to the displayLinks function
    } catch (error) {
      console.error("Error fetching links:", error);
    }
  }
  
  function displayLinks(lessons) {
    const learningActivities = document.getElementById("learning-activities");
  
    lessons.forEach(lesson => {
      const weekItem = document.createElement("li");
      const weekTitle = document.createElement("span");
      weekTitle.textContent = "Week " + lesson.lesson + ": ";
      weekItem.appendChild(weekTitle);
  
      lesson.links.forEach((link, index) => {
        const linkItem = document.createElement("a");
        linkItem.href = baseURL + link.url;
        linkItem.textContent = link.title;
        weekItem.appendChild(linkItem);
  
        if (index < lesson.links.length - 1) {
          const separator = document.createTextNode(" | ");
          weekItem.appendChild(separator);
        }
      });
  
      learningActivities.appendChild(weekItem);
    });
  }
  
  getLinks();