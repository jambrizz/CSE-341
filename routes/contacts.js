//This file is to initialize the database connection

//variable to require the .env file where the database connection string is stored
const dotenv = require('dotenv');
//configure the .env file
dotenv.config();
//variable to require mongodb
const MongoClient = require('mongodb').MongoClient;

//variable to requires the express module
const express = require('express');

//variable called router that we will use for requests
const router = express.Router();

const contactsController = require('../controllers/contacts');

//get request to the controller to use a function called getAllContacts
router.get('/', contactsController.getAllContacts);

//get request to the controller to use a function called getIndividualContact
router.get('/', contactsController.getIndividualContact);

//variable for database
let _db;

//variable to initialize the database connection
const initDb = (callback) => {
    //if _db on line 11 has been assigned a value, console log the database has already been initialized
    if (_db) {
        console.log('Database is already initialized!');
        return callback(null, _db);
    }
    //process.env.MONGODB_URI is the connection string to the database to prevent the connection string from being exposed to the public
    MongoClient.connect(process.env.MONGODB_URI)
        .then((client) => {
            _db = client;
            callback(null, _db);
        })
        .catch((err) => {
            callback(err);
        });
};

//variable to get the database
const getDb = () => {
    if (!_db) {
        throw Error('Database not initialized!');
    }
    return _db;
};


//export the functions
module.exports = {
    initDb,
    getDb,
    router,
};