const express = require("express");
const path = require("path");
const serverless = require("serverless-http");

const app = express();
const router = express.Router();

const options = {
    root: path.join(__dirname),
};

router.get("/", (req, res) => {
    res.send("<img src='https://media.tenor.com/BP79uBTrSy0AAAAd/loading-discord.gif'/>");
});

app.use('/.netlify/functions/server', router)

module.exports = app;
module.exports.handler = serverless(app);
