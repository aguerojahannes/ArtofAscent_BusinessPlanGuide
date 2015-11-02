if(process.env.NODE_ENV !== "production"){
		require("dotenv").load();
}

var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
var port = process.env.PORT || 3000;
var passport = require('passport');
var mongoose = require('mongoose');
require("./models/User");
require("./models/Products_Services");
require("./models/Brainstorm");
require("./config/passport");

// var database = process.env.MONGOLAB || "mongodb://localhost/FailedMongoLab";
// console.log(database);
// mongoose.connect(database, function(err){
// 	console.log("Connect");
// 	if(err) return console.log('error connecting to %s', database);
// 	console.log('connected to %s', database);
// });
mongoose.connect("mongodb://localhost/bizplan");

app.set('views', path.join(__dirname, 'views'));
//set the view engine that will render HTML from the server to the client
app.engine('.html', require('ejs').renderFile);
//Allow for these directories to be usable on the client side
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/bower_components'));
//we want to render html files
app.set('view engine', 'html');
app.set('view options', {
	layout: false
});

//middleware that allows for us to parse JSON and UTF-8 from the body of an HTTP request
passport.initialize();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var userRoutes = require('./routes/userRoutes');
var productsServicesRoutes = require('./routes/products_servicesRoutes');
var brainstormRoutes = require('./routes/brainstormRoutes');


//on homepage load, render the index page
app.get('/', function(req, res) {
	res.render('index');
});

// Use Routes
app.use("/user", userRoutes);
app.use("/products_services", productsServicesRoutes);
app.use("/brainstorm", brainstormRoutes);


// Handle Errors
app.use(function(err, req, res, next) {
	console.log(err);
	res.status(400).send(err);
});

var server = app.listen(port, function() {
	var host = server.address().address;
	console.log('Art of Ascent Business Plan App listening at http://localhost:' + port);
});
