const admin = require("firebase-admin");

if (!process.env.FIREBASE_SERVICE_ACCOUNT) {
    console.error("FIREBASE_SERVICE_ACCOUNT is missing");
    process.exit(1);
}

const serviceAccount = JSON.parse(
    process.env.FIREBASE_SERVICE_ACCOUNT
);

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();
module.exports = db;
