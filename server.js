var express = require("express");
var bodyParser = require("body-parser");
var mysql = require("mysql");
var method_override = require("method-override");
var PORT = process.env.PORT || 7000;

require('dotenv').config();

var app = express();

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var exphbs = require("express-handlebars");
var hbs = require("handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");

var mysql = require("mysql");
app.use("/", routes);
var PORT = process.env.PORT || 7000;




console.log("Connected at port: " + PORT);
