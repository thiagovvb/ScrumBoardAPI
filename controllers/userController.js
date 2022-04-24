const User = require('../models/userModel')

module.exports.postUser = (req,res,next) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;

    const userModel = new User({
        firstName: firstName,
        lastName: lastName,
        email: email
    });

    userModel
        .save()
        .then( result => {
            res.status(200).send(result)
        })
        .catch(error => {
            res.status(500).send("Houve um erro na requisição")
        });
};  

module.exports.getUser = (req,res,next) => {
    const userId = req.query.userId;
    User.findById(userId)
        .then(user => {
            console.log(user)
            res.status(200)
               .send(user);
        })
        .catch(error =>{
            res.status(500).send("Houve um erro na requisição")
        })
}   