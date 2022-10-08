// this file is for API documentation using swagger

// import swagger-jsdoc
const swaggerAutogen = require('swagger-autogen')();

//variable called doc for swagger
const doc = {
  info: {
    title: 'Contacts API',
    description: 'A list of Star Wars characters',
  },
  host: 'localhost:3000',
  schemes: ['http'],
};

// output file for swagger
const outputFile = 'swagger-output.json';
// input file for swagger
const endpointsFiles = ['./app.js'];

/* NOTE: if you use the express Router, you must pass in the 
   'endpointsFiles' only the root file where the route starts,
   such as index.js, app.js, routes.js, ... */

swaggerAutogen(outputFile, endpointsFiles, doc);
