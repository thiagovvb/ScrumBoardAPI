require('dotenv/config')
const express = require("express");
const bodyParser = require("body-parser")
const mongoose = require('mongoose')
const adminRoutes = require('./routes/admin')

const app = express();

app.use(bodyParser.urlencoded({
    extended: false
}))

app.use('/admin',adminRoutes)

mongoose.connect(`mongodb+srv://${process.env.MONGOUSER}:${process.env.MONGOPASSWORD}@tcluster.dy2za.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`)
        .then(()=> {
            console.log("Server started.")
            app.listen(3000);
        })
        .catch(error => {
            console.log(error)
        })
    
