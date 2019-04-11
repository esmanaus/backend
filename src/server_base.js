const express = require('express');

const app = express();

app.get('/teste', (req, res) => {
    return res.send('Hello Word');
});

app.listen(90);