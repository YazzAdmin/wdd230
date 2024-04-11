async function fetchWeather() {
    try {
        const response = await fetch('https://api.openweathermap.org/data/2.5/forecast?lat=20.421980753477524&lon=-86.92267249996095&units=imperial&appid=15666693dc3c19d61e8856762aed2bd7');
        const data = await response.json();
        
        // Process the weather data to include weather icons
        data.list.forEach(forecast => {
            const iconCode = forecast.weather[0].icon;
            forecast.weatherIcon = `https://openweathermap.org/img/w/${iconCode}.png`;
        });

        return data;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        return null;
    }
}

// Display weather information on the webpage
async function displayWeather() {
    try {
        const weatherData = await fetchWeather();
        if (!weatherData) {
            console.error('Weather data is null.');
            return;
        }
        
        // Extract relevant weather information
        const currentWeather = weatherData.list[0];
        const currentTemperature = currentWeather.main.temp.toFixed(1);
        const currentHumidity = currentWeather.main.humidity.toFixed(1);

        // Find the high temperature for the current day
        let highTemperature = -Infinity;
        weatherData.list.forEach(forecast => {
            const temperature = forecast.main.temp;
            if (temperature > highTemperature) {
                highTemperature = temperature;
            }
        });
        
        // Find the forecast for the next day at 3:00 PM
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        const nextDayForecast = weatherData.list.find(item => {
            const forecastDate = new Date(item.dt * 1000);
            return forecastDate.getDate() === tomorrow.getDate() && forecastDate.getHours() >= 15;
        });
        const nextDayTemperature = (nextDayForecast) ? nextDayForecast.main.temp.toFixed(1) : 'N/A';
        const nextDayIcon = (nextDayForecast) ? `https://openweathermap.org/img/w/${nextDayForecast.weather[0].icon}.png` : '';

        // Update HTML elements with weather data
        document.getElementById('current-temperature').textContent = `${currentTemperature} °F`;
        document.getElementById('current-humidity').textContent = `Current Humidity: ${currentHumidity}%`;
        document.getElementById('next-day-forecast').textContent = `Next Day's Forecasted Temperature at 3:00pm: ${nextDayTemperature} °F`;
        document.getElementById('high-temp').textContent = `${highTemperature} °F`;
        // Display next day weather icon
        document.getElementById('next-day-icon').src = nextDayIcon;
        
        // Display current weather icon
        const weatherIcon = currentWeather.weather[0].icon;
        document.getElementById('weather-icon').src = `https://openweathermap.org/img/w/${weatherIcon}.png`;

        // Display current weather main condition and description
        document.getElementById('current-weather-main').textContent = currentWeather.weather[0].main;
        document.getElementById('current-weather-description').textContent = currentWeather.weather[0].description;
        
        // Update current weather description
        const description = currentWeather.weather[0].description;
        document.getElementById('current-description').textContent = `Description: ${description}`;

        // Display weather data points
        weatherData.list.forEach((item, index) => {
            const container = document.getElementById(`weather-data-point-${index + 1}`);
            if (container) {
                const mainCondition = item.weather[0].main;
                const description = item.weather[0].description;
                const icon = item.weather[0].icon;
                container.innerHTML = `
                    <strong>${mainCondition}</strong>: ${description}
                    <img src="https://openweathermap.org/img/w/${icon}.png" alt="${description}" style="vertical-align: middle;">
                `;
            }
            
        });
        document.getElementById('high-temp').textContent = `${highTemperature} °F`;
    } catch (error) {
        console.error('Error displaying weather:', error);
    }
}
// Function to close the weather banner
function closeBanner() {
    const weatherBanner = document.querySelector('.weather-banner');
    weatherBanner.classList.add('closed');
}

// Display weather information
displayWeather();
