//This file is to request data from MongoDB

//This variable is to require mongodb
const mongodb = require('../db/connect');

//variable to pass an ObjectID to retrieve data from MongoDB
const ObjectId = require('mongodb').ObjectId;

//variable to retrieve all data in a collection from MongoDB
const getAllContacts = async (req, res, next) => {
    //result varaible will retrive all data from the contacts collection by using the find() method
    //.getDb() checks if database is initialized
    //.db is the database name in MongoDB which is "contacts"
    //.collection is passing the collection name of "contacts"
    //.find() is the method to retrieve all data
    const result = await mongodb.getDb().db('contacts').collection('contacts').find();
    //result will be converted to an array
    //.then() will return the array
    result.toArray().then((lists) => {
        //the array will be returned as a response
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists);
    });
};

//variable is to retrieve a single document from MongoDB
const getIndividualContact = async (req, res, next) => {
    //variable to retrieve the id from the request
    const id = new ObjectId(req.params.id);
    //variable does the same as getAllContacts but only retrieves one document by passing the id variable through the find() method
    const result = await mongodb.getDb().db('contacts').collection('contacts').find({_id: id});
    //result will be converted to an array
    result.toArray().then((lists) => { 
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists[0]);
    });
};

module.exports = { 
    getAllContacts, 
    getIndividualContact,
};