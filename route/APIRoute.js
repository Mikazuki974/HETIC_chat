
/* Imports*/

const express = require('express');
const ApiRouter = express.Router();


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
        res.json(req.body)

    }else{
        res.json({msg:'bad fields provided'})
    }
})

ApiRouter.post('/login', ( req, res ) => {
    res.json('login')
})

module.exports =  ApiRouter