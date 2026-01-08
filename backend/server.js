const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// ROUTE WITHOUT FIREBASE
app.get("/", (req, res) => {
    res.send("SCR Backend Running");
});

// TEST ROUTE
app.get("/api/test", (req, res) => {
    res.json({ status: "API OK" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Server running on port " + PORT);
});
