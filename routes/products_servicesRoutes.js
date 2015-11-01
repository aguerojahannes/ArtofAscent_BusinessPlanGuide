var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var ProductsServices = mongoose.model('ProductsServices');
var User = mongoose.model('User');
var passport = require('passport');
// using Authorization now:
var jwt = require("express-jwt");
var auth = jwt({
   userProperty: "payload", // on the request object itself, this is where we're going to put the userProperty, on the payload
   secret: "ThisisASecretCode"
});

// router.param("id", function(req, res, next, id){
//    User.findOne({_id: id}, function(err, result){
//       if (err) return next(err);
//       if(!result) return next("Could not find post with an id of: " + id);
//       req.post = result;
//       next();
//    });
// });

// POST ALL VALUES BY USER ID - http POST psObj to /products_services/userId/ps
// find one userId, and then on that route, post this new psObj
// later you will need to get this psObj by finding this one userId and then getting their specific psObj
router.post("/:id/ps", function(req, res, next){
   console.log("req.body " + req.body.overview);
   // take req.body and send the whole thing
   // set it equal to ps so we can save it once we
  var ps = new ProductsServices(req.body);
  console.log("req.body " + req.body.overview);

 // find one User by Id
  User.findOne({_id: req.params.id}, function(err, result) {
     console.log(" req.params.id: " + req.params.id);
    if(err) return next(err);
    if(!result) return next("Could not find that result.");

   //s save psObj that lives in req.body
    ps.save(function(err, result) {
      if(err) return next(err);
       console.log("ps: " + ps);
      // send newly created ps back to factory.

      res.send(result); // THIS IS IMPORTANT. SEND RESULT
             console.log("result: " + result);
    });
  });
});

// EXAMPLE DELETE POST BY ID - http DELETE to /api/post
// router.delete("/:id", function(req, res, next){
//    Post.remove({_id: req.params.id}, function(err, result){ anywhere where it's true in the database that _id is the same as what we're sending in from factory, in this case we sent in the id as a parameter ("/api/post/" + id) on the request.
//       if(err) return next(err);
//       console.log(result);
//       res.send();
//    });
// });

module.exports = router;
