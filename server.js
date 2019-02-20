/*Imports*/

const express = require('express')
const ejs= require('ejs')
const mongoose = require('mongoose')
const path = require('path')
const BodyParser = require('body-parser')
const dotenv = require('dotenv')

//Routes
const frontRoute = require('./route/frontRoute')
const ApiRoute = require('./route/APIRoute')

/*Configuration*/

require('dotenv').config()
const server = express()
const port =  process.env.PORT

class serverClass{

    init(){

        
        
        //Config du dossier client
        server.set('views',__dirname + '/www')
        server.use(express.static(path.join(__dirname,'www')))

        //Config du moteur de rendu
        server.set('view engine','ejs')
        

        // Body-Parser
        server.use(BodyParser.urlencoded({ extended: false }))

        //Config route
        server.use('/api',ApiRoute)
        server.use('/',frontRoute)


        this.launch()
    }

    launch(){

        
        server.listen(port,() => {

            console.log(`Serveur is active on port ${port}`)
        })  
    }
}
/*Lancer le server*/

    new serverClass().init()



