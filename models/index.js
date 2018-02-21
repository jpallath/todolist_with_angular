const mongoose = require('mongoose');
mongoose.set ('debug', true);
mongoose.connect('mongodb://localhost/todo');

mongoose.promise = Promise;

module.exports.Todo = require("./todo")
