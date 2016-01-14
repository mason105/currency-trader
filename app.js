var express = require('express');
    app = express();
    router = express.Router();
    instruments = require('./instruments.js');
    path = require('path');
    
app.use(express.static('public'));
app.use(express.static('vendor'));
app.use('/instruments', instruments);

app.get('/', function(req,res){
  res.sendFile(__dirname + '/index.html');
})

app.listen(3000);
console.log('ForEx server is up on 3000');