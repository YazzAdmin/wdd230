const baseURL = "https://yazzadmin.github.io/wdd230/";
const linksURL = "https://yazzadmin.github.io/wdd230/data/links.json";

async function getLinks() {
      const response = await fetch(linksURL);
      const data = await response.json();
      displayLinks(data.lessons); 
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

    const week10Item = document.createElement("li");
    const week10Link = document.createElement("a");
    week10Link.href = baseURL + "lesson10/weather.html";
    weekTitle.textContent = "Week " + lesson.lesson + ": ";
    week10Item.appendChild(weekTitle);
    week10Item.appendChild(week10Link);
    learningActivities.appendChild(week10Item);
  }
  
  getLinks();