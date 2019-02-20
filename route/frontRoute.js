
/* Imports*/

    const express = require('express');
    const Router = express.Router();
    

/* Configuration*/
    
    Router.get('/', ( req, res ) => {
        res.render('index',{connected:false})
    })

    Router.get('/register', ( req, res ) => {
        res.render('register',{connected:false})
    })

    Router.get('/home', ( req, res ) => {
        res.render('home',{connected:false})
    })

    Router.get('/login', ( req, res ) => {
        res.render('login',{connected:false})
    })

    Router.get('/chat', ( req, res ) => {
        res.render('chat',{connected:false})
    })

    module.exports = Router