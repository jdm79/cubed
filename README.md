# Cubed Graphics Website

This application for a graphic designer friend was my first server-side rendered website, made with Embedded JavaScript (EJS), Node, Express and CSS. It was hosted on Heroku during the testing and development of the application. It can still be seen [here](https://lit-sands-86396.herokuapp.com/).

It's hosted on a free Heroku plan, so will take around 5-10 seconds to initially load. I made this application two years ago and have only had to update the Node version to v10.9.0 from v7.2.0 to get it running again.


# Stack

* Node
* Express
* EJS
* Bootstrap
* CSS


# Challenges

I made the basic routes and EJS templates using the official Node and Express documentation, which made this side of things relatively easy. 

The difficult part was the CSS, making it mobile-first and viewable on all types of devices, browsers and screens (my friend was viewing it on a widescreen iMac whilst I was developing it on a small MacBook). Taking care of these issues took up 90% of the job (343 lines of CSS). Using Bootstrap did help, as I was able to have a hamburger menu for mobile screens 

Making media queries at the bottom of the CSS file for different types of mobiles was in fact the biggest part of the whole process. Looking back on this project, it's clear that the planning and processes learnt at Makers Academy would have made this job a lot easier and more fun.

The main things I learnt from this project were how to use templates to have consistency across pages, how to manage the display of the app across different devices and screens, and that there were other ways to make a website other than basic html and css and jQuery.


# How to run this app 

```
$ git clone git@github.com:jdm79/cubed.git
$ npm install
$ cd cubed
$ npm start

(then go to localhost:8080)
```
