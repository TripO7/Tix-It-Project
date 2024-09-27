const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const { createUserDoc } = require("./createUserDoc");

exports.createUserDoc = createUserDoc;
