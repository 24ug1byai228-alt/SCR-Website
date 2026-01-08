const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/auth");
const dataRoutes = require("./routes/data");

const app = express();

app.use(cors());
app.use(express.json());

// ROUTES
app.use("/api/auth", authRoutes);
app.use("/api/data", dataRoutes);

app.get("/", (req, res) => {
    res.send("SCR Backend Running");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Server running on port " + PORT);
});
