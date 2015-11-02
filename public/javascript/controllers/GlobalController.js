(function() {
	'use strict';
	angular.module('app')
	.controller('GlobalController', GlobalController);

	function GlobalController(GlobalFactory, $timeout, $mdSidenav, $log, $state, $stateParams) {
		var glob = this;
		glob.sections = GlobalFactory.sections;
		// glob.userId = $stateparams.id;

		glob.user = {};
		glob.errLog = false;
		glob.errReg = false;
		glob.loginDisplay = false;
		glob.status = GlobalFactory.status;
		glob.userId = {id: glob.status._id};

		console.log("$stateParams.id:" + $stateParams.id); // coming back as undefined. the problem is that the param is not getting passed in


// LOGIN
		glob.login = function(){
			GlobalFactory.login(glob.user).then(function(res){
				glob.user = {};
				nav.errLog = "";
				$state.go("root.Dashboard", {}); // tried something like this: root.Dashboard({$stateParams.id: glob.status._id}) and root.Dashboard", {$stateParams.id: glob.status._id} to go to that user. , {$stateParams.id}
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
