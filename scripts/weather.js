const latitude = '37.5631287183819'; // Latitude of Seoul, Korea
const longitude = '127.02562347728005'; // Longitude of Seoul, Korea
const apiKey = '15666693dc3c19d61e8856762aed2bd7';


const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`;

// Function to fetch weather data 
async function fetchWeatherData() {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Failed to fetch weather data');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

// Function to update weather information in the HTML
function updateWeatherInfo(weatherData) {
  const temperature = Math.round(weatherData.main.temp); //Round
  const description = weatherData.weather[0].description;
  const icon = weatherData.weather[0].icon;

  // Update HTML elements with weather data
  const temperatureElement = document.querySelector('.temperature');
  const descriptionElement = document.querySelector('.description');
  const iconElement = document.querySelector('.weather-icon');

  temperatureElement.textContent = `${temperature}°C`;
  descriptionElement.textContent = description;
  iconElement.setAttribute('src', `https://openweathermap.org/img/w/${icon}.png`);
}

// Call fetchWeatherData function and update weather information on page load
window.addEventListener('load', async () => {
  const weatherData = await fetchWeatherData();
  updateWeatherInfo(weatherData);
});