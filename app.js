//creates a variable called express and sets it to the express module
const express = require('express');

//parses the body of the request
const bodyParser = require('body-parser');

//creates a requirement to use connection.js file in database folder.
//This file is going to be the default way to connect multiple files to the database
const mongodb = require('./database/connection');
//creates a variable called app and sets it to the express module
const app = express();

//creates a variable and establishes process.env.PORT as the production port if it exists, otherwise use 3000
const port = process.env.PORT || 3000;

//directs to the index.js file in the routes folder
const routes = require('./routes/index');

//directs express to use the routes
app.use(routes);
//app.use('/', require('./routes'));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});