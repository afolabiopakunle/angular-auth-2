const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.get('/', (req, res) => {
    res.send('API Home')
})

router.post('/register', (req, res) => {
    const userData = req.body;
    const user = new User(userData);
    user.save((err, registeredUser) => err ? console.log('ERROR', err) : res.status(200).send(registeredUser))
})

router.post('/login', (req, res) => {
    const userData = req.body;
    User.findOne({email: userData.email}, (err, foundUser) => {
        if(err) {
            console.log(err)
        }
        else if (!foundUser) {
            res.status(401).res.send('Invalid email')
        }
        else if(userData.password !== foundUser.password) {
            res.status(401).send("Invalid password")
        } else res.status(200).send('Welcome ' + foundUser.email)
    })
})

module.exports = router;

