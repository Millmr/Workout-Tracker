# Workout-Tracker
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

Workout-Tracker is a full stack web application used to help users keep track of their workouts. It uses Mongoose as the ORM and has dependencies of express and morgan. 
![image](https://github.com/Millmr/Workout-Tracker/blob/main/images/Workout%20Tracker%20Dashboard.png)

## Install

This app is deployed live on heroku, and you can see it live at:

https://afternoon-wildwood-99164.herokuapp.com/?id=6089e3f3b72cfc0015638287

To install locally, do the following:

To install necessary dependencies, run the following command:

npm i
This app comes with a .env file which you should edit to reflect your personal/local database credentials and save. Then, to recreate the sample database on your local instance of mysql, run ./db/schema.sql which will create the necessary techblog_db in mysql for you. Finally, to seed the database with sample data, run:

node seeds/seed.js
To start the application, run:

node server

## Screen Shots

![image](https://github.com/Millmr/Workout-Tracker/blob/main/images/Workout%20Tracker%20Home.png)

![image](https://github.com/Millmr/Workout-Tracker/blob/main/images/Exercise.png)
