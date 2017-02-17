// require express
var express = require('express');
var path = require('path');

// create our router object
var router = express.Router();

// export this router in server.js file
module.exports = router;

// route for our home page
router.get('/', function(req, res) {
  res.render('pages/home');
});
// route for our about page
router.get('/about', function(req, res) {
  var users = [
    { name: 'James', email: 'james@gmail.com', avatar: 'http://placekitten.com/800/800' },
    { name: 'Jees', email: 'pop@gmail.com', avatar: 'http://placekitten.com/700/700', },
    { name: 'Kaes', email: 'push@gmail.com', avatar: 'http://placekitten.com/800/800' },
    { name: 'Ben', email: 'push@gmail.com', avatar: 'http://placekitten.com/700/700' },
    { name: 'Leon', email: 'push@gmail.com', avatar: 'http://placekitten.com/700/800' },
    { name: 'Cath', email: 'push@gmail.com', avatar: 'http://placekitten.com/800/700' },
    { name: 'Barry', email: 'push@gmail.com', avatar: 'http://placekitten.com/700/800' },
    { name: 'Pete', email: 'push@gmail.com', avatar: 'http://placekitten.com/800/800' },



  ];

  res.render('pages/about', { users: users});
});

// News Page Route
router.get('/news', function(req, res) {
  res.render('pages/news');
});

// Portfolio Page Route
router.get('/portfolio', function(req, res) {
  res.render('pages/portfolio');
});

// References Page Route
router.get('/references', function(req, res) {
  res.render('pages/references');
});

// Services Page Route
router.get('/services', function(req, res) {
  res.render('pages/services');
});

// Skills Page Route
router.get('/skills', function(req, res) {
  res.render('pages/skills');
});

// Contact Page Route
router.get('/contact', function(req, res) {
  res.render('pages/contact');
});
router.post('/contact', function(req, res) {

  res.send("Thanks for contacting us, " + req.body.name + "Your email will be placed in the trash." );
  console.log(req.body.message);
});
