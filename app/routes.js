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
    { name: 'James', email: 'james@gmail.com', avatar: 'img/james.jpg' },
    { name: '', email: '', avatar: 'img/cubed-square.png', },
    { name: 'Jees', email: 'pop@gmail.com', avatar: 'img/ben.jpg', },




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

// Skills Page Route
router.get('/skills', function(req, res) {
  res.render('pages/skills');
});

// Terms Page Route
router.get('/terms', function(req, res) {
  res.render('pages/terms');
});

// Contact Page Route
router.get('/contact', function(req, res) {
  res.render('pages/contact');
});
router.post('/contact', function(req, res) {

  res.send("Thanks for contacting us, " + req.body.name + "Your email will be placed in the trash." );
  console.log(req.body.message);
});
