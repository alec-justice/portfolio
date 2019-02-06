const express = require('express');
const path = require('path');
const app = express();
const fs = require('fs');
const bodyParser = require('body-parser');
const request = require('request');
const port = '3000';

//telling server where to look for files
// const pathJoin = path.join(__dirname + '../public');

// app.get('/', function(req, res){
//     res.sendFile(pathJoin + '../index');
// });

app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended: true}));

//listening on port 3000
app.listen(port, function () {
    console.log('Server listening on port 3000')
});