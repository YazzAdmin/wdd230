const options = {
    weekly: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  document.getElementById("lastModification").textContent ="Last Modification:" + new Date().toLocaleDateString("en-US", options);
  document.getElementById("year").textContent = new Date().getFullYear();
  


