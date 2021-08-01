const Restaurant_ = require("../models/restaurant");
// DEFINE CONTROLLER FUNCTIONS
// newRestaurant function for post restaurant route
const newRestaurant = (req, res, next) => {
    res.json({message: "POST new restaurant"}); // dummy function for now
};

//GET '/restaurant' list all restaurant
const getAllRestaurants = (req, res) => {
    Restaurant_.find(
        {},
        (err, restaurant) => {
            if (err) {
                res.status(500).send(err);
            }
            res.status(200).json(restaurant);
        }
    ).limit(100);
};


//DELETE '/tea'
const deleteAllRestaurants = (req, res, next) => {
    res.json({message: "DELETE all restaurants"});
};

//GET '/restaurant/:name'
const getOneRestaurant = (req, res) => {
    Restaurant_.findOne(
        {'name': req.params.name},
        (err, restaurant) => {
            if (err) {
                return res.status(400).send(err);
            }
            res.status(200).json(restaurant);
        }
    )
};


//DELETE '/tea/:name'
const deleteOneRestaurant = (req, res, next) => {
    res.json({message: "DELETE 1 restaurant"});
};

//export controller functions
module.exports = {
    getAllRestaurants,
    getOneRestaurant
};

