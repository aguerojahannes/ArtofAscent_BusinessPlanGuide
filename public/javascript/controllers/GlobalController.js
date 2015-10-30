(function() {
	'use strict';
	angular.module('app')
	.controller('GlobalController', GlobalController);

	function GlobalController(GlobalFactory, $timeout, $mdSidenav, $log, $state) {
		var glob = this;
		glob.user = {};
		glob.errLog = false;
		glob.errReg = false;
		glob.loginDisplay = false;
		glob.status = GlobalFactory.status;



// LOGIN
		glob.login = function(){
			GlobalFactory.login(glob.user).then(function(res){
				glob.user = {};
				nav.errLog = "";
			}, function(err){
				nav.errLog = err;
			});
		};

// SIGN UP
	glob.signUp = function() {
	   glob.user.profilePic = "/assets/logo.png";
	   GlobalFactory.status.profilePic = "/assets/logo.png";
	   GlobalFactory.signUp(glob.user).then(function() {
	      glob.user = {};
	      glob.errReg = "";
			$state.go("root.ExecutiveSummary");
	   }, function(err) {
	      glob.errReg = err;
	   });
	};

// LOGOUT
		glob.logout = function(){
			GlobalFactory.logout();
			$state.go("Review");
		};

// END
	}
})();
