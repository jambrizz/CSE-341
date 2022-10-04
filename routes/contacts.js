//variable to requires the express module
const express = require('express');

//variable called router that we will use for requests
const router = express.Router();

const contactsController = require('../controllers/contacts');

//get request to the controller to use a function called getAllContacts
router.get('/', contactsController.getAllContacts);

//get request to the controller to use a function called getIndividualContact
router.get('/:id', contactsController.getIndividualContact);

//export the functions
module.exports = router;