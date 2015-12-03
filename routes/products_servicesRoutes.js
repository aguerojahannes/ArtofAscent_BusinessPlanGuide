var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var ProductsServices = mongoose.model('ProductsServices');
var passport = require('passport');
// using Authorization now:
var jwt = require("express-jwt");
var auth = jwt({
   userProperty: "payload", // on the request object itself, this is where we're going to put the userProperty, on the payload
   secret: "ThisisASecretCode"
});


// ID OF ProductsServices
// router.param("id", function(req, res, next, id){
//    ProductsServices.findOne({_id: id}, function(err, result){
//       if (err) return next(err);
//       if(!result) return next("Could not find post with an id of: " + id);
//       req.post = result;
//       next();
//    });
// });

// POST ALL VALUES  - http POST psObj to /products_services/userId/ps
router.post("/:id/ps", function(req, res, next){
  var ps = new ProductsServices(req.body);
    ps.user = req.params.id;
    ps.save(function(err, result) {
      if(err) return next(err);
      res.send(result);
    });
});

// GET ALL VALUES - SEARCH BY PS.USER
router.get("/:id/ps", function(req, res, next){
   ProductsServices.findOne({user: req.params.id}, function(err,result){
      if(err) return next(err);
      res.send(result);
   });
});
 // DELETE
router.delete("/:id/ps", function(req, res, next){
   ProductsServices.remove({user: req.params.id}, function(err, result){
      if(err) return next(err);
      res.send(result);
   });
});

// EDIT
router.put("/:id/ps", function(req, res, next){
   ProductsServices.update({user: req.params.id}, req.body, function(err, result){
      if(err) return next(err);
      res.send(result);
   });
});

module.exports = router;
