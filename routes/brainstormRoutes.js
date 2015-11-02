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

// POST ALL USER'S VALUES  - http POST psObj via route /brainstorm/userId/bs
router.post("/:id/bs", function(req, res, next){
  var bs = new Brainstorm(req.body);
    bs.user = req.params.id;
    bs.save(function(err, result) {
      if(err) return next(err);
      res.send(result);
    });
});

// GET ALL USER'S VALUES  - http GET all values (need to specify?) from collection in which user: matches the userId sent in via route /brainstorm/userId/bs
router.get("/:id/bs", function(req, res, next){
   Brainstorm.findOne({user: req.params.id}, function(err, result){
      if(err) return next(err);
      res.send(result);
   });
});

// DELETE USER'S BRAINSTORM OBJ - http DELETE whole obj from collection in whcih user: match userId sent in via route /brainstorm/userId/bs
router.delete("/:id/bs", function(req, res, next){
   Brainstorm.remove({user: req.params.id}, function(err, result){ // took result out
      if(err) return next(err);
      res.send(result); // took result out // send result? if i dont then i wont be able to check anything on my client side.
   });

});

// EDIT
router.put("/:id/bs", function(req, res, next){
   Brainstorm.update({user: req.params.id}, req.body, function(err, result){
      if(err) return next(err);
      res.send(result);
   });
});

module.exports = router;
