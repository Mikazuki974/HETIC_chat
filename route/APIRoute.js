
/* Imports*/

const express = require('express');
const ApiRouter = express.Router();


/* Configuration*/

ApiRouter.get('/register', ( req, res ) => {
    res.json('register')
})

ApiRouter.get('/login', ( req, res ) => {
    res.json('login')
})

module.exports =  ApiRouter