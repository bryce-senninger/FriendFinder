# Friend Finder Express App

## Project Overview: Express Server Routing and API Manipulation

This app collect user input and appends it to an existing API, while also referencing the JSON data of that API to compare previously existing data entries with user input. The practical implementation of this concept is endless, and the main purpose of designing this app was to build skills and gain experience in the area of data handling and manipulation coming in and out of an API.

## Instructions for Operation

Clone the repository, initialize package.json and install the required npm dependencies (express, path). Then, in the console run 

node server.js

The website will then be deployed at http://localhost:8080

This project will also be deployed on Heroku, a link to which can be found in the links subheading of this readme.

## Project Organization

This project is primarily constructed within the "app" directory, where the public, routing, and data directories are contained. 

### Public Directory

The public directory contains the html pages to be displayed, including some in line styling and jQuery to parse the user input and make comparisons with the API data.

### Routing Directory

The routing directory contains routes to define url paths to access the API and the html pages.

### Data Directory

This directory contains our object to be displayed as JSON. This JSON will be used to compare to, and appended with, gathered user data.

## Technologies Implemented

This project uses:
* Javascript
    * jQuery
* Node.js
* npm dependencies
    * express
    * path

## Links

Github Repository: https://github.com/bryce-senninger/FriendFinder

Heroku Deployed App: https://expressfriendfind.herokuapp.com
