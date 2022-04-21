require('dotenv/config')
const express = require("express");
const bodyParser = require("body-parser")
const mongoConnect = require('./util/database')

const app = express();

app.use(bodyParser.urlencoded({
    extended: false
}))

app.listen(3000);

