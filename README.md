# Cubed Graphics Website

This application for a graphic designer friend was my first server-side rendered website, made with Embedded JavaScript (EJS), Node, Express and CSS. It was hosted on Heroku during the testing and development of the application. It can still be seen [here](https://lit-sands-86396.herokuapp.com/).


# Stack

* Node
* Express
* EJS
* Bootstrap
* CSS


# Challenges

I made the basic routes and EJS templates using the official Node and Express documentation, which made this side of things relatively easy. The difficult part was the CSS, making it mobile-first and viewable on all types of devices, browsers and screens (my friend was viewing it on a widescreen iMac whilst I was developing it on a small MacBook). Taking care of these issues took up 90% of the job (343 lines of CSS). Making media queries at the bottom of the CSS file for different types of mobiles was in fact the biggest part of the whole process. Looking back on this project, it's clear that the planning and processes learnt at Makers Academy would have made this job a lot easier and fun.


# How to run this app 

```
$ git clone git@github.com:jdm79/cubed.git
$ npm install
$ cd cubed
$ npm start

(then go to localhost:8080)
```