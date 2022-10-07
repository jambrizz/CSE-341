//This file is to designate the routes for the application

//variable to requires the express module
const express = require('express');

//variable called router that we will use for requests
const router = express.Router();

//variable to require the controllers folder and the contacts.js file
const contactsController = require('../controllers/contacts');

//get request to the controller to use a function called getAllContacts
router.get('/', contactsController.getAllContacts);

//get request to the controller to use a function called getIndividualContact
router.get('/:id', contactsController.getIndividualContact);

//POST request to create a new contact
router.post('/', contactsController.addContact);

//PUT request to update a contact
router.put('/:id', contactsController.updateContact);

//DELETE request to delete a contact
router.delete('/:id', contactsController.deleteContact);

//export the functions
module.exports = router;