const express = require("express");
const router = express.Router();
const db = require("../config/firebase");

// HEALTH CHECK ROUTE
router.get("/test", (req, res) => {
    res.send("DATA ROUTE OK");
});

// LIVE FARM DATA ROUTE
router.get("/live", async (req, res) => {
    try {
        const doc = await db.collection("farmData").doc("demoFarm").get();

        if (!doc.exists) {
            return res.status(404).json({ error: "No farm data found" });
        }

        res.json(doc.data());
    } catch (error) {
        console.error("Firestore error:", error);
        res.status(500).json({ error: "Server error" });
    }
});

module.exports = router;
