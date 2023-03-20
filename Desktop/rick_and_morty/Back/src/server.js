const express = require('express');
const server = express();
const PORT = 3001;
const router = require('./routes/index.js');


const cors = require('cors');
const corsOption = {
    origin: '*',
    credential: true,
    optionSuccessStatus: 200
}

server.use(cors(corsOption));

server.use(express.json());

server.use('/rickandmorty', router);


server.listen(PORT, () => {
    console.log('Server raised in port ' + PORT);
});