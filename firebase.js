const admin = require("firebase-admin");

const serviceAccount = require("./firebase_key/cardwhere-firebase-adminsdk-2yi00-d3993737bd.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://cardwhere.firebaseio.com"
});

module.exports = admin;