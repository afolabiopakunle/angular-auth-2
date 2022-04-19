const express = require('express');
const app = express();
const mongoose = require('mongoose');
app.use(express.json());
const PORT = 3000;
const db = 'mongodb+srv://afolabi:8899fifafa@cluster0.bwrba.mongodb.net/eventsdb?retryWrites=true&w=majority';
mongoose.connect(db, err => err ? console.log("ERROR: ", err) : console.log('Successfully connected to mongoDB'))
const api = require('./routes/api');

app.use('/api', api);

app.get('/', (req, res) => {
    res.send('Home page')
})

app.listen(PORT, () => console.log('Server running on port ' + PORT));


