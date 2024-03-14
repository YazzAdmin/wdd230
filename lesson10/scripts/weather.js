const url = 'https://api.openweathermap.org/data/2.5/weather';
const latitude = '49.75'; // Latitude of Trier, Germany
const longitude = '6.64'; // Longitude of Trier, Germany
const apiKey = '15666693dc3c19d61e8856762aed2bd7';

async function apiFetch() {
  try {
    const response = await fetch(`${url}?lat=${latitude}&lon=${longitude}&units=imperial&appid=${apiKey}`);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // Testing only
      displayResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

apiFetch();

function displayResults(data) {
    const currentTemp = document.querySelector('#current-temp');
    const weatherIcon = document.querySelector('#weather-icon');
    const captionDesc = document.querySelector('figcaption');
  
    currentTemp.innerHTML = `${Math.round(data.main.temp)}&deg;F`;
    const iconCode = data.weather[0].icon;
    const iconSrc = `https://openweathermap.org/img/w/${iconCode}.png`;
    let desc = data.weather[0].description;
    desc = desc.toLowerCase().split(' ').map((s) => s.charAt(0).toUpperCase() + s.substring(1)).join(' ');
    weatherIcon.setAttribute('src', iconSrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = `${desc}`;
  }