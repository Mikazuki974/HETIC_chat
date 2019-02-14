
/* Imports*/

    const express = require('express');
    const Router = express.Router();
    

/* Configuration*/
    
    Router.get('/', ( req, res ) => {
        res.render('index')
    })

    Router.get('/register', ( req, res ) => {
        res.render('register')
    })

    Router.get('/home', ( req, res ) => {
        res.render('home')
    })

    Router.get('/login', ( req, res ) => {
        res.render('login')
    })

    Router.get('/chat', ( req, res ) => {
        res.render('chat')
    })

    

    module.exports = Router