// Dependencies
const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const handlebars = require('express-handlebars');
const cheerio = require("cheerio");
const axios = require("axios");

// Require the routes and use them
const routes = require('./routes/routes');

// Initialize Express
const app = express();
// Launch App
const PORT = process.env.PORT || 3000;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/nytreact");

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
