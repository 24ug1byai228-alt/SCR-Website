async function getData() {
  const response = await fetch("https://scr-backend.onrender.com/api/data");

  const data = await response.json();

  document.getElementById("soil").innerText = data.soilMoisture + "%";
  document.getElementById("water").innerText = data.waterLevel + "%";
  document.getElementById("pump").innerText = data.pumpStatus;
}

setInterval(getData, 5000);
getData();
