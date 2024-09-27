const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

const createUserDoc = functions.region('europe-west1').https.onRequest(async (req, res) => {
    const user = req.body;
    const userData = {
        uid: user.uid,
        email: user.email,
        role: 'user'
    };

    const db = admin.firestore();
    await db.collection('users').doc(user.uid).set(userData);

    res.status(200).send('User document created');
});

module.exports = { createUserDoc };