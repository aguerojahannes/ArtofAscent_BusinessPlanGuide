var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = mongoose.model('User');
var passport = require('passport');

router.post("/register", function(req, res, next){
   var user = new User(req.body);
   user.setPassword(req.body.password);
   user.save(function(err,result){
      if(err) return next(err);
      if(!result) return next("There was an error registering user.");
      res.send(result.createToken());
   });
});

router.post("/login", function(req, res, next){
   passport.authenticate("local", function(err, user){
      if(err) return next(err);
      res.send(user.createToken());
   })(req, res, next);
});

module.exports = router;
