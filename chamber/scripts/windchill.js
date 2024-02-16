// Function to calculate wind chill
function calculateWindChill(temperature, windSpeed) {
    // Check if temperature is within the specified limits
    if (temperature <= 50 && windSpeed > 3.0) {
        // Calculate wind chill using the formula
        var windChill = 35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temperature * Math.pow(windSpeed, 0.16));
        // Round wind chill to two decimal places
        windChill = Math.round(windChill * 100) / 100;
        return windChill;
    } else {
        // Return "N/A" if temperature or wind speed is outside the specified limits
        return "N/A";
    }
}

// Get temperature and wind speed values from HTML
var temperatureElement = document.getElementById('temperature');
var windSpeedElement = document.getElementById('windSpeed');

// Extract temperature and wind speed values
var temperature = parseFloat(temperatureElement.textContent);
var windSpeed = parseFloat(windSpeedElement.textContent);

// Calculate wind chill
var windChill = calculateWindChill(temperature, windSpeed);

// Display wind chill value on the webpage
var windChillElement = document.getElementById('windChill');
windChillElement.textContent = (windChill !== "N/A") ? windChill + " °F" : "N/A";