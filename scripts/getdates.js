const options = {weekday:"long", day:"numeric", month:"long", year:"numeric"};
document.getElementById("getdates").textContent = new Date().toLocalDateString("en-US", options);

