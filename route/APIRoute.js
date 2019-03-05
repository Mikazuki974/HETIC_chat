
/* Imports*/

const express = require('express');
const ApiRouter = express.Router();
const fetch = require('node-fetch-npm')


/* Configuration*/
ApiRouter.get('/', ( req, res ) => {
    res.json([{msg:'Hello API'}])
})

ApiRouter.post('/register', ( req, res ) => {
    //Récupérer les données de l'utilisateur
  /*  console.log(req.body)
    res.json(req.body);*/

    //Vérifier les données de la requête
    if(
        req.body.email != undefined && req.body.email.length > 4 &&
        req.body.password != undefined && req.body.password.length > 4 &&
        req.body.pseudo != undefined && req.body.pseudo.length > 1
    ){

        //Configuration des données 
        const userData = JSON.stringify(req.body)

        //Enregister les données dans la DB
        fetch('http://localhost:3000/users',{
            method:'POST',
            body:userData,
            headers:{'Content-Type':'application/json'}
        })

        .then(NewUser => res.json({msg:'User registrated',data:NewUser}))
        .catch(error => res.json({msg:'User not registrated',data:error}))

    }else{
        res.json({msg:'bad fields provided'})
    }
})

ApiRouter.post('/login', ( req, res ) => {

    //Vérifier les données de la requête
    if(
        req.body.email != undefined && req.body.email.length > 4 &&
        req.body.password != undefined && req.body.password.length > 4 
    ){

        //Configuration des données 
        const userData = JSON.stringify(req.body)

        //Enregister les données dans la DB
        fetch(`http://localhost:3000/users?password=${req.body.password}&email=${req.body.email}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        })

        .then( rawData => {
            // Convertir la répo,nse en JSON
            return rawData.json();
        })

        .then( jsonData => {
            // Vérifier la taille de jsonData
            if( jsonData.length > 0 ){
                res.json( { msg: 'User connected', data: jsonData } )
            }
            else {
                res.json( { msg: 'User not connected', data: null } )
            }
        })

        .catch( error => res.json( { msg: 'Connection error', data: error } ) );
        
    }else{
            res.json({msg:'bad fields provided'})
        }
    })

module.exports =  ApiRouter