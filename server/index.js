const express = require('express');
const app = express();

app.use(express.json());
const PORT = 3000;

const api = require('./routes/api');

app.use('/api', api);

app.get('/', (req, res) => {
    res.send('Home page')
})

app.listen(PORT, () => console.log('Server running on port ' + PORT));


