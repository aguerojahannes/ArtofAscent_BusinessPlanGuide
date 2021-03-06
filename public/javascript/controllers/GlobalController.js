(function() {
	'use strict';
	angular.module('app')
	.controller('GlobalController', GlobalController);

	function GlobalController(GlobalFactory, $timeout, $mdSidenav, $log, $state, $stateParams, $mdToast) {
		var glob = this;
		glob.sections = GlobalFactory.sections;
		glob.user = {};
		glob.errLog = false;
		glob.errReg = false;
		glob.loginDisplay = false;
		glob.status = GlobalFactory.status;



		console.log(glob.userId);

// LOGIN
		glob.login = function(){
			GlobalFactory.login(glob.user).then(function(res){
				glob.user = {};
				nav.errLog = "";
				glob.showSimpleToast('Welcome!' + glob.status.username);
				$state.go("root.Dashboard", {id: glob.status._id}); // tried something like this: root.Dashboard({$stateParams.id: glob.status._id}) and root.Dashboard", {$stateParams.id: glob.status._id} to go to that user. , {$stateParams.id}
			}, function(err){
				nav.errLog = err;
				glob.showSimpleToast('Try again. Wrong username or password.!');
			});
		};

		glob.showSimpleToast = function(content) {
			  $mdToast.show(
				 $mdToast.simple()
				 .content(content)
				 .position("top left")
				 .hideDelay(2000)
			  );
			};

// SIGN UP
	glob.signUp = function() {
	   glob.user.profilePic = "/assets/logo.png";
	   GlobalFactory.status.profilePic = "/assets/logo.png";
	   GlobalFactory.signUp(glob.user).then(function() {
	      glob.user = {};
	      glob.errReg = "";
			$state.go("root.Dashboard", {id: glob.status._id});
	   }, function(err) {
	      glob.errReg = err;
	   });
	};

// LOGOUT
		glob.logout = function(){
			GlobalFactory.logout();
			$state.go("Home");
		};

// END
	}
})();
