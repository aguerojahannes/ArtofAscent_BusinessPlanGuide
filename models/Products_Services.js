var mongoose = require('mongoose');
var crypto = require('crypto');
var jwt = require('jsonwebtoken');

var ProductsServicesSchema = new mongoose.Schema({
 user: String,
  overview: String,
  importance: String,
  products: [{productName: String, productDescription: String}],
  services: [{serviceName: String, serviceDescription: String}],
  images: Array,
  conclusion: String
});

mongoose.model('ProductsServices', ProductsServicesSchema);
