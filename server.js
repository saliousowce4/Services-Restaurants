'use strict'
// Import DB Connection
require("./config/db");


// require express and bodyParser
const  express = require("express");
const  bodyParser = require("body-parser");

// create express app
const  app = express();
// Import API route
let routes = require('./routes/restaurant'); //importing route
routes(app);
// define port to run express app
const  port = process.env.PORT || 3000;

// use bodyParser middleware on express app
app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());

// Add endpoint
app.get('/', (req, res) => {
    res.send("Hello World");
});

// Listen to server
app.listen(port, () => {

    console.log(`Server running at http://localhost:${port}`);
});
