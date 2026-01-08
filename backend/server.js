const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

let data = {
  soilMoisture: 45,
  waterLevel: 70,
  pumpStatus: "ON"
};

setInterval(() => {
  data.soilMoisture = Math.floor(Math.random() * 100);
  data.waterLevel = Math.floor(Math.random() * 100);
  data.pumpStatus = data.soilMoisture < 40 ? "ON" : "OFF";
}, 5000);

app.get("/api/data", (req, res) => {
  res.json(data);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
