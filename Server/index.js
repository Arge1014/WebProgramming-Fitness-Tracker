const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT ||  3000;

app

    .get('/port', (req, res)=> res.send("Using port: " + port))
    .use('/static', express.static( path.join( __dirname , '../NoFramework' ) ) 
    .use('/users', userController ) );

app.listen(port, () => console.log(`Running on http://localhost:${port}`));