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

// set up the HBS view engine
app.engine('handlebars', handlebars({defaultLayout: 'main', extname: 'handlebars', partialsDir: [__dirname + '/views/partials']}));
app.set('view engine', 'handlebars');


// Use morgan for debug logging
app.use(logger("dev"));

// set up body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: false
}));

// set the public static directory
app.use(express.static('public'));

// Add routes, both API and view
app.use('/',routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/nytreact");

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
