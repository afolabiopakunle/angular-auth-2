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

module.exports = router;

