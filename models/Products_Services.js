var mongoose = require('mongoose');
var crypto = require('crypto');
var jwt = require('jsonwebtoken');

var ProductsServicesSchema = new mongoose.Schema({
 user: {type: mongoose.Schema.Types.ObjectId, ref: "User"},
  overview: String,
  importance: String,
  products: [{productName: String, productDescription: String}],
  services: [{productName: String, productDescription: String}],
  images: Array,
  conclusion: String
});

mongoose.model('ProductsServices', ProductsServicesSchema);
