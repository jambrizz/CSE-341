// This file is for API documentation using swagger-ui-express

//variable called router to require express
const router = require('express').Router();
//variable called swaggerUi to require swagger-ui-express
const swaggerUi = require('swagger-ui-express');
//variable called swaggerDocument to require swagger-output.json
const swaggerDocument = require('../swagger-output.json');


//this is the route for the swagger documentation
router.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

module.exports = router;