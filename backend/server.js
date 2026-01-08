const express = require("express");
const cors = require("cors");

const dataRoutes = require("./routes/data");

const app = express();
app.use(cors());
app.use(express.json());

// BASE ROUTE
app.get("/", (req, res) => {
    res.send("SCR Backend Running");
});

// DATA ROUTES
app.use("/api/data", dataRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Server running on port " + PORT);
});
