const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

var app = express();
var port = process.env.PORT || 3000;

var todoRoutes = require('./routes/todos');

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views'));
app.get('/', function(req,res){
  res.sendFile('index.html')
});

app.use('/api/todos', todoRoutes);

app.listen(port, function(){
  console.log(`App is listening on port ${port}`);
})
