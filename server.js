//creates a variable called express and sets it to the express module
const express = require('express');
//creates a variable called app and sets it to the express module
const app = express();
//creates a variable called port and sets it to port 3000
const port = 3000;

//directs to the index.js file in the routes folder
const routes = require('./routes/index');

//directs express to use the routes
app.use(routes);
//app.use('/', require('./routes'));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});