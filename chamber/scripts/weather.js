async function fetchWeather() {
    try {
        const response = await fetch('https://api.openweathermap.org/data/2.5/forecast?lat=31.86&lon=-116.59&units=imperial&appid=15666693dc3c19d61e8856762aed2bd7');
        const data = await response.json();
        
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

async function displayWeather() {
    try {
        const weatherData = await fetchWeather();
        if (!weatherData) {
            console.error('Weather data is null.');
            return;
        }
        const currentWeather = weatherData.list[0];
        const currentTemperature = currentWeather.main.temp.toFixed(1);
        const currentWindSpeed = currentWeather.wind.speed.toFixed(1);
        const currentWindChill = calculateWindChill(currentTemperature, currentWindSpeed);
        const currentWeatherDescription = currentWeather.weather[0].description;
        const currentWeatherIcon = currentWeather.weatherIcon;

        // Update HTML elements with current weather data
        document.getElementById('current-day').textContent = 'Today';
        document.getElementById('current-temperature').textContent = currentTemperature + ' °F';
        document.getElementById('current-wind-speed').textContent = currentWindSpeed + ' mph';
        document.getElementById('current-wind-chill').textContent = (currentWindChill !== 'N/A') ? currentWindChill + ' ' : 'N/A';
        document.getElementById('description').textContent = currentWeatherDescription;

        const currentWeatherIconImg = document.createElement('img');
        currentWeatherIconImg.src = currentWeatherIcon;
        currentWeatherIconImg.alt = currentWeatherDescription;
        document.getElementById('weather-icon-container').appendChild(currentWeatherIconImg);


        // Loop over the forecast data for the next three days
        for (let i = 0; i < 24 * 3; i += 8) {
            const dayIndex = i / 8 + 1; // Day index starting from 1

            const temperature = weatherData.list[i].main.temp.toFixed(1);
            const windSpeed = weatherData.list[i].wind.speed.toFixed(1);
            const windChill = calculateWindChill(temperature, windSpeed);

            // Update HTML elements with weather data for each day
            document.getElementById(`day${dayIndex}`).textContent = `Day ${dayIndex}`;
            document.getElementById(`temperature${dayIndex}`).textContent = temperature + ' °F';
            document.getElementById(`windSpeed${dayIndex}`).textContent = windSpeed + ' mph';
            document.getElementById(`windChill${dayIndex}`).textContent = (windChill !== 'N/A') ? windChill + ' ' : 'N/A';
        }
    } catch (error) {
        console.error('Error displaying weather:', error);
    }
}

function calculateWindChill(temperature, windSpeed) {
    if (temperature <= 50 && windSpeed > 3.0) {
        const windChill = 35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temperature * Math.pow(windSpeed, 0.16));
        return Math.round(windChill * 100) / 100;
    } else {
        return '';
    }
}
function closeBanner() {
    document.getElementById('banner');
    banner.style.display = 'none';
}

// Function to display the Chamber of Commerce banner on Wednesday
function displayBanner() {
    try {
        const currentDate = new Date();
        const dayOfWeek = currentDate.getDay();

        if (dayOfWeek >= 1 && dayOfWeek <= 3) { // Only show banner on Mondays, Tuesdays, and Wednesdays
            document.getElementById('banner').style.display = 'block';
        }
    } catch (error) {
        console.error('Error displaying banner:', error);
    }
}

// Display weather information/ banner/close
displayWeather();
displayBanner();

document.getElementById('closeBannerButton').addEventListener('click', closeBanner);