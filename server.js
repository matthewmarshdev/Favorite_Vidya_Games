var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
require('dotenv').config();

var app = express();
var port = process.env.port || 3333;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);

app.listen(port);