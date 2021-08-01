'use strict';

// create App function
module.exports = function(app) {
    let restaurantList = require('../controllers/restaurant');


// get first 100 restaurants
    app
        .route("/restaurants")
        .get(restaurantList.getAllRestaurants)
        /*.post(todoList.createNewTodo)*/;

    // get on restaurant
    app
        .route("/restaurant/:name")
        .get(restaurantList.getOneRestaurant)
};

