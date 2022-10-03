//This file is to 
const express = require('express');

const router = express.Router();

router.use('/contacts', require('./contacts'));

module.exports = router;

/*
const routes = require('express').Router();

const { index } = require('../controllers/index');

This is the old code before creating the controllers folder just keeping it for referrence
routes.get('/', (req, res) =>{
    res.send('Yasna Ambriz');
});

routes.get('/test', (req, res) =>{
    res.send('test, test, test!');
});

routes.get('/', index);
//export the routes
module.exports = routes;
*/
