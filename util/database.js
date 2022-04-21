require('dotenv/config');

const mongodb = require('mongodb');
const mongoClient = mongodb.MongoClient;


const mongoConnect = (callback) => {
    mongoClient.connect(
        `mongodb+srv://${process.env.MONGOUSER}:${process.env.MONGOPASSWORD}@tcluster.dy2za.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
    )
        .then(client => {
            console.log("Connected!");
            callback(client);
        }).catch(error => {
            console.log(error);
        });
};

module.exports = mongoConnect;