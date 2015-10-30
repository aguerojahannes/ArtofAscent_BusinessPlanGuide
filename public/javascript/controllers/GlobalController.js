(function() {
	'use strict';
	angular.module('app')
	.controller('GlobalController', GlobalController);

	function GlobalController(GlobalFactory, $timeout, $mdSidenav, $log) {
		var glob = this;
		glob.user = {};
		nav.errLog = false;
		nav.errReg = false;


// LOGIN
		glob.login = function(){
			// GlobalFactory.login(glob.user).then(function(res){
			// 	glob.user = {};
			// 	nav.errLog = "";
			// 	nav.overlayLogin();
			// }, function(err){
			// 	nav.errLog = err;
			// });
		};

// SIGN UP
	glob.signUp = function() {
	   // glob.user.profilePic = "https://upload.wikimedia.org/wikipedia/en/9/99/MarioSMBW.png";
	   // GlobalFactory.status.profilePic = "https://upload.wikimedia.org/wikipedia/en/9/99/MarioSMBW.png";
	   // glob.user.bio = "This is a default biography for you created by 'The Food Forum'. If you would like to change this, please click the edit button above.";
	   // GlobalFactory.signUp(glob.user).then(function() {
	   //    glob.user = {};
	   //    glob.errReg = "";
	   // }, function(err) {
	   //    glob.errReg = err;
	   // });
	};

// LOGOUT
		glob.logout = function(){
			// GlobalFactory.logout();
			// $state.go("Review");
		};

// END
	}
})();
