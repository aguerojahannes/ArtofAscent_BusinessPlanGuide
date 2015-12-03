var mongoose = require('mongoose');
var crypto = require('crypto');
var jwt = require('jsonwebtoken');

var BrainstormSchema = new mongoose.Schema({
 user: String,
 brainstorm: String,
 date: {type: Date, default: Date.now}
});


mongoose.model('Brainstorm', BrainstormSchema);
