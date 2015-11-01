var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Brainstorm = mongoose.model('Brainstorm');
var passport = require('passport');
// using Authorization now:
var jwt = require("express-jwt");
var auth = jwt({
   userProperty: "payload", // on the request object itself, this is where we're going to put the userProperty, on the payload
   secret: "ThisisASecretCode"
});

// POST ALL VALUES  - http POST psObj to /products_services/userId/ps
router.post("/:id/bs", function(req, res, next){
  var bs = new Brainstorm(req.body);
  console.log("req.body: " + req.body);
  console.log("req.params.id: " + req.params.id);
    bs.user = req.params.id;
    console.log("bs.user: " + bs.user);

    bs.save(function(err, result) {
      if(err) return next(err);
      res.send(result);
      console.log("result: " + result);

    });
});

// GET ALL VALUES - SEARCH BY PS.USER
// router.get("/:id/ps", function(req, res, next){
//    ProductsServices.find({user: req.params.id}).exec(function(err,result){
//       if(err) return next(err);
//       res.send(result);
//    });
// });

// EXAMPLE DELETE POST BY ID - http DELETE to /api/post
// router.delete("/:id", function(req, res, next){
//    Post.remove({_id: req.params.id}, function(err, result){ anywhere where it's true in the database that _id is the same as what we're sending in from factory, in this case we sent in the id as a parameter ("/api/post/" + id) on the request.
//       if(err) return next(err);
//       console.log(result);
//       res.send();
//    });
// });

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
