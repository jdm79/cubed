// require our dependencies
var express = require('express');
var expressLayouts = require('express-ejs-layouts');
var bodyParser = require('body-parser');
var app = express();



var port = process.env.PORT|| 8080
var server_ip_address = process.env.SERVER_IP_ADDRESS || '127.0.0.1'


// this code below has to go first, before 'var router',
// otherwise it doesn't work

// use ejs and express layouts
app.set('view engine', 'ejs');
app.use(expressLayouts);

// use body parser
app.use(bodyParser.urlencoded());

//route our app
var router = require('./app/routes');
// app.use is an express middleware function
app.use('/', router);



// set static files
app.use(express.static(__dirname + '/public'));

// start the server
app.listen(port, server_ip_address, function () {
  console.log( "Listening on " + server_ip_address + ", port " + port )
});
