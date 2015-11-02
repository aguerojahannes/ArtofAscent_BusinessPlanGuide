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


// EVERYTHING I TRIED TO FIGURE OUT A SIMPLE POST
// console.log("req.body.overview " + req.body.overview);
// console.log("req.body.userId " + req.body.userId);
// console.log("req.params.id " + req.params.id);
// console.log("ps " + ps);
// console.log("req " + req);
// console.log("made it here");
// console.log("req.body: " + req.body);
// console.log("req: " + req);
// console.log("req.params.id " + req.params.id);
// console.log("ps.user " + ps.user);
// ps.user = payload.;
// console.log("req.body " + req.body.overview);
//   console.log(" req.params.id: " + req.params.id);
// console.log("and here");
//   console.log("req.body.userId: " + req.body.userId);
// take req.body and send the whole thing
// set it equal to ps so we can save it once we
// ps.update()
// ps.update({_id: ps._id},{$set: {user: req.params.id}});
// console.log(req.params.id);
// console.log("req.body: " + req.body);
// console.log("ps: " + ps);
// console.log("ps_id: " + ps._id);
// console.log("ps.user: " + ps.user);
//  ps.user = req.params.id;
//  ps.user = req.body.userId;
// user: req.body.username

// User.findOne({_id: req.params.id}, function(err, result) {
//   if(err) return next(err);
//   if(!result) return next("Could not find that result.");
