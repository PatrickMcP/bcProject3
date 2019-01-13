// Pulling in Mongoose
// const mongoose = require("mongoose");
const connection = require("../config/connection.js");

// Express router setup
const express = require("express");
const router = express.Router();

const db = require("../models");

// Route to get all users
router.get("/api/users", (req, res) =>{
  db.User.find({})
    .then( (dbUser) => {
      res.json(dbUser);
    })
    .catch( (error) => {
      console.log(error);
    }); 
});

// Route to get one user
router.get("/api/users/:userID", (req, res) => {
  db.User.findOne( { _id: req.params.userID } )
    .then( (dbUser) => {
      res.json(dbUser);
    })
    .catch( (error) => {
      console.log(error);
    });
});

// Route to create one user
router.post("/api/users", (req, res) => {
  db.User.create(req.body)
    .then( (dbUser) => {
      res.send({
        id: dbUser._id
      });
    })
    .catch( (error) => {
      console.log(error);
    });
});

module.exports = router;