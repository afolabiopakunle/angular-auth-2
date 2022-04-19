const express = require('express');
const app = express();

app.use(express.json());
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Home page')
})

app.listen(PORT, () => console.log('Server running on port ' + PORT));


