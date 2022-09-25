//this file is to establish connection to the database

//variable to retrieve database login from .env file
const dotenv = require('dotenv');
dotenv.config();

// require mongodb
const {MongoClient} = require('mongodb').MongoClient;

let -db;

const initDb = (callback) => {
    if (_db) {
        //if database is already initialized, console log message
        console.log('Database is already initialized.');
        return callback(null, _db);
    }
    //process.env.MONGODB_URI is to retrieve the connection string from env file
    MongoClient.connect(process.env.MONGODB_URI)
        .then((client) => {
            _db = client;
            callback(null, _db);
        })
        .catch((err) => {
            callback(err);
        });
};

const getDb = () => {
    //if database is not initialized, console log message
    if (!_db) {
        throw Error('Database not initialized.');
    }
    return _db;
};

// export the functions
module.exports = {
    initDb,
    getDb,
};