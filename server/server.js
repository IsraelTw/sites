const express = require('express');

const cors = require('cors');

const server = express();

const sites = require('./sites.json');

server.use(express.json());
server.use(cors());
server.use(express.static('../client/build'));

server.get('/sites', (req, res) => {
    res.json(sites);
});

server.listen(3001, () => console.log(`app run on http://localhost:3001`)); 