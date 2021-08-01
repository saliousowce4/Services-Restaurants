'use strict'
const mongoose = require("mongoose"); //import mongoose
const Schema = mongoose.Schema;

// Restaurant Schema
const RestaurantSchema = new Schema({
    name: {type:String, required:true},
    borough: String,
    restaurant_id: String,
    cuisine: String
});

const Restaurant = mongoose.model('Restaurant', RestaurantSchema); //convert to model named Restaurant
module.exports = Restaurant; //export for controller use